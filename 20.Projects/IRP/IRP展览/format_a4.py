import re

filepath = '20.Projects/IRP/关键成果/【03】IRP Proposal （Draft）.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert page breaks before main headings to format as A4
def insert_page_break(match):
    return '\n<div style="page-break-before: always;"></div>\n\n' + match.group(1)

# We want page breaks before certain sections
sections = [
    r'# Statement of Authorship and Acknowledgements',
    r'# 1\. Introduction and Justification of the Topic',
    r'# 2\. Background: Literature, Practice, Signals and Trends',
    r'# 3\. Problem Framing',
    r'# 4\. Design Futures Approach',
    r'# 5\. Methodology',
    r'# 6\. Critique Documentation',
    r'# 9\. Project Plan to End of Programme',
    r'# Reference List'
]

for sec in sections:
    content = re.sub(r'\n(' + sec + r')', insert_page_break, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print('Page breaks inserted for A4 layout.')
