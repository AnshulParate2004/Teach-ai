import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, RotateCcw } from "lucide-react";
import { useState } from "react";
import { fetchSubmission, fetchGrade, statusOf } from "@/services/api";
import { ScoreRing } from "@/components/score-ring";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/submissions/$id/grade")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Grade report — SkillForge" },
      {
        name: "description",
        content: "Rubric breakdown and AI feedback for your submitted notebook.",
      },
      { property: "og:title", content: "Grade report — SkillForge" },
      {
        property: "og:description",
        content: "Rubric breakdown and AI feedback for your submitted notebook.",
      },
    ],
  }),
  component: GradePage,
});

function GradePage() {
  const { id } = Route.useParams();
  
  const { data, isLoading: isSubLoading } = useQuery({
    queryKey: ["submission", id],
    queryFn: () => fetchSubmission(id),
  });

  const { data: grade, isLoading: isGradeLoading } = useQuery({
    queryKey: ["grade", id],
    queryFn: () => fetchGrade(id),
  });

  const isLoading = isSubLoading || isGradeLoading;

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-5 py-24 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Loading grade report…
      </div>
    );
  }

  if (!data || !grade) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-xl font-semibold">Grade not ready yet</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {data
            ? `This submission is currently "${statusOf(data)}".`
            : "We couldn't find this submission."}
        </p>
        {data && (
          <Button className="mt-6" asChild>
            <Link to="/submissions/$id" params={{ id }}>
              Back to status
            </Link>
          </Button>
        )}
      </div>
    );
  }

  const pct = Math.round((grade.total / grade.max) * 100);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <span className="font-mono text-xs text-muted-foreground">{data.id}</span>
      <h1 className="mt-2 text-2xl font-semibold">{data.problemTitle}</h1>
      <p className="mt-1 font-mono text-xs text-muted-foreground">{data.fileName}</p>

      <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:gap-10">
        <ScoreRing score={grade.total} max={grade.max} />
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Total score
            </p>
            <span className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              pct >= 70 ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
            )}>
              {pct >= 70 ? "Passed" : "Not Passed"}
            </span>
          </div>
          <p className="mt-2 text-2xl font-semibold">
            {pct >= 85
              ? "Strong submission"
              : pct >= 70
                ? "Solid, with gaps to close"
                : "Needs another pass"}
          </p>
          <Progress value={pct} className="mt-4" />
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {pct}% against the rubric
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-lg font-semibold">Rubric breakdown</h2>
      <div className="mt-4 space-y-2">
        {grade.criteria.map((c) => (
          <CriterionRow
            key={c.name}
            name={c.name}
            score={c.score}
            max={c.max}
            comment={c.comment}
          />
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
          Overall AI feedback
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {grade.overall}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/portfolio">
            Try another problem
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/problems/$id" params={{ id: data.problem_id }}>
            <RotateCcw className="size-4" /> Retry this problem
          </Link>
        </Button>
      </div>
    </div>
  );
}

function CriterionRow({
  name,
  score,
  max,
  comment,
}: {
  name: string;
  score: number;
  max: number;
  comment: string;
}) {
  const [open, setOpen] = useState(false);
  const ratio = score / max;

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="rounded-xl border border-border bg-card"
    >
      <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 text-left">
        <span className="flex-1 text-sm font-medium">{name}</span>
        <span
          className={cn(
            "font-mono text-sm",
            ratio >= 0.85
              ? "text-success"
              : ratio >= 0.6
                ? "text-warning"
                : "text-destructive",
          )}
        >
          {score}/{max}
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="border-t border-border/70 p-4 text-sm leading-relaxed text-muted-foreground">
          {comment}
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
