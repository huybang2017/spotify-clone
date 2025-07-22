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
  // Add more songs here...
];

export default function AlbumDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-black text-white">
      {/* Header Section */}
      <div className="flex items-center gap-6 p-8">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt="Album Cover"
          className="w-32 h-32 rounded-md shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">Album Name</h1>
          <p className="text-neutral-400">Artist Name • Release Date</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 px-8">
        <Button className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg">
          Play
        </Button>
        <Button variant="outline" className="text-white border-neutral-400">
          Shuffle
        </Button>
        <Button variant="outline" className="text-white border-neutral-400">
          Download
        </Button>
      </div>

      {/* Song List */}
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
                <TableCell className="text-green-500 font-bold">
                  {index + 1}
                </TableCell>
                <TableCell className="font-bold text-white">
                  {song.title}
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
  );
}
