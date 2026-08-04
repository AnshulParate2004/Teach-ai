import os
import subprocess
import glob
from dotenv import load_dotenv

load_dotenv()

notebooks = [
    "solutions/04_rag_pipeline_chromadb.ipynb",
    "solutions/05_metadata_filtered_rag.ipynb",
    "solutions/06_persistent_chatbot.ipynb",
    "solutions/08_reflexion_agent.ipynb",
    "solutions/11_chunking_strategies.ipynb",
    "solutions/12_mcp_server.ipynb",
    "solutions/14_mem0_chatbot.ipynb",
    "solutions/17_persistent_chat_firebase.ipynb"
]

for nb in notebooks:
    print(f"Processing {nb}...")
    try:
        subprocess.run(
            [".venv/Scripts/python.exe", "-m", "papermill", nb, nb, "-k", "python3"],
            check=True,
            capture_output=True,
            text=True,
            env=os.environ.copy()
        )
        print(f" -> Successfully executed {nb}")
    except subprocess.CalledProcessError as e:
        print(f" -> [ERROR] Execution failed for {nb}:\n{e.stderr}")
