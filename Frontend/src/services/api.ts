// Real API layer connecting to the FastAPI backend.
import { type Domain } from "@/data/domains";
import { type Problem } from "@/data/problems";

export type SubmissionStatus =
  | "pending"
  | "running"
  | "grading"
  | "complete"
  | "graded"
  | "failed";

export interface RubricCriterion {
  name: string;
  score: number;
  max: number;
  comment: string;
}

export interface GradeReport {
  total: number;
  max: number;
  criteria: RubricCriterion[];
  overall: string;
}

export interface Submission {
  id: string;
  problem_id: string;
  task_index: number;
  user_id: string;
  file_path: string;
  status: SubmissionStatus;
  submitted_at: string;
  // Mapped for frontend components:
  problemTitle?: string;
  fileName?: string;
  submittedAt?: string;
  errorLog?: string;
  isPassed?: boolean;
  problemNumber?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const TOKEN_KEY = "skillzza.token";

const isBrowser = () => typeof window !== "undefined";

function getToken() {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

function setToken(token: string) {
  if (isBrowser()) window.localStorage.setItem(TOKEN_KEY, token);
}

function removeToken() {
  if (isBrowser()) window.localStorage.removeItem(TOKEN_KEY);
}

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = getToken();
  const headers: HeadersInit = { ...options.headers };
  
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorDetail = "API Error";
    try {
      const errorData = await response.json();
      errorDetail = errorData.detail || errorDetail;
    } catch {
      errorDetail = response.statusText;
    }
    throw new Error(errorDetail);
  }

  return response.json();
}

/* ---------------- Content ---------------- */

export async function fetchDomains(): Promise<Domain[]> {
  return apiFetch("/domains");
}

export async function fetchDomain(slug: string): Promise<Domain | undefined> {
  const domains = await fetchDomains();
  return domains.find((d) => d.slug === slug);
}

export async function fetchProblems(domain?: string): Promise<Problem[]> {
  const url = domain ? `/problems?domain=${domain}` : "/problems";
  return apiFetch(url);
}

export async function fetchProblem(id: string): Promise<Problem | undefined> {
  return apiFetch(`/problems/${id}`);
}

/* ---------------- Submissions ---------------- */

function mapSubmission(s: any, problemTitle: string, problemNumber?: string): Submission {
  return {
    ...s,
    problemTitle,
    problemNumber,
    task_index: s.task_index || 0,
    fileName: s.file_path ? (s.file_path.split("/").pop() || s.file_path.split("\\").pop() || "notebook.ipynb") : "notebook.ipynb",
    submittedAt: s.submitted_at,
    isPassed: s.is_passed,
  };
}

export async function createSubmission(input: {
  problemId: string;
  file: File;
  taskIndex?: number;
  quizScore?: number;
}): Promise<Submission> {
  const formData = new FormData();
  formData.append("file", input.file);
  if (input.taskIndex !== undefined) {
    formData.append("task_index", input.taskIndex.toString());
  }
  if (input.quizScore !== undefined) {
    formData.append("quiz_score", input.quizScore.toString());
  }
  
  const s = await apiFetch(`/submissions?problem_id=${input.problemId}`, {
    method: "POST",
    body: formData,
  });
  const problem = await fetchProblem(s.problem_id);
  return mapSubmission(s, problem ? problem.title : "Unknown Problem");
}

export async function fetchSubmission(id: string): Promise<Submission | undefined> {
  try {
    const s = await apiFetch(`/submissions/${id}`);
    const problem = await fetchProblem(s.problem_id);
    return mapSubmission(s, problem ? problem.title : "Unknown Problem");
  } catch {
    return undefined;
  }
}

export async function fetchSubmissions(): Promise<Submission[]> {
  try {
    const backendSubs: any[] = await apiFetch("/submissions");
    const problems = await fetchProblems();
    const problemMap = new Map(problems.map((p) => [p.id, p.title]));
    const problemNumberMap = new Map(problems.map((p: any) => [p.id, p.number]));
    
    return backendSubs.map((s) => 
      mapSubmission(s, problemMap.get(s.problem_id) || "Unknown Problem", problemNumberMap.get(s.problem_id))
    );
  } catch {
    return [];
  }
}

/* ---------------- Progress ---------------- */

export async function fetchUserProblemProgress(problemId: string): Promise<number[]> {
  try {
    const data = await apiFetch(`/progress/${problemId}`);
    return data.completed_task_indices || [];
  } catch (e) {
    console.error("Failed to fetch progress from DB", e);
    // fallback to localstorage temporarily if db connection fails
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`skillzza_user_progress_${problemId}`);
      if (saved) return JSON.parse(saved);
    }
    return [];
  }
}

export async function updateUserProblemProgress(problemId: string, completedIndices: number[]): Promise<void> {
  // Sync to localstorage first for immediate feedback/fallback
  if (typeof window !== 'undefined') {
    localStorage.setItem(`skillzza_user_progress_${problemId}`, JSON.stringify(completedIndices));
  }
  
  try {
    await apiFetch(`/progress/${problemId}`, {
      method: 'POST',
      body: JSON.stringify({ completed_task_indices: completedIndices })
    });
  } catch (e) {
    console.error("Failed to save progress to DB", e);
  }
}

/* ---------------- Dashboard ---------------- */

export interface DomainProgress {
  slug: string;
  name: string;
  solved: number;
  total: number;
  status: Domain["status"];
}

export async function fetchProgress(): Promise<DomainProgress[]> {
  return apiFetch("/users/me/progress");
}

export function statusOf(sub: Submission): SubmissionStatus {
  return sub.status;
}

export async function fetchGrade(submissionId: string): Promise<GradeReport | undefined> {
  try {
    return await apiFetch(`/grades/${submissionId}`);
  } catch {
    return undefined;
  }
}

/* ---------------- Auth ---------------- */

export async function signIn(email: string, password: string): Promise<User> {
  const formData = new URLSearchParams();
  formData.append("username", email);
  formData.append("password", password);

  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  setToken(data.access_token);
  return apiFetch("/auth/me");
}

export async function signUp(email: string, name: string, password: string): Promise<User> {
  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  const data = await response.json();
  setToken(data.access_token);
  return apiFetch("/auth/me");
}

export function signOut() {
  removeToken();
  if (isBrowser()) window.localStorage.removeItem("skillzza.user");
}

export async function fetchCurrentUser(): Promise<User | null> {
  if (!getToken()) return null;
  try {
    return await apiFetch("/auth/me");
  } catch {
    removeToken();
    return null;
  }
}

export async function requestNotify(domainSlug: string, email: string) {
  // Keeping stub for this
  return { ok: true, domainSlug, email };
}
