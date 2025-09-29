import torch
import timm
import torchvision.transforms as transforms
from PIL import Image
from io import BytesIO

# Classes must match training dataset order
CLASS_NAMES = ['FAKE', 'REAL']  

class DeepfakeDetector:
    def __init__(self, model_path="backend/app/efficientnet_b0_best.pth"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        
        # Recreate same architecture
        self.model = timm.create_model("efficientnet_b0", pretrained=False, num_classes=len(CLASS_NAMES))
        self.model.load_state_dict(torch.load(model_path, map_location=self.device))
        self.model.to(self.device)
        self.model.eval()

        self.transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
        ])

    def predict(self, image_bytes):
        image = Image.open(BytesIO(image_bytes)).convert("RGB")
        tensor = self.transform(image).unsqueeze(0).to(self.device)

        with torch.no_grad():
            outputs = self.model(tensor)
            probs = torch.softmax(outputs, dim=1)[0]
            pred_idx = torch.argmax(probs).item()

        return {
            "prediction": CLASS_NAMES[pred_idx],
            "confidence": float(probs[pred_idx].item())
        }
