import { PLAYLISTS_DATA, ALBUMS_DATA } from "../lib/constants";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Link } from "react-router-dom";

function CollectionItem({
  image,
  title,
  creator,
  id,
  type,
}: {
  image: string;
  title: string;
  creator: string;
  id: number;
  type: "playlist" | "album" | "artist";
}) {
  // Determine the route based on item type
  const route =
    type === "playlist"
      ? `/playlist/${id}`
      : type === "album"
      ? `/album/${id}`
      : `/artist/${id}`;

  return (
    <Link to={route}>
      <div className="flex items-center p-2 rounded hover:bg-neutral-700/50 transition-colors cursor-pointer">
        <img src={image} alt={title} className="w-12 h-12 object-cover mr-3" />
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-sm text-neutral-400">{creator}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Library() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Your Library</h2>

      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="mb-6 bg-transparent">
          <TabsTrigger
            value="playlists"
            className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white"
          >
            Playlists
          </TabsTrigger>
          <TabsTrigger
            value="albums"
            className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white"
          >
            Albums
          </TabsTrigger>
          <TabsTrigger
            value="artists"
            className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white"
          >
            Artists
          </TabsTrigger>
        </TabsList>

        <TabsContent value="playlists">
          <div className="space-y-1">
            {PLAYLISTS_DATA.map((playlist) => (
              <CollectionItem
                key={playlist.id}
                id={playlist.id}
                image={playlist.image}
                title={playlist.title}
                creator={playlist.creator}
                type="playlist"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="albums">
          <div className="space-y-1">
            {ALBUMS_DATA.map((album) => (
              <CollectionItem
                key={album.id}
                id={album.id}
                image={album.image}
                title={album.title}
                creator={album.artist}
                type="album"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artists">
          <div className="bg-neutral-800 rounded p-6 text-neutral-400 text-center">
            Your followed artists will appear here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
