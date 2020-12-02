
import imageio
from cr import vision
from cr.vision.image import expand_to_batch, normalize_imagenet
from cr.vision.dl.nets.cnn import vgg
from dirsetup import IMAGES_DIR
from tensorflow.keras.applications.vgg16 import VGG16, decode_predictions,preprocess_input

image_path =IMAGES_DIR / 'rose.jpg'

print (image_path)
image = imageio.imread(str(image_path))
print(image.shape)
image = vision.resize(image, 224, 224)
batch = expand_to_batch(image)
batch = preprocess_input(batch)

a_model  = vgg.model_vgg16(weights="imagenet")
b_model = VGG16()
#print(model.summary())

a_y = a_model.predict(batch)
b_y = b_model.predict(batch)


a_label = decode_predictions(a_y)
b_label = decode_predictions(b_y)

a_label = a_label[0][0]
b_label = b_label[0][0]
# print the classification
print('%s (%.2f%%)' % (a_label[1], a_label[2]*100))
print('%s (%.2f%%)' % (b_label[1], b_label[2]*100))

