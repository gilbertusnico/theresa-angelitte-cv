import Image from "next/image"
import { ArrowRight, Mail, Phone, Send, Sparkles, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroStats = [
  { value: "7+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Enterprise Brands" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        {/* Left column */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Senior UI/UX Designer
          </span>

          <h1 className="mt-5 text-balance text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            THERESA
            <br />
            ANGELITTE
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Designing enterprise experiences that{" "}
            <span className="font-semibold text-primary">solve real problems,</span> drive impact, and scale with
            business.
          </p>

          <ul className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              theresaangelitte@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              +62 811 419 305
            </li>
            <li className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-primary" aria-hidden="true" />
              LinkedIn: Coming Soon
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#projects" />}
              nativeButton={false}
              size="lg"
              className="h-12 w-full justify-center gap-2 rounded-lg px-6 sm:w-52"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 w-full justify-center gap-2 rounded-lg bg-background px-6 sm:w-52"
            >
              Get In Touch
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Right column */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto flex max-w-md items-end justify-center">
            <div
              className="absolute inset-x-6 bottom-0 top-10 rounded-[2rem] bg-primary/10"
              aria-hidden="true"
            />
            <span
              className="absolute -left-3 top-1/3 z-20 hidden h-16 w-16 animate-float-soft items-center justify-center rounded-2xl bg-background shadow-lg shadow-primary/10 sm:flex lg:-left-6"
              aria-hidden="true"
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </span>
            <Image
              src="/theresa-portrait.png"
              alt="Portrait of Theresa Angelitte, Senior UI/UX Designer"
              width={520}
              height={620}
              priority
              className="relative z-10 h-auto w-full max-w-sm object-contain"
            />
          </div>

          {/* Floating stat cards */}
          <div className="relative z-30 mt-6 grid grid-cols-3 gap-3 sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:w-44 sm:-translate-y-1/2 sm:grid-cols-1 lg:-right-4">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                style={{ animationDelay: `${i * 0.6}s` }}
                className="rounded-xl border border-border bg-background p-3 text-center shadow-lg shadow-primary/5 sm:animate-float-soft sm:text-left"
              >
                <p className="text-xl font-extrabold text-primary sm:text-2xl">{s.value}</p>
                <p className="text-xs leading-tight text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
