import { createFileRoute, notFound, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { getProblem, type Problem } from "@/data/problems";
import { DifficultyBadge, IndustryTag } from "@/components/badges";
import { UploadZone } from "@/components/upload-zone";
import { Button } from "@/components/ui/button";
import { createSubmission } from "@/services/api";

export const Route = createFileRoute("/problems/$id")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  loader: ({ params }) => {
    const problem = getProblem(params.id);
    if (!problem) throw notFound();
    return { problem };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Problem unavailable — SkillForge" },
          { name: "robots", content: "noindex" },
        ],
      };
    const p = loaderData.problem;
    const title = `${p.title} — SkillForge`;
    return {
      meta: [
        { title },
        { name: "description", content: p.problem_statement },
        { property: "og:title", content: title },
        { property: "og:description", content: p.problem_statement },
      ],
    };
  },
  component: ProblemPage,
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function List({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-2.5">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 font-mono text-xs text-primary/70">
            {ordered ? `${i + 1}.` : "—"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

function ProblemPage() {
  const { problem } = Route.useLoaderData() as { problem: Problem };
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    if (!file) return;
    setSubmitting(true);
    try {
      const sub = await createSubmission({
        problemId: problem.id,
        file,
      });
      toast.success("Notebook uploaded", { description: "Grading pipeline started." });
      navigate({ to: "/submissions/$id", params: { id: sub.id } });
    } catch (err: any) {
      toast.error("Upload failed", { description: err.message || "An error occurred" });
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link
        to="/domains/$slug"
        params={{ slug: problem.domain }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Back to problems
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">{problem.id}</span>
        <IndustryTag industry={problem.industry} large />
        <DifficultyBadge level={problem.difficulty} />
        <span className="font-mono text-[11px] text-muted-foreground">
          ~{problem.estimatedTime}
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-semibold leading-tight">{problem.title}</h1>

      <div className="mt-8 space-y-5">
        <Section title="Problem Statement">
          <p className="text-foreground/90">{problem.problem_statement}</p>
          <p className="mt-3">{problem.task}</p>
        </Section>

        <Section title="What You'll Learn">
          <List items={problem.learn} />
        </Section>

        <Section title="Task & Expected Outcome">
          <List items={problem.expectedOutcome} />
        </Section>

        <Section title="Tools You Can Use">
          <div className="flex flex-wrap gap-2">
            {problem.tools.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Steps to Follow">
          <List items={problem.steps} ordered />
        </Section>

        <Section title="Knowledge Test">
          <List items={problem.knowledgeTest} ordered />
        </Section>

        {problem.dataset && (
          <Section title="Dataset">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <p className="font-mono text-sm text-foreground">
                  {problem.dataset.fileName}
                </p>
                <p className="font-mono text-xs">{problem.dataset.size}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="ml-auto"
                onClick={() =>
                  toast.info("Dataset download", {
                    description: "Wired to the backend in a later milestone.",
                  })
                }
              >
                <Download className="size-4" /> Download dataset
              </Button>
            </div>
          </Section>
        )}

        <Section title="Submission Instructions">
          <List items={problem.submissionInstructions} />
        </Section>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold">Submit your solution</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Upload the final executed notebook. We run it in a sandbox and grade it
          against the rubric.
        </p>
        <div className="mt-5">
          <UploadZone file={file} onFile={setFile} onClear={() => setFile(null)} />
        </div>
        <Button
          className="mt-5 w-full sm:w-auto"
          disabled={!file || submitting}
          onClick={submit}
        >
          {submitting && <Loader2 className="size-4 animate-spin" />}
          {submitting ? "Uploading…" : "Submit for Grading"}
        </Button>
      </div>
    </div>
  );
}
