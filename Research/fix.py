with open(r'D:\Internship\Teach-ai\Research\Skillzza_56_Internships.tex', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("What you\\'ll", "What you'll")
text = text.replace(r"\vspace{8pt}{\large \textbf{\textcolor{brandLight}{Scenario}}}\\[4pt]", "")
text = text.replace(r"\vspace{8pt}{\large \textbf{\textcolor{brandLight}{What you'll learn}}}\\[4pt]", r"\\[10pt]" + "\n" + r"\vspace{8pt}" + "\n" + r"{\large \textbf{\textcolor{brandLight}{What you'll learn}}}\\[4pt]")
text = text.replace(r"\vspace{8pt}{\large \textbf{\textcolor{brandLight}{What you'll do}}}\\[4pt]", r"\vspace{8pt}" + "\n" + r"{\large \textbf{\textcolor{brandLight}{What you'll do}}}\\[4pt]")

with open(r'D:\Internship\Teach-ai\Research\Skillzza_56_Internships.tex', 'w', encoding='utf-8') as f:
    f.write(text)
