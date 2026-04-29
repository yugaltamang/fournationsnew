import { WORLD_PATH } from "./worldMapPath";

// Approximate equirectangular coordinates within the WORLD_PATH viewBox
// (path spans roughly x: -200..1000, y: -200..900)
const CITIES = [
  { name: "Mumbai", x: 595, y: 340 },
  { name: "Hong Kong", x: 750, y: 340 },
  { name: "London", x: 460, y: 200 },
  { name: "Dubai", x: 555, y: 320 },
];

const FourCitiesMap = () => (
  <svg
    viewBox="-200 -100 1200 800"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Four cities: Mumbai, Hong Kong, London, Dubai"
  >
    {/* Continents — subtle dotted/faint fill */}
    <path
      d={WORLD_PATH}
      fill="hsl(40 8% 65% / 0.18)"
      stroke="hsl(40 8% 65% / 0.25)"
      strokeWidth="0.5"
    />

    {/* City pins */}
    {CITIES.map((c) => (
      <g key={c.name}>
        {/* Soft glow */}
        <circle cx={c.x} cy={c.y} r="14" fill="hsl(40 84% 58% / 0.18)" />
        {/* Dot */}
        <circle cx={c.x} cy={c.y} r="4.5" fill="hsl(40 84% 58%)" />
        {/* Label */}
        <text
          x={c.x + 10}
          y={c.y - 8}
          fill="hsl(40 20% 96%)"
          fontSize="14"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="2"
          style={{ textTransform: "uppercase" }}
        >
          {c.name.toUpperCase()}
        </text>
      </g>
    ))}
  </svg>
);

export default FourCitiesMap;
