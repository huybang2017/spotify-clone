import { useEffect, useState, type ReactNode } from "react";
import { PlayingViewContext } from "../PlayingViewContext";

export const PlayingViewProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openPlayingView = () => setIsOpen(true);
  const closePlayingView = () => setIsOpen(false);

  const toggleExpandView = () => setIsExpanded((prev) => !prev);

  const toggleFullscreen = () => {
    const docEl = document.documentElement;

    if (!document.fullscreenElement) {
      docEl.requestFullscreen?.().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.error("Failed to exit fullscreen:", err);
      });
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  return (
    <PlayingViewContext.Provider
      value={{
        isOpen,
        isExpanded,
        isFullscreen,
        openPlayingView,
        closePlayingView,
        toggleExpandView,
        toggleFullscreen,
      }}
    >
      {children}
    </PlayingViewContext.Provider>
  );
};
