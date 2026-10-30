import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureUtm } from "./lib/utm";

captureUtm();

createRoot(document.getElementById("root")!).render(<App />);
