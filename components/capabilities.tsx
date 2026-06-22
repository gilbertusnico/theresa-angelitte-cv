import {
  Boxes,
  CheckCircle2,
  GitBranch,
  Layers,
  LayoutGrid,
  MousePointerClick,
  Network,
  Puzzle,
  Search,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react"

const capabilities = [
  { icon: Search, label: "User Research" },
  { icon: Sparkles, label: "AI-Assisted Research" },
  { icon: Network, label: "User Journey Mapping" },
  { icon: GitBranch, label: "User Flow Development" },
  { icon: LayoutGrid, label: "Wireframing & Prototyping" },
  { icon: Boxes, label: "Design Systems" },
  { icon: MousePointerClick, label: "Micro Interaction Design" },
  { icon: Puzzle, label: "Component Libraries" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Layers, label: "Information Architecture" },
  { icon: CheckCircle2, label: "Design QA & Handoff" },
  { icon: Users, label: "Stakeholder Communication" },
  { icon: Workflow, label: "Agile Collaboration" },
  { icon: Puzzle, label: "Problem Solving" },
]

const aiTools = ["ChatGPT", "Claude", "Gemini", "Google Stitch", "HeyGen", "Dreamina", "Figma AI"]

export function Capabilities() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Capabilities */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <LayoutGrid className="h-4 w-4" aria-hidden="true" />
            Capabilities
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((c) => (
              <li key={c.label} className="flex items-start gap-2.5 text-sm text-foreground">
                <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-snug">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI workflow */}
        <div className="rounded-2xl border border-border bg-accent/40 p-6 shadow-sm sm:p-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            AI-Augmented Workflow
          </p>
          <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7">
            {aiTools.map((tool) => (
              <div key={tool} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background font-bold text-primary">
                  {tool.charAt(0)}
                </span>
                <span className="text-[11px] leading-tight text-muted-foreground">{tool}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Leveraging AI tools to accelerate research, ideation, content generation, prototyping, and design
            exploration.
          </p>
        </div>
      </div>
    </section>
  )
}
