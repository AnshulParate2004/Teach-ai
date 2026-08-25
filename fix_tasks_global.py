import re

filepath = 'D:/Internship/Teach-ai/Frontend/src/data/problems.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any remaining old formatted tasks
content = re.sub(r'\s*\*\*Scenario:\*\*\s*', r' ', content)
content = re.sub(r'\s*\*\*Student Assignment:\*\*\s*', r'\\n\\n### What you\\\'ll learn\\n- ', content)
content = re.sub(r'\s*\*\*Deliverable:\*\*\s*', r'\\n\\n### What you\\\'ll do\\n- ', content)

# For those that I ALREADY replaced and might have literal \\' instead of ', let's fix them to just have '
# Wait, in problems.ts it's a JSON-like structure, so if it's double quotes, single quotes don't need escaping!
content = content.replace('What you\\\'ll learn', 'What you\'ll learn')
content = content.replace('What you\\\'ll do', 'What you\'ll do')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Globally updated tasks in problems.ts")
