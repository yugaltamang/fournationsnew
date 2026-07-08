import { useState } from "react";
import { ChevronDown } from "lucide-react";
import gillesPhoto from "@/assets/faculty-london/gilles.asset.json";
import willPhoto from "@/assets/faculty-london/will.asset.json";
import gaiaPhoto from "@/assets/faculty-london/gaia.asset.json";
import markPhoto from "@/assets/faculty-london/mark.asset.json";
import naveedPhoto from "@/assets/faculty-london/naveed.asset.json";
import andreasPhoto from "@/assets/faculty-london/andreas.asset.json";
import marcoPhoto from "@/assets/faculty-london/marco.asset.json";
import ramanaPhoto from "@/assets/faculty-london/ramana.asset.json";
import terencePhoto from "@/assets/faculty-hk/terence.asset.json";
import toaPhoto from "@/assets/faculty-hk/toa.asset.json";
import jeffPhoto from "@/assets/faculty-hk/jeff.asset.json";
import liaoPhoto from "@/assets/faculty-hk/liao.asset.json";
import gilbertPhoto from "@/assets/faculty-hk/gilbert.asset.json";
import addverbLogo from "@/assets/immersion-logos/addverb.png.asset.json";
import itcLogo from "@/assets/immersion-logos/itc.png.asset.json";
import sonalikaLogo from "@/assets/immersion-logos/sonalika.png.asset.json";
import hondaLogo from "@/assets/immersion-logos/honda.png.asset.json";
import bluetokaiLogo from "@/assets/immersion-logos/bluetokai.png.asset.json";
import shiprocketLogo from "@/assets/immersion-logos/shiprocket.png.asset.json";
import niviaLogo from "@/assets/immersion-logos/nivia.png.asset.json";
import lpuLogo from "@/assets/immersion-logos/lpu.png.asset.json";

/* Brand → white logo URL. Only mapped brands render as an image chip; others fall back to a text chip. */
const LOGO_MAP: Record<string, string> = {
  "Addverb": addverbLogo.url,
  "ITC Limited": itcLogo.url,
  "Sonalika Tractors": sonalikaLogo.url,
  "Honda": hondaLogo.url,
  "Blue Tokai": bluetokaiLogo.url,
  "Shiprocket": shiprocketLogo.url,
  "Nivia Sports": niviaLogo.url,
  "LPU Jalandhar": lpuLogo.url,
};



/* ─── data types ─── */
interface AccItem { num: string; code?: string; title: string; rows: string[]; topics?: string }
interface SubPanel { label: string; hero: { chip: string; title: string; body: string; img: string }; items: AccItem[]; summary?: string[] }
interface CulturalPanel { chip: string; title: string; body: string; cards: { name: string; desc: string }[]; note?: string; imgs: [string, string] }
interface ImmersionPanel { header: { title: string; body: string; note?: { title: string; desc: string } }; cards: { img: string; cat: string; title: string; desc: string; logos: string }[] }
interface Faculty { name: string; designation: string; photo: string }

interface Term {
  id: number; flag: string; label: string; bannerGrad: string; bannerFlag: string;
  outcomeLabel: string; outcome: string; outcomeSub: string;
  academic: SubPanel; outclass: SubPanel; immersions?: ImmersionPanel; cultural?: CulturalPanel;
  faculty?: Faculty[];
  isDubai?: boolean;
}

const londonFaculty: Faculty[] = [
  { name: "Gilles Chemla", designation: "Professor of Finance · Co-director, Centre for Financial Technology", photo: gillesPhoto.url },
  { name: "Will Knottenbelt", designation: "Professor of Applied Quantitative Analysis", photo: willPhoto.url },
  { name: "Gaia Oganesian", designation: "MSc in Artificial Intelligence · PhD in Economics", photo: gaiaPhoto.url },
  { name: "Mark Kitten", designation: "Visiting Professor · Partner, Candesic Strategy Consultants (London & New York)", photo: markPhoto.url },
  { name: "Naveed Sultan", designation: "Professor of Practice", photo: naveedPhoto.url },
  { name: "Andreas Eisingerich", designation: "Professor of Marketing", photo: andreasPhoto.url },
  { name: "Marco di Maggio", designation: "Professor of Finance", photo: marcoPhoto.url },
  { name: "Ramana Nanda", designation: "Associate Dean for Enterprise", photo: ramanaPhoto.url },
];

const hkFaculty: Faculty[] = [
  { name: "Prof. Terence Chong", designation: "Associate Professor, Department of Economics", photo: terencePhoto.url },
  { name: "Prof. Toa Charm", designation: "Associate Professor of Practice in Innovation and Technology", photo: toaPhoto.url },
  { name: "Prof. Jeff Yeung", designation: "Adjunct Associate Professor, Department of Decisions", photo: jeffPhoto.url },
  { name: "Prof. Liao Ming", designation: "Professor of Practice in Business Analytics", photo: liaoPhoto.url },
  { name: "Dr. Gilbert Cheung", designation: "Honorary Institute Fellow", photo: gilbertPhoto.url },
];

const indiaFaculty: Faculty[] = [
  { name: "Dr. Bhupesh Manoharan", designation: "Dean, Masters' Union", photo: "https://images.mastersunion.link/uploads/10042026/v1/Dr.BhupeshManoharan1.webp" },
  { name: "Dr. Garima Chaklader", designation: "Assistant Professor, Economics & Data Analysis", photo: "https://images.mastersunion.link/uploads/16042026/v1/DrGarimaChaklader.webp" },
  { name: "Dr. Nandini Seth", designation: "Faculty, Quantitative Methods", photo: "https://images.mastersunion.link/uploads/10042026/v1/Dr.NandiniSeth2.webp" },
  { name: "Dr. Rajita Chaudhuri", designation: "Professor of Practise, Communication", photo: "https://images.mastersunion.link/uploads/14042026/v1/Dr.RajitaChaudhari.webp" },
  { name: "Ankur Kulshrestha", designation: "Visiting Faculty, Capital Markets & Valuations", photo: "https://images.mastersunion.link/uploads/10042026/v1/AnkurKulshrestha.webp" },
  { name: "Rajat Mathur", designation: "Visiting Faculty · Senior Advisor, Morgan Stanley", photo: "https://images.mastersunion.link/uploads/14042026/v1/RajatMathur.webp" },
  { name: "Rashmi Malik", designation: "Visiting Faculty, Design & GenAI", photo: "https://images.mastersunion.link/uploads/14042026/v1/RashmiMalik.webp" },
  { name: "Mayank Nagpal", designation: "Visiting Faculty, AI & No-Code · Founder, EPYC", photo: "https://images.mastersunion.link/uploads/10042026/v1/MayankNagpal.webp" },
  { name: "Saurabh Sengupta", designation: "Teaching Master, Modern Selling", photo: "https://images.mastersunion.link/uploads/16042026/v1/SaurabhSengupta.webp" },
];

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
      hero: { chip: "Out Class · India", title: "Build a D2C Brand", body: "A 10-week, high-intensity sprint from product discovery to a live D2C brand on Shopify, Amazon, and Flipkart. Real CAC, real ROAS, real revenue.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "Build a D2C brand", rows: [
          "How do you identify and validate a high-potential D2C opportunity in the market?",
          "How do you select the right product, source it efficiently, and build profitable unit economics?",
          "How do you define a differentiated brand strategy and positioning that resonates with your target audience?",
          "How do you create a compelling brand identity and packaging that drives recall and conversion?",
          "How do you build and launch a high-converting D2C website on Shopify?",
          "How do you successfully launch and scale your brand on online marketplaces?",
          "How do you drive demand and acquire customers efficiently through performance marketing?",
          "How do you set up seamless operations, fulfilment, and deliver an excellent customer experience?",
          "How do you scale your D2C brand sustainably using the right growth levers and metrics?",
          "Final showcase",
        ]},
      ],
    },
    immersions: {
      header: { title: "4 industry immersions + a Jalandhar deep-dive.", body: "4 company visits across Delhi NCR, followed by a 3-day trip to Jalandhar factories and universities. Locations are selected from the list below and finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fit=crop", cat: "Manufacturing & Industrial", title: "India's Industrial Powerhouses", desc: "Walk the floors of India's most scaled manufacturers and operators.", logos: "Addverb · ITC Limited · Sonalika Tractors · Honda" },
        { img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80&fit=crop", cat: "D2C", title: "Built in India, Drunk Globally", desc: "Inside a home-grown D2C brand that scaled coffee culture across the country.", logos: "Blue Tokai" },
        { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop", cat: "Logistics & Commerce", title: "India's Logistics Backbone", desc: "How modern shipping and fulfilment platforms power Indian commerce.", logos: "Shiprocket" },
        { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&fit=crop", cat: "Brand Positioning", title: "Brand Positioning Masterclass", desc: "Learn how home-grown brands compete globally through sharp positioning, messaging and market differentiation.", logos: "Nivia Sports · LPU Jalandhar" },
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
    faculty: indiaFaculty,
  },
  /* ── LONDON ── */
  {
    id: 1, flag: "🇬🇧", label: "Term 2 · London (Imperial)",
    bannerGrad: "linear-gradient(135deg,#012169 0%,#cf142b 100%)", bannerFlag: "🇬🇧",
    outcomeLabel: "Learning Outcome", outcome: "Be Global Leadership Ready.",
    outcomeSub: "Lead with capital fluency, strategic sharpness, and the confidence to operate on the world stage - with a certificate from Imperial College London.",
    academic: {
      label: "In Class",
      hero: { chip: "June – July · London · Imperial College London", title: "Term 2 - London", body: "At <strong>Imperial College London</strong>, the second term combines five intensive concentrations: <strong>global capital, competitive strategy, luxury & branding, the experience economy, and leadership</strong>. Delivered at one of the world's top campuses, with a <strong>certificate awarded by Imperial College London</strong>.", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "PRDT", code: "Product, AI & Tech", title: "How to leverage big data and analytics to make smarter business decisions?", rows: ["How to leverage big data and analytics to make smarter business decisions?"] },
        { num: "PRDT", code: "Product, AI & Tech", title: "How to apply AI, LLMs and machine learning to solve real business problems?", rows: ["How to apply AI, LLMs and machine learning to solve real business problems?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to create value and align teams through effective KPIs and KRAs?", rows: ["How to create value and align teams through effective KPIs and KRAs?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to lead innovation, entrepreneurship and sustainable business growth?", rows: ["How to lead innovation, entrepreneurship and sustainable business growth?"] },
        { num: "SAMA", code: "Sales & Marketing", title: "How do brands create desire, not just demand?", rows: ["How do brands create desire, not just demand?"] },
        { num: "FIFI", code: "Finance & Fintech", title: "How Private Equity & VC Firms Work?", rows: ["How Private Equity & VC Firms Work?"] },
        { num: "FIFI", code: "Finance & Fintech", title: "How to Use DeFi and Crypto to Reimagine Financial Possibilities?", rows: ["How to Use DeFi and Crypto to Reimagine Financial Possibilities?"] },
        { num: "MAST", code: "Management & Strategy", title: "How to pitch an innovative start-up and win investor confidence?", rows: ["How to pitch an innovative start-up and win investor confidence?"] },
      ],
    },
    outclass: {
      label: "Out Class",
      hero: { chip: "Out Class · London", title: "Creators Challenge - London", body: "Build a personal brand across Instagram and YouTube from London. Hooks, retention, and body of work. Graduate as a creator-preneur with real reach.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop&crop=center" },
      items: [
        { num: "01", title: "How to Find Your Niche and Position Yourself as a Creator", rows: ["How to Find Your Niche and Position Yourself as a Creator"] },
        { num: "02", title: "How to Build a Winning Content Strategy", rows: ["How to Build a Winning Content Strategy"] },
        { num: "03", title: "How to Create Engaging Content Ideas and Scripts", rows: ["How to Create Engaging Content Ideas and Scripts"] },
        { num: "04", title: "How to Shoot Content with Confidence", rows: ["How to Shoot Content with Confidence"] },
        { num: "05", title: "How to Edit and Package High-Quality Content", rows: ["How to Edit and Package High-Quality Content"] },
        { num: "06", title: "How to Grow and Optimize Your Content", rows: ["How to Grow and Optimize Your Content"] },
        { num: "07", title: "How to Monetize and Scale Your Personal Brand", rows: ["How to Monetize and Scale Your Personal Brand"] },
      ],
    },
    immersions: {
      header: { title: "8 business immersions in London.", body: "8 company visits across London's finance, venture, fintech, energy, advisory, luxury and consumer businesses. Visits are finalised closer to the date based on availability and programme design." },
      cards: [
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop", cat: "Finance & Venture", title: "Capital and Company Builders", desc: "How private equity and venture builders fund, scale and shape global businesses.", logos: "Arctos · Blenheim Chalcot" },
        { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop", cat: "Fintech & Energy", title: "Technology Disruptors", desc: "How fintech and clean-energy platforms are reimagining money, markets and sustainability.", logos: "Ripple · Octopus Energy" },
        { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&fit=crop", cat: "Advisory & Strategy", title: "Global Advisory at Scale", desc: "Inside the firms advising the world's largest companies on strategy, transformation and growth.", logos: "Deloitte · Candesic" },
        { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&fit=crop", cat: "Luxury & Consumer", title: "Icons of Brand and Health", desc: "How heritage brands and healthcare giants build desire, trust and global scale.", logos: "Burberry · Johnson & Johnson" },
      ],
    },
    cultural: {
      chip: "Cultural Immersion · London", title: "Experience London\nBeyond the Boardroom.",
      body: "London's history, architecture and cultural institutions are as much a business education as any classroom.",
      cards: [
        { name: "Riverboat Cruise on the Thames", desc: "See the city's iconic skyline from the water - a journey through London's history, commerce, and architecture." },
        { name: "Private Tour of the Royal Albert Hall", desc: "Go behind the scenes of one of the world's most famous venues - a masterclass in heritage, brand, and the experience economy." },
        { name: "Tour of the City of London", desc: "Walk through the Square Mile where global finance was born - from historic institutions to modern financial powerhouses." },
      ],
      imgs: ["https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=700&q=85&fit=crop", "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=85&fit=crop"],
    },
    faculty: londonFaculty,
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
      label: "Capstone",
      hero: { chip: "Capstone · Hong Kong", title: "Build Your GBA Venture", body: "The Hong Kong capstone is built around one outcome - <strong>building a cross-border venture</strong> that leverages the Greater Bay Area's unique ecosystem.", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80&fit=crop&crop=center" },
      items: [],
      summary: [
        "Map the Greater Bay Area opportunity and define a cross-border venture.",
        "Design a market entry strategy that uses Hong Kong's capital, logistics, and talent advantages.",
        "Build a financially viable business model and present it to a panel.",
      ],
    },
    immersions: {
      header: { title: "Business immersions in Hong Kong.", body: "Business immersions across Hong Kong and the Greater Bay Area. Company visits are selected from the list below and finalised closer to the date based on availability and programme design.", note: { title: "CUHK FinTech Seminars", desc: "Learners engage in 4-6 hours of seminars. Each seminar will showcase insights from industry leaders and experts, providing valuable perspectives on emerging trends and technologies." } },
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
    faculty: hkFaculty,
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
const AccordionRow = ({ item, defaultOpen = false }: { item: AccItem; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
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
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-balance">{panel.hero.title}</h3>
        <p className="text-muted-foreground leading-relaxed mt-4 max-w-xl" dangerouslySetInnerHTML={{ __html: panel.hero.body }} />
      </div>
      <div className="aspect-[4/3] overflow-hidden border border-border bg-[hsl(0,0%,6%)]">
        <img src={panel.hero.img} alt={panel.hero.title} loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
    {panel.summary ? (
      <div className="flex flex-col gap-4 max-w-3xl">
        {panel.summary.map((item, i) => (
          <p key={i} className="text-sm sm:text-base text-foreground/90 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    ) : (
      <div className="flex flex-col gap-3">
        {panel.items.map((item, i) => <AccordionRow key={i} item={item} defaultOpen={panel.items.length === 1} />)}
      </div>
    )}
  </div>
);

const BrandChip = ({ name }: { name: string }) => {
  const logo = LOGO_MAP[name];
  if (logo) {
    return (
      <span
        title={name}
        className="inline-flex h-8 w-16 shrink-0 items-center justify-center border border-white/25 bg-black/80 p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      >
        <img src={logo} alt={name} loading="lazy" className="max-h-5 max-w-12 object-contain drop-shadow-[0_0_3px_rgba(255,255,255,0.55)]" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center bg-white text-black px-2.5 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-wider shadow-[0_0_12px_rgba(255,255,255,0.35)]">
      {name}
    </span>
  );
};

const ImmersionPanelView = ({ data, location }: { data: ImmersionPanel; location: string }) => {
  const allBrands = Array.from(
    new Set(data.cards.flatMap((c) => c.logos.split(" · ").map((n) => n.trim())).filter(Boolean))
  );
  const previewBrands = allBrands.filter((b) => LOGO_MAP[b]);

  return (
    <div>
      <div className="mb-8">
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-balance">
          {data.header.title.split("\n").map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}
        </h3>
        <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{data.header.body}</p>
        {previewBrands.length > 0 && (
          <div className="mt-6 border border-border bg-[hsl(0,0%,6%)] p-4 sm:p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
              Business Immersions at {location}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {previewBrands.map((name) => (
                <BrandChip key={name} name={name} />
              ))}
            </div>
          </div>
        )}
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
              <div className="text-sm text-white/70 leading-relaxed mb-3">{card.desc}</div>
              <div className="flex flex-wrap gap-2">
                {card.logos.split(" · ").map((brand, j) => (
                  <BrandChip key={j} name={brand.trim()} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CulturalPanelView = ({ data }: { data: CulturalPanel }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
    <div>
      <div className="tag-pill mb-4">{data.chip}</div>
      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-balance">
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
      <div className="absolute top-3 right-3 tag-pill">360° Cultural Lens</div>
    </div>
  </div>
);

const FacultyPanelView = ({ data, termId }: { data: Faculty[]; termId?: number }) => (
  <div>
    <div className="mb-8">
      <div className="tag-pill mb-4">Imperial College London · Faculty</div>
      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-balance">
        Learn from <em className="italic not-italic text-primary">world-class faculty.</em>
      </h3>
      <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
        Eight Imperial professors and practitioners - leaders in finance, AI, marketing, strategy and entrepreneurship - shaping how global business is taught.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {data.map((f, idx) => (
        <div key={idx} className="flex flex-col items-center text-center group">
          <div className="relative mb-3">
            <div className="w-[96px] h-[96px] rounded-full p-[2px] bg-gradient-to-br from-primary to-primary/40 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img src={f.photo} alt={f.name} loading="lazy" decoding="async" className={"w-full h-full object-cover " + (termId === 0 ? "object-[50%_10%] scale-105" : "object-center")} />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md bg-primary" />
          </div>
          <p className="text-sm font-semibold text-foreground leading-tight">{f.name}</p>
          <p className="text-[11px] text-muted-foreground leading-snug mt-1">{f.designation}</p>
        </div>
      ))}
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
            <h3 className="font-display text-3xl sm:text-4xl leading-[0.95] text-balance mb-4">
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
                <h4 className="font-display text-xl sm:text-2xl leading-[1.05] text-balance mb-6">
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
    { label: "Business Immersions", render: () => term.immersions && <ImmersionPanelView data={term.immersions} location={term.label.replace(/^Term \d+ · /, "").replace(/\s*\(.*\)$/, "")} /> },
    ...(term.faculty ? [{ label: "Faculty", render: () => <FacultyPanelView data={term.faculty!} termId={term.id} /> }] : []),
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
          <h3 className="font-display text-3xl sm:text-4xl leading-[0.95] text-balance mb-5">
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
          <div className={`grid grid-cols-2 ${tabs.length === 5 ? "sm:grid-cols-5" : "sm:grid-cols-4"} gap-px bg-border border border-border mb-8`}>
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance">
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
