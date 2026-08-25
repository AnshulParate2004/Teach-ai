import re
import sys

mapping = {
    "AI Agent Designer - Build Your First Agent": ["Python / Jupyter Notebooks", "ChatGPT / Claude (Prompting)", "LangGraph / LangChain", "Skillzza AI Mentor"],
    "Microfinance Analyst - AI Loan Eligibility Engine": ["Python / Pandas", "Scikit-Learn", "Data Analytics", "Skillzza AI Mentor"],
    "Agentic AI Consultant - Automate a Business Process": ["Python", "Streamlit", "Process Automation", "Skillzza AI Mentor"],
    "Multi-Agent AI - Design an AI Workforce": ["Python", "CrewAI / AutoGen", "Prompt Engineering", "Skillzza AI Mentor"],
    "GenAI Prompt Engineer - Enterprise Prompt Lab": ["Python", "Prompt Engineering", "OpenAI / Claude APIs", "Skillzza AI Mentor"],
    "Generative AI Data Analyst - Ask Data Questions with GenAI": ["Python / Pandas", "Data Visualization", "SQL", "Skillzza AI Mentor"],
    "Healthcare GenAI - Clinical Knowledge Assistant": ["Python", "RAG", "Vector Databases", "Skillzza AI Mentor"],
    "GenAI Cybersecurity Analyst - AI SOC Investigation": ["Python", "Splunk / SIEM APIs", "Cybersecurity Analytics", "Skillzza AI Mentor"],
    "Full Stack Developer - Build an AI Web Application": ["Next.js / React", "Node.js", "OpenAI APIs", "Skillzza AI Mentor"],
    "Backend Developer - Build an AI API Service": ["FastAPI / Flask", "PostgreSQL", "Docker / Deployment", "Skillzza AI Mentor"],
    "AI Developer - Build a RAG Application": ["Python", "LangChain / LlamaIndex", "Vector Databases (Pinecone)", "Skillzza AI Mentor"],
    "LangChain Developer - Build an Enterprise AI Workflow": ["Python", "LangChain", "Enterprise Data Integration", "Skillzza AI Mentor"],
    "LangGraph Developer - Build an Agentic Workflow": ["Python", "LangGraph", "State Machines", "Skillzza AI Mentor"],
    "AI Agent Developer - Customer Support Agent": ["Python", "LangChain", "Dialogflow / Botpress", "Skillzza AI Mentor"],
    "AI Agent Developer - Sales Qualification Agent": ["Python", "LangChain", "CRM Integration (Salesforce)", "Skillzza AI Mentor"],
    "AI Agent Developer - HR Recruitment Agent": ["Python", "LangChain", "ATS Integration", "Skillzza AI Mentor"],
    "AI Customer Service Manager - Design a GenAI Contact Centre": ["Conversational AI Design", "CX Strategy", "Analytics", "Skillzza AI Mentor"],
    "Social Media Intelligence Analyst Decode a Brand Conversation": ["Python / Pandas", "NLP (Spacy/NLTK)", "Web Scraping", "Skillzza AI Mentor"],
    "UI/UX Designer Design an AI Product Experience": ["Figma", "User Journey Mapping", "Prototyping", "Skillzza AI Mentor"],
    "Citizen Services AI Agent Resolve a Government Complaint": ["Python", "Data Privacy Frameworks", "NLP", "Skillzza AI Mentor"]
}

# 1. Update problems.ts
with open('../Frontend/src/data/problems.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

def replacer(match):
    title = match.group(1)
    if title in mapping:
        tags_formatted = ',\n      '.join(f'"{t}"' for t in mapping[title])
        return f'"title": "{title}"{match.group(2)}"tags": [\n      {tags_formatted}\n    ]'
    return match.group(0)

ts_content = re.sub(r'\"title\":\s*\"(.*?)\"(.*?)\"tags\":\s*\[.*?\]', replacer, ts_content, flags=re.DOTALL)
with open('../Frontend/src/data/problems.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

# 2. Update generate_sector_20.py
with open('seed/generate_sector_20.py', 'r', encoding='utf-8') as f:
    py_content = f.read()

def replacer_py(match):
    title = match.group(1)
    if title in mapping:
        tools_formatted = repr(mapping[title])
        return f"'title': '{title}'{match.group(2)}'tools': {tools_formatted},"
    return match.group(0)

py_content = re.sub(r'\'title\':\s*\'(.*?)\'(.*?)\'tools\':\s*\[.*?\],', replacer_py, py_content, flags=re.DOTALL)
with open('seed/generate_sector_20.py', 'w', encoding='utf-8') as f:
    f.write(py_content)

# 3. Update GenAI_20_Industry_Internships.tex
with open('../Research/GenAI_20_Industry_Internships.tex', 'r', encoding='utf-8') as f:
    tex_content = f.read()

remaining_titles = list(mapping.keys())
sections = tex_content.split('\\section{')
new_tex = [sections[0]]
for i in range(1, len(sections)):
    sec = sections[i]
    matched_title = None
    for t in remaining_titles:
        t_clean = t.replace('-', '').replace('  ', ' ').strip()
        sec_title_clean = sec.split('}')[0].replace('-', '').replace('  ', ' ').strip()
        if t_clean in sec_title_clean or sec_title_clean.endswith(t_clean):
            matched_title = t
            break
            
    if matched_title:
        def tool_replacer(m):
            lines = ["\\subsubsection*{What Tools Will You Learn?}", "\\begin{itemize}"]
            for tool in mapping[matched_title]:
                lines.append(f"    \\item {tool}")
            lines.append("\\end{itemize}")
            return "\n".join(lines)
        
        sec = re.sub(r'\\subsubsection\*\{What Tools Will You Learn\?\}\s*\\begin\{itemize\}.*?\\end\{itemize\}', tool_replacer, sec, flags=re.DOTALL)
        
        skills_str = ", ".join(mapping[matched_title])
        sec = re.sub(r'\\textbf\{Primary Skills:\}.*?\\\\', f'\\\\textbf{{Primary Skills:}} {skills_str} \\\\\\\\', sec)
        
    new_tex.append('\\section{' + sec)
    
with open('../Research/GenAI_20_Industry_Internships.tex', 'w', encoding='utf-8') as f:
    f.write("".join(new_tex))

print('Done updating tools across all files!')
