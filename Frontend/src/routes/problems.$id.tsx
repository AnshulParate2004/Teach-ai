import { createFileRoute, notFound, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Loader2, Trophy, Clock, Target, HelpCircle, PenTool, CheckCircle, Star } from "lucide-react";
import { toast } from "sonner";
import { getProblem, type Problem } from "@/data/problems";
import { DifficultyBadge } from "@/components/badges";
import { UploadZone } from "@/components/upload-zone";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { createSubmission } from "@/services/api";
import { cn } from "@/lib/utils";

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
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-2 ml-4">
      {items.map((item) => (
        <li key={item} className={`text-sm text-muted-foreground leading-relaxed ${ordered ? "list-decimal" : "list-disc"}`}>
          {item}
        </li>
      ))}
    </Tag>
  );
}

const SIDEBAR_ITEMS = [
  { id: "intro", label: "Intro & Scenario", icon: "★" },
  { id: "task",  label: "Task",             icon: "✓" },
  { id: "quiz",  label: "Quiz",             icon: "?" },
];

function ProblemPage() {
  const { problem } = Route.useLoaderData() as { problem: Problem };
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<"intro" | "task" | "quiz">("intro");
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);
  const navigate = useNavigate();

  const submit = async () => {
    if (!file) return;
    setSubmitting(true);
    try {
      const sub = await createSubmission({ problemId: problem.id, file });
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
    toast.success("Quiz submitted", { description: `You scored ${score} out of 10.` });
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Link
        to="/domains/$slug"
        params={{ slug: problem.domain }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="size-3.5" /> Back to problems
      </Link>

      <div className="mb-8">
        <p className="text-lg font-medium text-muted-foreground mb-1">{problem.company}</p>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">{problem.title} Job Simulation</h1>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-12 mb-8">
          {["overview", "video", "tasks", "reviews"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              disabled={tab === "video" || tab === "reviews"}
              className="rounded-none border-b-2 border-transparent px-6 py-3 capitalize data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ═══ OVERVIEW TAB ═══ */}
        <TabsContent value="overview" className="mt-0 outline-none">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary">Why complete this job simulation</h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                A risk-free way to experience work on the job with us at {problem.company || "NexusAI"}.
                Practice your skills with example tasks and build your confidence to ace your applications.
              </p>

              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="size-4"/> Self-paced</span>
                <span className="flex items-center gap-1"><Clock className="size-4"/> {problem.estimatedTime}</span>
                <span className="flex items-center gap-1"><CheckCircle className="size-4"/> No grades</span>
                <span className="flex items-center gap-1"><CheckCircle className="size-4"/> No assessments</span>
                <DifficultyBadge level={problem.difficulty} />
              </div>

              {/* Forage-style company intro card */}
              <div className="mb-10 rounded-2xl border border-border bg-card p-8 shadow-sm space-y-4">
                <p className="text-base text-foreground leading-relaxed font-medium">
                  Welcome to the <strong>{problem.title} Job Simulation!</strong> We are thrilled to have you here.
                </p>
                {problem.about_company &&
                  problem.about_company.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
                  ))
                }
                {problem.problem_statement && (
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{problem.problem_statement}</p>
                )}
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground mb-3">You'll learn key skills in:</p>
                  <ul className="space-y-1.5">
                    {problem.learn?.map((l) => (
                      <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 font-bold">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  We hope this program provides a great resource for you to upskill and strengthen your resume
                  as you explore career options and a potential future at {problem.company}.
                </p>
              </div>


              {/* Problems Grid */}
              {problem.pain_points?.length > 0 && (
                <div className="mb-12 rounded-2xl border border-border bg-muted/10 p-8">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Problems we hear from leaders like you</h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">Manual workflows often become a critical bottleneck — scattered data, repetitive analysis, and manual formatting waste valuable time.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {problem.pain_points.map((pt) => (
                      <div key={pt.title} className="rounded-xl border border-border bg-background p-5 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-foreground mb-2">{pt.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ROI Stats */}
              {problem.roi_stats?.length > 0 && (
                <div className="mb-12">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Quantifiable value for your institution</h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">The {problem.title} boosts productivity, consistency, and success rates through intelligent automation.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {problem.roi_stats.map((stat) => (
                      <div key={stat.value + stat.desc} className="rounded-2xl border border-border bg-card p-6">
                        <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes Grid */}
              {problem.outcomes?.length > 0 && (
                <div className="mb-10 rounded-2xl border border-primary/10 bg-primary/5 p-8">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Outcomes you can expect</h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">Teams gain efficiency, alignment, and data-backed confidence in every execution.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {problem.outcomes.map((oc) => (
                      <div key={oc.title} className="rounded-xl border border-border bg-background p-5 shadow-sm hover:border-primary/40 transition-colors">
                        <h4 className="font-semibold text-foreground mb-2">{oc.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{oc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <Trophy className="size-5 text-blue-500" /> Available Achievements
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certificate of Completion</li>
                  <li>• Resume Snippet</li>
                  <li>• Interview Tips</li>
                  <li>• Skills Verification</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <HelpCircle className="size-5 text-blue-500" /> How it works
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                  <li>Complete tasks guided by pre-recorded instructions. No live sessions, all self-paced.</li>
                  <li>Earn a certificate and add it to your resume and LinkedIn.</li>
                  <li>Stand out in applications and confidently answer interview questions.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <PenTool className="size-5 text-blue-500" /> Skills you will learn:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((t) => (
                    <span key={t} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ═══ TASKS TAB ═══ */}
        <TabsContent value="tasks" className="mt-0 outline-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

            {/* Sidebar — 3 items */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-2">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      className={cn(
                        "flex items-center justify-between gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all",
                        isActive
                          ? "border-primary bg-primary/10 text-primary shadow-sm"
                          : "border-dashed border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                          isActive ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"
                        )}>
                          {item.icon}
                        </div>
                        <span className={cn("text-sm leading-tight", isActive ? "font-semibold" : "font-medium")}>
                          {item.label}
                        </span>
                      </div>
                      {isActive && <span className="text-primary font-bold">›</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">

              {/* ── INTRO ── */}
              {activeTab === "intro" && (
                <div className="space-y-6">
                  {problem.intro_from_team && (
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                      <h2 className="text-xl font-semibold mb-3 text-foreground">Introduction from our Team</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{problem.intro_from_team}</p>
                    </div>
                  )}
                  {problem.scenario && (
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
                      <div className="flex items-center gap-2">
                        <Star className="size-5 text-primary" />
                        <h2 className="text-xl font-semibold text-foreground">Intro & Scenario</h2>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Background</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{problem.scenario.background}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your role</p>
                        <List items={problem.scenario.your_role} />
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your goal</p>
                        <List items={problem.scenario.your_goal} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── TASK — all 4 tasks + notebook upload ── */}
              {activeTab === "task" && (
                <div className="space-y-6">
                  {problem.simulation_tasks?.map((t) => (
                    <div key={t.number} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                      <div className="bg-muted/30 px-6 py-4 border-b border-border flex items-center gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary text-xs font-bold text-primary">
                          {t.number}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground leading-tight">Task {t.number}: {t.title}</h3>
                          <p className="text-xs text-muted-foreground">{problem.estimatedTime} • {problem.difficulty}</p>
                        </div>
                      </div>
                      <div className="p-6 space-y-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>

                        {t.number === 1 && (
                          <div className="border-t border-border pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What you'll learn</p>
                            <List items={problem.learn} />
                          </div>
                        )}

                        {t.number === 3 && (
                          <>
                            <div className="border-t border-border pt-4">
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What you'll do</p>
                              <List items={problem.steps} ordered />
                            </div>
                            <div className="border-t border-border pt-4">
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Submission requirements</p>
                              <List items={problem.expectedOutcome} />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Notebook upload */}
                  <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
                    <h2 className="text-lg font-semibold flex items-center gap-2 mb-1">
                      <Target className="size-5 text-primary" />
                      Submit your notebook (.ipynb)
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">
                      Upload your completed and executed Jupyter notebook. It will be AI-graded against the rubric.
                    </p>
                    <UploadZone file={file} onFile={setFile} onClear={() => setFile(null)} />
                    <Button className="mt-5 w-full sm:w-auto" disabled={!file || submitting} onClick={submit}>
                      {submitting && <Loader2 className="size-4 animate-spin mr-2" />}
                      {submitting ? "Uploading…" : "Submit for Grading"}
                    </Button>
                  </div>
                </div>
              )}

              {/* ── QUIZ ── */}
              {activeTab === "quiz" && (
                <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                  <div className="bg-muted/30 p-6 border-b border-border">
                    <h2 className="text-xl font-semibold mb-1">Knowledge Assessment</h2>
                    <p className="text-sm text-muted-foreground">Test your understanding with this 10-question quiz. You can retake it anytime.</p>
                  </div>
                  <div className="p-6 space-y-10">
                    {problem.mcqs?.map((mcq, idx) => (
                      <div key={mcq.id} className="space-y-4">
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
                              <div key={oIdx} className={cn("flex items-center space-x-3 rounded-lg border p-3 transition-colors",
                                isCorrect ? "border-success bg-success/10" : isSelectedWrong ? "border-destructive bg-destructive/10" : "border-transparent hover:bg-muted/50")}>
                                <RadioGroupItem value={oIdx.toString()} id={`q${mcq.id}-${oIdx}`} className={cn(isCorrect && "border-success text-success", isSelectedWrong && "border-destructive text-destructive")} />
                                <Label htmlFor={`q${mcq.id}-${oIdx}`} className={cn("cursor-pointer flex-1 font-normal text-sm leading-relaxed", isCorrect && "text-success font-medium", isSelectedWrong && "text-destructive font-medium")}>{opt}</Label>
                              </div>
                            );
                          })}
                        </RadioGroup>
                      </div>
                    ))}
                    <div className="border-t border-border pt-8">
                      {!testSubmitted ? (
                        <Button onClick={submitTest} size="lg" className="w-full sm:w-auto">Submit Quiz</Button>
                      ) : (
                        <div className="rounded-xl border border-primary/20 bg-primary/10 p-8 text-center animate-in fade-in zoom-in duration-300">
                          <h3 className="text-3xl font-bold text-primary mb-2">Score: {testScore} / 10</h3>
                          <p className="text-muted-foreground">Thank you for completing the knowledge assessment.</p>
                          <Button variant="outline" className="mt-6" onClick={() => { setTestSubmitted(false); setTestAnswers({}); setTestScore(0); }}>Retake Quiz</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
