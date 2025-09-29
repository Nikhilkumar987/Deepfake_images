import os
import timm
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import datasets, transforms

# --- Config ---
TRAIN_DIR = r"C:\Users\nkydv\Desktop\Deepfake\Dataset\train"
VAL_DIR   = r"C:\Users\nkydv\Desktop\Deepfake\Dataset\val"
BATCH_SIZE = 32
EPOCHS = 3
LR = 1e-3
MODEL_PATH = r"C:\Users\nkydv\Desktop\Deepfake\backend\app\efficientnet_b0_best.pth"

# --- Device ---
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print("✅ Script started. Using device:", device)

# --- Transforms ---
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# --- Datasets ---
print("📂 Loading datasets...")
train_dataset = datasets.ImageFolder(TRAIN_DIR, transform=transform)
val_dataset = datasets.ImageFolder(VAL_DIR, transform=transform)
print(f"✅ Train dataset: {len(train_dataset)} images, {len(train_dataset.classes)} classes")
print(f"✅ Val dataset: {len(val_dataset)} images, {len(val_dataset.classes)} classes")

# --- DataLoaders ---
train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=0)
val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=False, num_workers=0)
print("✅ DataLoaders ready:", len(train_loader), "train batches,", len(val_loader), "val batches")

# --- Model ---
print("⚙️ Creating model (may download weights if not cached)...")
model = timm.create_model("efficientnet_b0", pretrained=True, num_classes=len(train_dataset.classes))
model.to(device)
print("✅ Model created successfully")

# --- Loss & Optimizer ---
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=LR)

# --- Training Loop ---
print("🚀 Starting training loop...")
best_acc = 0.0

for epoch in range(EPOCHS):
    print(f"\n===== Epoch {epoch+1}/{EPOCHS} =====")
    model.train()
    running_loss = 0.0

    for batch_idx, (data, targets) in enumerate(train_loader):
        if batch_idx == 0:
            print(f"✅ First batch loaded: data {data.shape}, targets {targets.shape}")

        data, targets = data.to(device), targets.to(device)

        optimizer.zero_grad()
        outputs = model(data)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        if (batch_idx + 1) % 50 == 0:
            print(f"Batch {batch_idx+1}/{len(train_loader)} - Loss: {loss.item():.4f}")

    epoch_loss = running_loss / len(train_loader)
    print(f"📉 Epoch {epoch+1} Loss: {epoch_loss:.4f}")

    # --- Validation ---
    model.eval()
    correct, total = 0, 0
    with torch.no_grad():
        for data, targets in val_loader:
            data, targets = data.to(device), targets.to(device)
            outputs = model(data)
            _, preds = torch.max(outputs, 1)
            correct += (preds == targets).sum().item()
            total += targets.size(0)
    acc = 100 * correct / total
    print(f"✅ Validation Accuracy: {acc:.2f}%")

    # --- Save best model ---
    if acc > best_acc:
        best_acc = acc
        torch.save(model.state_dict(), MODEL_PATH)
        print(f"💾 Best model updated & saved at {MODEL_PATH} (Acc: {best_acc:.2f}%)")

print("🎉 Training complete!")
print(f"🏆 Best Validation Accuracy: {best_acc:.2f}%")
