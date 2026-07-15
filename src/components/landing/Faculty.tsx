import { useState } from "react";

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
import rajitaPhoto from "@/assets/faculty-india/rajita.asset.json";

type Faculty = {
  name: string;
  designation: string;
  photo: string;
  focusClass?: string;
};

const indiaFaculty: Faculty[] = [
  { name: "Dr. Bhupesh Manoharan", designation: "Dean, Masters' Union", photo: "https://images.mastersunion.link/uploads/17042026/v1/master1.webp" },
  { name: "Dr. Garima Chaklader", designation: "Assistant Professor, Economics & Data Analysis", photo: "https://images.mastersunion.link/uploads/17042026/v2/master5.webp" },
  { name: "Dr. Nandini Seth", designation: "Faculty, Quantitative Methods", photo: "https://images.mastersunion.link/uploads/17042026/v2/master2.webp" },
  { name: "Dr. Rajita Chaudhuri", designation: "Professor of Practise, Communication", photo: rajitaPhoto.url, focusClass: "object-[45%_20%] scale-[1.4]" },
  { name: "Ankur Kulshrestha", designation: "Visiting Faculty, Capital Markets & Valuations", photo: "https://images.mastersunion.link/uploads/17042026/v1/card14.webp" },
  { name: "Rajat Mathur", designation: "Visiting Faculty · Senior Advisor, Morgan Stanley", photo: "https://images.mastersunion.link/uploads/17042026/v1/master7.webp" },
  { name: "Rashmi Malik", designation: "Visiting Faculty, Design & GenAI", photo: "https://images.mastersunion.link/uploads/17042026/v1/card137.webp" },
  { name: "Mayank Nagpal", designation: "Visiting Faculty, AI & No-Code · Founder, EPYC", photo: "https://images.mastersunion.link/uploads/17042026/v1/card74.webp" },
  { name: "Saurabh Sengupta", designation: "Teaching Master, Modern Selling", photo: "https://images.mastersunion.link/uploads/17042026/v1/card146.webp" },
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

type Group = {
  id: string;
  name: string;
  city: string;
  tagline: string;
  faculty: Faculty[];
};

const groups: Group[] = [
  { id: "india", name: "Masters' Union", city: "New Delhi · India Campus", tagline: "Practitioner Faculty", faculty: indiaFaculty },
  { id: "london", name: "Imperial College London", city: "London · United Kingdom", tagline: "Research & Enterprise", faculty: londonFaculty },
  { id: "hk", name: "CUHK Business School", city: "Hong Kong SAR", tagline: "Asian Markets & Innovation", faculty: hkFaculty },
];

const GOLD = "#C5A059";

const Faculty = () => {
  const [activeId, setActiveId] = useState(groups[0].id);
  const group = groups.find((g) => g.id === activeId) ?? groups[0];
  const [featured, ...rest] = group.faculty;

  return (
    <section
      id="faculty-section"
      className="border-t border-border py-20 md:py-28 lg:py-32"
      style={{ background: "#080808", color: "#F5F5F0" }}
    >
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 md:pb-12 border-b" style={{ borderColor: `${GOLD}33` }}>
          <div className="space-y-4 md:space-y-5">
            <span
              className="block text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
            >
              Global Academic Council
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-[1.05] text-balance"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              World-class minds,
              <br />
              <span className="not-italic font-medium">zero borders.</span>
            </h2>
          </div>

          {/* Institution switcher (no flags) */}
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            aria-label="Institution selector"
          >
            {groups.map((g) => {
              const isActive = g.id === activeId;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveId(g.id)}
                  className="pb-1 border-b transition-colors duration-300 whitespace-nowrap"
                  style={{
                    color: isActive ? GOLD : "rgba(245,245,240,0.4)",
                    borderColor: isActive ? GOLD : "transparent",
                  }}
                >
                  {g.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Active institution chapter */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="h-px w-12" style={{ background: GOLD }} />
            <h3
              className="text-[11px] tracking-[0.4em] uppercase opacity-70"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {group.name} · {group.city}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 md:gap-y-16">
            {/* Featured card */}
            {featured && (
              <div className="group col-span-2 relative overflow-hidden">
                <div className="aspect-[16/10] md:aspect-[16/9] w-full" style={{ background: "#111" }}>
                  <img
                    src={featured.photo}
                    alt={featured.name}
                    loading="lazy"
                    decoding="async"
                    className={
                      "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03] " +
                      (featured.focusClass ?? "object-[center_20%]")
                    }
                  />
                </div>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8"
                  style={{
                    background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 35%, transparent 65%)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase mb-2 tracking-[0.2em]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
                  >
                    {group.tagline}
                  </p>
                  <h4
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {featured.name}
                  </h4>
                  <p
                    className="text-[11px] opacity-60 mt-1 uppercase tracking-tight max-w-xl"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {featured.designation}
                  </p>
                </div>
              </div>
            )}

            {/* Standard cards */}
            {rest.map((f) => (
              <div key={f.name} className="group">
                <div
                  className="aspect-[4/5] overflow-hidden mb-4 sm:mb-5 border transition-colors duration-500"
                  style={{ background: "#111", borderColor: `${GOLD}1A` }}
                >
                  <img
                    src={f.photo}
                    alt={f.name}
                    loading="lazy"
                    decoding="async"
                    className={
                      "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03] " +
                      (f.focusClass ?? "object-[center_20%]")
                    }
                  />
                </div>
                <p
                  className="text-[9px] sm:text-[10px] uppercase mb-1 tracking-[0.15em]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
                >
                  {group.tagline}
                </p>
                <h4
                  className="text-lg sm:text-xl font-medium leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {f.name}
                </h4>
                <p
                  className="text-[10px] opacity-50 leading-relaxed uppercase mt-1.5 tracking-tight"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {f.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer summary — the other two institutions */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t"
          style={{ borderColor: `${GOLD}1A` }}
        >
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {groups
              .filter((g) => g.id !== activeId)
              .map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveId(g.id)}
                  className="text-left group"
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.25em] mb-1 transition-opacity group-hover:opacity-100"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
                  >
                    {g.name}
                  </p>
                  <p
                    className="text-base sm:text-lg italic transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {g.faculty.length} Faculty Members →
                  </p>
                </button>
              ))}
          </div>
          <p
            className="text-[10px] uppercase opacity-30 tracking-[0.2em]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Select an institution to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
