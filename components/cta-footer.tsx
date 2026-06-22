import { Globe, Mail, Phone, Send, UserRound } from "lucide-react"

const contactInfo = [
  { icon: Mail, text: "theresaangelitte@gmail.com" },
  { icon: Phone, text: "+62 811 419 305" },
  { icon: UserRound, text: "LinkedIn: Coming Soon" },
  { icon: Globe, text: "Portfolio: Coming Soon" },
]

export function CtaFooter() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-10 text-background sm:px-10 lg:px-14 lg:py-14">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center">
            <div>
              <h2 className="text-pretty text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Let&apos;s build digital experiences that{" "}
                <span className="text-primary">matter.</span>
              </h2>
              <p className="mt-3 text-sm text-background/70">
                I&apos;m open to exciting opportunities and collaborations.
              </p>
            </div>

            <ul className="space-y-3 lg:border-l lg:border-background/15 lg:pl-10">
              {contactInfo.map((c) => (
                <li key={c.text} className="flex items-center gap-3 text-sm text-background/85">
                  <c.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {c.text}
                </li>
              ))}
            </ul>

            <a
              href="mailto:theresaangelitte@gmail.com"
              className="flex h-20 w-20 items-center justify-center justify-self-start rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 lg:justify-self-center"
              aria-label="Send an email to Theresa"
            >
              <Send className="h-7 w-7" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">© 2024 Theresa Angelitte. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            I design experiences that connect, communicate, and create impact.
          </p>
          <div className="flex items-center gap-3">
            {[UserRound, Globe, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
