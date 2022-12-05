import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GiftsProvider } from "./context/GiftsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GiftsProvider>
      <App />
    </GiftsProvider>
  </React.StrictMode>
);
