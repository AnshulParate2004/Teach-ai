import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Flame, Loader2 } from "lucide-react";
import { fetchProgress, fetchSubmissions, statusOf } from "@/services/api";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/badges";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Your dashboard — SkillForge" },
      {
        name: "description",
        content: "Track domain progress, recent submissions and scores.",
      },
      { property: "og:title", content: "Your dashboard — SkillForge" },
      {
        property: "og:description",
        content: "Track domain progress, recent submissions and scores.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const progress = useQuery({ queryKey: ["progress"], queryFn: fetchProgress });
  const subs = useQuery({ queryKey: ["submissions"], queryFn: fetchSubmissions });

  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  const passedSubs = subs.data?.filter((s) => s.isPassed) || [];

  const days = last7Days.map(d => d.toLocaleDateString("en-US", { weekday: "narrow" }));
  const activity = last7Days.map(date => {
    if (!subs.data) return false;
    const dateStr = date.toDateString();
    return passedSubs.some(s => s.submittedAt && new Date(s.submittedAt).toDateString() === dateStr);
  });

  let currentStreak = 0;
  if (passedSubs.length > 0) {
    const datesWithActivity = new Set(
      passedSubs.map(s => s.submittedAt ? new Date(s.submittedAt).toDateString() : "")
    );
    let checkDate = new Date();
    if (!datesWithActivity.has(checkDate.toDateString())) {
      checkDate.setDate(checkDate.getDate() - 1);
    }
    while (datesWithActivity.has(checkDate.toDateString())) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Your progress across every SkillForge track.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-sm font-semibold">Progress by domain</h2>
          {progress.isLoading && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Loading…
            </p>
          )}
          {progress.data?.map((d) => (
            <div key={d.slug} className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm">{d.name}</span>
                <StatusPill status={d.status} />
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {d.solved}/{d.total} solved
                </span>
              </div>
              <Progress
                value={d.total ? (d.solved / d.total) * 100 : 0}
                className={cn(d.status !== "live" && "opacity-40")}
              />
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Flame className="size-4 text-primary" /> {currentStreak}-day streak
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {currentStreak === 0 ? "Solve a problem to start your streak!" : "Keep it going — one problem a day."}
          </p>
          <div className="mt-5 flex gap-2">
            {days.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <span
                  className={cn(
                    "h-10 w-full rounded-md",
                    activity[i] ? "bg-primary/70" : "bg-secondary",
                  )}
                />
                <span className="font-mono text-[10px] text-muted-foreground">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border/70 p-6">
          <h2 className="text-sm font-semibold">Recent submissions</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/domains/$slug" params={{ slug: "generative-ai" }}>
              New submission
            </Link>
          </Button>
        </div>
        <div className="divide-y divide-border/70">
          {subs.data?.length === 0 && (
            <p className="p-6 text-sm text-muted-foreground">No submissions yet.</p>
          )}
          {subs.data?.map((s) => {
            const status = statusOf(s);
            const grade: any = null; // Removed gradeOf because it doesn't exist
            return (
              <Link
                key={s.id}
                to={status === "complete" ? "/submissions/$id/grade" : "/submissions/$id"}
                params={{ id: s.id }}
                className="flex flex-wrap items-center gap-3 p-5 transition-colors hover:bg-secondary/40"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{s.problemTitle}</p>
                  <p className="truncate font-mono text-xs text-muted-foreground">
                    {s.fileName} ·{" "}
                    {new Date(s.submittedAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {status}
                </span>
                <span className="w-16 text-right font-mono text-sm">
                  {grade ? `${grade.total}/${grade.max}` : "—"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
