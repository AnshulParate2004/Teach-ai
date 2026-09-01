
import re

with open("Frontend/src/data/problems.ts", "r", encoding="utf8") as f:
    content = f.read()

def replace_title(match):
    full_title = match.group(1)
    # Split by " - " and take the first part
    if " - " in full_title:
        new_title = full_title.split(" - ")[0].strip()
    else:
        new_title = full_title
    return f"\"title\": \"{new_title}\""

new_content = re.sub(r"\"title\": \"(.*?)\"", replace_title, content)

with open("Frontend/src/data/problems.ts", "w", encoding="utf8") as f:
    f.write(new_content)

print("Titles updated!")

