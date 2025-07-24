import { createContext } from "react";

interface PlayingViewContextProps {
  isOpen: boolean;
  isExpanded: boolean; // Thêm trạng thái mở rộng
  isFullscreen: boolean; // Add fullscreen state
  openPlayingView: () => void;
  closePlayingView: () => void;
  toggleExpandView: () => void; // Thêm hàm mở rộng/thu nhỏ view
  toggleFullscreen: () => void; // Add fullscreen toggle function
}

export const PlayingViewContext = createContext<
  PlayingViewContextProps | undefined
>(undefined);
