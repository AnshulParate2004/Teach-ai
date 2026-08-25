import re

filepath = 'D:/Internship/Teach-ai/Backend/seed/generate_sector_20.py'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# For the python script, the strings are broken up like:
# '... **Scenario:** ... '
# '... **Student Assignment:** ... '
# We can remove the string breaks temporarily, do the replace, and then let it be. But we shouldn't mess up the formatting too much.
# Wait, actually we can just match it including the quotes and spaces.
# Or simpler: parse the file with re, replacing **Scenario:**, **Student Assignment:** etc, without needing the whole string to match at once!

new_content = content
new_content = re.sub(r'\s*\*\*Scenario:\*\*\s*', r': ', new_content)
new_content = re.sub(r'\s*\*\*Student Assignment:\*\*\s*', r'\\n\\n### What you\\\'ll learn\\n- ', new_content)
new_content = re.sub(r'\s*\*\*Deliverable:\*\*\s*', r'\\n\\n### What you\\\'ll do\\n- ', new_content)

# We also need to replace ' - ' with '\\n- ' for bullets, but only if they are preceded by What you'll learn or do.
# But it's easier to just leave it as is if it's too complex, or we can just let it be '- something - something else'.
# Let's see if this is good enough.

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Updated generate_sector_20.py with new task format.")
