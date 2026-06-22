import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "JKT48",
    description: "Website Redesign & Voting Platform",
    image: "/project-jkt48.png",
  },
  {
    title: "JBA INDONESIA",
    description: "Corporate Website & Mobile App",
    image: "/project-jba.png",
  },
  {
    title: "MIURA ASEAN",
    description: "Enterprise Website",
    image: "/project-miura.png",
  },
]

export function SelectedWork() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Selected Work</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Crafting Impactful Digital Experiences
          </h2>
        </div>
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <span className="text-sm font-medium text-muted-foreground">01 / 07</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary"
              aria-label="Next projects"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`${p.title} — ${p.description}`}
                width={640}
                height={480}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
