import { createContext, useContext } from "react";

export interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  duration: string;
  audioUrl?: string;
}

interface AudioContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  isMuted: boolean;
  currentTime: string;
  duration: string;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  seekTo: (position: number) => void;
  setVolume: (level: number) => void;
  toggleMute: () => void;
  nextSong: () => void;
  prevSong: () => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);

// Thêm hook useAudio
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
