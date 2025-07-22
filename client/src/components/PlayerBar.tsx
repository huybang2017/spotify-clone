import {
  Maximize,
  MicVocal,
  MonitorSpeaker,
  Play,
  Repeat,
  Rows3,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

// --- Main PlayerBar Component ---
export default function PlayerBar() {
  return (
    <footer className="h-[90px] bg-black flex items-center justify-between px-4">
      {/* Song Info */}
      <div className="flex items-center gap-3 w-1/4">
        <div className="w-14 h-14 bg-neutral-800 rounded-md overflow-hidden">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt="THERE'S NO ONE AT ALL"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-white text-sm hover:underline cursor-pointer">
            THERE'S NO ONE AT ALL
          </p>
          <p className="text-xs text-neutral-400 hover:underline cursor-pointer">
            Sơn Tùng M-TP
          </p>
        </div>
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex gap-4 items-center">
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <Shuffle />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <SkipBack />
          </button>
          <button className="bg-white text-neutral-800 rounded-full p-2 hover:scale-105 transition-transform cursor-pointer">
            <Play className="size-4" />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <SkipForward />
          </button>
          <button className="text-neutral-400 hover:text-white cursor-pointer">
            <Repeat />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-2xl">
          <span className="text-xs text-neutral-400">1:02</span>
          <div className="flex-1 h-1 bg-neutral-600 rounded-full group">
            <div className="h-1 bg-white rounded-full w-[40%] group-hover:bg-green-500"></div>
          </div>
          <span className="text-xs text-neutral-400">2:52</span>
        </div>
      </div>

      {/* Volume & Other Controls */}
      <div className="flex items-center gap-3 w-1/4 justify-end text-neutral-400">
        <button className="hover:text-white cursor-pointer">
          <MicVocal />
        </button>
        <button className="hover:text-white cursor-pointer">
          <Rows3 />
        </button>
        <button className="hover:text-white cursor-pointer">
          <MonitorSpeaker />
        </button>
        <div className="flex items-center gap-2">
          <button className="hover:text-white cursor-pointer">
            <Volume2 />
          </button>
          <div className="w-24 h-1 bg-neutral-600 rounded-full group">
            <div className="h-1 bg-white rounded-full w-full group-hover:bg-green-500"></div>
          </div>
        </div>
        <button className="hover:text-white cursor-pointer">
          <Maximize />
        </button>
      </div>
    </footer>
  );
}
