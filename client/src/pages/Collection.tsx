import { Download, Play, Shuffle } from "lucide-react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { PLAYLISTS_DATA, USER_DATA, IMAGES } from "../lib/constants";
import { Link } from "react-router-dom";

// Using the Liked Songs playlist (second playlist in the array)
const likedSongsPlaylist = PLAYLISTS_DATA[1];

export default function Collection() {
  return (
    <div className="min-h-screen text-white">
      <div className="flex items-end gap-6 p-8 bg-gradient-to-b from-[#5b3cac] to-[#261b41]">
        <div className="w-60 h-60 rounded-sm *:shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-violet-400 to-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-24 h-24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </div>
        </div>
        <div>
          <p className="text-white text-xs mb-5">Playlist</p>
          <h1 className="text-8xl font-bold mb-5">
            {likedSongsPlaylist.title}
          </h1>
          <div className="flex items-center justify-start">
            <Link to="/collection">
              <Button
                variant="link"
                className="p-0 font-bold text-sm cursor-pointer hover:underline"
              >
                {USER_DATA.name}
              </Button>
            </Link>
            <span className="bg-neutral-400 rounded-full mx-2 w-1 h-1"></span>
            <span className="text-neutral-400 text-sm">
              {likedSongsPlaylist.songCount} songs
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#1f1636] to-netral-950 pt-6">
        <div className="flex items-center gap-4 px-8">
          <Button className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-full w-14 h-14 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95">
            <Play className="size-6" />
          </Button>
          <Button
            variant="none"
            className="text-neutral-400 border-neutral-400 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 hover:text-white"
          >
            <Shuffle className="size-8" />
          </Button>
          <Button
            variant="none"
            className="text-neutral-400 border-neutral-400 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 hover:text-white"
          >
            <Download className="size-8" />
          </Button>
        </div>

        <ScrollArea className="mt-8 px-8">
          <Table className="w-full">
            <TableHeader className="text-neutral-400">
              <TableRow className="text-sm">
                <TableHead>#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Album</TableHead>
                <TableHead>Date added</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {likedSongsPlaylist.songs.map((song, index) => (
                <TableRow
                  key={song.id}
                  className="group hover:bg-neutral-800 transition-colors"
                >
                  <TableCell className="relative w-10 text-green-500 font-bold">
                    <span className="group-hover:opacity-0 transition-opacity duration-150">
                      {index + 1}
                    </span>
                    <button className="absolute left- top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white">
                      <Play className="size-3" />
                    </button>
                  </TableCell>

                  <TableCell className="flex items-center justify-start gap-3">
                    <div>
                      <img
                        src={song.image || IMAGES.DEFAULT_ALBUM_COVER}
                        alt="#"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <Link to={`/lyric/${song.id}`}>
                        <p className="font-bold text-white hover:underline">
                          {song.title}
                        </p>
                      </Link>
                      <Link to={`/artist/${song.id}`}>
                        <p className="text-neutral-400 text-sm hover:underline hover:text-white">
                          {song.artist}
                        </p>
                      </Link>
                    </div>
                  </TableCell>

                  <TableCell className="text-neutral-400">
                    <Link
                      to={`/album/${song.id}`}
                      className="hover:underline hover:text-white"
                    >
                      {song.title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {song.duration}
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {song.duration}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}
