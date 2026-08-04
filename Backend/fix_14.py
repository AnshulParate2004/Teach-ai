import json

path = r"D:\Internship\Teach-ai\Backend\solutions\14_mem0_chatbot.ipynb"
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

for cell in data["cells"]:
    if cell["cell_type"] == "code":
        source = cell["source"]
        for i, line in enumerate(source):
            if "memory.search(message, user_id=user_id)" in line:
                source[i] = line.replace("user_id=user_id", "filters={'user_id': user_id}")

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=1)
