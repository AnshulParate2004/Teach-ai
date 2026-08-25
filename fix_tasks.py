import re

def process_js_py(content):
    # Match strings like: "**Task 1:** Understand: **Scenario:** ... **Student Assignment:** ... **Deliverable:** ..."
    # Note: we need to handle variations and make sure we don't accidentally match across boundaries.
    
    pattern = r'(\*\*Task \d+:\*\*\s*(.*?):)\s*\*\*Scenario:\*\*\s*(.*?)\s*\*\*Student Assignment:\*\*\s*(.*?)\s*\*\*Deliverable:\*\*\s*(.*?)(?=(?:"|\',|\*\*Task|\Z))'
    
    def repl(m):
        prefix = m.group(1) # "**Task X:** Title:"
        title = m.group(2)
        scenario = m.group(3).strip()
        assignment = m.group(4).strip()
        deliverable = m.group(5).strip()
        
        # some deliverables might already have hyphens for bullets. Let's make sure it's a bullet.
        if not assignment.startswith('-'):
            assignment = '- ' + assignment
        if not deliverable.startswith('-'):
            deliverable = '- ' + deliverable
            
        # Fix multiple newlines or bullets if they were bunched up (usually they are space-separated)
        assignment = assignment.replace(' - ', '\n- ')
        deliverable = deliverable.replace(' - ', '\n- ')
        
        new_str = f"{prefix} {scenario}\\n\\n### What you\\'ll learn\\n{assignment}\\n\\n### What you\\'ll do\\n{deliverable}"
        return new_str

    # For .ts and .py files, they use JSON or Python strings. 
    # Python files use strings. We need to be careful with escaping.
    # Let's try a safer approach: Parse line by line or use a generic regex for the literal strings.
    # Since they are strings, \n should be \\n.
    return re.sub(pattern, repl, content, flags=re.DOTALL)


def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    pattern = r'(\*\*Task \d+:\*\*\s*(.*?):)\s*\*\*Scenario:\*\*\s*(.*?)\s*\*\*Student Assignment:\*\*\s*(.*?)\s*\*\*Deliverable:\*\*\s*(.*?)(?=\",|\',|\"\]|\'\])'
    
    def repl(m):
        prefix = m.group(1)
        scenario = m.group(3).strip()
        assignment = m.group(4).strip()
        deliverable = m.group(5).strip()
        
        if not assignment.startswith('-'): assignment = '- ' + assignment
        if not deliverable.startswith('-'): deliverable = '- ' + deliverable
            
        assignment = assignment.replace(' - ', '\\n- ')
        deliverable = deliverable.replace(' - ', '\\n- ')
        
        return f"{prefix} {scenario}\\n\\n### What you\\'ll learn\\n{assignment}\\n\\n### What you\\'ll do\\n{deliverable}"

    new_content = re.sub(pattern, repl, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes for {filepath}")

fix_file('D:/Internship/Teach-ai/Frontend/src/data/problems.ts')
fix_file('D:/Internship/Teach-ai/Backend/seed/generate_sector_20.py')

def fix_tex(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    pattern = r'(\\vspace\{4mm\}\\noindent\\textbf\{\\large Task \d+:\s*(.*?)\}\\\\)\s*\\textbf\{Scenario:\}\s*(.*?)\s*\\textbf\{Student Assignment:\}\s*(.*?)\s*\\textbf\{Deliverable:\}\s*(.*?)(?=\\vspace|\Z)'
    
    def repl(m):
        prefix = m.group(1)
        scenario = m.group(3).strip()
        assignment = m.group(4).strip()
        deliverable = m.group(5).strip()
        
        if not assignment.startswith('-'): assignment = '- ' + assignment
        if not deliverable.startswith('-'): deliverable = '- ' + deliverable
            
        # In tex, we use itemize
        def to_itemize(text):
            items = text.split(' - ')
            if items[0].startswith('- '):
                items[0] = items[0][2:]
            res = "\\begin{itemize}\n"
            for it in items:
                res += f"  \\item {it.strip()}\n"
            res += "\\end{itemize}"
            return res
            
        assign_list = to_itemize(assignment)
        deliv_list = to_itemize(deliverable)
        
        return f"{prefix} {scenario}\n\n\\textbf{{What you'll learn}}\n{assign_list}\n\n\\textbf{{What you'll do}}\n{deliv_list}\n\n"

    new_content = re.sub(pattern, repl, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes for {filepath}")

fix_tex('D:/Internship/Teach-ai/Research/GenAI_20_Industry_Internships.tex')
