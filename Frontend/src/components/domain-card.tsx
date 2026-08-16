import { Link } from "@tanstack/react-router";
import { Lock, Sparkles, BarChart3, Atom, Blocks, ArrowRight, Briefcase, Heart, Megaphone, Palette, Landmark, Leaf, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Domain } from "@/data/domains";
import { StatusPill } from "@/components/badges";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { requestNotify } from "@/services/api";

const icons = {
  sparkles: Sparkles,
  chart: BarChart3,
  atom: Atom,
  blocks: Blocks,
  briefcase: Briefcase,
  heart: Heart,
  megaphone: Megaphone,
  palette: Palette,
  landmark: Landmark,
  leaf: Leaf,
  users: Users,
};

export function DomainCard({ domain }: { domain: Domain }) {
  const Icon = icons[domain.icon];
  const live = domain.status === "live";

  const body = (
    <div className="flex h-full flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          className={
            live
              ? "grid size-10 place-items-center rounded-xl bg-primary/15 text-primary"
              : "grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground"
          }
        >
          <Icon className="size-5" />
        </span>
        <StatusPill status={domain.status} />
      </div>

      <div className="space-y-2">
        <h3 className="flex items-center gap-2 text-base font-semibold">
          {domain.name}
          {!live && <Lock className="size-3.5 text-muted-foreground" />}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {domain.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {domain.topics.map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/70 pt-4">
        <span className="font-mono text-xs text-muted-foreground">
          {domain.problemCount} problems
        </span>
        {live ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            Start solving <ArrowRight className="size-3.5" />
          </span>
        ) : (
          <NotifyDialog domain={domain} />
        )}
      </div>
    </div>
  );

  const shell =
    "group relative h-full rounded-2xl border bg-card transition-all duration-200";

  if (live) {
    return (
      <Link
        to="/domains/$slug"
        params={{ slug: domain.slug }}
        className={`${shell} border-border hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]`}
      >
        {body}
      </Link>
    );
  }

  return <div className={`${shell} border-border/70 bg-surface`}>{body}</div>;
}

function NotifyDialog({ domain }: { domain: Domain }) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="h-7 text-xs">
          Notify me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Get notified — {domain.name}</DialogTitle>
          <DialogDescription>
            We'll email you once this track goes live with all{" "}
            {domain.problemCount} problems.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setPending(true);
            await requestNotify(domain.slug, email);
            setPending(false);
            setOpen(false);
            setEmail("");
            toast.success("You're on the waitlist", {
              description: `We'll ping you when ${domain.name} opens up.`,
            });
          }}
        >
          <Input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Adding you…" : "Join the waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
