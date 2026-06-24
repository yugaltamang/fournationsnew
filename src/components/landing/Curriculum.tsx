import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── data types ─── */
interface AccItem { num: string; code?: string; title: string; rows: string[]; topics?: string }
interface SubPanel { label: string; hero: { chip: string; title: string; body: string; img: string }; items: AccItem[] }
interface CulturalPanel { chip: string; title: string; body: string; cards: { name: string; desc: string }[]; note?: string; imgs: [string, string] }
interface ImmersionPanel { header: { title: string; body: string; note?: { title: string; desc: string } }; cards: { img: string; cat: string; title: string; desc: string; logos: string }[] }

interface Term {
  id: number; flag: string; label: string; bannerGrad: string; bannerFlag: string;
  outcomeLabel: string; outcome: string; outcomeSub: string;
  academic: SubPanel; outclass: SubPanel; immersions?: ImmersionPanel; cultural?: CulturalPanel;
  isDubai?: boolean;
}

export const terms: Term[] = [
  /* ── INDIA ── */
  {
    id: 0, flag: "🇮🇳", label: "Term 1 · India",
    bannerGrad: "linear-gradient(135deg,#ff9933 0%,#138808 100%)", bannerFlag: "🇮🇳",
    outcomeLabel: "Learning Outcome", outcome: "Be Entrepreneurship Ready.",
    outcomeSub: "Build, launch and validate a real business - Finance, Product, Marketing, Operations & AI",
    academic: {
      label: "In Class",
      hero: { chip: "February – May · India", title: "Term 1 - India", body: "Term 1 builds a <strong>strong entrepreneurial foundation</strong> - moving you from idea to execution with <strong>speed, clarity, and discipline</strong>, across finance, product, validation, and operations.", img: "https://images.mastersunion.link/uploads/26032026/v1/Hero1.webp" },
      items: [
        { num: "FIFI", code: "Finance & Fintech", title: "How to read and analyse financial statements?", rows: ["How to read and analyse financial statements?"] },
        { num: "FIFI", code: "Finance & Fintech", title: "How to build financial models & value companies?", rows: ["How to build financial models & value companies?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to build GTM & pricing strategies that drive growth?", rows: ["How to build GTM & pricing strategies that drive growth?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to position your brand using consumer psychology & behavior?", rows: ["How to position your brand using consumer psychology & behavior?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to analyse markets & identify new business opportunities?", rows: ["How to analyse markets & identify new business opportunities?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to craft a distinct brand story, voice & identity?", rows: ["How to craft a distinct brand story, voice & identity?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to Sell by Solving, Not Just Pitching?", rows: ["How to Sell by Solving, Not Just Pitching?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to decode global economic signals & predict business shifts?", rows: ["How to decode global economic signals & predict business shifts?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to think strategically about your business?", rows: ["How to think strategically about your business?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How to build intelligent business dashboards using Excel and AI?", rows: ["How to build intelligent business dashboards using Excel and AI?"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · India", title: "Beyond the Classroom", body: "Out Class sessions take learning outside campus walls - into the field, the boardroom, and the street. Every session bridges <strong>theory and real-world practice</strong> through direct exposure.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How do you identify and validate a high-potential D2C opportunity?", rows: ["Spotting white spaces in consumer markets - demand signals, category gaps, and unmet needs", "Frameworks for rapid opportunity validation before you invest time or capital", "Building a business case: TAM, competitive landscape, and entry timing"] },
        { num: "02", title: "How do you select the right product and build profitable unit economics?", rows: ["Product selection criteria - margin, repeat purchase potential, and differentiation", "Sourcing strategies: domestic vs import, MOQs, and supplier evaluation", "Unit economics fundamentals - COGS, contribution margin, and CAC payback"] },
        { num: "03", title: "How do you define a differentiated brand strategy that resonates with your audience?", rows: ["Brand strategy frameworks - positioning, archetype, and category narrative", "Defining your ICP and crafting a value proposition that converts", "Competitive positioning maps and differentiation levers in crowded categories"] },
        { num: "04", title: "How do you create a compelling brand identity and packaging?", rows: ["Visual identity systems - logo, colour, typography, and tone of voice", "Packaging as a marketing tool - unboxing experience and shelf/screen standout", "Brand consistency across touchpoints - from product to social to paid ads"] },
        { num: "05", title: "How do you build a high-converting D2C website on Shopify?", rows: ["Shopify store setup - theme selection, product pages, and conversion optimisation", "UX principles for e-commerce - reducing friction from landing to checkout", "Essential apps and integrations for inventory, reviews, and retention"] },
        { num: "06", title: "How do you successfully launch and scale your brand on online marketplaces?", rows: ["Amazon, Flipkart, and Meesho - platform dynamics, ranking algorithms, and listing strategy", "Marketplace vs owned channel - when to use each and how to balance both", "Reviews, ratings, and the flywheel that drives marketplace growth"] },
        { num: "07", title: "How do you acquire customers efficiently through performance marketing?", rows: ["Meta and Google Ads fundamentals - campaign structure, targeting, and creative strategy", "CAC optimisation - improving ROAS and reducing blended acquisition cost", "Attribution models and reading your performance dashboard"] },
      ],
    },
    immersions: {
      header: { title: "Inside India's most iconic companies.", body: "Company visits will be selected from the list below, finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop", cat: "Manufacturing & Industrial", title: "India's Industrial Powerhouses", desc: "Walk the floors of India's most scaled manufacturers and operators.", logos: "Addverb · ITC Limited · Sonalika Tractors · Honda" },
        { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80&fit=crop", cat: "D2C", title: "Built in India, Drunk Globally", desc: "Inside a home-grown D2C brand that scaled coffee culture across the country.", logos: "Blue Tokai" },
        { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop", cat: "Logistics & Commerce", title: "India's Logistics Backbone", desc: "How modern shipping and fulfilment platforms power Indian commerce.", logos: "Shiprocket" },
        { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&fit=crop", cat: "Brand Positioning", title: "Brand Positioning with Nivia Sports", desc: "A brand positioning immersion at LPU, Jalandhar - decoding how a home-grown sports brand competes globally.", logos: "Nivia Sports · LPU Jalandhar" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · India", title: "Where Real Business\nMeets Real India.",
      body: "Business isn't just built in boardrooms. Understanding India means standing in its corridors of power and walking its ancient markets.",
      cards: [
        { name: "Parliament of India", desc: "Visit the new Parliament Building. Understand India's public policy framework and how governance shapes business regulation." },
        { name: "Heritage Business Districts", desc: "Explore how Mughal-era trade routes shaped India's commercial identity - from historic bazaars to modern business hubs." },
      ],
      note: "* Locations are indicative and may vary based on availability, permissions, and external factors.",
      imgs: ["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=85&fit=crop"],
    },
  },
  /* ── LONDON ── */
  {
    id: 1, flag: "🇬🇧", label: "Term 2 · London (Imperial)",
    bannerGrad: "linear-gradient(135deg,#012169 0%,#cf142b 100%)", bannerFlag: "🇬🇧",
    outcomeLabel: "Learning Outcome", outcome: "Be Global Leadership Ready.",
    outcomeSub: "Lead with capital fluency, strategic sharpness, and the confidence to operate on the world stage - with a certificate from Imperial College London.",
    academic: {
      label: "In Class",
      hero: { chip: "June – July · London · Imperial College London", title: "Term 2 - London", body: "The second term at <strong>Imperial College London</strong> brings together five intensive concentrations - <strong>global capital, competitive strategy, luxury & branding, the experience economy, and leadership</strong> - delivered at one of the world's top campuses, with a <strong>certificate awarded by Imperial College London</strong>.", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "FIFI", code: "Finance & Fintech", title: "How Private Equity & VC Firms Work", rows: ["How Private Equity & VC Firms Work"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How to leverage big data and analytics to make smarter business decisions?", rows: ["How to leverage big data and analytics to make smarter business decisions?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How to apply AI, LLMs and machine learning to solve real business problems?", rows: ["How to apply AI, LLMs and machine learning to solve real business problems?"] },
        { num: "FIFI", code: "Finance & Fintech", title: "How to Use DeFi and Crypto to Reimagine Financial Possibilities?", rows: ["How to Use DeFi and Crypto to Reimagine Financial Possibilities?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to create value and align teams through effective KPIs and KRAs?", rows: ["How to create value and align teams through effective KPIs and KRAs?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to lead innovation, entrepreneurship and sustainable business growth?", rows: ["How to lead innovation, entrepreneurship and sustainable business growth?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to pitch an innovative start-up and win investor confidence?", rows: ["How to pitch an innovative start-up and win investor confidence?"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · London", title: "Pitch Your Innovative Startup", body: "The London Out Class series is built around one outcome - <strong>crafting and delivering a compelling startup pitch</strong> that wins investors, customers and partners. Seven sessions take you from problem validation to a live pitch in front of a global panel.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How to identify a real problem worth solving?", rows: ["Spotting high-impact problems through customer interviews and market observation", "Validation frameworks: hypothesis, experiment, learn - before building anything"] },
        { num: "02", title: "How to design a differentiated solution and business model?", rows: ["From problem to value proposition: what you solve, for whom, and why now", "Business model patterns - revenue streams, unit economics and scalable delivery"] },
        { num: "03", title: "How to size your market and map the competitive landscape?", rows: ["TAM / SAM / SOM sizing for new ventures", "Competitive positioning and moats that make your startup defensible"] },
        { num: "04", title: "How to build a lean MVP and test with real users?", rows: ["MVP scoping - the smallest thing that proves value", "Experiment design, feedback loops and rapid iteration methods"] },
        { num: "05", title: "How to create financial projections and a fundraising plan?", rows: ["Revenue, cost and cash-flow modelling for early-stage ventures", "Funding stages, investor types and what each stage expects to see"] },
        { num: "06", title: "How to design a pitch deck that tells a compelling story?", rows: ["Story arc for investor decks - problem, solution, traction, market, team, ask", "Visual clarity, narrative flow and the metrics that matter most"] },
        { num: "07", title: "How to pitch your startup and win investor confidence?", rows: ["Live pitch rehearsal in front of a panel of investors and operators", "Handling Q&A, objections and demonstrating command of your venture"] },
      ],
    },
    immersions: {
      header: { title: "Inside London's most iconic institutions.", body: "4 company visits will be selected from the list below, finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop", cat: "Finance & Capital", title: "The City of London", desc: "Inside the world's oldest and most influential financial centre.", logos: "London Stock Exchange · City of London" },
        { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop", cat: "Banking & Fintech", title: "Digital Finance at Scale", desc: "How global banks and fintech disruptors are reshaping money and payments.", logos: "Citi · Revolut · Ripple" },
        { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&fit=crop", cat: "Venture Capital", title: "Europe's Venture Engine", desc: "Inside the firms building and backing the next generation of companies.", logos: "Blenheim Chalcot · Fabric Ventures" },
        { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&fit=crop", cat: "Tech & Advisory", title: "Innovation & Strategy", desc: "Cross-border technology and strategic advisory at scale.", logos: "Transwap · Candesic" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · London", title: "Experience London\nBeyond the Boardroom.",
      body: "London's history, architecture and cultural institutions are as much a business education as any classroom.",
      cards: [
        { name: "Tower of London", desc: "Walk through a thousand years of power, trade, and empire - where England's commercial story began." },
        { name: "West End Theatre", desc: "Experience the world's most famous theatre district - storytelling, branding, and the experience economy live." },
        { name: "British Museum", desc: "How Britain collected, curated, and commercialised global culture - and what it means for modern branding." },
        { name: "Premier League Experience", desc: "Inside the world's most valuable sports brand - marketing, media rights, and global fandom." },
      ],
      imgs: ["https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=85&fit=crop"],
    },
  },
  /* ── HONG KONG ── */
  {
    id: 2, flag: "🇭🇰", label: "Term 3 · Hong Kong (CUHK)",
    bannerGrad: "linear-gradient(135deg,#de2910 0%,#f5c842 100%)", bannerFlag: "🇭🇰",
    outcomeLabel: "Learning Outcome", outcome: "Be Scale-Ready for Global Markets.",
    outcomeSub: "Study in Hong Kong, Understand China - explore business, digital platforms, supply chains, AI innovation, and cross-cultural leadership at The Chinese University of Hong Kong.",
    academic: {
      label: "In Class",
      hero: { chip: "August – October · CUHK, Hong Kong", title: "Term 3 - Hong Kong", body: "Term 3 focuses on studying business at the intersection of <strong>finance, digital innovation, manufacturing, supply chains, and AI</strong> - across five concentrations delivered through the CUHK Hong Kong immersion curriculum. Learners also get a certificate from CUHK, Hong Kong.", img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "MAST", code: "Management & Strategy", title: "How does the state shape market opportunity?", rows: ["How does the state shape market opportunity?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How did China leapfrog the West in digital business models?", rows: ["How did China leapfrog the West in digital business models?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How did China transform from an agrarian economy into the world's most efficient industrial producer?", rows: ["How did China transform from an agrarian economy into the world's most efficient industrial producer?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How are China and Hong Kong SAR creating complementarity for the next wave of AI innovation?", rows: ["How are China and Hong Kong SAR creating complementarity for the next wave of AI innovation?"] },
        { num: "MAST", code: "Management & Strategy", title: "How do you compete, partner, and lead in China?", rows: ["How do you compete, partner, and lead in China?"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · Hong Kong", title: "Build Your GBA Venture", body: "The Hong Kong Out Class series is built around one outcome - <strong>building a cross-border digital ecosystem</strong>. Six sessions take you from the Greater Bay Area opportunity landscape to a viable business model.", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How to Understand the GBA Opportunity Landscape", rows: ["Map the Greater Bay Area's business corridors, consumer markets, and policy advantages", "Identify where Hong Kong creates leverage for cross-border venture building"] },
        { num: "02", title: "How to Identify the Company and Define the Problem", rows: ["Select a business context and clarify the customer or operational problem", "Frame the venture opportunity with clear users, constraints, and success metrics"] },
        { num: "03", title: "How to Develop a Market Entry Strategy", rows: ["Design entry routes across Hong Kong, mainland China, and regional markets", "Assess channels, partnerships, regulatory complexity, and execution risks"] },
        { num: "04", title: "How to Leverage GBA Synergies", rows: ["Use Hong Kong's finance, logistics, and talent advantages with mainland manufacturing and scale", "Identify complementary ecosystem partners for speed and defensibility"] },
        { num: "05", title: "How to Design Digital & Logistics Models", rows: ["Build digital journeys, platform logic, and fulfilment flows for cross-border businesses", "Evaluate technology, operations, and customer experience trade-offs"] },
        { num: "06", title: "How to Build a Business Model & Ensure Financial Viability", rows: ["Translate the venture into unit economics, pricing, and operating assumptions", "Present and defend the GBA venture model to a panel"] },
      ],
    },
    immersions: {
      header: { title: "Inside Hong Kong and China's most iconic companies.", body: "4 industry immersions will be selected from the list below, finalised closer to the date based on availability and programme design.", note: { title: "CUHK FinTech Seminars", desc: "Learners engage in 4-6 hours of seminars. Each seminar will showcase insights from industry leaders and experts, providing valuable perspectives on emerging trends and technologies." } },
      cards: [
        { img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80&fit=crop", cat: "Finance & Markets", title: "Hong Kong's Capital Engine", desc: "Inside the institutions connecting Asian capital to global markets.", logos: "Hong Kong Stock Exchange · HSBC" },
        { img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&fit=crop", cat: "Platform & Social Commerce", title: "Digital Giants at Scale", desc: "How platform companies build ecosystems across content, commerce, and payments.", logos: "Alibaba Group · ByteDance" },
        { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop", cat: "Logistics & Trade", title: "How Hong Kong Moves the World", desc: "Commerce, sourcing, and cross-border logistics in one global trade hub.", logos: "Kerry Logistics · Li & Fung" },
        { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop", cat: "AI & Deep Tech", title: "Technology at the Frontier", desc: "Applied AI and deep-tech innovation across Hong Kong and China.", logos: "SenseTime · Tencent" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · Hong Kong", title: "Understand Hong Kong\nBeyond Business.",
      body: "Culture shapes commerce across Hong Kong and the Greater Bay Area. 4 experiences will be selected from the list below, confirmed closer to the programme date.",
      cards: [
        { name: "Cultural & Heritage Walking Tour", desc: "Walk through Hong Kong's historic districts and understand how trade, migration, and finance shaped the city." },
        { name: "Martial Arts / Tai Chi", desc: "Experience movement, discipline, and tradition as cultural lenses for leadership and focus." },
        { name: "Chinese Calligraphy", desc: "Explore how language, symbolism, and craft carry cultural meaning across Chinese business contexts." },
        { name: "Traditional Chinese Tea Ceremony", desc: "Understand ritual, patience, and relationship-building through one of the region's most enduring cultural practices." },
      ],
      imgs: ["https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=85&fit=crop"],
    },
  },
  /* ── DUBAI ── */
  {
    id: 3, flag: "🇦🇪", label: "Term 4 · Dubai",
    bannerGrad: "linear-gradient(135deg,#f07020 0%,#e8a020 100%)", bannerFlag: "🇦🇪",
    outcomeLabel: "Learning Outcome · Optional", outcome: "Be Global Business Ready.",
    outcomeSub: "Experience a city built on speed and capital - DIFC · JAFZA · Global operators",
    isDubai: true,
    academic: { label: "", hero: { chip: "", title: "", body: "", img: "" }, items: [] },
    outclass: { label: "", hero: { chip: "", title: "", body: "", img: "" }, items: [] },
  },
];

/* ─── Accordion item ─── */
const AccordionRow = ({ item }: { item: AccItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border ${open ? "border-primary bg-background" : "border-border bg-background/40"} transition-colors`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-primary border border-border px-2 py-1 shrink-0">{item.num}</span>
          <div className="min-w-0">
            {item.code && <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{item.code}</div>}
            <span className="font-display text-base sm:text-lg text-foreground leading-snug" dangerouslySetInnerHTML={{ __html: item.title.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          </div>
        </div>
        <ChevronDown size={18} className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180 text-primary" : ""}`} />
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 pt-0 flex flex-col gap-2 animate-fade-up">
          {item.rows.map((r, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
              <span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>{r}</span>
            </div>
          ))}
          {item.topics && (
            <div className="mt-2 px-3 py-2 border border-border bg-secondary/30 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{item.topics}</div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─── Sub-panel renderers ─── */
const AcademicPanel = ({ panel }: { panel: SubPanel }) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 items-center">
      <div>
        <div className="tag-pill mb-4">{panel.hero.chip}</div>
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance">{panel.hero.title}</h3>
        <p className="text-muted-foreground leading-relaxed mt-4 max-w-xl" dangerouslySetInnerHTML={{ __html: panel.hero.body }} />
      </div>
      <div className="aspect-[4/3] overflow-hidden border border-border bg-[hsl(0,0%,6%)]">
        <img src={panel.hero.img} alt={panel.hero.title} loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="flex flex-col gap-3">
      {panel.items.map((item, i) => <AccordionRow key={i} item={item} />)}
    </div>
  </div>
);

const ImmersionPanelView = ({ data }: { data: ImmersionPanel }) => (
  <div>
    <div className="mb-8">
      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance">
        {data.header.title.split("\n").map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}
      </h3>
      <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{data.header.body}</p>
      {data.header.note && (
        <div className="mt-5 flex items-start gap-3 border border-primary/30 bg-primary/[0.06] p-4 max-w-2xl">
          <span className="text-primary text-base shrink-0">✦</span>
          <div>
            <div className="font-display text-base text-foreground mb-1">{data.header.note.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{data.header.note.desc}</div>
          </div>
        </div>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.cards.map((card, i) => (
        <div key={i} className="relative overflow-hidden aspect-[4/3] group border border-border">
          <img src={card.img} alt={card.title} loading="lazy" className="w-full h-full object-cover brightness-[0.45] group-hover:scale-105 group-hover:brightness-[0.55] transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">{card.cat}</div>
            <div className="font-display text-lg text-white mb-1">{card.title}</div>
            <div className="text-sm text-white/70 leading-relaxed mb-2">{card.desc}</div>
            <div className="font-mono text-[10px] tracking-wider text-white/50">{card.logos}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CulturalPanelView = ({ data }: { data: CulturalPanel }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
    <div>
      <div className="tag-pill mb-4">{data.chip}</div>
      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance">
        {data.title.split("\n").map((l, i) => (
          <span key={i}>{i > 0 && <br />}{l}</span>
        ))}
      </h3>
      <p className="text-muted-foreground leading-relaxed mt-4">{data.body}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {data.cards.map((c, i) => (
          <div key={i} className="border border-border bg-background/40 p-4">
            <div className="font-display text-base text-foreground mb-1">{c.name}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>
      {data.note && <p className="font-mono text-[11px] text-muted-foreground/60 mt-4">{data.note}</p>}
    </div>
    <div className="relative">
      <img src={data.imgs[0]} alt="Cultural" loading="lazy" className="w-full aspect-[4/3] object-cover border border-border" />
      <img src={data.imgs[1]} alt="Cultural detail" loading="lazy" className="absolute -bottom-4 -right-4 w-[45%] aspect-square object-cover border-4 border-background shadow-xl" />
      <div className="absolute top-3 right-3 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">360° Cultural Lens</div>
    </div>
  </div>
);

/* ─── Stacked Term Row ─── */
export const TermRow = ({ term, index }: { term: Term; index: number }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (term.isDubai) {
    return (
      <div className="relative border-t border-border py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-16">
          {/* Left: term identity */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
              Term 0{index + 1} · Optional
            </div>
            <div className="text-6xl mb-4">{term.bannerFlag}</div>
            <h3 className="font-display text-4xl sm:text-5xl leading-[0.95] text-balance mb-4">
              {term.label.replace(/^Term \d+ · /, "")}
            </h3>
            <div className="h-px w-12 bg-primary mb-4" />
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              {term.outcomeLabel}
            </div>
            <div className="font-display text-xl text-foreground leading-tight mb-2">
              {term.outcome}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">{term.outcomeSub}</div>
          </div>

          {/* Right: dubai content */}
          <div className="min-w-0">
            <div className="border border-border bg-[hsl(0,0%,6%)]">
              <div className="h-0.5 w-full bg-primary" />
              <div className="p-8 md:p-10">
                <div className="tag-pill mb-5"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Optional · 1 Week Immersion</div>
                <h4 className="font-display text-2xl sm:text-3xl leading-[1.05] text-balance mb-6">
                  The optional week <em className="italic not-italic text-primary">most people regret skipping.</em>
                </h4>
                <ul className="text-muted-foreground leading-relaxed flex flex-col gap-3">
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span><strong className="text-foreground">Meet the operators</strong> building at global scale - in person, not on a panel</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>See how <strong className="text-foreground">capital, real estate, and venture</strong> actually work in one ecosystem</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>A city built in <strong className="text-foreground">50 years</strong> the world is still catching up to</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { label: term.academic.label, render: () => <AcademicPanel panel={term.academic} /> },
    { label: term.outclass.label, render: () => <AcademicPanel panel={term.outclass} /> },
    { label: "Business Immersions", render: () => term.immersions && <ImmersionPanelView data={term.immersions} /> },
    { label: "Cultural Immersion", render: () => term.cultural && <CulturalPanelView data={term.cultural} /> },
  ];

  return (
    <div className="relative border-t border-border py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-16">
        {/* Left: term identity (sticky on desktop) */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
            Term 0{index + 1}
          </div>
          <div className="text-6xl mb-4">{term.bannerFlag}</div>
          <h3 className="font-display text-4xl sm:text-5xl leading-[0.95] text-balance mb-5">
            {term.label.replace(/^Term \d+ · /, "")}
          </h3>
          <div className="h-px w-12 bg-primary mb-5" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
            {term.outcomeLabel}
          </div>
          <div className="font-display text-xl text-foreground leading-tight mb-2">
            {term.outcome}
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">{term.outcomeSub}</div>
        </div>

        {/* Right: 4 tabs as content grid */}
        <div className="min-w-0">
          {/* Compact tab strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border mb-8">
            {tabs.map((t, i) => {
              const active = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest transition-all text-left ${
                    active
                      ? "bg-foreground text-background"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="block opacity-60 mb-0.5">0{i + 1}</span>
                  {t.label}
                </button>
              );
            })}
          </div>

          {tabs[activeTab].render()}
        </div>
      </div>
    </div>
  );
};

/* ─── Main component ─── */
const Curriculum = () => {
  return (
    <section id="curriculum" className="py-16 sm:py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="tag-pill mb-4 sm:mb-6">◉ The Curriculum</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
            A curriculum crafted for the next<br />
            <em className="italic text-primary not-italic">generation of global leaders.</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-5 max-w-2xl">
            Four nations. Four distinct learning systems - In Class, Out Class, Business Immersion, Cultural Immersion. Scroll through each term below.
          </p>
        </div>

        {/* Stacked term sections */}
        <div>
          {terms.map((t, i) => <TermRow key={t.id} term={t} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
