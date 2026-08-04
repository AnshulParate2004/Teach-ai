import { Link } from "@tanstack/react-router";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import type { Problem } from "@/data/problems";
import { DifficultyBadge, IndustryTag } from "@/components/badges";

export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Link
      to="/problems/$id"
      params={{ id: problem.id }}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] text-muted-foreground">
          {problem.id}
        </span>
        {problem.solved ? (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-success">
            <CheckCircle2 className="size-3.5" /> Solved
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
            <Circle className="size-3.5" /> Unsolved
          </span>
        )}
      </div>

      <h3 className="text-[15px] font-semibold leading-snug transition-colors group-hover:text-primary">
        {problem.title}
      </h3>

      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {problem.problem_statement}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <IndustryTag industry={problem.industry} />
        <DifficultyBadge level={problem.difficulty} />
        <span className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
          <Clock className="size-3" /> {problem.estimatedTime}
        </span>
      </div>
    </Link>
  );
}
