import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { domains } from "@/data/domains";
import { Search, Filter, Loader2, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProblems, Problem } from "@/services/api";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Top 20 Virtual Internship Portfolio — Skillzza" },
      { name: "description", content: "Explore the Top 20 Virtual Internships by Skillzza." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  // Fetch problems dynamically from the database
  const { data: problems = [], isLoading: problemsLoading } = useQuery<Problem[]>({
    queryKey: ["problems"],
    queryFn: () => fetchProblems(),
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate({ to: "/login", search: { redirect: "/portfolio" } });
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Lock className="size-6" />
        </div>
        <h2 className="text-2xl font-bold">Authentication Required</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please sign in or create an account to view and participate in virtual internships.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link to="/login" search={{ redirect: "/portfolio" }}>
              Sign in
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/signup">Create account</Link>
          </Button>
        </div>
      </div>
    );
  }

  const filtered = problems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.industry || "").toLowerCase().includes(search.toLowerCase()) ||
      (item.company || "").toLowerCase().includes(search.toLowerCase());
    
    const matchesDomain = selectedDomain === "all" || item.domain === selectedDomain;

    return matchesSearch && matchesDomain;
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Skillzza — Top 20 Virtual Internship Portfolio</h1>
        <p className="text-muted-foreground text-lg">Browse our highly curated list of 20 industry-aligned Generative AI simulations.</p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search internships or companies..."
            className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="relative w-full sm:w-auto">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="w-full sm:w-auto appearance-none rounded-md border border-input bg-background py-2 pl-9 pr-8 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="all">All Domains (Sort)</option>
            {domains.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden overflow-x-auto">
        {problemsLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="size-6 animate-spin text-primary mr-2" />
            <span className="text-sm text-muted-foreground">Loading internships from database...</span>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Virtual Internship</th>
                <th className="px-4 py-3 font-medium">Domain</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Level</th>
                <th className="px-4 py-3 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((item, index) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    <Link 
                      to="/problems/$id" 
                      params={{ id: item.id }}
                      className="hover:underline hover:text-primary transition-colors text-primary font-semibold"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.industry}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.company}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.difficulty}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.estimatedTime}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    No internships found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
