import json

path = r"D:\Internship\Teach-ai\Backend\solutions\08_reflexion_agent.ipynb"
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

for cell in data["cells"]:
    if cell["cell_type"] == "code":
        source = cell["source"]
        for i, line in enumerate(source):
            if line == "    iterations: int\n" and "is_good_enough: bool\n" not in source:
                source.insert(i+1, "    is_good_enough: bool\n")
                break

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=1)
