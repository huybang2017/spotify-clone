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
import { useColor } from "color-thief-react";
import tinycolor from "tinycolor2";
import { PLAYLISTS_DATA } from "../lib/constants";
import { Link } from "react-router-dom";

// Using the first playlist from constants
const playlist = PLAYLISTS_DATA[0];
const imageUrl = playlist.image;

export default function PlaylistDetail() {
  // In a real app, you would fetch the playlist based on the ID
  // For now, we'll use the first playlist from constants

  const { data: dominantColor } = useColor(imageUrl, "hex", {
    crossOrigin: "anonymous",
  });

  const darkGradient = dominantColor
    ? `linear-gradient(to bottom, ${tinycolor(dominantColor)
        .darken(15)
        .toHexString()}, ${tinycolor(dominantColor).darken(30).toHexString()})`
    : `linear-gradient(to bottom, #444, #1a1a1a)`;

  const lightGradient = dominantColor
    ? `linear-gradient(to bottom, ${tinycolor(dominantColor)
        .lighten(20)
        .toHexString()}, ${tinycolor(dominantColor).lighten(5).toHexString()})`
    : `linear-gradient(to bottom, #666, #1a1a1a)`;

  const lightGradientUnder = dominantColor
    ? `linear-gradient(to bottom, ${tinycolor(dominantColor)
        .darken(100)
        .toHexString()}, #1a1a1a)`
    : `linear-gradient(to bottom, #2a2a2a, #1a1a1a)`;

  const darkGradientUnder = dominantColor
    ? `linear-gradient(to bottom, ${tinycolor(dominantColor)
        .darken(20)
        .toHexString()}, #121212)`
    : `linear-gradient(to bottom, #1f1f1f, #121212)`;

  return (
    <div className="min-h-screen text-white relative overflow-hidden pb-24 md:pb-10">
      {/* --- Header Section --- */}
      <div className="relative z-0">
        <div
          className="absolute inset-0 z-0"
          style={{ background: lightGradient }}
        />
        <div
          className="absolute inset-0 z-10 opacity-90"
          style={{ background: darkGradient }}
        />

        <div className="relative z-20 flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 p-4 sm:p-8">
          <div className="w-40 h-40 sm:w-48 md:w-60 sm:h-48 md:h-60 rounded-sm overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="playlist"
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white text-xs mb-2 sm:mb-5">Playlist</p>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-2 sm:mb-5">
              {playlist.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start">
              <Link to="/collection">
                <Button
                  variant="link"
                  className="p-0 font-bold text-sm cursor-pointer hover:underline"
                >
                  {playlist.creator}
                </Button>
              </Link>
              <div className="flex items-center">
                <span className="hidden sm:block bg-neutral-400 rounded-full mx-2 w-1 h-1"></span>
                <span className="text-neutral-400 text-sm">
                  {playlist.songCount} songs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="relative pt-4 sm:pt-6">
        <div
          className="absolute inset-0 z-0"
          style={{ background: lightGradientUnder }}
        />
        <div
          className="absolute inset-0 z-10 opacity-90"
          style={{ background: darkGradientUnder }}
        />

        <div className="relative z-20">
          <div className="flex items-center gap-2 sm:gap-4 px-4 sm:px-8 justify-center sm:justify-start">
            <Button className="bg-green-500 hover:bg-green-400 text-black font-bold text-md sm:text-lg rounded-full w-10 h-10 sm:w-14 sm:h-14 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95">
              <Play className="size-4 sm:size-6" />
            </Button>
            <Button
              variant="none"
              className="text-neutral-400 border-neutral-400 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 hover:text-white"
            >
              <Shuffle className="size-6 sm:size-8" />
            </Button>
            <Button
              variant="none"
              className="text-neutral-400 border-neutral-400 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 hover:text-white"
            >
              <Download className="size-6 sm:size-8" />
            </Button>
          </div>

          {/* Mobile view for songs */}
          <div className="sm:hidden mt-4 px-4">
            {playlist.songs.map((song, index) => (
              <div
                key={song.id}
                className="flex items-center justify-between py-2 border-b border-neutral-800 group hover:bg-neutral-800/50 rounded-md px-2"
              >
                <div className="flex items-center">
                  <span className="text-neutral-400 w-6 text-sm group-hover:hidden">
                    {index + 1}
                  </span>
                  <Play className="size-4 text-white hidden group-hover:block" />
                  <div className="ml-2">
                    <div className="flex items-center">
                      <img
                        src={song.image}
                        alt="#"
                        className="w-8 h-8 object-cover mr-2"
                      />
                      <div>
                        <Link to={`/album/${song.id}`}>
                          <p className="font-bold text-white text-sm">
                            {song.title}
                          </p>
                        </Link>
                        <Link to={`/artist/${song.id}`}>
                          <p className="text-xs text-neutral-400">
                            {song.artist}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-neutral-400 text-xs">{song.duration}</div>
              </div>
            ))}
          </div>

          {/* Desktop view for songs */}
          <ScrollArea className="mt-8 px-8 hidden sm:block">
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
                {playlist.songs.map((song, index) => (
                  <TableRow
                    key={song.id}
                    className="group hover:bg-neutral-800 transition-colors"
                  >
                    <TableCell className="relative w-10 text-green-500 font-bold">
                      <span className="group-hover:opacity-0 transition-opacity duration-150">
                        {index + 1}
                      </span>
                      <button className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white">
                        <Play className="size-3" />
                      </button>
                    </TableCell>

                    <TableCell className="flex items-center justify-start gap-3">
                      <div>
                        <img
                          src={song.image}
                          alt="#"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div>
                        <Link to={`/album/${song.id}`}>
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
    </div>
  );
}
