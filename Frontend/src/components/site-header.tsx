import { Link } from "@tanstack/react-router";
import { Hexagon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/hooks/use-auth";

export function SiteHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
            <Hexagon className="size-4" strokeWidth={2.4} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">SkillForge</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          <Link
            to="/domains/$slug"
            params={{ slug: "generative-ai" }}
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Problems
          </Link>
          <Link
            to="/dashboard"
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Dashboard
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <>
              <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                {user.email}
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Sign out"
                onClick={logout}
              >
                <LogOut className="size-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} SkillForge — real problems, AI-graded.</p>
        <p className="font-mono">solve locally · upload .ipynb · get feedback</p>
      </div>
    </footer>
  );
}
