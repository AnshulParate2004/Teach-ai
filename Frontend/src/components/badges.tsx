import { cn } from "@/lib/utils";
import type { Difficulty } from "@/data/problems";

export function StatusPill({ status }: { status: "live" | "coming-soon" }) {
  const live = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
        live
          ? "border-success/30 bg-success/10 text-success"
          : "border-border bg-muted text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          live ? "bg-success" : "bg-muted-foreground/60",
        )}
      />
      {live ? "Live" : "Coming Soon"}
    </span>
  );
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const map: Record<Difficulty, string> = {
    Beginner: "border-success/30 bg-success/10 text-success",
    Intermediate: "border-warning/30 bg-warning/10 text-warning",
    Advanced: "border-destructive/30 bg-destructive/10 text-destructive",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-md border px-2 py-0.5 font-mono text-[11px]",
        map[level],
      )}
    >
      {level}
    </span>
  );
}

export function IndustryTag({
  industry,
  large = false,
}: {
  industry: string;
  large?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-primary/25 bg-primary/10 font-mono text-primary",
        large ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-[11px]",
      )}
    >
      {large ? `Industry: ${industry}` : industry}
    </span>
  );
}
