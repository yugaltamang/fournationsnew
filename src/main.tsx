import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureUtm } from "./lib/utm";
import { detectVisitorCountry } from "./lib/visitor-country";

captureUtm();
detectVisitorCountry();

createRoot(document.getElementById("root")!).render(<App />);
