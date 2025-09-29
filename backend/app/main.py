# backend/app/main.py
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import timm
from torchvision import transforms
from PIL import Image
import io
import os

app = FastAPI()

# CORS for frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Config ---
MODEL_PATH = os.path.join(os.path.dirname(__file__), "efficientnet_b0_best.pth")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# --- Load Model ---
print("⚙️ Loading model...")
model = timm.create_model("efficientnet_b0", pretrained=False, num_classes=2)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.to(device)
model.eval()
print("✅ Model loaded successfully!")

# --- Preprocessing ---
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

@app.get("/")
async def root():
    return {"message": "Deepfake Detection API is running 🚀"}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data)).convert("RGB")
        img_tensor = transform(image).unsqueeze(0).to(device)

        with torch.no_grad():
            outputs = model(img_tensor)
            _, predicted = torch.max(outputs, 1)
            label = "Fake" if predicted.item() == 0 else "Real"

        return {"filename": file.filename, "prediction": label}
    except Exception as e:
        return {"error": str(e)}
