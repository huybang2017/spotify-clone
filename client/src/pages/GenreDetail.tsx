import { ALBUMS_DATA, PLAYLISTS_DATA, HOME_DATA } from "../lib/constants";
import { Link } from "react-router-dom";

function PlaylistCard({
  title,
  description,
  image,
  id,
  type = "playlist",
}: {
  title: string;
  description: string;
  image: string;
  id: number;
  type?: "playlist" | "album";
}) {
  const route = type === "playlist" ? `/playlist/${id}` : `/album/${id}`;

  return (
    <Link to={route}>
      <div className="p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer group">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md mb-4 shadow-lg"
        />
        <h3 className="font-bold text-white text-base truncate">{title}</h3>
        <p className="text-neutral-400 text-sm mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function GenreDetail() {
  // Using existing data from constants
  // In a real app, you would filter by genre
  const genreName = "Hip Hop";
  const genreDescription = "The best Hip Hop tracks in Vietnam and beyond";
  const featuredPlaylists = PLAYLISTS_DATA;
  const popularAlbums = ALBUMS_DATA;
  const featuredArtists = HOME_DATA.favoriteArtists;

  return (
    <div className="p-6">
      <div className="bg-gradient-to-b from-purple-700 to-neutral-900 py-16 px-6 mb-8 rounded-lg">
        <span className="text-sm font-medium text-white">Genre</span>
        <h1 className="text-5xl font-bold text-white mt-2 mb-4">{genreName}</h1>
        <p className="text-white opacity-80">{genreDescription}</p>
      </div>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-white">Featured Playlists</h2>
          <Link
            to="/library"
            className="text-neutral-400 font-bold text-sm hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              title={playlist.title}
              description={`By ${playlist.creator} • ${playlist.songCount} songs`}
              image={playlist.image}
              type="playlist"
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-white">Popular Albums</h2>
          <Link
            to="/library"
            className="text-neutral-400 font-bold text-sm hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {popularAlbums.map((album) => (
            <PlaylistCard
              key={album.id}
              id={album.id}
              title={album.title}
              description={`By ${album.artist} • ${
                album.songs?.length || 0
              } songs`}
              image={album.image}
              type="album"
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-white">Featured Artists</h2>
          <Link
            to="/library"
            className="text-neutral-400 font-bold text-sm hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {featuredArtists.map((artist) => (
            <Link key={artist.id} to={`/artist/${artist.id}`}>
              <div className="p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer text-center group">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="font-bold text-white text-base truncate">
                  {artist.name}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">Artist</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
