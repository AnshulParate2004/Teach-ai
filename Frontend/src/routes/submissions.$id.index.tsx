import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, Check, Loader2 } from "lucide-react";
import {
  fetchSubmission,
  statusOf,
  type SubmissionStatus,
} from "@/services/api";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/submissions/$id/")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Submission status — SkillForge" },
      {
        name: "description",
        content: "Track your notebook through execution and AI grading.",
      },
      { property: "og:title", content: "Submission status — SkillForge" },
      {
        property: "og:description",
        content: "Track your notebook through execution and AI grading.",
      },
    ],
  }),
  component: SubmissionStatusPage,
});

const STEPS: { key: SubmissionStatus; label: string; note: string }[] = [
  { key: "uploaded", label: "Uploaded", note: "Notebook received and validated." },
  {
    key: "running",
    label: "Running",
    note: "Running your notebook in a sandboxed environment…",
  },
  {
    key: "grading",
    label: "AI Grading",
    note: "AI is reviewing your solution against the rubric…",
  },
  { key: "complete", label: "Complete", note: "Your grade report is ready." },
];

function SubmissionStatusPage() {
  const { id } = Route.useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["submission", id],
    queryFn: () => fetchSubmission(id),
    refetchInterval: (q) => {
      const sub = q.state.data;
      if (!sub) return 2000;
      const s = statusOf(sub);
      return s === "complete" || s === "failed" ? false : 1500;
    },
  });

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-5 py-24 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Loading submission…
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-xl font-semibold">Submission not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          It may have been cleared from this browser.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/domains/$slug" params={{ slug: "generative-ai" }}>
            Browse problems
          </Link>
        </Button>
      </div>
    );
  }

  const status = statusOf(data);
  const activeIndex = STEPS.findIndex((s) => s.key === status);
  const failed = status === "failed";

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <span className="font-mono text-xs text-muted-foreground">{data.id}</span>
      <h1 className="mt-2 text-2xl font-semibold">{data.problemTitle}</h1>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        {data.fileName} · submitted{" "}
        {new Date(data.submittedAt).toLocaleString(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </p>

      <ol className="mt-10 space-y-1">
        {STEPS.map((step, i) => {
          const done = !failed && i < activeIndex;
          const active = !failed && i === activeIndex;
          return (
            <li key={step.key} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-full border text-xs transition-colors",
                    done && "border-success/40 bg-success/15 text-success",
                    active && "border-primary/50 bg-primary/15 text-primary",
                    !done && !active && "border-border bg-card text-muted-foreground",
                  )}
                >
                  {done ? (
                    <Check className="size-4" />
                  ) : active ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <span className="font-mono">{i + 1}</span>
                  )}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={cn(
                      "my-1 w-px flex-1",
                      done ? "bg-success/40" : "bg-border",
                    )}
                  />
                )}
              </div>
              <div className="pb-8">
                <p
                  className={cn(
                    "text-sm font-medium",
                    !done && !active && "text-muted-foreground",
                  )}
                >
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{step.note}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {failed && (
        <div className="rounded-xl border border-destructive/35 bg-destructive/10 p-5">
          <p className="flex items-center gap-2 text-sm font-medium text-destructive">
            <AlertTriangle className="size-4" /> Notebook execution failed
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-background/60 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
            {data.errorLog ??
              "Traceback (most recent call last):\n  Cell [4], line 12\n    chain.invoke({\"topic\": topic})\nModuleNotFoundError: No module named 'langchain_openai'"}
          </pre>
        </div>
      )}

      {status === "complete" && (
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/submissions/$id/grade" params={{ id: data.id }}>
              View grade report
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/domains/$slug" params={{ slug: "generative-ai" }}>
              Try another problem
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
