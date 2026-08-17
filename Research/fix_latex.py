import re

file_path = 'GenAI_20_Industry_Internships.tex'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace **text** with \textbf{text}
content = re.sub(r'\*\*(.*?)\*\*', r'\\textbf{\1}', content)

# 2. Replace \#\#\#\# \textbf{Scenario} with \textbf{Scenario}
content = re.sub(r'\\#\\#\\#\\#\s*\\textbf{Scenario}', r'\\vspace{3mm}\\noindent\\textbf{Scenario}', content)
content = re.sub(r'\\#\\#\\#\\#\s*\\textbf{Student Assignment}', r'\\vspace{2mm}\\noindent\\textbf{Student Assignment}', content)
content = re.sub(r'\\#\\#\\#\\#\s*\\textbf{Deliverable}', r'\\vspace{2mm}\\noindent\\textbf{Deliverable}', content)

# 3. Fix list items that start with - 
# Wait, LaTeX itemize needs \begin{itemize} \item ... \end{itemize}
# A lot of deliverables are just "- item 1 \n - item 2"
# Let's just replace "- " with "$\bullet$ " when it's at the start of a line
content = re.sub(r'(?m)^-\s+', r'$\\bullet$ ', content)

# 4. Remove empty "\#\# \\\\"
content = re.sub(r'\\#\\#\s*\\\\', r'', content)

# 5. Fix any "\#\#" that leaked
content = re.sub(r'\\#\\#', r'', content)

# 6. Make Task headers look nicer
# Currently: \textbf{Task 1}: \\ Understand - Analyze the Problem: \textbf{Scenario}
content = re.sub(r'\\textbf{Task (\d+)}: \\\\ (.*?):', r'\\vspace{4mm}\\noindent\\textbf{\\large Task \1: \2}\\\\', content)
content = re.sub(r'\\textbf{Task (\d+)}: \\ (.*?):', r'\\vspace{4mm}\\noindent\\textbf{\\large Task \1: \2}\\\\', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done fixing latex!')
