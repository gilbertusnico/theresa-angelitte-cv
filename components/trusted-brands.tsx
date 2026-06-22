const brands = [
  { name: "ZURICH", sub: "Insurance" },
  { name: "JTrust Bank", sub: "Indonesia" },
  { name: "Hino Finance", sub: "Indonesia" },
  { name: "JKT48", sub: "Indonesia" },
  { name: "Auksi", sub: "MPM" },
  { name: "MIURA", sub: "ASEAN" },
  { name: "YKK AP", sub: "Indonesia" },
  { name: "AJINOMOTO", sub: "Indonesia" },
  { name: "BUMA", sub: "BUMA" },
]

export function TrustedBrands() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Trusted by brands from multiple industries
        </p>
        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
          {brands.map((b) => (
            <div key={b.name} className="text-center">
              <p className="text-base font-extrabold tracking-tight text-foreground">{b.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
