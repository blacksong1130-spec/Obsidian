import os
from PIL import Image

d = '20.Projects/IRP/IRP_Figures_Final_Package'

results = []
for f in os.listdir(d):
    if f.endswith('.png'):
        try:
            img = Image.open(os.path.join(d, f)).convert('RGBA')
            colors = img.getcolors(maxcolors=1000000)
            if colors:
                colors.sort(reverse=True, key=lambda x: x[0])
                total_pixels = img.width * img.height
                dominant_percent = colors[0][0] / total_pixels
                results.append((f, len(colors), dominant_percent))
            else:
                results.append((f, -1, 0)) # Too many colors
        except Exception as e:
            results.append((f, str(e), 0))

for f, c, p in results:
    if isinstance(c, int):
        print(f"{f}: {c} colors, {p:.2%} dominant")
    else:
        print(f"{f}: Error {c}")
