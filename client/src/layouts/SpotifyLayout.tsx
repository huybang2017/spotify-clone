import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";
import { Outlet, useLocation } from "react-router-dom";
import LikedSongsPanel from "../components/LikedSongsPanel";

export default function SpotifyLayout() {
  const location = useLocation();
  const isLikedPage = location.pathname === "/liked";

  return (
    <div className="dark h-screen w-screen flex flex-col bg-black text-white overflow-hidden">
      {/* --- Top Section: Header --- */}
      <Header />
      <div className="flex-1 flex gap-2 p-2 overflow-hidden">
        {/* --- Left Column: Sidebar (Library) --- */}
        <Sidebar />
        {/* --- Right Column: Main Content --- */}
        <main className="flex-1 bg-[#121212] rounded-lg overflow-y-auto">
          <div>
            <Outlet />
          </div>
        </main>
        {/* --- LikedSongsPanel chỉ hiển thị khi ở /liked --- */}
        {isLikedPage && <LikedSongsPanel />}
      </div>
      {/* --- Bottom Section: Player Bar --- */}
      <PlayerBar />
    </div>
  );
}
