import { createFileRoute, notFound, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState, Fragment, useEffect } from "react";
import { ArrowLeft, Loader2, Target, CheckCircle, Star, BookOpen, PenTool, ShieldCheck, ClipboardCheck, Award, PlayCircle, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { getProblem, type Problem } from "@/data/problems";
import { DifficultyBadge } from "@/components/badges";
import { UploadZone } from "@/components/upload-zone";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { createSubmission, fetchUserProblemProgress, updateUserProblemProgress } from "@/services/api";
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
    if (!loaderData) return { meta: [{ title: "Problem unavailable — Skillzza" }] };
    const p = loaderData.problem;
    const title = `${p.title} — Skillzza`;
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

type TabId = "overview" | "tasks" | "quiz" | "certificate";

const TAB_ITEMS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "overview",    label: "Overview",       icon: <Star className="size-4" /> },
  { id: "tasks",       label: "Tasks",          icon: <ClipboardCheck className="size-4" /> },
  { id: "quiz",        label: "Knowledge Test", icon: <CheckCircle className="size-4" /> },
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
  const [selectedTaskIdx, setSelectedTaskIdx] = useState<number>(-1);
  const [completedTasks, setCompletedTasks] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`skillzza_user_progress_${problem.id}`);
      if (saved) return JSON.parse(saved);
    }
    return [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProblemProgress(problem.id).then(indices => {
      setCompletedTasks(indices);
      if (typeof window !== 'undefined') {
        localStorage.setItem(`skillzza_user_progress_${problem.id}`, JSON.stringify(indices));
      }
    });
  }, [problem.id]);

  const allTasksCompleted = problem.steps && problem.steps.length > 0 && completedTasks.length === problem.steps.length;



  const baseSkills = problem.learn && problem.learn.length > 0 ? problem.learn : [
    "Industry context and workflow mapping",
    "Data extraction and insight generation",
    "Professional deliverable creation"
  ];
  
  const technicalSkills = problem.tags 
    ? problem.tags.filter(t => t !== "Skillzza AI Mentor") 
    : ["Prompt engineering and AI integration"];
    
  const allSkills = [...baseSkills, ...technicalSkills];

  const submit = async () => {
    if (!file) return;
    if (selectedTaskIdx === -1) return;
    setSubmitting(true);
    try {
      const sub = await createSubmission({ problemId: problem.id, taskIndex: selectedTaskIdx, file, quizScore: testSubmitted ? testScore : 0 });
      toast.success("Deliverables uploaded", { description: "Grading pipeline started." });
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
          const isLocked = !allTasksCompleted && (item.id === "quiz" || item.id === "submit" || item.id === "certificate");
          
          if (isLocked) {
            return null;
          }

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
                <h2 className="text-2xl font-bold">Why complete this Job Simulation</h2>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">

                
                {problem.about_company && (
                  <div className="mb-8 pb-6 border-b border-primary/10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{problem.about_company}</ReactMarkdown>
                  </div>
                )}
                
                <div className="my-8 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border bg-muted shadow-sm">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/aircAruvnKk" 
                    title="Intro Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>

                <ReactMarkdown remarkPlugins={[remarkGfm]}>{problem.problem_statement}</ReactMarkdown>
                
                <p className="mt-6 italic text-muted-foreground">If you would like to connect with the {problem.company} team to find out more information please email <a href={`mailto:microinternships@skillzza.com`} className="text-primary hover:underline">microinternships@skillzza.com</a></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><Award className="size-6" /></div>
                  <h2 className="text-xl font-bold">Available Achievements</h2>
                </div>
                <ul className="space-y-4 text-sm text-foreground font-medium">
                  <li className="flex items-center gap-3"><CheckCircle className="text-primary size-5" /> Certificate</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-primary size-5" /> Resume Snippet</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-primary size-5" /> Interview Tips</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-primary size-5" /> Skills</li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><PenTool className="size-6" /></div>
                  <h2 className="text-xl font-bold">Skills you will learn and practice:</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {allSkills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center rounded-full border border-primary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-background hover:bg-primary/5 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><PlayCircle className="size-6" /></div>
                <h2 className="text-2xl font-bold">How it works</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Complete tasks</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Complete tasks guided by pre-recorded videos and example answers from our team at {problem.company}. No live sessions, all self-paced.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Earn a certificate</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Earn a certificate and add it to your resume and LinkedIn as an extra curricular activity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Stand out in applications</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Confidently answer interview questions and explain why you’re a good fit for our team.</p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        )}

        {activeTab === "tasks" && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-3xl font-bold text-primary mb-8">Tasks</h2>
            
            <div className="flex flex-col md:flex-row gap-8 relative">
              {/* Left Sidebar Menu */}
              <div className="w-full md:w-1/3 flex flex-col space-y-4">
                {/* Intro & Scenario */}
                <button
                  onClick={() => setSelectedTaskIdx(-1)}
                  className={cn(
                    "w-full text-left flex items-center justify-between py-2 transition-colors",
                    selectedTaskIdx === -1
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full border",
                      selectedTaskIdx === -1 ? "border-primary text-primary" : "border-border text-muted-foreground"
                    )}>
                      <Star className="size-4" />
                    </div>
                    <span className="font-medium text-lg">Intro & Scenario</span>
                  </div>
                  {selectedTaskIdx === -1 && <ChevronRight className="size-5 text-primary" />}
                </button>
                
                <div className="border-b border-dashed border-border w-full" />
                
                {/* Task list */}
                {(problem.steps || []).map((step, idx) => {
                  const isLocked = idx > 0 && !completedTasks.includes(idx - 1);
                  const isCompleted = completedTasks.includes(idx);
                  
                  return (
                  <Fragment key={idx}>
                    <button
                      onClick={() => !isLocked && setSelectedTaskIdx(idx)}
                      disabled={isLocked}
                      className={cn(
                        "w-full text-left flex items-center justify-between py-2 transition-colors",
                        isLocked && "opacity-50 cursor-not-allowed",
                        selectedTaskIdx === idx
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-full border font-semibold text-base",
                          isCompleted ? "bg-primary text-primary-foreground border-primary" :
                          selectedTaskIdx === idx ? "border-primary text-primary" : "border-border text-muted-foreground"
                        )}>
                          {isCompleted ? <CheckCircle className="size-5" /> : idx + 1}
                        </div>
                        <span className="font-medium text-lg">
                          Task {["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][idx] || idx + 1}
                        </span>
                      </div>
                      {selectedTaskIdx === idx && <ChevronRight className="size-5 text-primary" />}
                    </button>
                    {idx < (problem.steps?.length || 0) - 1 && (
                      <div className="border-b border-dashed border-border w-full" />
                    )}
                  </Fragment>
                )})}
                
                <div className="pt-8 flex justify-center mt-auto">
                  <button 
                    onClick={() => {
                      if (confirm("Are you sure you want to reset all your progress for this problem?")) {
                        setCompletedTasks([]);
                        updateUserProblemProgress(problem.id, []);
                        setSelectedTaskIdx(-1);
                      }
                    }}
                    className="text-xs text-muted-foreground hover:text-destructive underline decoration-dotted transition-colors"
                  >
                    Reset Progress
                  </button>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="w-full md:w-2/3">
                <div className="bg-[#f4f7fb] dark:bg-muted/10 rounded-2xl p-8 border border-border shadow-inner min-h-[600px] max-h-[800px] overflow-y-auto">
                  {selectedTaskIdx === -1 ? (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-foreground">Intro & Scenario</h2>
                      <p className="text-muted-foreground">Background context and your project team</p>
                      
                      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground prose-h3:text-primary prose-h3:font-medium prose-h3:text-lg">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {problem.about_company ? problem.about_company : "Context missing."}
                        </ReactMarkdown>
                        
                        <div className="my-8 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border bg-muted shadow-sm">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/aircAruvnKk" 
                            title="Intro Video"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>

                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {problem.problem_statement}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ) : (() => {
                    const rawText = problem.steps ? problem.steps[selectedTaskIdx] : "";
                    const bodyText = rawText.replace(/\*\*Task \d+:\*\* (.*?):\s*/, '').replace(/\\n/g, '\n');
                    
                    const learnSplit = bodyText.split(/### What you\\?'ll learn\s*/i);
                    const scenario = learnSplit[0];
                    let learn = "";
                    let doPart = "";
                    
                    if (learnSplit.length > 1) {
                      const doSplit = learnSplit[1].split(/### What you\\?'ll do\s*/i);
                      learn = doSplit[0];
                      if (doSplit.length > 1) {
                        doPart = doSplit[1];
                      }
                    }

                    return (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold text-foreground">
                        Task {["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][selectedTaskIdx] || selectedTaskIdx + 1}
                        {problem.steps && problem.steps[selectedTaskIdx]?.match(/\*\*Task \d+:\*\* (.*?):/)?.[1] 
                          ? `: ${problem.steps[selectedTaskIdx].match(/\*\*Task \d+:\*\* (.*?):/)?.[1]}`
                          : ""}
                      </h2>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        2-3 hrs <span className="text-muted-foreground/50">•</span> {problem.difficulty}
                      </p>
                      
                      <div className="text-muted-foreground mt-8 text-sm md:text-base leading-relaxed">
                        <div className="mb-6">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{scenario}</ReactMarkdown>
                        </div>

                        {learn && (
                          <div className="mb-6">
                            <h3 className="text-primary font-semibold text-lg mb-3">What you'll learn</h3>
                            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground prose-ul:list-disc prose-ul:pl-4 prose-li:marker:text-primary">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{learn}</ReactMarkdown>
                            </div>
                          </div>
                        )}

                        {doPart && (
                          <div className="mb-6">
                            <h3 className="text-primary font-semibold text-lg mb-3">What you'll do</h3>
                            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground prose-ul:list-disc prose-ul:pl-4 prose-li:marker:text-primary">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{doPart}</ReactMarkdown>
                            </div>
                          </div>
                        )}

                        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-colors hover:border-primary/50 mt-10">
                          <h3 className="text-lg font-semibold mb-2">Upload Submission Files</h3>
                          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                            Drag & drop your files here. Your simulated manager will use our advanced LLM backend to automatically evaluate and grade your deliverables.
                          </p>
                          <div className="max-w-md mx-auto">
                            <UploadZone file={file} onFile={setFile} onClear={() => setFile(null)} />
                          </div>
                          <Button className="mt-8 w-full sm:w-auto" size="lg" disabled={!file || submitting} onClick={submit}>
                            {submitting && <Loader2 className="size-4 animate-spin mr-2" />}
                            {submitting ? "Uploading & Grading..." : "Submit to Manager for Review"}
                          </Button>
                        </div>
                          <div className="pt-6 border-t border-border mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-muted-foreground">
                              {completedTasks.includes(selectedTaskIdx) ? "You have successfully passed this task!" : "Submit your deliverables above. Passing the evaluation will unlock the next task."}
                            </p>
                            {completedTasks.includes(selectedTaskIdx) && (
                              <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-lg">
                                <CheckCircle className="size-4" /> Task Graded & Passed
                              </div>
                            )}
                          </div>
                      </div>
                    </div>
                  )})()}
                </div>
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
