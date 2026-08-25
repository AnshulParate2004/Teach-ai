# Skillzza AI

Lovable Prompt — EdTech AI-Graded Problem Platform

Copy-paste everything below into Lovable.

Build a modern, dark-mode-friendly EdTech web app called "Skillzza" (placeholder name) where students pick a domain, get a real-world problem statement, solve it on their own (locally or in Google Colab), and submit their solution file to get AI-graded feedback.

Core concept

Students never write code inside this app — they solve problems externally and upload a solution file (.ipynb primarily). This is a submission + grading platform, not an IDE.

Content is organized by Domain -> Problem Statements -> Submission -> AI Grade Report.
 
## Recent Updates
- Redesigned the Tasks tab into a clean master-detail (sidebar + content) layout, improving readability and matching standard learning platform UX.

## Domains

Generative & Agentic AI — LIVE. 20 problem statements covering LangChain, LangGraph, RAG, multi-agent systems, and MCP servers.

Data Science — COMING SOON

Quantum Computing — COMING SOON

Blockchain — COMING SOON

Show these as a grid of domain cards on the homepage, each with an icon, short description, problem count (e.g. "20 problems"), and a status pill ("Live" in green vs "Coming Soon" in muted gray). Coming-soon cards should still look polished (not grayed-out/broken) — maybe a subtle lock icon and a "Notify me" button that opens a simple email-capture modal.

Pages needed

1. Landing / Home

Hero section: platform name, one-line pitch ("Real industry problems. Your solution. AI-graded feedback in minutes.")

Domain grid (as described above)

How-it-works strip: 3-4 steps — "Pick a problem -> Solve it your way (local/Colab) -> Upload your notebook -> Get instant AI-graded feedback"

2. Domain page (e.g. /domains/generative-ai)

Domain title + description

Grid/list of problem cards: title, short problem statement preview, industry tag (e.g. "Healthcare", "Insurance", "Banking" — since each problem is flavored with a real industry use case), difficulty badge, solved/unsolved status for logged-in users

Filter/search bar (by industry tag or keyword)

3. Problem detail page (e.g. /problems/[id])

Full problem statement, broken into clear sections: Problem Statement, What You'll Learn, Task & Expected Outcome, Tools You Can Use, Steps to Follow, Knowledge Test questions, Submission Instructions

Industry tag shown prominently near the title (e.g. a colored pill: "Industry: Healthcare")

Dataset download button (if the problem has an associated dataset — show file name + size)

Upload zone at the bottom: drag-and-drop .ipynb file, with a note "Solve independently using your own compute or Google Colab, then upload your final notebook here."

"Submit for Grading" button

4. Submission status page (e.g. /submissions/[id])

Status stepper: Uploaded -> Running -> AI Grading -> Complete

If still processing, poll and show a friendly loading state ("Running your notebook in a sandboxed environment...", "AI is reviewing your solution against the rubric...")

If it fails to execute, show a clear error log panel

5. Grade report page (e.g. /submissions/[id]/grade)

Big total score at top (e.g. "82/100") with a progress ring or bar

Rubric breakdown: list of criteria, each with its own score/max and a short AI feedback comment (expandable per-criterion)

Overall AI feedback paragraph

"Try another problem" and "Retry this problem" buttons

6. Dashboard (/dashboard, for logged-in users)

Per-domain progress bars (e.g. "Generative AI: 6/20 solved")

Recent submissions list with scores

Simple streak/activity indicator

7. Auth

Simple email/password login and signup pages, clean centered card layout

Design direction

Clean, modern, developer-tool aesthetic — think Linear / Vercel dashboard energy, not a cluttered course-marketplace look

Dark mode as default, with a light mode toggle

Accent color: teal/emerald for primary actions and "Live" status; muted gray/slate for "Coming Soon" domains

Monospace font accents for code-related bits (problem tags, file names), clean sans-serif (Inter or similar) for body text

Cards with subtle borders/shadows, generous whitespace, rounded corners (not overly bubbly)

Mobile-responsive throughout

Sample mock data to seed the UI

Use this shape for problem cards (mock 4-5 of them from the Generative AI domain so the UI has real-looking content):

{ "id": "genai-01", "domain": "generative-ai", "title": "LCEL Chain Building with LangChain", "industry": "IT Services", "problem_statement": "Build an LCEL chain that takes a technical topic, generates 3 facts about it, and translates those facts into another language, all in one pipeline.", "difficulty": "Beginner", "solved": false }

{ "id": "genai-04", "domain": "generative-ai", "title": "RAG Pipeline with ChromaDB", "industry": "Healthcare", "problem_statement": "Build a Retrieval-Augmented Generation system that answers clinical questions from a custom protocol document using a vector database.", "difficulty": "Intermediate", "solved": true }

{ "id": "genai-09", "domain": "generative-ai", "title": "Supervisor Multi-Agent System", "industry": "Manufacturing", "problem_statement": "Build a hierarchical multi-agent system where a Supervisor agent routes requests to specialized agents and validates the final output.", "difficulty": "Advanced", "solved": false }

Notes for build

This is frontend-only for now — use mock/local data and stub out API calls in a clearly separated api/ or services/ layer so it's easy to wire up to a real FastAPI backend later.

Prioritize the Domain page, Problem detail page, and Grade report page — these are the most important screens to get right.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ab3b5e14-4b38-4f5b-bbd3-b18cb9ae60bd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
