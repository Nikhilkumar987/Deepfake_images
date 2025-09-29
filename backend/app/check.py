import sys
import torch
import timm
import torchvision.transforms as transforms
from PIL import Image

# --- Config ---
MODEL_PATH = r"C:\Users\nkydv\Desktop\Deepfake\backend\app\efficientnet_b0_best.pth"

# --- Get image path from command-line ---
if len(sys.argv) < 2:
    print("Usage: python check.py <image_path>")
    sys.exit(1)

TEST_IMAGE = sys.argv[1]

# --- Device ---
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"✅ Using device: {device}")

# --- Model ---
print("⚙️ Loading model...")
model = timm.create_model("efficientnet_b0", pretrained=False, num_classes=2)  # <-- FIXED
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.to(device)
model.eval()
print("✅ Model loaded successfully!")

# --- Transform ---
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# --- Load & Preprocess Image ---
print(f"🖼 Loading image: {TEST_IMAGE}")
image = Image.open(TEST_IMAGE).convert("RGB")
input_tensor = transform(image).unsqueeze(0).to(device)

# --- Prediction ---
with torch.no_grad():
    outputs = model(input_tensor)
    _, predicted = torch.max(outputs, 1)

print("🎯 Prediction:", "real" if predicted.item() == 1 else "fake")
