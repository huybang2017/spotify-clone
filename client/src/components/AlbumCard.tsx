import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M5 3.87v16.26c0 1.15 1.23 1.86 2.24 1.29l12.13-8.13c.97-.65.97-2.08 0-2.73L7.24 2.13C6.23 1.56 5 2.27 5 3.41z" />
    </svg>
  );
}

export default function AlbumCard({
  album,
}: {
  album: { title: string; artist: string; image: string };
}) {
  return (
    <Card className="group bg-neutral-800 rounded-xl p-5 flex flex-col items-center shadow-lg hover:bg-neutral-700 transition relative cursor-pointer overflow-hidden">
      <div className="w-32 h-32 mb-5 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src={album.image}
          alt={album.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <Button
          size="icon"
          variant="default"
          className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition rounded-full w-12 h-12 flex items-center justify-center"
        >
          <PlayIcon />
        </Button>
      </div>
      <div className="font-semibold text-base text-center mb-1 truncate w-full">
        {album.title}
      </div>
      <div className="text-xs text-neutral-400 text-center w-full truncate">
        {album.artist}
      </div>
    </Card>
  );
}
