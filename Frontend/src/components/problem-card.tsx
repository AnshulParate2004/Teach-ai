import { Link } from "@tanstack/react-router";
import { Clock, Tag, Signal, Building2 } from "lucide-react";
import type { Problem } from "@/data/problems";

export function ProblemCard({ problem }: { problem: Problem }) {
  // Generate a predictable gradient based on the problem id or industry
  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-indigo-500 to-purple-500",
    "from-emerald-400 to-teal-500",
    "from-rose-400 to-orange-400",
    "from-amber-400 to-yellow-500",
    "from-fuchsia-500 to-pink-500",
    "from-sky-400 to-blue-500",
  ];
  
  // Use a simple hash of the title to pick a consistent gradient
  const hash = problem.title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradient = gradients[hash % gradients.length];

  return (
    <Link
      to="/problems/$id"
      params={{ id: problem.id }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Hero Header */}
      <div className={"relative h-[120px] w-full bg-gradient-to-br ${gradient}"}>
        {/* Soft fade at the bottom of the image area */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Logo / Company Area */}
      <div className="relative -mt-10 flex flex-col items-center justify-center px-4">
        {/* Fake Logo */}
        <div className="flex size-[60px] items-center justify-center rounded-xl bg-card shadow-sm border border-border">
          <span className="text-2xl font-bold text-primary">
            {problem.company ? problem.company.charAt(0) : "S"}
          </span>
        </div>
        <h4 className="mt-4 text-[13px] font-semibold tracking-wide text-foreground/80">
          {problem.company || "SkillForge"}
        </h4>
      </div>

      {/* Title */}
      <div className="flex grow flex-col items-center justify-start px-6 pb-6 pt-2">
        <h3 className="mb-5 text-[17px] font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {problem.title}
        </h3>

        {/* Tags */}
        <div className="mt-auto flex w-full flex-col items-center gap-2.5 text-[12.5px] text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Tag className="size-3.5 opacity-70" />
              {problem.industry}
            </span>
            <span className="flex items-center gap-1.5">
              <Signal className="size-3.5 opacity-70" />
              {problem.difficulty}
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 opacity-70" />
            {problem.estimatedTime || "3-4 hours"}
          </span>
        </div>
      </div>
    </Link>
  );
}
