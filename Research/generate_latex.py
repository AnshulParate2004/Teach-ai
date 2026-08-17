# -*- coding: utf-8 -*-
import sys
import os
import re

# Add Backend/seed to path so we can import generate_sector_20
sys.path.append(os.path.join(os.path.dirname(__file__), '../Backend/seed'))
import generate_sector_20

problems = generate_sector_20.problems_raw

latex_preamble = r'''\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{hyperref}
\usepackage{geometry}
\geometry{a4paper, margin=1in}
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
    # Replace **bold** with \textbf{bold}
    text = re.sub(r'\*\*(.*?)\*\*', r'\\textbf{\1}', text)
    # Replace markdown bullets with latex bullets
    text = re.sub(r'(?m)^-\s+', r'$\\bullet$ ', text)
    # Replace markdown headings like #### Scenario with \textbf{Scenario}
    text = re.sub(r'\\#\\#\\#\\#\s*\\textbf\{(.*?)\}', r'\\vspace{3mm}\\noindent\\textbf{\1}', text)
    text = re.sub(r'\#\#\#\#\s*\\textbf\{(.*?)\}', r'\\vspace{3mm}\\noindent\\textbf{\1}', text)
    # Replace artifacts like - ## 3
    text = re.sub(r'-\s*##\s*\d*', '', text)
    text = re.sub(r'—\s*##\s*\d*', '', text)
    text = re.sub(r'\?T', "'", text) # fix encoding weirdness
    
    # fix newlines
    text = text.replace('\n', ' \\\\\n')
    
    return text

sections = []

for prob in problems:
    title = prob.get('title', '')
    industry = prob.get('industry', '')
    company = prob.get('company', 'NeuralFrontier')
    tools = prob.get('tools', [])
    skills_str = ", ".join(tools)
    
    # Section header without hardcoded numbers
    sec = f"\\section{{{title}}}\n\n"
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
        # Task string is usually "**Task 1:** Understand: **Scenario:** ... **Student Assignment:** ... **Deliverable:** ..."
        # Let's clean it up
        step_clean = markdown_to_latex(step)
        
        # Make the Task X: part look nice
        # e.g., \textbf{Task 1:} Understand:
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

with open('GenAI_20_Industry_Internships.tex', 'w', encoding='utf-8') as f:
    f.write(final_latex)

print(f"Generated LaTeX with {len(sections)} problem statements.")
