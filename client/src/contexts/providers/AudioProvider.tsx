import { useEffect, useRef, useState } from "react";
import { AudioContext as AudioContextAPI } from "../AudioContext";
import { CURRENTLY_PLAYING, AUDIO_URLS } from "../../lib/constants";
import type { Song } from "../AudioContext";

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Khởi tạo audio element
  useEffect(() => {
    audioRef.current = new Audio();

    // Thiết lập bài hát mặc định
    const defaultSong = {
      ...CURRENTLY_PLAYING,
      audioUrl: AUDIO_URLS.THERES_NO_ONE_AT_ALL, // Sử dụng URL nhạc thật
    };

    setCurrentSong(defaultSong);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Cập nhật audio source khi currentSong thay đổi
  useEffect(() => {
    if (audioRef.current && currentSong?.audioUrl) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();

      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSong]);

  // Xử lý sự kiện audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const total = audio.duration || 0;
      setProgress(total ? (current / total) * 100 : 0);
      setCurrentTime(formatTime(current));
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(audio.duration || 0));
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
      // Có thể thêm logic để tự động phát bài tiếp theo ở đây
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Xử lý play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Xử lý âm lượng
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playSong = (song: Song) => {
    let audioUrl;

    // Xác định URL audio dựa vào title của bài hát
    switch (song.title) {
      case "THERE'S NO ONE AT ALL":
        audioUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL;
        break;
      case "Chơi Đồ":
        audioUrl = AUDIO_URLS.CHOI_DO;
        break;
      case "Nắng có mang em về":
        audioUrl = AUDIO_URLS.NANG_CO_MANG_EM_VE;
        break;
      case "giá như":
        audioUrl = AUDIO_URLS.GIA_NHU;
        break;
      case "Từng Ngày Yêu Em":
        audioUrl = AUDIO_URLS.TUNG_NGAY_YEU_EM;
        break;
      default:
        audioUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL; // Default URL
    }

    setCurrentSong({
      ...song,
      audioUrl,
    });
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const seekTo = (position: number) => {
    if (audioRef.current) {
      const seekTime = (position / 100) * (audioRef.current.duration || 0);
      audioRef.current.currentTime = seekTime;
    }
  };

  const setVolume = (level: number) => {
    setVolumeState(level);
    if (level > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const nextSong = () => {
    // Giả lập chuyển bài tiếp theo
    console.log("Next song");
    // Thực tế bạn sẽ cần logic để lấy bài hát tiếp theo từ playlist

    // Demo - chuyển sang một bài khác để thử nghiệm
    if (currentSong) {
      const nextSongId = (currentSong.id % 5) + 1; // Chuyển qua 5 bài trong AUDIO_URLS
      let nextUrl;
      let nextTitle;

      switch (nextSongId) {
        case 1:
          nextUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL;
          nextTitle = "THERE'S NO ONE AT ALL";
          break;
        case 2:
          nextUrl = AUDIO_URLS.CHOI_DO;
          nextTitle = "Chơi Đồ";
          break;
        case 3:
          nextUrl = AUDIO_URLS.NANG_CO_MANG_EM_VE;
          nextTitle = "Nắng có mang em về";
          break;
        case 4:
          nextUrl = AUDIO_URLS.GIA_NHU;
          nextTitle = "giá như";
          break;
        case 5:
          nextUrl = AUDIO_URLS.TUNG_NGAY_YEU_EM;
          nextTitle = "Từng Ngày Yêu Em";
          break;
        default:
          nextUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL;
          nextTitle = "THERE'S NO ONE AT ALL";
      }

      setCurrentSong({
        ...currentSong,
        id: nextSongId,
        title: nextTitle,
        audioUrl: nextUrl,
      });

      // Tự động phát bài tiếp theo
      setIsPlaying(true);
    }
  };

  const prevSong = () => {
    // Giả lập chuyển bài trước đó
    console.log("Previous song");
    // Thực tế bạn sẽ cần logic để lấy bài hát trước từ playlist

    // Demo - chuyển sang một bài khác để thử nghiệm
    if (currentSong) {
      const prevSongId = currentSong.id <= 1 ? 5 : currentSong.id - 1;
      let prevUrl;
      let prevTitle;

      switch (prevSongId) {
        case 1:
          prevUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL;
          prevTitle = "THERE'S NO ONE AT ALL";
          break;
        case 2:
          prevUrl = AUDIO_URLS.CHOI_DO;
          prevTitle = "Chơi Đồ";
          break;
        case 3:
          prevUrl = AUDIO_URLS.NANG_CO_MANG_EM_VE;
          prevTitle = "Nắng có mang em về";
          break;
        case 4:
          prevUrl = AUDIO_URLS.GIA_NHU;
          prevTitle = "giá như";
          break;
        case 5:
          prevUrl = AUDIO_URLS.TUNG_NGAY_YEU_EM;
          prevTitle = "Từng Ngày Yêu Em";
          break;
        default:
          prevUrl = AUDIO_URLS.THERES_NO_ONE_AT_ALL;
          prevTitle = "THERE'S NO ONE AT ALL";
      }

      setCurrentSong({
        ...currentSong,
        id: prevSongId,
        title: prevTitle,
        audioUrl: prevUrl,
      });

      // Tự động phát bài trước đó
      setIsPlaying(true);
    }
  };

  const value = {
    currentSong,
    isPlaying,
    progress,
    volume,
    isMuted,
    currentTime,
    duration,
    playSong,
    togglePlay,
    seekTo,
    setVolume,
    toggleMute,
    nextSong,
    prevSong,
  };

  return (
    <AudioContextAPI.Provider value={value}>
      {children}
    </AudioContextAPI.Provider>
  );
};

// Thêm default export
export default AudioProvider;
