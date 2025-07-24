import { Button } from "./ui/button";
import { ArrowLeft, Maximize2, MoreHorizontal, Maximize } from "lucide-react";
import { usePlayingView } from "../hooks/usePlayingView";
import { useEffect, useState } from "react";

import PlayerBar from "./PlayerBar";

export default function PlayingViewPanel() {
  const {
    closePlayingView,
    isExpanded,
    toggleExpandView,
    isFullscreen,
    toggleFullscreen,
  } = usePlayingView();
  const [showControls, setShowControls] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFullscreen) {
      const handleMouseMove = () => {
        setShowControls(true);
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(() => {
          setShowControls(false);
        }, 10000);

        setTimer(newTimer);
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Initial timer
      const initialTimer = setTimeout(() => {
        setShowControls(false);
      }, 10000);
      setTimer(initialTimer);

      // Clean up
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (timer) clearTimeout(timer);
        if (initialTimer) clearTimeout(initialTimer);
      };
    } else {
      // Always show controls when not in fullscreen
      setShowControls(true);
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
    }
  }, [isFullscreen, timer]);

  if (isFullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        onDoubleClick={toggleFullscreen}
      >
        {/* Main image taking full screen */}
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt="THERE'S NO ONE AT ALL"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div
          className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-6 flex items-center justify-between transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="text-white text-sm font-medium">
              Now Playing from Liked Songs
            </span>
          </div>
        </div>

        {/* Player controls at bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <PlayerBar />
        </div>
      </div>
    );
  }

  return (
    <aside
      className={`${
        isExpanded ? "w-full" : "w-[420px]"
      } flex flex-col bg-neutral-950 rounded-lg p-4 ${
        isExpanded ? "mx-0" : "ml-2"
      } h-full overflow-y-auto transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={closePlayingView}
            className="text-white hover:bg-neutral-800 cursor-pointer p-2 rounded-full"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <span className="text-white text-base font-bold">Liked Songs</span>
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full p-2"
          >
            <MoreHorizontal className="size-5" />
          </Button>
          {isExpanded && (
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full p-2"
              onClick={toggleFullscreen}
              title="Enter fullscreen"
            >
              <Maximize className="size-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full p-2"
            onClick={toggleExpandView}
            title={isExpanded ? "Exit full width view" : "Full width view"}
          >
            <Maximize2 className="size-4" />
          </Button>
        </div>
      </div>

      {isExpanded ? (
        <div className="flex flex-1 gap-6">
          {/* Left side - Video/Image */}
          <div className="flex-1 bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
              alt="Sơn Tùng M-TP"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ) : (
        // Original non-expanded layout
        <>
          {/* About the artist */}
          <div className="bg-neutral-900 p-4 rounded-md mb-6">
            <div className="text-xs text-neutral-400 mb-3">
              About the artist
            </div>
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb08ea7dd87501366f956b9b75"
                alt="Sơn Tùng M-TP"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Sơn Tùng M-TP</h3>
            <div className="text-neutral-400 text-sm mb-2">
              1,770,242 monthly listeners
            </div>
            <button className="bg-white text-black rounded-full px-6 py-1.5 text-sm font-bold hover:scale-105 transition-transform">
              Follow
            </button>

            <div className="mt-4 text-sm text-neutral-400">
              <p>
                Nguyễn Thanh Tùng (born July 5, 1994), known professionally as
                Sơn Tùng M-TP, is a Vietnamese singer, songwriter, producer, and
                actor. He is not only known as one of the most popular artists
                of V-pop (Vietnamese pop), but also the founder of M-TP
                Entertainment. His music...
              </p>
            </div>
          </div>

          {/* Credits */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-white text-lg font-bold">Credits</div>
              <button className="text-neutral-400 text-xs font-bold hover:text-white">
                Show all
              </button>
            </div>

            <div className="bg-neutral-900 p-3 rounded-md">
              <div className="text-white text-sm font-bold mb-1">
                Sơn Tùng M-TP
              </div>
              <div className="text-neutral-400 text-xs">
                Main Artist, Composer, Producer
              </div>

              <button className="mt-3 rounded-full text-white bg-neutral-800 px-5 py-1.5 text-sm font-bold">
                Follow
              </button>
            </div>
          </div>

          {/* Next in queue */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-white text-lg font-bold">Next in queue</div>
              <button className="text-neutral-400 text-xs font-bold hover:text-white">
                Open queue
              </button>
            </div>

            <div className="bg-neutral-900 p-3 rounded-md flex items-center gap-3">
              <img
                src="https://i.scdn.co/image/ab67616d00001e029c0b23192102b0458674f66b"
                alt="Chơi Đồ"
                className="w-12 h-12 rounded-md"
              />
              <div>
                <div className="text-white text-sm font-bold">Chơi Đồ</div>
                <div className="flex items-center gap-1 text-xs text-neutral-400">
                  <span>RPT MCK, Wxrdie, Sony Tran</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
