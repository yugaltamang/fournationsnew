// Hero now showcases an editorial world map plotting the 4 nations

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">Post Graduate Program</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four <span className="font-mono text-[0.4em] align-top text-muted-foreground">/04</span> cities.
          <br />
          <span className="block mt-4 text-[0.6em] leading-[1.15] text-foreground/90 font-normal italic">
            Infinite reasons to say<br />
            <span className="not-italic font-medium">"when I was in <span className="mu-hero-underline whitespace-nowrap">Hong Kong</span>…"</span>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale. Four nations, four cultures, four markets — one operator who can read all of them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
          {[
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "10+", l: "CXO Masterclasses" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="relative">
          {/* Editorial world map with 4 plotted nations */}
          <div className="relative w-full aspect-[3/4] bg-card border border-border overflow-hidden">
            <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />

            {/* Map label */}
            <div className="absolute top-5 left-5 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <div>Atlas / 2026</div>
              <div className="text-primary mt-1">◉ Four Nations · One Cohort</div>
            </div>
            <div className="absolute top-5 right-5 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right">
              <div>Lat / Lon</div>
              <div className="text-foreground mt-1">28°N · 77°E →</div>
            </div>

            <svg
              viewBox="0 0 600 800"
              className="absolute inset-0 w-full h-full"
              role="img"
              aria-label="World map plotting India, Hong Kong, London and Dubai"
            >
              <defs>
                <linearGradient id="muLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#39B5D7" />
                  <stop offset="50%" stopColor="#F7D544" />
                  <stop offset="100%" stopColor="#E38330" />
                </linearGradient>
                <radialGradient id="muDot" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#F7D544" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F7D544" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Stylised continents — abstract editorial blobs */}
              <g fill="hsl(var(--muted))" opacity="0.55">
                {/* Europe */}
                <path d="M210,250 q20,-25 55,-22 q35,3 50,18 q15,15 5,35 q-12,22 -50,25 q-40,3 -55,-15 q-15,-18 -5,-41 z" />
                {/* Africa */}
                <path d="M255,330 q35,-10 60,10 q20,20 15,55 q-5,40 -30,70 q-25,30 -50,15 q-25,-15 -25,-65 q0,-55 30,-85 z" />
                {/* Middle East */}
                <path d="M310,310 q25,-5 45,10 q15,15 5,35 q-12,22 -40,22 q-28,0 -32,-22 q-3,-25 22,-45 z" />
                {/* India / South Asia */}
                <path d="M380,330 q22,-8 38,8 q14,16 8,42 q-8,28 -32,38 q-22,10 -32,-12 q-12,-25 -8,-48 q4,-22 26,-28 z" />
                {/* SE Asia / China */}
                <path d="M420,260 q40,-15 75,5 q30,18 28,55 q-3,40 -42,55 q-45,15 -70,-12 q-25,-28 -18,-60 q5,-30 27,-43 z" />
                {/* Australia hint */}
                <path d="M470,560 q30,-8 50,8 q15,15 5,35 q-12,22 -45,22 q-30,0 -32,-25 q-3,-25 22,-40 z" />
              </g>

              {/* Connection lines — sequential journey */}
              <g
                fill="none"
                stroke="url(#muLine)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.85"
              >
                {/* India → Hong Kong */}
                <path d="M408,378 Q470,330 478,300" />
                {/* Hong Kong → London */}
                <path d="M478,300 Q380,150 245,265" />
                {/* London → Dubai */}
                <path d="M245,265 Q310,310 360,345" />
                {/* Dubai → India (close loop, dotted lighter) */}
                <path d="M360,345 Q385,360 408,378" opacity="0.5" />
              </g>

              {/* Glow halos */}
              <g>
                <circle cx="408" cy="378" r="40" fill="url(#muDot)" />
                <circle cx="478" cy="300" r="40" fill="url(#muDot)" />
                <circle cx="245" cy="265" r="40" fill="url(#muDot)" />
                <circle cx="360" cy="345" r="40" fill="url(#muDot)" />
              </g>

              {/* Plotted nations */}
              {[
                { x: 245, y: 265, n: "03", label: "London", sub: "Imperial" },
                { x: 360, y: 345, n: "04", label: "Dubai", sub: "DIFC" },
                { x: 408, y: 378, n: "01", label: "India", sub: "Delhi NCR" },
                { x: 478, y: 300, n: "02", label: "Hong Kong", sub: "CUHK" },
              ].map((p) => (
                <g key={p.label}>
                  <circle cx={p.x} cy={p.y} r="6" fill="hsl(var(--primary))" />
                  <circle cx={p.x} cy={p.y} r="11" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
                  <line x1={p.x} y1={p.y} x2={p.x + 18} y2={p.y - 18} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                  <text
                    x={p.x + 22}
                    y={p.y - 22}
                    fill="hsl(var(--foreground))"
                    fontFamily="Fraunces, serif"
                    fontSize="18"
                    fontWeight="500"
                  >
                    {p.label}
                  </text>
                  <text
                    x={p.x + 22}
                    y={p.y - 8}
                    fill="hsl(var(--muted-foreground))"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="9"
                    letterSpacing="2"
                  >
                    /{p.n} · {p.sub.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>

            {/* Bottom legend */}
            <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Sequential Journey</span>
              <span className="text-foreground">11 Months</span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2 mu-hero-gradient" />
          <div className="absolute -bottom-6 -left-6 bg-background border border-border text-foreground p-5 max-w-[260px] shadow-bold">
            <div className="font-mono text-xs uppercase tracking-widest mb-1 text-muted-foreground">The Outcome</div>
            <div className="font-display text-xl leading-tight">A professional who is fluent in four economies, not one.</div>
          </div>
          <div className="absolute -top-4 -right-4 border border-primary bg-background/80 backdrop-blur px-4 py-2 font-mono text-xs uppercase tracking-widest">
            ◉ India → HK → London → Dubai
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
