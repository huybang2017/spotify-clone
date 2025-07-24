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

const imageUrl =
  "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228";

const fakeSongs = [
  {
    id: 1,
    title: "THERE'S NO ONE AT ALL",
    artist: "Sơn Tùng M-TP",
    duration: "2:52",
  },
  {
    id: 2,
    title: "Chơi Đồ",
    artist: "RPT MCK, Wxrdie, Sony Tran",
    duration: "2:07",
  },
  {
    id: 3,
    title: "Nắng có mang em về",
    artist: "Shartnuss, Tr.D, Phankeo",
    duration: "4:14",
  },
  {
    id: 4,
    title: "giá như",
    artist: "SOOBIN",
    duration: "3:43",
  },
  {
    id: 5,
    title: "Từng Ngày Yêu Em",
    artist: "buitruonglinh",
    duration: "3:45",
  },
];

export default function AlbumDetail() {
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
    <div className="min-h-screen text-white relative overflow-hidden">
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

        <div className="relative z-20 flex items-end gap-6 p-8">
          <div className="w-60 h-60 rounded-sm overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="album"
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white text-xs mb-5">Album</p>
            <h1 className="text-8xl font-bold mb-5">Album Name</h1>
            <div className="flex items-center justify-start">
              <Button
                variant="link"
                className="p-0 font-bold text-sm cursor-pointer"
              >
                Sơn Tùng M-TP
              </Button>
              <span className="bg-neutral-400 rounded-full mx-2 w-1 h-1"></span>
              <span className="text-neutral-400 text-sm">2023</span>
              <span className="bg-neutral-400 rounded-full mx-2 w-1 h-1"></span>
              <span className="text-neutral-400 text-sm">
                {fakeSongs.length} songs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="relative pt-6">
        <div
          className="absolute inset-0 z-0"
          style={{ background: lightGradientUnder }}
        />
        <div
          className="absolute inset-0 z-10 opacity-90"
          style={{ background: darkGradientUnder }}
        />

        <div className="relative z-20">
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
                  <TableHead>Artist</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fakeSongs.map((song, index) => (
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
                        <p className="font-bold text-white">{song.title}</p>
                        <p className="text-neutral-400 text-sm">
                          {song.artist}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell className="text-neutral-400">
                      {song.artist}
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
