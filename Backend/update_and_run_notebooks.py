import os
import sys
import json
import re
import subprocess
import glob
from dotenv import load_dotenv

load_dotenv()

def process_notebook(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        nb = json.load(f)
        
    modified = False
    for cell in nb.get('cells', []):
        if cell.get('cell_type') == 'code':
            new_source = []
            for line in cell.get('source', []):
                # 1. Replace pip installs
                line = re.sub(r'langchain-google-genai', 'langchain-openai', line)
                
                # 2. Replace imports
                line = re.sub(r'from langchain_google_genai import ChatGoogleGenerativeAI', 
                              'import os\nimport dotenv\ndotenv.load_dotenv(r"D:/Internship/Teach-ai/Backend/.env")\nfrom langchain_openai import AzureChatOpenAI', line)
                
                # 3. Replace instantiations
                if 'ChatGoogleGenerativeAI' in line and not line.startswith('import ') and not line.startswith('from '):
                    line = re.sub(r'ChatGoogleGenerativeAI\([^)]*\)', 
                                  'AzureChatOpenAI(azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT"), api_key=os.environ.get("AZURE_OPENAI_API_KEY"), azure_deployment="gpt-4o", api_version=os.environ.get("AZURE_OPENAI_API_VERSION", "2024-12-01-preview"))', 
                                  line)
                
                new_source.append(line)
            
            if new_source != cell.get('source', []):
                cell['source'] = new_source
                modified = True
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(nb, f, indent=1)
        print(f" -> Updated {filepath}")
        
    print(f" -> Executing {filepath} in-place...")
    try:
        # Use papermill to execute and save in-place
        subprocess.run(
            [sys.executable, '-m', 'papermill', filepath, filepath, '--kernel', 'python3'],
            check=True, capture_output=True, text=True, env=os.environ
        )
        print(f" -> Successfully executed {filepath}")
    except subprocess.CalledProcessError as e:
        print(f" -> [ERROR] Execution failed for {filepath}:")
        print(e.stderr)

if __name__ == '__main__':
    solution_files = glob.glob('solutions/*.ipynb')
    for filepath in solution_files:
        process_notebook(filepath)
    print("Done processing all notebooks.")
