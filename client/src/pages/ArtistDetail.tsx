import { Play, Shuffle } from "lucide-react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table";
import { useColor } from "color-thief-react";
import tinycolor from "tinycolor2";
import { ARTISTS_DATA } from "../lib/constants";
import { Link } from "react-router-dom";

// Using the first artist from constants
const artist = ARTISTS_DATA[0];
const imageUrl = artist.image;

export default function ArtistDetail() {
  // In a real app, you would fetch the artist based on the ID
  // For now, we'll use the first artist from constants

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
          <div className="w-40 h-40 sm:w-48 md:w-60 sm:h-48 md:h-60 rounded-full overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="artist"
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white text-xs mb-2 sm:mb-5">Artist</p>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-2 sm:mb-5">
              {artist.name}
            </h1>
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start">
              <span className="text-neutral-400 text-sm">
                Monthly listeners: 12,345,678
              </span>
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
              variant="outline"
              className="border-white text-white text-sm sm:text-base hover:text-white border-solid border-[1px] hover:border-white"
            >
              Follow
            </Button>
            <Button
              variant="none"
              className="text-neutral-400 border-neutral-400 cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 hover:text-white"
            >
              <Shuffle className="size-6 sm:size-8" />
            </Button>
          </div>

          {/* Popular Section - Mobile View */}
          <section className="px-4 mt-6 sm:hidden">
            <h2 className="text-xl font-bold mb-4">Popular</h2>
            {artist.popularSongs.map((song, index) => (
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
                        <Link to={`/lyric/${song.id}`}>
                          <p className="font-bold text-white text-sm">
                            {song.title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-neutral-400 text-xs">{song.duration}</div>
              </div>
            ))}
          </section>

          {/* Popular Section - Desktop View */}
          <section className="px-8 mt-8 hidden sm:block">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <ScrollArea>
              <Table className="w-full">
                <TableBody>
                  {artist.popularSongs.map((song, index) => (
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
                          <Link to={`/lyric/${song.id}`}>
                            <p className="font-bold text-white hover:underline">
                              {song.title}
                            </p>
                          </Link>
                        </div>
                      </TableCell>

                      <TableCell className="text-neutral-400">
                        {song.duration}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </section>

          {/* Discography Section */}
          <section className="px-4 sm:px-8 mt-8 sm:mt-12">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">Discography</h2>
              <Link
                to="/library"
                className="text-neutral-400 font-bold text-xs sm:text-sm hover:underline"
              >
                Show all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
              {/* For now just display a placeholder album */}
              <Link to={`/album/${artist.id}`}>
                <div className="p-3 sm:p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer group">
                  <img
                    src={artist.popularSongs[0]?.image || imageUrl}
                    alt="Album cover"
                    className="w-full h-auto rounded-md mb-2 sm:mb-4 shadow-lg"
                  />
                  <h3 className="font-bold text-white text-sm sm:text-base truncate">
                    Artist Album
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                    Album · 2023
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section className="px-4 sm:px-8 mt-8 sm:mt-12 pb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">About</h2>
            <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row">
              <div className="w-full sm:max-w-3xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-6">
                  {artist.name} is a popular artist with millions of monthly
                  listeners. Their unique sound blends different genres and has
                  gained them fans worldwide.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
