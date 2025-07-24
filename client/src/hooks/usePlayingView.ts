import { useContext } from "react";
import { PlayingViewContext } from "../contexts/PlayingViewContext";

export const usePlayingView = () => {
  const context = useContext(PlayingViewContext);

  if (!context) {
    throw new Error("usePlayingView must be used within a PlayingViewProvider");
  }
  return context;
};
