import re

with open('GenAI_20_Industry_Internships.tex', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove numbering from \section{...}
# Find \section{<number>. <Text>} and replace with \section{<Text>}
content = re.sub(r'\\section\{\d+\.\s+(.*?)\}', r'\\section{\1}', content)

# 2. We can see some sections are just garbage. Let's delete sections that have specific exact titles.
# In LaTeX, deleting a section means deleting from \section{...} up to the next \section{...} (or EOF/ \end{document})
# Let's split by \section{
sections = content.split('\section{')
cleaned_sections = [sections[0]]

garbage_titles = [
    r'^\\textbf\{What is this Job Simulation All About-.*',
    r'^\\textbf\{What Will You Learn-.*',
    r'^\\textbf\{Tasks to be Performed.*',
    r'^\\textbf\{Submit Your Completed Task.*',
    # Also without textbf
    r'^\*\*What is this Job Simulation All About-.*',
    r'^\*\*What Will You Learn-.*',
    r'^\*\*Tasks to be Performed.*',
    r'^\*\*Submit Your Completed Task.*'
]

for sec in sections[1:]:
    is_garbage = False
    for g in garbage_titles:
        if re.match(g, sec):
            is_garbage = True
            break
    if not is_garbage:
        cleaned_sections.append(sec)

final_content = '\section{'.join(cleaned_sections)

with open('GenAI_20_Industry_Internships.tex', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Done fixing double numbering and removing garbage sections!')
