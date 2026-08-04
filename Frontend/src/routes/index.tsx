import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileUp, Gauge, Laptop, MousePointerClick } from "lucide-react";
import { domains } from "@/data/domains";
import { DomainCard } from "@/components/domain-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillForge — Real industry problems, AI-graded" },
      {
        name: "description",
        content:
          "Pick a real industry problem, solve it locally or in Colab, upload your notebook and get AI-graded rubric feedback in minutes.",
      },
      { property: "og:title", content: "SkillForge — Real industry problems, AI-graded" },
      {
        property: "og:description",
        content:
          "Pick a problem, solve it your way, upload your notebook, get instant AI-graded feedback.",
      },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: MousePointerClick,
    title: "Pick a problem",
    body: "Choose from real, industry-flavored briefs across healthcare, banking, insurance and more.",
  },
  {
    icon: Laptop,
    title: "Solve it your way",
    body: "Work locally or in Google Colab. No in-browser IDE, no constraints on how you build.",
  },
  {
    icon: FileUp,
    title: "Upload your notebook",
    body: "Drag in your final .ipynb. We execute it in a sandboxed environment.",
  },
  {
    icon: Gauge,
    title: "Get AI-graded feedback",
    body: "A rubric-based score with per-criterion comments and concrete next steps.",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary">
            Generative & Agentic AI · Live
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Real industry problems.
            <br />
            <span className="text-primary">AI-graded</span> feedback in minutes.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Solve production-shaped engineering problems on your own machine, upload
            your notebook, and get a rubric-based review of how your solution actually
            holds up.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link to="/domains/$slug" params={{ slug: "generative-ai" }}>
                Browse problems <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/dashboard">View dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold">Domains</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              One track is live today. Three more are in the forge.
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {domains.length} tracks · {domains.reduce((s, d) => s + d.problemCount, 0)}{" "}
            problems planned
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((d) => (
            <DomainCard key={d.slug} domain={d} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
