'''
Visual effects on images


References:

* https://github.com/jmhobbs/libcvfx
* https://github.com/PacktPublishing/OpenCV-3-x-with-Python-By-Example
* https://docs.gimp.org/en/plug-in-convmatrix.html
* https://stackoverflow.com/questions/22654770/creating-vignette-filter-in-opencv
* https://www.dyclassroom.com/image-processing-project/how-to-convert-a-color-image-into-sepia-images
* https://www.linuxtopia.org/online_books/graphics_tools/gimp_advanced_guide/gimp_guide_node74.html
* https://stackoverflow.com/questions/2034037/image-embossing-in-python-with-pil-adding-depth-azimuth-etc

'''
import numpy as np
import cv2
from indigits import vision as iv

# pylint: disable=C0103


def mirror_lr(image):
    '''
    Mirrors an image between left to right

    Args:
        image (array): Input image

    Returns:
        Mirrored image
    '''
    return np.fliplr(image)


def mirror_ud(image):
    '''
    Mirrors an image between up and down

    Args:
        image (array): Input image

    Returns:
        Mirrored image
    '''
    return np.flipud(image)


def mirror_x(image):
    '''
    Mirrors the image diagonally.
        Top left corner goes to bottom rigth and vice versa. 
        Top right corner goes to bottom left and vice versa.

    Args:
        image (array): Input image

    Returns:
        Mirrored image
    '''
    image = np.fliplr(image)
    image = np.flipud(image)
    return image


def select_red(image, others=0):
    '''
    Selects only the red channel of the image

    Args:
        image (array): Input image
        others (int): Value to be set in other channels (default 0)

    Returns:
        Reddish image
    '''
    image = image.copy()
    image[:, :, 0] = others
    image[:, :, 1] = others
    return image


def select_green(image, others=0):
    '''
    Selects only the green channel of the image

    Args:
        image (array): Input image
        others (int): Value to be set in other channels (default 0)

    Returns:
        Greenish image
    '''
    image = image.copy()
    image[:, :, 0] = others
    image[:, :, 2] = others
    return image


def select_blue(image, others=0):
    '''
    Selects only the blue channel of the image

    Args:
        image (array): Input image
        others (int): Value to be set in other channels (default 0)

    Returns:
        Bluish image
    '''
    image = image.copy()
    image[:, :, 1] = others
    image[:, :, 2] = others
    return image


def monochrome(image):
    '''
    Converts image to gray level

    Args:
        image (array): Input image

    Returns:
        Monochrome image
    '''
    return iv.bgr_to_gray(image)


EMBOSS_FILTERS = {
    'default': {
        'kernel': np.array([[-1, 0, 0],
                            [0, 1, 0],
                            [0, 0, 0]
                            ]),
        'gray': True,
        'scale': 1,
        'offset': 128,
        'alpha': 1
    },
    'sharp_color': {
        'kernel': np.array([[-2, -1, 0],
                            [-1, 1, 1],
                            [0, 1, 2]
                            ]),
        'gray': False,
        'scale': 1,
        'offset': 0,
        'alpha': 0.2
    },
    'SW': {
        'kernel': np.array([[0, -1, -1],
                            [1, 0, -1],
                            [1, 1, 0]]),
        'gray': True,
        'scale': 1,
        'offset': 128,
        'alpha': 1
    },
    'NE': {
        'kernel': np.array([[-1, -1, 0],
                            [-1, 0, 1],
                            [0, 1, 1]]),
        'gray': True,
        'scale': 1,
        'offset': 128,
        'alpha': 1
    },
    'NW': {
        'kernel': np.array([[1, 0, 0],
                            [0, 0, 0],
                            [0, 0, -1]]
                           ),
        'gray': True,
        'scale': 1,
        'offset': 128,
        'alpha': 1
    }
}


def emboss(image, method='default'):
    '''
    Creates an embossed version of an image using a given method

    Args:
        image (array): Input image

    Returns:
        Embossed image
    '''
    method = EMBOSS_FILTERS[method]
    if method['gray']:
        image = iv.bgr_to_gray(image)
    # capture the original data type of image
    image_type = image.dtype
    # perform filtering
    embossing = cv2.filter2D(image, cv2.CV_64F, method['kernel'])
    embossing = embossing * method['scale']
    alpha = method['alpha']
    offset = method['offset']
    if alpha == 1:
        # compute absolute values
        # embossing = np.absolute(embossing)
        # add offset
        embossing = embossing + offset
        return embossing.astype(image_type)
    else:
        result = cv2.addWeighted(image.astype(
            embossing.dtype), 1 - alpha, embossing, alpha, offset)
        return result.astype(image_type)


def motion_blur(image, kernel_size=3, horz=True):
    '''
    Introduces a motion blur effect

    Args:
        image (array): Input image

    Returns:
        Motion blurred image
    '''
    kernel = np.zeros((kernel_size, kernel_size))
    # make middle row all ones
    mid_row = int((kernel_size - 1)/2)
    kernel[mid_row, :] = np.ones(kernel_size) / kernel_size
    if not horz:
        # for vertical blurring, we need to get the transpose
        kernel = kernel.T
    blurred_image = cv2.filter2D(image, -1, kernel)
    return blurred_image


def sharpen(image):
    '''Sharpens an image using edge enhancement

    Args:
        image (array): Input image

    Returns:
        Sharpened image
    '''
    kernel = np.array([[-1, -1, -1, -1, -1],
                       [-1, 2, 2, 2, -1],
                       [-1, 2, 8, 2, -1],
                       [-1, 2, 2, 2, -1],
                       [-1, -1, -1, -1, -1]]) / 8.0
    sharpened_image = cv2.filter2D(image, -1, kernel)
    return sharpened_image


def vignette(image, vignette_size=150):
    '''
    Applies vignette effect on an image

    Args:
        image (array): Input image

    Returns:
        Vignetted image
    '''
    # height and width of the image
    height, width = image.shape[:2]
    # We will construct the vignette mask using Gaussian kernels
    # Construct a Gaussian kernel for x-direction
    kernel_x = cv2.getGaussianKernel(width, vignette_size)
    # Construct a Gaussian kernel for y-direction
    kernel_y = cv2.getGaussianKernel(height, vignette_size)
    # Multiply them together to form a combined Gaussian kernel
    kernel = kernel_y*kernel_x.T
    # prepare the mask
    mask = kernel / kernel.max()
    if image.ndim == 2:
        # it's a black and white images
        output = image*mask
    else:
        channels = image.shape[2]
        if channels == 1:
            # it's a black and white image
            output = image*mask
        else:
            # it's a BGR image
            b, g, r = cv2.split(image)
            b = b*mask
            g = g*mask
            r = r*mask
            output = cv2.merge([b, g, r])
    return output.astype('uint8')


def enhance_contrast(image):
    '''
    Applies vignette effect on an image

    Args:
        image (array): Input image

    Returns:
        Image with enhanced contrast
    '''
    if iv.is_gray_scale(image):
        # the image itself is gray scale
        y = image
    elif iv.is_3channel(image):
        # Convert from BGR to YUV format
        image_yuv = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
        # Extract Y channel
        y = image_yuv[:, :, 0]
    else:
        raise iv.IVError("Invalid image format")
    # perform histogram equalization on the grayscale y channel
    y = cv2.equalizeHist(y)
    if iv.is_gray_scale(image):
        # The result is y itself
        result = y
    else:
        # Put back equalized Y channel in image yuv
        image_yuv[:, :, 0] = y
        # convert back to BGR format
        result = cv2.cvtColor(image_yuv, cv2.COLOR_YUV2BGR)
    return result


def cartoonize(image, kernel_size=5):
    '''
    Constructs a black and white cartoon version of image

    Args:
        image (array): Input image

    Returns:
        Cartoonized image
    '''
    #  Convert to gray scale
    if iv.is_3channel(image):
        image = iv.bgr_to_gray(image)
    # Apply median filtering
    image = cv2.medianBlur(image, 7)
    # Detect edges in the image
    edges = cv2.Laplacian(image, cv2.CV_8U, ksize=kernel_size)
    # Edges are where the Laplacian is small
    # We prepare an edge mask for small values
    mask = iv.threshold_below(edges, 100)
    # We need to do some erosion to merge black edge points
    # prepare the structuring element
    se = np.ones((3, 3), np.uint8)
    # perform erosion
    mask = cv2.erode(mask, se, iterations=1)
    # get rid of isolated edge points again
    mask = cv2.medianBlur(mask, ksize=5)
    # This is our cartoonized image
    return mask


def pixelize(image, pixel_size=8):
    '''Pixelizes an image to given pixel size

    Args:
        image (array): Input image

    Returns:
        Pixelized image
    '''
    factor = 1.0 / pixel_size
    image = cv2.resize(image, (0, 0), fx=factor, fy=factor,
                       interpolation=cv2.INTER_NEAREST)
    image = cv2.resize(image, (0, 0), fx=pixel_size, fy=pixel_size,
                       interpolation=cv2.INTER_NEAREST)
    return image


def sepia(image):
    '''Adds sepia effect to a color image

    Args:
        image (array): Input image

    Returns:
        Image with sepia effect
    '''
    B, G, R = cv2.split(image)
    tr = 0.393*R + 0.769*G + 0.189*B
    tg = 0.349*R + 0.686*G + 0.168*B
    tb = 0.272*R + 0.534*G + 0.131*B
    # saturate
    tr[tr > 255] = 255
    tg[tg > 255] = 255
    tb[tb > 255] = 255
    # convert back to 8-bit
    tr = tr.astype('uint8')
    tg = tg.astype('uint8')
    tb = tb.astype('uint8')
    # Combine the 3 channel
    result = cv2.merge([tb, tg, tr])
    return result


_SPECIAL_FILTERS = {
    'contour' : {
        'kernel': np.array([
            [-1, -1, -1],
            [-1,  8, -1],
            [-1, -1, -1]
        ]),
        'gray': True,
        'scale': 1,
        'offset': 255,
    }
}

def _apply_filter(image, filter_name):
    filter = _SPECIAL_FILTERS[filter_name]
    if filter['gray']:
        image = iv.bgr_to_gray(image)
    kernel = filter['kernel']
    scale = filter['scale']
    offset = filter['offset']
    kernel = kernel / scale
    result = cv2.filter2D(image, -1, kernel, delta=offset)
    return result


def contour(image):
    '''Creates a contour on the image'''
    return _apply_filter(image, 'contour')


def emboss3d(image, azimuth=np.pi/2, elevation=np.pi/4, depth=10):
    image = iv.bgr_to_gray(image)
    image = image.astype('float')
    gradients = np.gradient(image)
    grad_x, grad_y = gradients
    # projection of unit vector to light source on to ground
    ground_length = np.cos(elevation)
    # the components in x and y directions
    ground_x = ground_length * np.cos(azimuth)
    ground_y = ground_length * np.sin(azimuth)
    # projection of unit vector to light source in z direction
    up_z = np.sin(elevation)
    # adjusting the gradients by depth factor
    grad_x = grad_x * depth / 100
    grad_y = grad_y * depth / 100
    # gradient magnitudes [add a little extra to ensure magnitude is non-zero]
    mag = np.sqrt(grad_x**2 + grad_y**2 + 1)
    unit_x = grad_x /mag
    unit_y = grad_y / mag
    unit_z = 1. / mag
    # compute the projection of gradient to the direction of light source
    projection = (ground_x*unit_x + ground_y*unit_y + up_z*unit_z)
    # map to 0-255 range
    projection = 255*projection
    projection = projection.clip(0, 255)
    projection = projection.astype('uint8')
    return projection
