import re

with open('seed/generate_sector_20.py', 'r', encoding='utf-8') as f:
    content = f.read()

titles = re.findall(r"'title': '(.*?)'", content)
industries = re.findall(r"'industry': '(.*?)'", content)
for i in range(len(titles)):
    print(f"{industries[i]}: {titles[i]}")
