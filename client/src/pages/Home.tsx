import { HOME_DATA, USER_DATA } from "../lib/constants";
import { Link } from "react-router-dom";

function WideCard({
  title,
  image,
  id,
}: {
  title: string;
  image: string;
  id: number;
}) {
  let route = `/playlist/${id}`;
  if (title === "Liked Songs") {
    route = "/collection";
  }

  return (
    <Link to={route}>
      <div className="flex items-center bg-neutral-800/50 hover:bg-neutral-700/70 rounded-md overflow-hidden transition-colors cursor-pointer group">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
        />
        <h3 className="font-bold text-sm sm:text-base text-white ml-2 sm:ml-4 flex-1 truncate pr-2">
          {title}
        </h3>
        <button className="mr-2 sm:mr-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </button>
      </div>
    </Link>
  );
}

function AlbumCard({
  title,
  subtitle,
  image,
  id,
}: {
  title: string;
  subtitle: string;
  image: string;
  id: number;
}) {
  const isPlaylist = title.includes("Mix") || title.includes("Weekly");
  const route = isPlaylist ? `/playlist/${id}` : `/album/${id}`;

  return (
    <Link to={route}>
      <div className="relative p-3 sm:p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer group">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md mb-2 sm:mb-4 shadow-lg"
        />
        <h3 className="font-bold text-white text-sm sm:text-base truncate">
          {title}
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm mt-1 line-clamp-2">
          {subtitle}
        </p>

        <button className="absolute top-1/2 right-2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </button>
      </div>
    </Link>
  );
}

function ArtistCard({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: number;
}) {
  return (
    <Link to={`/artist/${id}`}>
      <div className="relative p-3 sm:p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer text-center group">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-2 sm:mb-4 shadow-lg"
        />
        <h3 className="font-bold text-white text-sm sm:text-base truncate">
          {name}
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm mt-1">Artist</p>

        <button className="absolute top-1/2 right-6 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </button>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-10 p-4 sm:p-7 pb-24 md:pb-10">
      {/* Good morning section */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
          Good morning
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {HOME_DATA.morningCards.map((card) => (
            <WideCard
              key={card.id}
              title={card.title}
              image={card.image}
              id={card.id}
            />
          ))}
        </div>
      </section>

      {/* Made For you section */}
      <section>
        <div className="flex justify-between items-end mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Made For {USER_DATA.name}
          </h2>
          <Link
            to="/library"
            className="text-neutral-400 font-bold text-xs sm:text-sm hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
          {HOME_DATA.dailyMixes.map((mix) => (
            <AlbumCard
              key={mix.id}
              id={mix.id}
              title={mix.title}
              subtitle={mix.subtitle}
              image={mix.image}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Your favorite artists
          </h2>
          <Link
            to="/library"
            className="text-neutral-400 font-bold text-xs sm:text-sm hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
          {HOME_DATA.favoriteArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              image={artist.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
