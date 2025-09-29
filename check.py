import numpy as np
import cv2
import torch

print("NumPy:", np.__version__)          # 1.x
print("OpenCV:", cv2.__version__)        # 4.9.x
print("Torch:", torch.__version__)       # 2.2.1+cu118
print("CUDA available:", torch.cuda.is_available())