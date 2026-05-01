import json, codecs

src = r'C:\Users\shywl\.claude\projects\D--Obsidian-Black-Song\361fca4a-76bd-4499-8c68-018f29a16b34\tool-results\bsz217kio.txt'
dst = r'D:\Obsidian\Black Song\20.Projects\IRP\tmp_cn_out.txt'

with open(src, encoding='utf-8') as f:
    data = json.load(f)

with open(dst, 'w', encoding='utf-8') as f:
    f.write(data['answer'])

print("Done. Written to", dst)
