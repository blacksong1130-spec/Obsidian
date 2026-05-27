filepath = r'20.Projects/IRP/关键成果/【03】IRP Proposal (Final Submission).md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('``![[Strategic_Logic_Chain.svg]]``', '![[Strategic_Logic_Chain.svg]]')
content = content.replace('``![[Disciplinary_Map.svg]]``', '![[Disciplinary_Map.svg]]')
content = content.replace('``![[Dual_Track_Methodology.svg]]``', '![[Dual_Track_Methodology.svg]]')
content = content.replace('``![[Project_Plan.svg]]``', '![[Project_Plan.svg]]')

content = content.replace('<div style="page-break-before: always;"></div>\n\n<div style="page-break-before: always;"></div>', '<div style="page-break-before: always;"></div>')
content = content.replace('<div style="page-break-before: always;"></div>\n<div style="page-break-before: always;"></div>', '<div style="page-break-before: always;"></div>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed!')