import { useState } from "react";
import SectionEyebrow from "./SectionEyebrow";

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

type Faculty = { name: string; designation: string; photo: string };

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

const londonFaculty: Faculty[] = [
  { name: "Gilles Chemla", designation: "Professor of Finance · Co-director, Centre for Financial Technology", photo: gillesPhoto.url },
  { name: "Will Knottenbelt", designation: "Professor of Applied Quantitative Analysis", photo: willPhoto.url },
  { name: "Gaia Oganesian", designation: "MSc in Artificial Intelligence · PhD in Economics", photo: gaiaPhoto.url },
  { name: "Mark Kitten", designation: "Visiting Professor · Partner, Candesic Strategy Consultants", photo: markPhoto.url },
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

const groups = [
  { id: "india", flag: "🇮🇳", label: "India", sub: "Masters' Union", faculty: indiaFaculty },
  { id: "london", flag: "🇬🇧", label: "London", sub: "Imperial College London", faculty: londonFaculty },
  { id: "hk", flag: "🇭🇰", label: "Hong Kong", sub: "CUHK Business School", faculty: hkFaculty },
];

const Faculty = () => {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <section id="faculty-section" className="py-16 sm:py-20 md:py-28 border-t border-border">
      <div className="container">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14 pb-6 border-b border-border">
          <div className="md:col-span-8">
            <SectionEyebrow className="mb-4 sm:mb-6">Faculty / Taught by Practitioners</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance">
              World-class faculty.{" "}
              <em className="italic text-primary not-italic">Three continents.</em>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Learn from professors, practitioners and industry veterans across Masters' Union, Imperial College London and CUHK Business School.
            </p>
          </div>
        </div>

        {/* Country tabs */}
        <div className="flex border border-border overflow-x-auto scrollbar-hide mb-8">
          {groups.map((g, i) => {
            const isActive = active === i;
            return (
              <button
                key={g.id}
                onClick={() => setActive(i)}
                className="flex-1 min-w-[120px] py-4 sm:py-5 px-3 sm:px-4 text-center transition-all duration-300 border-b-2"
                style={{
                  borderBottomColor: isActive ? "hsl(var(--primary))" : "transparent",
                  background: isActive ? "hsl(var(--card))" : "transparent",
                }}
              >
                <div className="text-xl sm:text-2xl mb-1">{g.flag}</div>
                <div
                  className="text-xs sm:text-sm font-semibold tracking-tight"
                  style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                >
                  {g.label}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1 hidden sm:block">
                  {g.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Faculty grid */}
        <div>
          <div className="flex items-baseline justify-between mb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {group.sub} · {group.faculty.length} Faculty
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {group.faculty.map((f) => (
              <div key={f.name} className="flex flex-col items-center text-center group">
                <div className="relative mb-3">
                  <div className="w-[96px] h-[96px] rounded-full p-[2px] bg-gradient-to-br from-primary to-primary/40 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img
                        src={f.photo}
                        alt={f.name}
                        loading="lazy"
                        decoding="async"
                        className={"w-full h-full object-cover " + (group.id === "india" ? "object-[50%_10%] scale-105" : "object-center")}
                      />
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
      </div>
    </section>
  );
};

export default Faculty;
