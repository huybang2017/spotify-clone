import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";
import { Outlet } from "react-router-dom";
import PlayingViewPanel from "../components/PlayingViewPanel";
import { usePlayingView } from "../hooks/usePlayingView";

export default function SpotifyLayout() {
  const { isOpen, isExpanded } = usePlayingView();

  return (
    <div className="dark h-screen w-screen flex flex-col bg-black text-white overflow-hidden">
      <Header />
      <div className="flex-1 flex gap-2 p-2 overflow-hidden">
        {/* Sidebar hiển thị khi không mở rộng panel */}
        {(!isOpen || !isExpanded) && <Sidebar />}

        {/* Main content hiển thị khi không mở PlayingViewPanel hoặc không mở rộng */}
        {(!isOpen || !isExpanded) && (
          <main className="flex-1 bg-[#121212] rounded-lg overflow-y-auto">
            <div>
              <Outlet />
            </div>
          </main>
        )}

        {/* PlayingViewPanel với kích thước phụ thuộc vào isExpanded */}
        {isOpen && <PlayingViewPanel />}
      </div>
      <PlayerBar />
    </div>
  );
}
