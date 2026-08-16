import { createFileRoute, notFound, Link, redirect } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchSubmissions } from "@/services/api";
import { getDomain, type Domain } from "@/data/domains";
import { problemsByDomain, type Problem } from "@/data/problems";
import { ProblemCard } from "@/components/problem-card";
import { StatusPill } from "@/components/badges";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/domains/$slug")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  loader: ({ params }) => {
    const domain = getDomain(params.slug);
    if (!domain || domain.status !== "live") throw notFound();
    return { domain, problems: problemsByDomain(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Domain unavailable — SkillForge" },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${loaderData.domain.name} problems — SkillForge`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.domain.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.domain.description },
      ],
    };
  },
  component: DomainPage,
});

function DomainPage() {
  const { domain, problems } = Route.useLoaderData() as {
    domain: Domain;
    problems: Problem[];
  };
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string | null>(null);

  const industries = useMemo(
    () => Array.from(new Set(problems.map((p) => p.industry))).sort(),
    [problems],
  );

  const { data: subs } = useQuery({ queryKey: ["submissions"], queryFn: fetchSubmissions });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    
    // Create a Set of problem numbers (slugs) that have a passing submission
    const passedProblemIds = new Set(
      subs?.filter(s => s.isPassed).map(s => s.problemNumber || s.problem_id) || []
    );

    return problems.map(p => ({
      ...p,
      solved: passedProblemIds.has(p.id)
    })).filter((p) => {
      const matchesIndustry = !industry || p.industry === industry;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.problem_statement.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.industry.toLowerCase().includes(q);
      return matchesIndustry && matchesQuery;
    });
  }, [problems, query, industry, subs]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> All domains
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold">{domain.name}</h1>
        <StatusPill status={domain.status} />
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {domain.description}
      </p>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        {problems.length} problem{problems.length === 1 ? "" : "s"} published
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword, tag or industry…"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <FilterChip active={!industry} onClick={() => setIndustry(null)}>
            All
          </FilterChip>
          {industries.map((i) => (
            <FilterChip
              key={i}
              active={industry === i}
              onClick={() => setIndustry(i)}
            >
              {i}
            </FilterChip>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-muted-foreground">
            No problems match those filters.
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-4"
            onClick={() => {
              setQuery("");
              setIndustry(null);
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
        active
          ? "border-primary/40 bg-primary/15 text-primary"
          : "border-border bg-card text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
