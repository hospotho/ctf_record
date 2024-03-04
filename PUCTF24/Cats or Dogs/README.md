## Cats or Dogs? 貓定狗啊？

image with size 26250 * 26250<br>
=> cut into 75^2 350 * 350 square image of cat or dog<br>
=> use ai to do classification<br>
=> rebuild 75 * 75 black and white image<br>
=> is QR code<br>
=> found pattern of 3 * 3 block<br>
=> fix error pixel<br>
=> scan 25 * 25 QR code<br>
=> read flag

```py
from PIL import Image
Image.MAX_IMAGE_PIXELS = 933120000
rows = 75
cols = 75

def destructure_image(image_path):
    image = Image.open(image_path)
    image_width, image_height = image.size
    cell_width, cell_height = image_width // rows, image_height // cols
    for row in range(rows):
        for col in range(cols):
            left = col * cell_width
            top = row * cell_height
            right = left + cell_width
            bottom = top + cell_height
            sub_image = image.crop((left, top, right, bottom))
            filename = f"{row:02d}{col:02d}.jpg"
            sub_image.save(filename)

image_path = "cats_or_dogs.jpg"
destructure_image(image_path)
```

```py
import torch
from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image
import os
import numpy as np

device = torch.device("cuda")
processor = ViTImageProcessor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")
model.to(device)

def is_dog(image):
    inputs = processor(images=image, return_tensors="pt")
    inputs = inputs.to(device)
    outputs = model(**inputs)
    _, top_3_indices = torch.topk(outputs.logits, 3, dim=-1)
    top_3_class_names = [model.config.id2label[i] for i in top_3_indices.tolist()[0]]
    is_cat_present = any("cat" in class_name.lower() for class_name in top_3_class_names)
    return not is_cat_present

qr_code = np.zeros((75, 75), dtype=bool)
file_list = os.listdir("output_folder")
for img_path in file_list:
    index1 = int(img_path[-8:-6])
    index2 = int(img_path[-6:-4])
    image = Image.open("output_folder/" + img_path)
    qr_code[index1][index2] = is_dog(image)

with open("qr_code.txt", "w") as f:
    for row in qr_code:
        for element in row:
            f.write(str(int(element)))
        f.write("\n")

qr_code_img = Image.fromarray((qr_code * 255).astype(np.uint8))
qr_code_img.show()
qr_code_img.save("qr_code.png")
```

```py
from PIL import Image
import numpy as np

with open("qr_code.txt", "r") as f:
    qr_code_data = f.readlines()

qr_code_array = np.array([[int(element == "1") for element in row.strip()] for row in qr_code_data])
qr_code_image = Image.fromarray((qr_code_array * 255).astype(np.uint8))

qr_code_image.show()
qr_code_image.save("new_qr_code.png")
```

PUCTF24{ILikeHum4nsM0re:P_8e0af}
