import {
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  Languages as LanguagesIcon,
  Megaphone,
  Sparkles,
  TrendingUp,
} from "lucide-react"

const awards = [
  {
    title: "Best Employee",
    year: "2019",
    note: "Recognized for outstanding contribution, creativity, and commitment to project success.",
  },
  {
    title: "Best Employee",
    year: "2020",
    note: "Recognized for outstanding contribution, creativity, and commitment to project success.",
  },
]

const languages = [
  { name: "Bahasa Indonesia", level: "Native", dots: 5 },
  { name: "English", level: "Professional", dots: 4 },
]

const industries = [
  { icon: Building2, label: "Financial Services & Banking" },
  { icon: TrendingUp, label: "Manufacturing & Industrial" },
  { icon: Sparkles, label: "Entertainment, Hospitality & Consumer" },
  { icon: Briefcase, label: "Technology & Organizations" },
  { icon: Megaphone, label: "Marketing & Brand Communication" },
]

function CardShell({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  )
}

export function Credentials() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardShell icon={Award} label="Honors & Awards">
          <ul className="space-y-5">
            {awards.map((a) => (
              <li key={a.year} className="flex gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-bold text-foreground">
                    {a.title} <span className="font-medium text-muted-foreground">{a.year}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardShell>

        <CardShell icon={GraduationCap} label="Education">
          <p className="font-bold text-foreground">LaSalle College Jakarta</p>
          <p className="mt-3 font-serif text-2xl font-bold text-foreground">LaSalle</p>
          <p className="text-xs text-muted-foreground">College Jakarta</p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>Diploma 3</p>
            <p>Digital Media Design</p>
            <p>Graduated 2018</p>
          </div>
        </CardShell>

        <CardShell icon={LanguagesIcon} label="Languages">
          <ul className="space-y-5">
            {languages.map((l) => (
              <li key={l.name}>
                <p className="font-semibold text-foreground">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.level}</p>
                <div className="mt-2 flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full ${i < l.dots ? "bg-primary" : "bg-border"}`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </CardShell>

        <CardShell icon={Briefcase} label="Industry Experience">
          <ul className="space-y-3.5">
            {industries.map((i) => (
              <li key={i.label} className="flex items-start gap-2.5 text-sm text-foreground">
                <i.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-snug">{i.label}</span>
              </li>
            ))}
          </ul>
        </CardShell>
      </div>
    </section>
  )
}
