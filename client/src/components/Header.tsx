import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SpotifyLogo } from "./icons";
import { Bell, Download, Home, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-[60px] px-2 bg-black/80 backdrop-blur-sm">
      <div className="w-1/4">
        <Link to="/">
          <SpotifyLogo />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4 text-neutral-300">
        <Button
          size="icon"
          className="rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white p-6"
        >
          <Home className="size-6" />
        </Button>
        <div className="relative w-full max-w-lg">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <Search />
          </div>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full bg-[#242424] text-white placeholder-neutral-400 rounded-full py-3 pl-10 pr-4 border border-transparent hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end gap-2">
        <Button className="rounded-full font-bold bg-white text-black hover:scale-105">
          Explore Premium
        </Button>
        <Button
          variant="default"
          className="rounded-full bg-black text-white hover:bg-neutral-800 font-bold flex items-center border border-neutral-600 hover:scale-105"
        >
          <Download />
          Install App
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-neutral-800 hover:bg-neutral-700"
        >
          <Bell />
        </Button>
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black">
          Y
        </div>
      </div>
    </header>
  );
}
