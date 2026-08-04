import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Hexagon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/services/api";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/signup")({
  beforeLoad: ({ context }) => {
    const user = context.queryClient.getQueryData(["currentUser"]);
    if (user) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "Create an account — SkillForge" },
      {
        name: "description",
        content:
          "Create a free SkillForge account and start solving AI-graded industry problems.",
      },
      { property: "og:title", content: "Create an account — SkillForge" },
      {
        property: "og:description",
        content:
          "Create a free SkillForge account and start solving AI-graded industry problems.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-5 py-16">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[350px] translate-x-1/4 translate-y-1/4 rounded-[100%] bg-indigo-500/15 blur-[100px]" />
      </div>

      <div className="z-10 w-full max-w-sm rounded-2xl border border-white/5 bg-background/40 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-white/10 hover:shadow-[0_8px_50px_-12px_rgba(var(--primary),0.1)]">
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/20">
          <Hexagon className="size-6 drop-shadow-sm" strokeWidth={2} />
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">Create account</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Sign up to track your progress.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setPending(true);
            try {
              const user = await signUp(email, name, password);
              setUser(user);
              toast.success("Account created");
              navigate({ to: "/dashboard" });
            } catch (error: any) {
              toast.error(error.message || "Failed to sign up");
              setPending(false);
            }
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              placeholder="Ada Lovelace"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending && <Loader2 className="size-4 animate-spin" />} Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
