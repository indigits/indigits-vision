import os
import cv2
from dirsetup import IMAGES_DIR

lena = os.path.join(IMAGES_DIR, 'lena.jpg')
img = cv2.imread(lena)
h, w, _  = img.shape


from cr.vision.core.scaling import resize_outside


print(img.shape)

img2 = resize_outside(img, 512, 200)
print(img2.shape)

img2 = resize_outside(img, 200, 512)
print(img2.shape)

img2 = resize_outside(img, 512, 600)
print(img2.shape)

img2 = resize_outside(img, 600, 512)
print(img2.shape)


img2 = resize_outside(img, 300, 300)
print(img2.shape)

img2 = resize_outside(img, 600, 300)
print(img2.shape)


img2 = resize_outside(img, 600, 600)
print(img2.shape)
