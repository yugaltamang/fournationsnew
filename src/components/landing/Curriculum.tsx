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

const terms: Term[] = [
  /* ── INDIA ── */
  {
    id: 0, flag: "🇮🇳", label: "Term 1 · India",
    bannerGrad: "linear-gradient(135deg,#ff9933 0%,#138808 100%)", bannerFlag: "🇮🇳",
    outcomeLabel: "Learning Outcome", outcome: "Be Entrepreneurship Ready.",
    outcomeSub: "Build, launch and validate a real business — Finance, Product, Marketing, Operations & AI",
    academic: {
      label: "In Class",
      hero: { chip: "November – January · India", title: "Term 1 — India", body: "Term 1 builds a <strong>strong entrepreneurial foundation</strong> — moving you from idea to execution with <strong>speed, clarity, and discipline</strong>, across finance, product, validation, and operations.", img: "https://images.mastersunion.link/uploads/26032026/v1/Hero1.webp" },
      items: [
        { num: "FIFI", code: "Finance & Fintech", title: "How to make your venture financially viable from day one", rows: ["How to read your numbers and spot hidden profit leaks", "How to raise startup capital", "How to leverage DeFi & Crypto in Business", "How data-driven decisions shape product and financial platforms"] },
        { num: "PRDT", code: "Product, Tech & AI", title: "How to build products intelligently from scratch", rows: ["How data-driven decisions shape product and financial platforms", "How startups design intuitive products focused on user experience", "How to build smart apps without code", "How to build hardware prototypes at Maker's Lab", "How startups use technology and automation to scale rapidly"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How to win your first customers and validate demand", rows: ["How to read markets for better decision making", "How to design winning GTM strategies", "How to win your first 100 customers", "How to maximise reach and ROI through digital algorithms", "How to build memorable brands and set prices that stick"] },
        { num: "OPSY", code: "Operations & Systems", title: "How to create operational clarity early", rows: ["How to design a simple MIS dashboard — get a business snapshot in 10 minutes", "How operational discipline and process design enable near-perfect execution", "How to use KPIs & KRAs to improve organisational alignment", "How manufacturing companies scale production and distribution"] },
        { num: "LDEX", code: "Leadership & Execution", title: "How to move from idea to traction fast", rows: ["How to work effectively in teams", "How to network effortlessly", "How to prioritise under pressure", "How to turn people decisions into competitive advantage"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · India", title: "Beyond the Classroom", body: "Out Class sessions take learning outside campus walls — into the field, the boardroom, and the street. Every session bridges <strong>theory and real-world practice</strong> through direct exposure.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How do you identify and validate a high-potential D2C opportunity?", rows: ["Spotting white spaces in consumer markets — demand signals, category gaps, and unmet needs", "Frameworks for rapid opportunity validation before you invest time or capital", "Building a business case: TAM, competitive landscape, and entry timing"] },
        { num: "02", title: "How do you select the right product and build profitable unit economics?", rows: ["Product selection criteria — margin, repeat purchase potential, and differentiation", "Sourcing strategies: domestic vs import, MOQs, and supplier evaluation", "Unit economics fundamentals — COGS, contribution margin, and CAC payback"] },
        { num: "03", title: "How do you define a differentiated brand strategy that resonates with your audience?", rows: ["Brand strategy frameworks — positioning, archetype, and category narrative", "Defining your ICP and crafting a value proposition that converts", "Competitive positioning maps and differentiation levers in crowded categories"] },
        { num: "04", title: "How do you create a compelling brand identity and packaging?", rows: ["Visual identity systems — logo, colour, typography, and tone of voice", "Packaging as a marketing tool — unboxing experience and shelf/screen standout", "Brand consistency across touchpoints — from product to social to paid ads"] },
        { num: "05", title: "How do you build a high-converting D2C website on Shopify?", rows: ["Shopify store setup — theme selection, product pages, and conversion optimisation", "UX principles for e-commerce — reducing friction from landing to checkout", "Essential apps and integrations for inventory, reviews, and retention"] },
        { num: "06", title: "How do you successfully launch and scale your brand on online marketplaces?", rows: ["Amazon, Flipkart, and Meesho — platform dynamics, ranking algorithms, and listing strategy", "Marketplace vs owned channel — when to use each and how to balance both", "Reviews, ratings, and the flywheel that drives marketplace growth"] },
        { num: "07", title: "How do you acquire customers efficiently through performance marketing?", rows: ["Meta and Google Ads fundamentals — campaign structure, targeting, and creative strategy", "CAC optimisation — improving ROAS and reducing blended acquisition cost", "Attribution models and reading your performance dashboard"] },
      ],
    },
    immersions: {
      header: { title: "Inside India's most iconic companies.", body: "6 company visits will be selected from the list below, finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop", cat: "Manufacturing & FMCG", title: "India's Industrial Backbone", desc: "Visit world-class manufacturing and FMCG operations.", logos: "ITC · Nivia · Addverb · Blue Tokai" },
        { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop", cat: "Startups & Unicorns", title: "India's New-Age Disruptors", desc: "Inside India's fastest-growing startups.", logos: "Shiprocket · PhonePe · Ola · Blue Tokai" },
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop", cat: "Finance & Consulting", title: "India's Capital Engine", desc: "How India's financial infrastructure powers growth.", logos: "Goldman Sachs · McKinsey · HDFC · NSE" },
        { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&fit=crop", cat: "Tech & Digital", title: "India's Digital Revolution", desc: "Inside India's tech and digital commerce ecosystem.", logos: "Flipkart · Freshworks · Razorpay · Swiggy" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · India", title: "Where Real Business\nMeets Real India.",
      body: "Business isn't just built in boardrooms. Understanding India means standing in its corridors of power and walking its ancient markets.",
      cards: [
        { name: "Parliament of India", desc: "Visit the new Parliament Building. Understand India's public policy framework and how governance shapes business regulation." },
        { name: "Heritage Business Districts", desc: "Explore how Mughal-era trade routes shaped India's commercial identity — from historic bazaars to modern business hubs." },
      ],
      note: "* Locations are indicative and may vary based on availability, permissions, and external factors.",
      imgs: ["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=85&fit=crop"],
    },
  },
  /* ── HONG KONG ── */
  {
    id: 1, flag: "🇭🇰", label: "Term 2 · Hong Kong (CUHK)",
    bannerGrad: "linear-gradient(135deg,#de2910 0%,#f5c842 100%)", bannerFlag: "🇭🇰",
    outcomeLabel: "Learning Outcome", outcome: "Be Scale-Ready for Global Markets.",
    outcomeSub: "Study in Hong Kong, Understand China — explore business, digital platforms, supply chains, AI innovation, and cross-cultural leadership at The Chinese University of Hong Kong.",
    academic: {
      label: "In Class",
      hero: { chip: "March – May · CUHK, Hong Kong", title: "Term 2 — Hong Kong", body: "Term 2 focuses on studying business at the intersection of <strong>finance, digital innovation, manufacturing, supply chains, and AI</strong> — across five concentrations delivered through the CUHK Hong Kong immersion curriculum. Learners also get a certificate from CUHK, Hong Kong.", img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "CEB", code: "Chinese Economy & Business Environment", title: "How does the state shape market opportunity?", rows: ["How did the reform era reshape China's economic institutions, incentives, and growth drivers?", "What roles do investment, exports, consumption, services, and productivity play in China's GDP growth?", "How are China's banking sector, capital markets, shadow banking, and capital controls structured?"], topics: "Economic reform · GDP drivers · Capital markets · Business environment" },
        { num: "DIP", code: "Digital Innovation & Platform Strategy", title: "How did China leapfrog the West in digital business models?", rows: ["How does digital transformation align with company mission, vision, and competitive strategy?", "How will digital change the customer journey?", "How do platform and ecosystem thinking change firm strategy?"], topics: "Digital transformation · Customer journey · Innovation methods · Platform strategy" },
        { num: "MSC", code: "Manufacturing & Supply Chain Supremacy", title: "How did China transform into the world's most efficient industrial producer?", rows: ["How do supply chain resilience and risk management shape global business?", "How do ERP, TMS, WMS, blockchain, IoT, AI/ML and analytics support supply chain decisions?", "How does digitalisation improve supply chain visibility?"], topics: "Supply chain resilience · Risk management · Digital operations · Analytics" },
        { num: "DAI", code: "Leveraging Data and AI for Competitive Advantage", title: "How are China and Hong Kong SAR complementary for the next wave of AI innovation?", rows: ["How can data and analytics identify opportunities, address issues, and support decisions?", "How does generative AI add value in public service data analysis?", "How can organisations manage data to enhance efficiency and service delivery?"], topics: "Data strategy · Generative AI · Public service analytics · Decision systems" },
        { num: "GSL", code: "Global Strategy & Cross-Cultural Leadership", title: "How do you compete, partner, and lead in China?", rows: ["How do global brands localise in China without losing identity?", "How do leaders develop culturally adaptive practices for diverse teams?", "How do Chinese management practices shape collaboration and execution?"], topics: "Localisation · Adaptive leadership · Conflict management · Chinese management practices" },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · Hong Kong", title: "Build Your GBA Venture", body: "The Hong Kong Out Class series is built around one outcome — <strong>building a cross-border digital ecosystem</strong>. Six sessions take you from the Greater Bay Area opportunity landscape to a viable business model.", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80&fit=crop&crop=center" },
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
      header: { title: "Inside Hong Kong and China's most iconic companies.", body: "5 industry immersions will be selected from the list below, finalised closer to the date based on availability and programme design.", note: { title: "CUHK FinTech Seminars", desc: "Learners engage in 4-6 hours of seminars. Each seminar will showcase insights from industry leaders and experts, providing valuable perspectives on emerging trends and technologies." } },
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
  /* ── LONDON ── */
  {
    id: 2, flag: "🇬🇧", label: "Term 3 · London (Imperial)",
    bannerGrad: "linear-gradient(135deg,#012169 0%,#cf142b 100%)", bannerFlag: "🇬🇧",
    outcomeLabel: "Learning Outcome", outcome: "Be Global Leadership Ready.",
    outcomeSub: "Lead with capital fluency, strategic sharpness, and the confidence to operate on the world stage — with a certificate from Imperial College London.",
    academic: {
      label: "In Class",
      hero: { chip: "June – July · London · Imperial College London", title: "Term 3 — London", body: "The final term at <strong>Imperial College London</strong> brings together five intensive concentrations — <strong>global capital, competitive strategy, luxury & branding, the experience economy, and leadership</strong> — delivered at one of the world's top campuses, with a <strong>certificate awarded by Imperial College London</strong>.", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "GCF", code: "Global Capital, Finance & Institutions", title: "How does global capital decide who wins — and how do companies unlock it at scale?", rows: ["How do PE and VC firms really work — and how do they evaluate businesses?", "How does M&A work — and how do companies scale through acquisitions?", "How do companies position themselves to attract global capital?"] },
        { num: "GST", code: "Global Strategy, Tech & Competitive Advantage", title: "How do companies stay ahead when markets evolve constantly?", rows: ["How do companies spot winning opportunities before competitors do?", "How do leaders make strategic bets under uncertainty?", "How do companies build advantages competitors can't replicate?"] },
        { num: "LBM", code: "Luxury, Branding, Media & Consumer Culture", title: "Why do customers pay a premium — and how do brands turn perception into power?", rows: ["How do brands create desire, not just demand?", "How do companies design pricing that signals value, not cost?", "How do influencers and creators shape premium brand culture?"] },
        { num: "TCE", code: "Tourism, Culture & Experience Economy", title: "How do cities turn culture and experiences into economic engines?", rows: ["How do cities design experiences that attract global audiences?", "How does culture and heritage become economic value?", "What makes an experience memorable — and worth paying for?"] },
        { num: "LSI", code: "Leadership, Systems & Influence", title: "What makes leaders effective in shaping organisations and narratives?", rows: ["How do leaders make high-stakes decisions under uncertainty?", "How do leaders influence stakeholders, media, and markets?", "How do companies build scalable operating systems and execution discipline?"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · London", title: "Build Your Personal Brand", body: "The London Out Class series is built around one outcome — <strong>launching and monetising your personal brand</strong> as a creator. Seven sessions take you from niche to content strategy to a fully monetised presence.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How to Find Your Niche and Position Yourself as a Creator", rows: ["Identifying your unique angle in a crowded creator landscape", "Positioning frameworks — who you are, who you're for, and what makes you distinct"] },
        { num: "02", title: "How to Build a Winning Content Strategy", rows: ["Platform-specific strategy — Instagram, YouTube, LinkedIn, and podcasting", "Content pillars, publishing cadence, and building a consistent audience"] },
        { num: "03", title: "How to Create Engaging Content Ideas and Scripts", rows: ["Ideation systems that never run dry — frameworks for generating content ideas", "Scriptwriting fundamentals for short-form and long-form formats"] },
        { num: "04", title: "How to Shoot, Edit, and Produce Professional-Quality Content", rows: ["Camera, lighting, and audio basics for solo creators", "Mobile-first editing workflows and tools"] },
        { num: "05", title: "How to Grow and Engage Your Audience", rows: ["Growth levers — algorithms, collaborations, SEO, and community", "Engagement strategies that turn viewers into loyal followers"] },
        { num: "06", title: "How to Monetise Your Creator Brand", rows: ["Revenue models — sponsorships, products, courses, memberships, and licensing", "Building a personal brand that generates inbound opportunities"] },
        { num: "07", title: "How to Present and Defend Your Creator Brand", rows: ["Final creator pitch — present your brand strategy, content plan, and monetisation model", "Defend your brand positioning and growth strategy to a panel"] },
      ],
    },
    immersions: {
      header: { title: "Inside London's most iconic institutions.", body: "6 company visits will be selected from the list below, finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop", cat: "Finance & Capital", title: "The City of London", desc: "Inside the world's oldest and most influential financial centre.", logos: "Bank of England · Lloyd's · HSBC · Barclays" },
        { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&fit=crop", cat: "Luxury & Retail", title: "Brands That Define Culture", desc: "How British luxury brands maintain global relevance.", logos: "Harrods · Burberry · Rolls-Royce · Dyson" },
        { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&fit=crop", cat: "Media & Entertainment", title: "Content at Global Scale", desc: "Inside the UK's media and entertainment ecosystem.", logos: "BBC · Premier League · Warner Bros · ITV" },
        { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop", cat: "Tech & Innovation", title: "London's Tech Ecosystem", desc: "Europe's largest tech hub.", logos: "DeepMind · Revolut · Wise · ARM" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · London", title: "Experience London\nBeyond the Boardroom.",
      body: "London's history, architecture and cultural institutions are as much a business education as any classroom.",
      cards: [
        { name: "Tower of London", desc: "Walk through a thousand years of power, trade, and empire — where England's commercial story began." },
        { name: "West End Theatre", desc: "Experience the world's most famous theatre district — storytelling, branding, and the experience economy live." },
        { name: "British Museum", desc: "How Britain collected, curated, and commercialised global culture — and what it means for modern branding." },
        { name: "Premier League Experience", desc: "Inside the world's most valuable sports brand — marketing, media rights, and global fandom." },
      ],
      imgs: ["https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=85&fit=crop"],
    },
  },
  /* ── DUBAI ── */
  {
    id: 3, flag: "🇦🇪", label: "Term 4 · Dubai",
    bannerGrad: "linear-gradient(135deg,#f07020 0%,#e8a020 100%)", bannerFlag: "🇦🇪",
    outcomeLabel: "Learning Outcome · Optional", outcome: "Be Global Business Ready.",
    outcomeSub: "Experience a city built on speed and capital — DIFC · JAFZA · Global operators",
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
          <span key={i}>{i > 0 && <br />}{i > 0 ? <em className="italic mu-hero-gradient-text not-italic">{l}</em> : l}</span>
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

/* ─── Main component ─── */
const Curriculum = () => {
  const [activeTerm, setActiveTerm] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const term = terms[activeTerm];

  const subTabs = term.isDubai ? [] : [
    term.academic.label,
    term.outclass.label,
    "Business Immersions",
    "Cultural Immersion",
  ];

  return (
    <section id="curriculum" className="py-16 sm:py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="tag-pill mb-4 sm:mb-6">◉ The Curriculum</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
            A curriculum crafted for the next<br />
            <em className="italic mu-hero-gradient-text not-italic">generation of global leaders.</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-5 max-w-2xl">
            Four nations. Four distinct learning systems — In Class, Out Class, Business Immersion, Cultural Immersion. Pick a country, then explore how each layer is taught on the ground.
          </p>
        </div>

        {/* Term tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {terms.map((t, i) => {
            const active = activeTerm === i;
            return (
              <button
                key={t.id}
                onClick={() => { setActiveTerm(i); setActiveSubTab(0); }}
                className={`px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-all border ${
                  active
                    ? "text-background border-transparent"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
                }`}
                style={active ? { background: "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)" } : {}}
              >
                <span className="mr-1.5">{t.flag}</span>{t.label}
                {t.isDubai && <span className="opacity-70 ml-1">(Optional)</span>}
              </button>
            );
          })}
        </div>

        {/* Outcome banner — editorial dark with MU signature gradient accent */}
        <div className="relative mb-4 border border-border bg-[hsl(0,0%,6%)] overflow-hidden">
          <div className="mu-hero-divider w-full" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ background: "radial-gradient(ellipse 60% 80% at 0% 50%, hsl(40 84% 58%), transparent 70%)" }} />
          <div className="relative p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="text-5xl shrink-0 grayscale-0">{term.bannerFlag}</div>
            <div className="hidden sm:block w-px self-stretch bg-border" />
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">{term.outcomeLabel}</div>
              <div className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
                <em className="italic mu-hero-gradient-text not-italic">{term.outcome}</em>
              </div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">{term.outcomeSub}</div>
            </div>
          </div>
        </div>

        {/* Dubai special block */}
        {term.isDubai && (
          <div className="relative border border-border bg-[hsl(0,0%,6%)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ background: "radial-gradient(ellipse 50% 70% at 100% 0%, #E38330, transparent 70%)" }} />
            <div className="relative p-8 md:p-12 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-6xl shrink-0">🇦🇪</div>
              <div>
                <div className="tag-pill mb-4"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Optional · 1 Week</div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-balance">
                  Dubai — <em className="italic mu-hero-gradient-text not-italic">1 Week Immersion.</em>
                </h3>
                <ul className="text-muted-foreground leading-relaxed max-w-2xl flex flex-col gap-2.5 mt-5">
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span><strong className="text-foreground">Meet the operators</strong> building at global scale — in person, not on a panel</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>See how <strong className="text-foreground">capital, real estate, and venture</strong> actually work in one ecosystem</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>A city built in <strong className="text-foreground">50 years</strong> the world is still catching up to</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-mono text-xs mt-1 shrink-0">▸</span><span>The optional week <strong className="text-foreground">most people regret skipping</strong></span></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sub-tabs */}
        {!term.isDubai && (
          <>
            <div className="flex flex-wrap gap-px bg-border border border-border mb-8">
              {subTabs.map((label, i) => {
                const active = activeSubTab === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSubTab(i)}
                    className={`flex-1 min-w-[140px] px-4 py-3 font-mono text-[11px] uppercase tracking-widest transition-all ${
                      active ? "text-background" : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                    style={active ? { background: "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)" } : {}}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {activeSubTab === 0 && <AcademicPanel panel={term.academic} />}
            {activeSubTab === 1 && <AcademicPanel panel={term.outclass} />}
            {activeSubTab === 2 && term.immersions && <ImmersionPanelView data={term.immersions} />}
            {activeSubTab === 3 && term.cultural && <CulturalPanelView data={term.cultural} />}
          </>
        )}
      </div>
    </section>
  );
};

export default Curriculum;
