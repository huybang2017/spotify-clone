import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { SpotifyLogo } from "./icons";
import { Bell, Download, Home, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full h-[60px] px-2 bg-black/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex items-center justify-start ml-6">
        <Link to="/" className="hidden sm:block">
          <SpotifyLogo />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="size-5" />
        </Button>
      </div>

      <div className="flex-1 flex justify-center items-center gap-2 sm:gap-4 text-neutral-300 mx-2">
        <Link to="/" className="hidden sm:block">
          <Button
            size="icon"
            className={`rounded-full ${
              location.pathname === "/"
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white"
            } p-4 sm:p-6`}
          >
            <Home className="size-4 sm:size-6" />
          </Button>
        </Link>
        <div className="relative w-full max-w-lg">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <Search className="size-4" />
          </div>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full bg-[#242424] text-white placeholder-neutral-400 rounded-full py-2 sm:py-3 pl-8 sm:pl-10 pr-2 sm:pr-4 text-xs sm:text-base border border-transparent hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 sm:gap-2">
        <Button className="hidden md:flex rounded-full font-bold bg-white text-black hover:scale-105 text-xs px-2 sm:px-4">
          Explore Premium
        </Button>
        <Button
          variant="default"
          className="hidden sm:flex rounded-full bg-black text-white hover:bg-neutral-800 font-bold items-center border border-neutral-600 hover:scale-105 text-xs px-2 sm:px-4"
        >
          <Download className="mr-1 size-3 sm:size-4" />
          <span className="hidden sm:inline">Install App</span>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-neutral-800 hover:bg-neutral-700 p-1 sm:p-2"
        >
          <Bell className="size-4" />
        </Button>
        <Link to="/collection">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black cursor-pointer">
            Y
          </div>
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-neutral-900 p-4 flex flex-col gap-2 md:hidden z-40">
          <Link to="/" className="w-full">
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                location.pathname === "/"
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Home className="mr-2 size-5" /> Home
            </Button>
          </Link>
          <Link to="/library" className="w-full">
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                location.pathname === "/library"
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Search className="mr-2 size-5" /> Search
            </Button>
          </Link>
          <div className="border-t border-neutral-700 my-2"></div>
          <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium">
            Explore Premium
          </Button>
          <Button
            variant="outline"
            className="w-full text-white border-neutral-600"
          >
            <Download className="mr-2 size-4" /> Install App
          </Button>
        </div>
      )}
    </header>
  );
}
