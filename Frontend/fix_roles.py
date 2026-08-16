import re

filepath = 'D:/Internship/Teach-ai/Frontend/src/data/problems.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The roles in problems.ts have a format like:
# "role": "AI Agent Designer \u2013 Build Your First Agent"
# We want to remove the delimiter and everything after it.
# Delimiters can be "\u2013" or "-" or " - "

def replace_role(match):
    role_str = match.group(1)
    # Split by common dashes
    if " - " in role_str:
        role_str = role_str.split(" - ")[0]
    elif " \u2013 " in role_str:
        role_str = role_str.split(" \u2013 ")[0]
    elif " – " in role_str:
        role_str = role_str.split(" – ")[0]
    elif "\u2013" in role_str:
        role_str = role_str.split("\u2013")[0].strip()
        
    return f'"role": "{role_str.strip()}"'

new_content = re.sub(r'"role":\s*"([^"]+)"', replace_role, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Roles updated successfully!")
