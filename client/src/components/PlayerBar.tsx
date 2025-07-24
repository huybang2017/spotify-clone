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
  Play,
  VolumeX,
  Volume1,
} from "lucide-react";
import { usePlayingView } from "../hooks/usePlayingView";
import { useState } from "react";
import { useAudio } from "../hooks/useAudio";

export default function PlayerBar() {
  const { isOpen, openPlayingView, isFullscreen, toggleFullscreen } =
    usePlayingView();
  const {
    currentSong,
    isPlaying,
    progress,
    volume,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    seekTo,
    setVolume,
    toggleMute,
    nextSong,
    prevSong,
  } = useAudio();

  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = (x / width) * 100;
    seekTo(Math.min(Math.max(percent, 0), 100));
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingProgress(true);
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = (x / width) * 100;
    setCurrentProgress(percent);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = e.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(Math.max(x / width, 0), 1);
    setVolume(percent);
  };

  // Phụ trợ UI cho thanh âm lượng
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX size={16} />;
    if (volume < 0.5) return <Volume1 size={16} />;
    return <Volume2 size={16} />;
  };

  return (
    <footer className="h-[90px] flex items-center justify-between px-3 bg-neutral-900 border-t border-neutral-800 sticky bottom-0 z-30">
      {/* Song info - Left section */}
      <div className="flex items-center gap-1 sm:gap-3 w-1/3 sm:w-[30%] min-w-0">
        {currentSong && (
          <>
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-neutral-800 rounded overflow-hidden flex-shrink-0">
              <img
                src={currentSong.image}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-1 sm:mx-3 min-w-0">
              <p className="font-semibold text-white text-xs sm:text-sm hover:underline cursor-pointer truncate">
                {currentSong.title}
              </p>
              <p className="text-[10px] sm:text-xs text-neutral-400 hover:text-white hover:underline cursor-pointer truncate">
                {currentSong.artist}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-[#1ed760] hover:text-white">
                <Heart size={16} fill="#1ed760" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Playback controls - Center section */}
      <div className="flex flex-col items-center gap-1 w-1/3 sm:max-w-[45%] sm:w-full">
        <div className="flex gap-2 sm:gap-4 items-center">
          <button className="hidden sm:block text-neutral-400 hover:text-white cursor-pointer">
            <Shuffle size={16} />
          </button>
          <button
            className="text-neutral-400 hover:text-white cursor-pointer"
            onClick={prevSong}
          >
            <SkipBack size={16} />
          </button>
          <button
            className="bg-white rounded-full p-1 sm:p-2 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="size-3 sm:size-4 text-black" />
            ) : (
              <Play className="size-3 sm:size-4 text-black" />
            )}
          </button>
          <button
            className="text-neutral-400 hover:text-white cursor-pointer"
            onClick={nextSong}
          >
            <SkipForward size={16} />
          </button>
          <button className="hidden sm:block text-neutral-400 hover:text-white cursor-pointer">
            <Repeat size={16} />
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 w-full">
          <span className="text-xs text-neutral-400 flex-shrink-0">
            {currentTime}
          </span>
          <div
            className="flex-1 h-1 bg-neutral-600 rounded-full group relative cursor-pointer"
            onClick={handleProgressChange}
            onMouseDown={handleProgressMouseDown}
          >
            <div
              className="h-1 bg-white rounded-full group-hover:bg-[#1ed760] relative"
              style={{
                width: `${isDraggingProgress ? currentProgress : progress}%`,
              }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          <span className="text-xs text-neutral-400 flex-shrink-0">
            {duration}
          </span>
        </div>
      </div>

      {/* Right controls section */}
      <div className="flex items-center gap-1 sm:gap-2 w-1/3 sm:w-[30%] justify-end">
        <button
          onClick={() => openPlayingView()}
          className="text-neutral-400 hover:text-white p-1"
        >
          <Speaker size={14} />
        </button>
        <button className="hidden sm:block text-neutral-400 hover:text-white p-1">
          <Mic2 size={16} />
        </button>
        <button className="hidden md:block text-neutral-400 hover:text-white p-1">
          <ListMusic size={16} />
        </button>
        <button className="hidden md:block text-neutral-400 hover:text-white p-1">
          <Laptop2 size={16} />
        </button>
        <div className="hidden sm:flex items-center gap-1 mr-3">
          <button
            className="text-neutral-400 hover:text-white p-1"
            onClick={toggleMute}
          >
            {getVolumeIcon()}
          </button>
          <div
            className="w-16 md:w-24 h-1 bg-neutral-600 rounded-full group relative cursor-pointer"
            onClick={handleVolumeChange}
          >
            <div
              className="h-1 bg-white rounded-full group-hover:bg-[#1ed760] relative"
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        {isOpen && (
          <button
            onClick={toggleFullscreen}
            className="text-neutral-400 hover:text-white p-1"
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </button>
        )}
      </div>
    </footer>
  );
}
