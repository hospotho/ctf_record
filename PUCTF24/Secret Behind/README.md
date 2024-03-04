## Secret Behind 背後之秘

Read source code<br>
=> out.enc is QR code<br>
=> write scrip to rebuild image<br>
=> scan QR code<br>
=> `https://instagram.com/nutty5hell?flag=UFVDVEYyNHtuMHdfMV9jYW5fZjAxMTB3XzFuc3RhZ3JhbV8wZl9OdXR0eVNoZTExX2E0NzcxZjU1YTlmZGQwNzkxYzFmMGUwZjc0MzBlNjZmfQ==`<br>
=> decode base64

```py
from PIL import Image
import numpy as np

recover_img = Image.new("RGBA", (47, 47), (0, 0, 0, 255))
recover = np.asarray(recover_img).copy()

with open("out.enc", "r") as f:
    text = f.readlines()[0]
    for i in range(47):
        if i % 2 == 0:
            line = text[47 * i : 47 * i + 47]
        else:
            line = (text[47 * i : 47 * i + 47])[::-1]
        for j in range(47):
            if line[j] == '1':
                recover[i, j, 0] = 255
                recover[i, j, 1] = 255
                recover[i, j, 2] = 255
            
recover_img = Image.fromarray(recover)
recover_img.show()
```

PUCTF24{n0w_1_can_f0110w_1nstagram_0f_NuttyShe11_a4771f55a9fdd0791c1f0e0f7430e66f}
