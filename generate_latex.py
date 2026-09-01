# -*- coding: utf-8 -*-
import sys
import re

with open('Frontend/src/data/problems.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# We can find all problem blocks by splitting on '"id": "'
blocks = ts_content.split('"id": "')[1:]
problems = []
for block in blocks:
    def extract_field(key):
        m = re.search(f'"{key}":\\s*"(.*?)"', block)
        return m.group(1) if m else ''
    
    def extract_array(key):
        m = re.search(f'"{key}":\\s*\\[(.*?)\\]', block, re.DOTALL)
        if not m: return []
        items = re.findall(r'"(.*?)"', m.group(1))
        return items

    title = extract_field('title')
    industry = extract_field('industry')
    company = extract_field('company') or 'Tech Enterprise'
    about_company = extract_field('about_company')
    problem_statement = extract_field('problem_statement')
    learn = extract_array('learn')
    tools = extract_array('tags')
    steps = extract_array('steps')
    
    problems.append({
        'title': title,
        'industry': industry,
        'company': company,
        'about_company': about_company,
        'problem_statement': problem_statement,
        'learn': learn,
        'tools': tools,
        'steps': steps
    })


latex_preamble = r'''\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage{xcolor}
\usepackage{titlesec}

\definecolor{forageblue}{RGB}{35, 128, 178} % Professional blue

\usepackage[colorlinks=true, linkcolor=forageblue, urlcolor=forageblue, citecolor=forageblue]{hyperref}
\usepackage{geometry}
\geometry{a4paper, margin=1in}

\titleformat{\section}
  {\normalfont\Large\bfseries\color{forageblue}}{\thesection}{1em}{}
\titleformat{\subsection}
  {\normalfont\large\bfseries\color{forageblue}}{\thesubsection}{1em}{}
\titleformat{\subsubsection}
  {\normalfont\normalsize\bfseries\color{forageblue}}{\thesubsubsection}{1em}{}

\begin{document}
\tableofcontents
\newpage
'''

latex_footer = r'''
\end{document}
'''

def markdown_to_latex(text):
    if not text:
        return ""
    text = re.sub(r'\*\*(.*?)\*\*', r'\\textbf{\1}', text)
    text = re.sub(r'(?m)^-\s+', r'$\\bullet$ ', text)
    text = re.sub(r'\\#\\#\\#\\#\s*\\textbf\{(.*?)\}', r'\\vspace{3mm}\\noindent\\textbf{\1}', text)
    text = re.sub(r'\#\#\#\#\s*\\textbf\{(.*?)\}', r'\\vspace{3mm}\\noindent\\textbf{\1}', text)
    text = re.sub(r'-\s*##\s*\d*', '', text)
    text = re.sub(r'—\s*##\s*\d*', '', text)
    text = re.sub(r'\?T', "'", text)
    # Fix unicode escapes like \u2019
    text = text.encode('utf-8').decode('unicode_escape')
    text = text.replace('\n', ' \\\\\n')
    return text

sections = []

for prob in problems:
    title = prob.get('title', '')
    industry = prob.get('industry', '')
    company = prob.get('company', 'Tech Enterprise')
    tools = prob.get('tools', [])
    skills_str = ", ".join(tools)
    
    sec = f"\\section{{{company} - {title}}}\n\n"
    sec += r"\textbf{SkillForge Virtual Internship} \\" + "\n"
    sec += f"\\textbf{{{title}}} \\\\\n\n"
    sec += f"\\textbf{{Industry:}} {industry} \\\\\n"
    sec += r"\textbf{Duration:} 3-4 hours \\" + "\n"
    sec += r"\textbf{Mode:} Individual, task-based job simulation \\" + "\n"
    sec += f"\\textbf{{Primary Skills:}} {skills_str} \\\\\n\n"
    sec += r"Complete work that simulates life on the job. 3-4 hours and self-paced. \\" + "\n"
    sec += f"Stand out in your application to \\textbf{{{company}}}. Show us you're a motivated candidate. \\\\\n\n"
    
    sec += r"\subsection*{Overview}" + "\n"
    sec += r"\subsubsection*{What is this Job Simulation All About?}" + "\n"
    sec += f"\\textbf{{Introduction from {company}}} \\\\\n"
    
    about_company = markdown_to_latex(prob.get('about_company', '').replace('**' + company + '**', ''))
    sec += f"{about_company}\n\n"
    sec += r"\textbf{The Problem:} \\" + "\n"
    prob_stmt = markdown_to_latex(prob.get('problem_statement', ''))
    sec += f"{prob_stmt}\n\n"
    
    sec += r"\subsubsection*{What Will You Learn?}" + "\n"
    sec += r"\begin{itemize}" + "\n"
    for l in prob.get('learn', []):
        sec += f"    \\item {markdown_to_latex(l)}\n"
    sec += r"\end{itemize}" + "\n\n"
    
    sec += r"\subsubsection*{What Tools Will You Learn?}" + "\n"
    sec += r"\begin{itemize}" + "\n"
    for t in tools:
        sec += f"    \\item {t}\n"
    sec += r"\end{itemize}" + "\n\n"
    
    sec += r"\subsection*{Tasks to be Performed}" + "\n"
    for i, step in enumerate(prob.get('steps', [])):
        step_clean = markdown_to_latex(step)
        step_clean = re.sub(r'\\textbf\{Task (\d+):\}(.*?):', r'\\vspace{4mm}\\noindent\\textbf{\\large Task \1:\2}\\\\', step_clean, count=1)
        sec += f"{step_clean}\n\n"
        
    sec += r"\subsection*{Knowledge Test}" + "\n"
    sec += r"Test your understanding with a knowledge assessment. You can retake it anytime.\\" + "\n\n"
    
    sec += r"\subsection*{Submit Your Completed Task}" + "\n"
    sec += r"Submit your completed Jupyter Notebooks, analytical reports, and presentations for AI verification.\\" + "\n\n"
    
    sec += r"\subsection*{Earn Certificate Post Verification}" + "\n"
    sec += r"Once submitted, SkillForge performs a detailed verification of your outputs. You will receive a \textbf{SkillForge Verified Virtual Internship Certificate} to share on LinkedIn.\\" + "\n\n"
    
    sec += r"\newpage" + "\n"
    
    sections.append(sec)

final_latex = latex_preamble + "\n".join(sections) + latex_footer

with open('Research/GenAI_20_Industry_Internships.tex', 'w', encoding='utf-8') as f:
    f.write(final_latex)

print(f"Generated LaTeX with {len(sections)} problem statements and Company headers.")
