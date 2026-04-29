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
    viewBox="420 170 360 200"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Four cities: Mumbai, Hong Kong, London, Dubai"
  >
    {/* Continents — subtle */}
    <path
      d={WORLD_PATH}
      fill="hsl(40 8% 65% / 0.16)"
      stroke="hsl(40 8% 65% / 0.28)"
      strokeWidth="0.4"
    />

    {/* City pins */}
    {CITIES.map((c) => (
      <g key={c.name}>
        <circle cx={c.x} cy={c.y} r="6" fill="hsl(40 84% 58% / 0.22)" />
        <circle cx={c.x} cy={c.y} r="2" fill="hsl(40 84% 58%)" />
        <text
          x={c.x + 5}
          y={c.y - 4}
          fill="hsl(40 20% 96%)"
          fontSize="6"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="1"
        >
          {c.name.toUpperCase()}
        </text>
      </g>
    ))}
  </svg>
);

export default FourCitiesMap;
