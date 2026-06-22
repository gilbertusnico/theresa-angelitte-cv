import { Building2, CalendarDays, Layers, Trophy, Users } from "lucide-react"

const stats = [
  { icon: CalendarDays, value: "7+", label: "Years Experience" },
  { icon: Layers, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "10–20", label: "Stakeholders / Project — Cross-functional Collaboration" },
  { icon: Building2, value: "15+", label: "Enterprise Brands Worked With" },
  { icon: Trophy, value: "2×", label: "Best Employee Award 2019 & 2020" },
]

export function StatsBar() {
  return (
    <section className="mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-3 sm:p-6 lg:grid-cols-5 lg:gap-2">
        {stats.map((s) => (
          <div key={s.label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-none text-foreground sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs leading-tight text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
