import React from "react";

// --- Card for "Good morning" section ---
function WideCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex items-center bg-neutral-800/50 hover:bg-neutral-700/70 rounded-md overflow-hidden transition-colors cursor-pointer group">
      <img src={image} alt={title} className="w-20 h-20 object-cover" />
      <h3 className="font-bold text-base text-white ml-4 flex-1">{title}</h3>
      <button className="mr-4 w-12 h-12 flex items-center justify-center bg-green-500 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
      </button>
    </div>
  );
}

// --- Card for playlists/albums ---
function AlbumCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div className="p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer group">
      <img src={image} alt={title} className="w-full h-auto rounded-md mb-4 shadow-lg" />
      <h3 className="font-bold text-white text-base truncate">{title}</h3>
      <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>
    </div>
  );
}

// --- Card for artists ---
function ArtistCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="p-4 bg-[#181818] hover:bg-[#282828] rounded-md transition-colors cursor-pointer text-center group">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
      <h3 className="font-bold text-white text-base truncate">{name}</h3>
      <p className="text-neutral-400 text-sm mt-1">Artist</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Good morning section */}
      <section>
        <h1 className="text-3xl font-bold text-white mb-6">Good morning</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <WideCard title="Liked Songs" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
          <WideCard title="Indâm Indie" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
          <WideCard title="Ngơ Radio" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
        </div>
      </section>
      {/* Made For you section */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-white">Made For young wolf</h2>
          <a href="#" className="text-neutral-400 font-bold text-sm hover:underline">Show all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AlbumCard title="Daily Mix 1" subtitle="Sơn Tùng M-TP, Ngọt, SIVAN..." image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
          <AlbumCard title="Daily Mix 2" subtitle="RAP VIỆT, Rapital, SIXTY..." image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
          <AlbumCard title="Discover Weekly" subtitle="Your weekly mixtape..." image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
        </div>
      </section>
      {/* Your favorite artists section */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-white">Your favorite artists</h2>
          <a href="#" className="text-neutral-400 font-bold text-sm hover:underline">Show all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ArtistCard name="Hustlang Robber" image="https://i.scdn.co/image/ab6761610000517482a32504b2b07d0f94565773" />
          <ArtistCard name="Ngơ" image="https://i.scdn.co/image/ab6761610000517482a32504b2b07d0f94565773" />
          <ArtistCard name="Lil Wuyn" image="https://i.scdn.co/image/ab6761610000517482a32504b2b07d0f94565773" />
        </div>
      </section>
    </div>
  );
} 