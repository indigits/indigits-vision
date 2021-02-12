import pathlib
import numpy as np
import imageio

from cr.vision.core.scaling import resize_crop
from cr.vision.core.cvt_color import gray_to_rgb

def is_gray(image):
    return (image.ndim == 2) or (image.ndim == 3 and image.shape[2] == 1)

def read_images(paths, target_width, target_height):
    images = []
    for path in paths:
        image = imageio.imread(path)
        if is_gray(image):
            print(f'{path}, {image.shape}')
            # make sure that image is rgb (and not gray scale)
            image = gray_to_rgb(image)
            print(f'shape after conversion {image.shape}')
        image = resize_crop(image, target_width, target_height)
        images.append(image)
    return np.array(images)


# Set of extensions
EXTENSIONS = {'.png', '.PNG', '.jpg', '.JPG', '.jpeg', '.JPEG'}

class ImagesFromDir:
    def __init__(self, 
        rootdir, 
        size=10,
        width=256,
        height=256, 
        cache=None, 
        preprocess=None,
        force=False):
        self.rootdir = rootdir
        self.cache = cache
        self.size = size
        self.width = width
        self.height = height
        self.force = force
        self.n_train_split = int(0.6 * size)
        self.n_val_split = int(0.8 * size)
        if preprocess is None:
            preprocess = lambda x : x / 255
        self.preprocess = preprocess


    @property
    def all_paths(self):
        rootdir = pathlib.Path(self.rootdir)
        paths = rootdir.glob('**/*')
        images = [path for path in paths if path.is_file() and path.suffix in EXTENSIONS]
        # to do verify extension
        return images
    
    @property
    def sampled_paths(self):
        if not self.force and self.cache is not None and 'sampled_paths' in self.cache:
            print("Reading from cache")
            return self.cache['sampled_paths']
        all_paths = self.all_paths
        sample = np.random.choice(all_paths, size=self.size, replace=False)
        if self.cache is not None:
            print('Saving to cache')
            self.cache['sampled_paths'] = sample
        return sample
    
    @property
    def training_paths(self):
        paths = self.sampled_paths
        return paths[:self.n_train_split]
    
    @property
    def validation_paths(self):
        paths = self.sampled_paths
        return paths[self.n_train_split:self.n_val_split]

    @property
    def test_paths(self):
        paths = self.sampled_paths
        return paths[self.n_val_split:]
    
    @property
    def training_set(self):
        images = read_images(self.training_paths, self.width, self.height)
        images = self.preprocess(images)
        return images

    @property
    def validation_set(self):
        images = read_images(self.validation_paths, self.width, self.height)
        images = self.preprocess(images)
        return images

    @property
    def test_set(self):
        images = read_images(self.test_paths, self.width, self.height)
        images = self.preprocess(images)
        return images
