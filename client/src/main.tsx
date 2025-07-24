import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./contexts/providers/SidebarProvider.tsx";
import { PlayingViewProvider } from "./contexts/providers/PlayingViewProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <PlayingViewProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </PlayingViewProvider>
);
