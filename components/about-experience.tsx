import { Briefcase, Globe, MapPin } from "lucide-react"

const timeline = [
  {
    period: "Aug 2023 – Present",
    company: "LOGIQUE",
    role: "Senior UI/UX Designer",
    description:
      "Lead digital experience initiatives across enterprise websites, mobile applications, web systems, and digital campaigns for clients across banking, manufacturing, hospitality, entertainment, retail, and technology sectors.",
    tags: ["Enterprise Websites", "Mobile Apps", "AI-Assisted Design", "Stakeholder Management"],
  },
  {
    period: "Nov 2019 – Aug 2023",
    company: "LOGIQUE",
    role: "UI/UX Designer",
    description:
      "Owned end-to-end design execution across responsive websites, web systems, mobile applications, and digital platforms for enterprise and commercial clients.",
    tags: ["UX Research", "Wireframing & Prototyping", "Design Systems", "User Journey Mapping"],
  },
]

const availability = [
  { icon: MapPin, text: "Based in Jakarta, Indonesia" },
  { icon: Briefcase, text: "Open to exciting opportunities" },
  { icon: Globe, text: "Available for collaborations" },
]

export function AboutExperience() {
  return (
    <section id="about" className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* About */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">About Me</p>
          <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            I design with purpose and impact.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              With 7+ years of experience, I help organizations across banking, manufacturing, hospitality, technology,
              and entertainment build digital products that are user-centered, business-driven, and future-ready.
            </p>
            <p>
              I thrive in cross-functional environments, leading design initiatives from discovery to launch while
              managing multiple projects and stakeholders.
            </p>
          </div>

          <p className="mt-6 font-serif text-3xl italic text-primary">Theresa</p>

          <ul className="mt-5 space-y-3">
            {availability.map((a) => (
              <li key={a.text} className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary">
                  <a.icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {a.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience timeline */}
        <div id="experience">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Experience Timeline</p>
          <ol className="mt-6 space-y-10 border-l-2 border-border pl-6">
            {timeline.map((item) => (
              <li key={item.period} className="relative">
                <span
                  className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{item.company}</h3>
                <p className="font-semibold text-primary">{item.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
