const fs = require('fs');

const content = fs.readFileSync('Frontend/src/data/problems.ts', 'utf8');

let code = content.replace('export const problems: Problem[] = ', 'const problems = ');
code = code.replace(/import .*?;\n/g, ''); 
code = code.replace(/export type Problem = \{[\s\S]*?\};/, ''); 

const evalCode = code + '\nmodule.exports = problems;';
fs.writeFileSync('temp_eval.js', evalCode);

const problems = require('./temp_eval.js');

const latexPreamble = \\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{helvet}
\\renewcommand{\\familydefault}{\\sfdefault}
\\usepackage{xcolor}
\\usepackage{titlesec}

\\definecolor{forageblue}{RGB}{35, 128, 178} % Professional blue

\\usepackage[colorlinks=true, linkcolor=forageblue, urlcolor=forageblue, citecolor=forageblue]{hyperref}
\\usepackage{geometry}
\\geometry{a4paper, margin=1in}

\\titleformat{\\section}
  {\\normalfont\\Large\\bfseries\\color{forageblue}}{\\thesection}{1em}{}
\\titleformat{\\subsection}
  {\\normalfont\\large\\bfseries\\color{forageblue}}{\\thesubsection}{1em}{}
\\titleformat{\\subsubsection}
  {\\normalfont\\normalsize\\bfseries\\color{forageblue}}{\\thesubsubsection}{1em}{}

\\begin{document}
\\tableofcontents
\\newpage
;

const latexFooter = 
\\end{document}
;

function markdownToLatex(text) {
    if (!text) return "";
    let t = text;
    t = t.replace(/\*\*(.*?)\*\*/g, '\\textbf{$1}');
    t = t.replace(/^-\s+/gm, '$\\bullet$ ');
    t = t.replace(/\\#\\#\\#\\#\s*\\textbf\{(.*?)\}/g, '\\vspace{3mm}\\noindent\\textbf{$1}');
    t = t.replace(/\#\#\#\#\s*\\textbf\{(.*?)\}/g, '\\vspace{3mm}\\noindent\\textbf{$1}');
    t = t.replace(/-\s*##\s*\d*/g, '');
    t = t.replace(/—\s*##\s*\d*/g, '');
    t = t.replace(/\?T/g, "'");
    t = t.replace(/\n/g, ' \\\\\n');
    return t;
}

let sections = [];

for (const prob of problems) {
    const title = prob.title || '';
    const industry = prob.industry || '';
    const company = prob.company || 'Tech Enterprise';
    const tools = prob.tags || [];
    const skillsStr = tools.join(', ');
    
    let sec = \\section{ - }\n\n;
    
    sec += \\textbf{SkillForge Virtual Internship} \\\\\n;
    sec += \\textbf{} \\\\\n\n;
    sec += \\textbf{Industry:}  \\\\\n;
    sec += \\textbf{Duration:} 3-4 hours \\\\\n;
    sec += \\textbf{Mode:} Individual, task-based job simulation \\\\\n;
    sec += \\textbf{Primary Skills:}  \\\\\n\n;
    sec += Complete work that simulates life on the job. 3-4 hours and self-paced. \\\\\n;
    sec += Stand out in your application to \\textbf{}. Show us you're a motivated candidate. \\\\\n\n;
    
    sec += \\subsection*{Overview}\n;
    sec += \\subsubsection*{What is this Job Simulation All About?}\n;
    sec += \\textbf{Introduction from } \\\\\n;
    
    let aboutCompany = (prob.about_company || '').replace(****, '');
    sec += ${markdownToLatex(aboutCompany)}\n\n;
    
    sec += \\textbf{The Problem:} \\\\\n;
    let probStmt = markdownToLatex(prob.problem_statement || '');
    sec += ${probStmt}\n\n;
    
    sec += \\subsubsection*{What Will You Learn?}\n;
    sec += \\begin{itemize}\n;
    for (const l of (prob.learn || [])) {
        sec +=     \\item \n;
    }
    sec += \\end{itemize}\n\n;
    
    sec += \\subsubsection*{What Tools Will You Learn?}\n;
    sec += \\begin{itemize}\n;
    for (const t of tools) {
        sec +=     \\item \n;
    }
    sec += \\end{itemize}\n\n;
    
    sec += \\subsection*{Tasks to be Performed}\n;
    const steps = prob.steps || [];
    for (const step of steps) {
        let stepClean = markdownToLatex(step);
        stepClean = stepClean.replace(/\\textbf\{Task (\d+):\}(.*?):/, '\\vspace{4mm}\\noindent\\textbf{\\large Task $1:$2}\\\\');
        sec += ${stepClean}\n\n;
    }
    
    sec += \\subsection*{Knowledge Test}\n;
    sec += Test your understanding with a knowledge assessment. You can retake it anytime.\\\\\n\n;
    
    sec += \\subsection*{Submit Your Completed Task}\n;
    sec += Submit your completed Jupyter Notebooks, analytical reports, and presentations for AI verification.\\\\\n\n;
    
    sec += \\subsection*{Earn Certificate Post Verification}\n;
    sec += Once submitted, SkillForge performs a detailed verification of your outputs. You will receive a \\textbf{SkillForge Verified Virtual Internship Certificate} to share on LinkedIn.\\\\\n\n;
    
    sec += \\newpage\n;
    
    sections.push(sec);
}

const finalLatex = latexPreamble + sections.join('') + latexFooter;

fs.writeFileSync('Research/GenAI_20_Industry_Internships.tex', finalLatex, 'utf8');

console.log(Generated LaTeX with ${sections.length} problem statements.);
