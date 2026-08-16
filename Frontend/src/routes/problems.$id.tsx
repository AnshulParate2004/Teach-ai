import { createFileRoute, notFound, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Loader2, Target, CheckCircle, Star, BookOpen, PenTool, ShieldCheck, ClipboardCheck, Award } from "lucide-react";
import { toast } from "sonner";
import { getProblem, type Problem } from "@/data/problems";
import { DifficultyBadge } from "@/components/badges";
import { UploadZone } from "@/components/upload-zone";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { createSubmission } from "@/services/api";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/problems/$id")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) throw redirect({ to: "/login" });
  },
  loader: ({ params }) => {
    const problem = getProblem(params.id);
    if (!problem) throw notFound();
    return { problem };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Problem unavailable — SkillForge" }] };
    const p = loaderData.problem;
    const title = `${p.title} — SkillForge`;
    return { meta: [{ title }, { name: "description", content: p.problem_statement }] };
  },
  component: ProblemPage,
});

function List({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  if (!items || items.length === 0) return <p className="text-sm text-muted-foreground">None specified.</p>;
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-2 ml-4">
      {items.map((item, idx) => (
        <li key={idx} className={`text-sm text-muted-foreground leading-relaxed ${ordered ? "list-decimal" : "list-disc"}`}>
          {item}
        </li>
      ))}
    </Tag>
  );
}

type TabId = "overview" | "tasks" | "quiz" | "submit" | "certificate";

const TAB_ITEMS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "overview",    label: "Overview",       icon: <Star className="size-4" /> },
  { id: "tasks",       label: "Tasks",          icon: <ClipboardCheck className="size-4" /> },
  { id: "quiz",        label: "Knowledge Test", icon: <CheckCircle className="size-4" /> },
  { id: "submit",      label: "Submit Project", icon: <Target className="size-4" /> },
  { id: "certificate", label: "Certificate",    icon: <Award className="size-4" /> },
];

function ProblemPage() {
  const { problem } = Route.useLoaderData() as { problem: Problem };
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);
  const navigate = useNavigate();

  const submit = async () => {
    if (!file) return;
    setSubmitting(true);
    try {
      const sub = await createSubmission({ problemId: problem.id, file, quizScore: testSubmitted ? testScore : 0 });
      toast.success("Notebook uploaded", { description: "Grading pipeline started." });
      navigate({ to: "/submissions/$id", params: { id: sub.id } });
    } catch (err: any) {
      toast.error("Upload failed", { description: err.message || "An error occurred" });
      setSubmitting(false);
    }
  };

  const submitTest = () => {
    let score = 0;
    problem.mcqs?.forEach(m => { if (testAnswers[m.id] === m.correctAnswer) score++; });
    setTestScore(score);
    setTestSubmitted(true);
    toast.success("Quiz submitted", { description: `You scored ${score} out of ${problem.mcqs?.length || 0}.` });
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 bg-muted/20 min-h-screen">
      <Link
        to="/domains/$slug"
        params={{ slug: problem.domain }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="size-3.5" /> Back to problems
      </Link>

      <div className="mb-10 p-8 rounded-2xl bg-card border shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Skillzza Virtual Internship</p>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-5">{problem.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-6">
          <span className="flex items-center gap-1"><strong>Role:</strong> {problem.role}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><strong>Industry:</strong> {problem.industry}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><strong>Duration:</strong> {problem.estimatedTime}</span>
          <span>•</span>
          <DifficultyBadge level={problem.difficulty} />
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-lg max-w-3xl">
            Complete work that simulates life on the job. <strong>{problem.estimatedTime}</strong> and self-paced.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Stand out in your application to <strong>{problem.company}</strong>. Show us you're a motivated candidate.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border mb-8 overflow-x-auto hide-scrollbar">
        {TAB_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "px-6 py-4 text-base font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="w-full">
        
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><Star className="size-6" /></div>
                <h2 className="text-2xl font-bold">What is this Job Simulation All About?</h2>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {problem.about_company && (
                  <div className="mb-8 pb-6 border-b border-primary/10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{problem.about_company}</ReactMarkdown>
                  </div>
                )}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{problem.problem_statement}</ReactMarkdown>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><BookOpen className="size-6" /></div>
                  <h2 className="text-xl font-bold">What Will You Learn?</h2>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">By completing this simulation, you will gain practical exposure to:</p>
                <div className="bg-muted/30 p-5 rounded-xl border">
                  <List items={problem.learn && problem.learn.length > 0 ? problem.learn : ["Industry context and workflow mapping", "Data extraction and insight generation", "Prompt engineering and AI integration", "Professional deliverable creation"]} />
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><PenTool className="size-6" /></div>
                  <h2 className="text-xl font-bold">What Tools Will You Learn?</h2>
                </div>
                <div className="bg-muted/30 p-5 rounded-xl border">
                  <List items={problem.tools && problem.tools.length > 0 ? problem.tools : problem.tags && problem.tags.length > 0 ? problem.tags : ["ChatGPT / GenAI Assistant", "Python / Jupyter Notebooks", "Skillzza AI Mentor"]} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><ShieldCheck className="size-6" /></div>
                <h2 className="text-2xl font-bold">What Are the Prerequisites?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recommended Background</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Students should have basic familiarity with Python, logic, and analytical problem-solving. No deep advanced technical knowledge is strictly required as the simulation is guided.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Who Can Take This Internship?</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground list-disc ml-4">
                    <li>Engineering students</li>
                    <li>Business & Management students</li>
                    <li>Data Science enthusiasts</li>
                    <li>Anyone interested in {problem.industry}</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === "tasks" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><ClipboardCheck className="size-6" /></div>
                  <h2 className="text-2xl font-bold">Tasks to be Performed</h2>
                </div>
                <p className="text-muted-foreground mb-6">The complete internship consists of the following practical tasks designed to simulate real workplace deliverables.</p>
                
                <div className="space-y-4">
                  {(problem.steps || []).map((step, idx) => (
                    <div key={idx} className="rounded-xl border border-border bg-background p-6 shadow-sm hover:border-primary/40 transition-colors">
                      <h3 className="font-semibold text-foreground mb-3 text-lg flex items-center gap-2">
                        <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">{idx + 1}</span>
                        Task {idx + 1}
                      </h3>
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{step}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {(!problem.steps || problem.steps.length === 0) && (
                    <p className="text-muted-foreground text-sm italic">Tasks detailed in the notebook.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "quiz" && (
            <div className="rounded-2xl border bg-card p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><CheckCircle className="size-6" /></div>
                <h2 className="text-2xl font-bold">MCQs Post Task Completion</h2>
              </div>
              <p className="text-muted-foreground">Test your understanding with this knowledge assessment. You can retake it anytime.</p>
              
              <div className="space-y-10 mt-8">
                {problem.mcqs?.length ? problem.mcqs.map((mcq, idx) => (
                  <div key={mcq.id} className="space-y-4 bg-muted/20 p-6 rounded-xl border">
                    <h4 className="font-medium text-foreground leading-relaxed">{idx + 1}. {mcq.question}</h4>
                    <RadioGroup
                      disabled={testSubmitted}
                      onValueChange={(val) => setTestAnswers({...testAnswers, [mcq.id]: parseInt(val)})}
                      value={testAnswers[mcq.id]?.toString()}
                    >
                      {mcq.options.map((opt, oIdx) => {
                        const isCorrect = testSubmitted && oIdx === mcq.correctAnswer;
                        const isSelectedWrong = testSubmitted && testAnswers[mcq.id] === oIdx && oIdx !== mcq.correctAnswer;
                        return (
                          <div key={oIdx} className={cn("flex items-center space-x-3 rounded-lg border p-3 transition-colors bg-background",
                            isCorrect ? "border-success bg-success/10" : isSelectedWrong ? "border-destructive bg-destructive/10" : "border-transparent hover:border-border")}>
                            <RadioGroupItem value={oIdx.toString()} id={`q${mcq.id}-${oIdx}`} className={cn(isCorrect && "border-success text-success", isSelectedWrong && "border-destructive text-destructive")} />
                            <Label htmlFor={`q${mcq.id}-${oIdx}`} className={cn("cursor-pointer flex-1 font-normal text-sm leading-relaxed", isCorrect && "text-success font-medium", isSelectedWrong && "text-destructive font-medium")}>{opt}</Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                )) : (
                  <p className="text-muted-foreground italic">No MCQs configured for this internship.</p>
                )}
                
                {problem.mcqs?.length > 0 && (
                  <div className="pt-4">
                    {!testSubmitted ? (
                      <Button onClick={submitTest} size="lg">Submit Quiz</Button>
                    ) : (
                      <div className="rounded-xl border border-primary/20 bg-primary/10 p-8 text-center animate-in fade-in zoom-in duration-300">
                        <h3 className="text-3xl font-bold text-primary mb-2">Score: {testScore} / {problem.mcqs.length}</h3>
                        <Button variant="outline" className="mt-6" onClick={() => { setTestSubmitted(false); setTestAnswers({}); setTestScore(0); }}>Retake Quiz</Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "submit" && (
            <div className="rounded-2xl border bg-card p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><Target className="size-6" /></div>
                <h2 className="text-2xl font-bold">Submit Your Completed Task</h2>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl border space-y-4 mb-8">
                <h3 className="font-semibold">Your Final Submission</h3>
                <p className="text-sm text-muted-foreground">Submit the following artifacts (merged into a single Jupyter notebook):</p>
                <List items={problem.submission_instructions || problem.expectedOutcome || ["Completed Jupyter Notebook"]} ordered />
              </div>

              <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-colors hover:border-primary/50">
                <h3 className="text-lg font-semibold mb-2">Upload Notebook (.ipynb)</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                  Drag & drop your solution here to receive instant AI grading against the rubric.
                </p>
                <div className="max-w-md mx-auto">
                  <UploadZone file={file} onFile={setFile} onClear={() => setFile(null)} />
                </div>
                <Button className="mt-8 w-full sm:w-auto" size="lg" disabled={!file || submitting} onClick={submit}>
                  {submitting && <Loader2 className="size-4 animate-spin mr-2" />}
                  {submitting ? "Uploading & Grading…" : "Submit for Grading"}
                </Button>
              </div>
            </div>
          )}

          {activeTab === "certificate" && (
            <div className="rounded-2xl border bg-card p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><Award className="size-6" /></div>
                <h2 className="text-2xl font-bold">Earn Certificate Post Verification</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Skillzza Verified Virtual Internship</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Once you submit, our AI Mentor performs a detailed verification of your dataset analysis, calculations, methodology, and insights.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground mt-4">
                    <li className="flex gap-2"><CheckCircle className="size-4 text-success" /> Shareable on LinkedIn</li>
                    <li className="flex gap-2"><CheckCircle className="size-4 text-success" /> Resume-ready output</li>
                    <li className="flex gap-2"><CheckCircle className="size-4 text-success" /> Employability Score attached</li>
                  </ul>
                </div>
                
                <div className="rounded-xl border border-border bg-muted/20 p-6 flex flex-col items-center justify-center text-center">
                  <Award className="size-16 text-primary/40 mb-4" />
                  <h4 className="font-semibold mb-2">Complete tasks to unlock</h4>
                  <p className="text-xs text-muted-foreground max-w-[200px]">
                    Submit your notebook in Step 7 and achieve a passing score to earn your certificate.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
    </div>
  );
}
