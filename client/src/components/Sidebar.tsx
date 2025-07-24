import { Button } from "./ui/button";
import {
  AlignJustify,
  Maximize2,
  Pin,
  Plus,
  Search,
  SquareLibrary,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { useSidebar } from "../hooks/useSidebar";

function LibraryItem({
  title,
  subtitle,
  image,
  type = "playlist",
}: {
  title: string;
  subtitle: string;
  image: string;
  type?: "playlist" | "artist";
}) {
  const isLikedSongs = title === "Liked Songs";
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800/80 cursor-pointer ${
        isLikedSongs ? "bg-neutral-800" : ""
      }`}
    >
      <div
        className={`w-12 h-12 flex-shrink-0 ${
          type === "artist" ? "rounded-full" : "rounded"
        } overflow-hidden`}
      >
        {isLikedSongs ? (
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div>
        <p
          className={`font-semibold ${
            isLikedSongs ? "text-green-500" : "text-white"
          } truncate`}
        >
          {title}
        </p>
        <div className="flex items-center gap-1">
          {isLikedSongs && <Pin className="size-3" />}
          <p className="text-sm text-neutral-400 truncate">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [openSearch, setOpenSearch] = useState(false);
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const libraryItems = [
    {
      title: "Liked Songs",
      subtitle: "Playlist • 17 songs",
      image: "",
      type: "playlist" as const,
    },
    {
      title: "FKJ",
      subtitle: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      type: "artist" as const,
    },
    {
      title: "Supreme Hip Hop",
      subtitle: "Playlist • Supreme Playlists",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      type: "playlist" as const,
    },
    {
      title: "UK Drill Mix",
      subtitle: "Playlist • Redlist - Global Songs",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      type: "playlist" as const,
    },
    {
      title: "BCTM",
      subtitle: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      type: "artist" as const,
    },
    {
      title: "Blacka",
      subtitle: "Artist",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      type: "artist" as const,
    },
  ];

  return (
    <aside
      className={`flex flex-col group/sidebar transition-all duration-300 ${
        isOpen ? "w-[420px]" : "w-[80px]"
      }`}
    >
      <div className="bg-neutral-950 rounded-lg p-2 flex-1 flex flex-col relative">
        {!isOpen ? (
          <>
            <div className="flex items-center justify-center mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={openSidebar}
                className="text-white hover:bg-neutral-800 cursor-pointer"
              >
                <SquareLibrary className="size-7" />
              </Button>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto">
              {libraryItems.map((item) => (
                <Button
                  variant="ghost"
                  key={item.title}
                  className={`w-16 h-16 flex-shrink-0 mx-auto hover:bg-neutral-800/60 p-2 rounded cursor-pointer
                  }`}
                >
                  <img
                    src={
                      item.title === "Liked Songs"
                        ? "https://misc.scdn.co/liked-songs/liked-songs-300.png"
                        : item.image
                    }
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </Button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="pb-5 flex items-center justify-between">
              <Button
                variant="none"
                onClick={closeSidebar}
                className="group relative flex items-center transition-all duration-300 ease-in-out cursor-pointer p-0!"
              >
                <Button
                  variant="none"
                  className="absolute left-0 opacity-0 -translate-x-4 transition-all duration-300 ease-in-out group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0 group-hover/sidebar:text-white text-neutral-400 cursor-pointer"
                >
                  <SquareLibrary />
                </Button>

                <span className="ml-0 group-hover/sidebar:ml-9 transition-all duration-300 ease-in-out text-white font-bold text-base">
                  Your Library
                </span>
              </Button>
              <div className="flex items-center gap-2">
                <Button className="rounded-full bg-neutral-900 text-white group hover:bg-neutral-800 cursor-pointer">
                  <Plus className="size-5 text-neutral-500 group-hover:text-white" />
                  <span className="font-bold text-xs">Create</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-neutral-500 hover:text-white cursor-pointer"
                >
                  <Maximize2 />
                </Button>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Button className="rounded-full px-3 py-2 h-auto text-xs bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer">
                  Playlists
                </Button>
                <Button className="rounded-full px-3 py-2 h-auto text-xs bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer">
                  Artists
                </Button>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-neutral-800 transition-all duration-300"
                  onClick={() => setOpenSearch((prev) => !prev)}
                >
                  <Search />
                </Button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSearch ? "w-48 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <Input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="px-3 text-white border-none focus-visible:border-neutral-900 focus-visible:ring-0 bg-neutral-800 rounded-md h-8"
                  />
                </div>
              </div>
              <button className="flex items-center gap-1 text-neutral-400 hover:text-white group text-xs font-semibold transition-transform duration-100 ease-in-out hover:scale-105">
                Recents
                <AlignJustify className="size-5" />
              </button>
            </div>

            <div className="overflow-y-auto mt-2 pr-2 flex-1">
              {libraryItems.map((item) => (
                <LibraryItem key={item.title} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
