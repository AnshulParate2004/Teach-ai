import asyncio
import os
import nbformat
from nbclient import NotebookClient
from nbclient.exceptions import CellTimeoutError
import logging

logger = logging.getLogger(__name__)

# SECURITY WARNING: 
# This is a local subprocess execution sandbox for MVP/Local Dev only.
# It runs arbitrary user code directly on the host OS.
# BEFORE PRODUCTION DEPLOYMENT:
# Swap this out for a secure Docker-per-execution sandbox (e.g., using docker-py to spin up an isolated container without network access, mounting the notebook, and capturing stdout).

async def run_notebook_safely(file_path: str, timeout: int = 120) -> tuple[bool, str]:
    """
    Executes a Jupyter notebook safely with a timeout.
    Returns a tuple of (success_boolean, execution_log_string)
    """
    if not os.path.exists(file_path):
        return False, "Error: Notebook file not found."
    
    execution_log = []
    
    # Run nbclient in a thread to not block the async event loop
    def _execute():
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                nb = nbformat.read(f, as_version=4)
                
            client = NotebookClient(nb, timeout=timeout, kernel_name='python3')
            # Capture outputs
            executed_nb = client.execute()
            
            for i, cell in enumerate(executed_nb.cells):
                if cell.cell_type == "code":
                    execution_log.append(f"--- Cell {i+1} ---")
                    execution_log.append(f"Code:\n{cell.source}\n")
                    for output in cell.get("outputs", []):
                        if output.output_type == "stream":
                            execution_log.append(f"Output:\n{output.text}")
                        elif output.output_type == "error":
                            execution_log.append(f"Error: {output.ename}: {output.evalue}")
                            for traceback in output.traceback:
                                execution_log.append(traceback)
                        elif "data" in output and "text/plain" in output.data:
                            execution_log.append(f"Output:\n{output.data['text/plain']}")
            return True, "\n".join(execution_log)
        except CellTimeoutError:
            return False, f"Execution timed out after {timeout} seconds."
        except Exception as e:
            return False, f"Failed to execute notebook: {str(e)}"
            
    loop = asyncio.get_running_loop()
    success, log = await loop.run_in_executor(None, _execute)
    return success, log
