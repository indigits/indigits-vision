import os
import cv2
from cr import vision

from dirsetup import IMAGES_DIR

image_path = os.path.join(IMAGES_DIR, 'puppy.jpg')

puppy = cv2.imread(image_path)

a = vision.effects.motion_blur(puppy)

b = vision.effects.motion_blur(a)

c = vision.effects.motion_blur(b)


o_f = vision.measure.focus(puppy)
a_f = vision.measure.focus(a)
b_f = vision.measure.focus(b)
c_f = vision.measure.focus(c)

print(o_f, a_f, b_f, c_f)

dm = vision.DisplayManager(['Image', 'A', 'B', 'C'], gap_x=200)

dm.show_all(puppy, a, b, c)

key = cv2.waitKey(0) & 0xFF

