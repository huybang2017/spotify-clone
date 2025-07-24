import {
  Mic2,
  Pause,
  Repeat,
  SkipBack,
  SkipForward,
  ListMusic,
  Volume2,
  Heart,
  Laptop2,
  Shuffle,
  Speaker,
  Maximize,
  Minimize,
} from "lucide-react";
import { usePlayingView } from "../hooks/usePlayingView";

export default function PlayerBar() {
  const { isOpen, openPlayingView, isFullscreen, toggleFullscreen } =
    usePlayingView();

  return (
    <footer className="h-[90px] flex items-center justify-between px-3">
      <div className="flex items-center gap-3 w-[30%]">
        <div className="w-14 h-14 bg-neutral-800 rounded overflow-hidden flex-shrink-0">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt="THERE'S NO ONE AT ALL"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-3">
          <p className="font-semibold text-white text-sm hover:underline cursor-pointer truncate">
            THERE'S NO ONE AT ALL
          </p>
          <p className="text-xs text-neutral-400 hover:text-white hover:underline cursor-pointer truncate">
            Sơn Tùng M-TP
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#1ed760] hover:text-white">
            <Heart size={16} fill="#1ed760" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 max-w-[45%] w-full">
        <div className="flex gap-4 items-center">
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <Shuffle size={20} />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <SkipBack size={20} />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center">
            <Pause className="size-4 text-black" />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <SkipForward size={20} />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <Repeat size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-neutral-400 flex-shrink-0">1:02</span>
          <div className="flex-1 h-1 bg-neutral-600 rounded-full group relative">
            <div className="h-1 bg-white rounded-full w-[40%] group-hover:bg-[#1ed760] relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          <span className="text-xs text-neutral-400 flex-shrink-0">2:52</span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-[30%] justify-end">
        <button
          onClick={() => openPlayingView()}
          className="text-neutral-400 hover:text-white p-1"
        >
          <Speaker size={16} />
        </button>
        <button className="text-neutral-400 hover:text-white p-1">
          <Mic2 size={16} />
        </button>
        <button className="text-neutral-400 hover:text-white p-1">
          <ListMusic size={16} />
        </button>
        <button className="text-neutral-400 hover:text-white p-1">
          <Laptop2 size={16} />
        </button>
        <div className="flex items-center gap-1 mr-3">
          <button className="text-neutral-400 hover:text-white p-1">
            <Volume2 size={16} />
          </button>
          <div className="w-24 h-1 bg-neutral-600 rounded-full group relative">
            <div className="h-1 bg-white rounded-full w-3/4 group-hover:bg-[#1ed760] relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        {isOpen && (
          <button
            onClick={toggleFullscreen}
            className="text-neutral-400 hover:text-white p-1"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        )}
      </div>
    </footer>
  );
}
