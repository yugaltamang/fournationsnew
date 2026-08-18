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
import sakshamPhoto from "@/assets/faculty-india/saksham.asset.json";
import saurabhPhoto from "@/assets/faculty-india/saurabh.asset.json";
import rinkuPhoto from "@/assets/faculty-india/rinku.asset.json";
import aartiPhoto from "@/assets/faculty-india/aarti.asset.json";

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
  { name: "Dr. Rajita Chaudhuri", designation: "Professor of Practise, Communication", photo: rajitaPhoto.url, focusClass: "object-[50%_25%]" },
  { name: "Rajat Mathur", designation: "Visiting Faculty · Senior Advisor, Morgan Stanley", photo: "https://images.mastersunion.link/uploads/17042026/v1/master7.webp" },
  { name: "Saurabh Sengupta", designation: "Teaching Master, Modern Selling", photo: saurabhPhoto.url, focusClass: "object-[50%_20%]" },
  { name: "Dr. Aarti Sharma", designation: "Master in Residence, Finance", photo: aartiPhoto.url, focusClass: "object-[50%_20%]" },
  { name: "Dr. Rinku Mahendru", designation: "Master in Residence, HR", photo: rinkuPhoto.url, focusClass: "object-[50%_25%]" },
  { name: "Saksham Kotiya", designation: "Head of Investments, Masters' Union", photo: sakshamPhoto.url, focusClass: "object-[50%_25%]" },
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
  { id: "india", name: "Masters' Union", city: "GURUGRAM · INDIA CAMPUS", tagline: "Practitioner Faculty", faculty: indiaFaculty },
  { id: "london", name: "Imperial College London", city: "London · United Kingdom", tagline: "Research & Enterprise", faculty: londonFaculty },
  { id: "hk", name: "CUHK Business School", city: "Hong Kong SAR", tagline: "Asian Markets & Innovation", faculty: hkFaculty },
];

const GOLD = "#C5A059";

const Faculty = () => {
  const [activeId, setActiveId] = useState(groups[0].id);
  const activeIndex = groups.findIndex((g) => g.id === activeId);
  const group = groups[activeIndex >= 0 ? activeIndex : 0];

  return (
    <section
      id="faculty-section"
      className="border-t border-border py-14 md:py-20"
      style={{ background: "#080808", color: "#F5F5F0" }}
    >
      <div className="container max-w-7xl">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 md:pb-8 border-b" style={{ borderColor: `${GOLD}33` }}>
          <div className="space-y-3">
            <span
              className="block text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
            >
              Global Academic Council
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light italic leading-[1.05] text-balance"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              World-class minds,{" "}
              <span className="not-italic font-medium">zero borders.</span>
            </h2>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.2em]"
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

        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px w-10" style={{ background: GOLD }} />
            <h3
              className="text-[10px] tracking-[0.35em] uppercase opacity-70"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {group.name} · {group.city}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-7">
            {group.faculty.map((f) => (
              <div key={f.name} className="group flex flex-col items-center text-center">
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[1.5px] mb-3 transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}33)` }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "#111" }}>
                    <img
                      src={f.photo}
                      alt={f.name}
                      loading="lazy"
                      decoding="async"
                      className={
                        "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 " +
                        (f.focusClass ?? "object-[center_15%]")
                      }
                    />
                  </div>
                </div>
                <h4
                  className="text-[13px] sm:text-sm font-medium leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {f.name}
                </h4>
                <p
                  className="text-[9px] opacity-50 leading-snug uppercase mt-1 tracking-tight px-1"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {f.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {group.id === "london" && (
          <p
            className="mt-8 text-[10px] sm:text-[11px] leading-relaxed opacity-40 max-w-2xl"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            PS — The Imperial faculty listed on this page are provisional and provided for indicative purposes only. Teaching staff are subject to change and will be confirmed closer to the programme start date.
          </p>
        )}


        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t"
          style={{ borderColor: `${GOLD}1A` }}
        >
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {groups
              .filter((g) => g.id !== activeId)
              .map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveId(g.id)}
                  className="text-left group"
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.25em] mb-0.5"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: GOLD }}
                  >
                    {g.name}
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Faculty Members →
                  </p>
                </button>
              ))}
          </div>
          <p
            className="text-[9px] uppercase opacity-30 tracking-[0.2em]"
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
