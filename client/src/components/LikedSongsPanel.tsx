import React from "react";

export default function LikedSongsPanel() {
  return (
    <aside className="w-[420px] flex flex-col bg-neutral-950 rounded-lg p-4 ml-2 h-full">
      {/* Top: Cover + Playlist Info */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="uppercase text-xs text-neutral-400 font-semibold">Playlist</div>
          <h2 className="text-3xl font-extrabold text-white mb-1">Liked Songs</h2>
          <div className="text-sm text-neutral-400">young wolf • 17 songs</div>
        </div>
      </div>
      {/* Song highlight */}
      <div className="bg-neutral-900 rounded-lg p-4 mb-6 flex flex-col items-center">
        <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="THERE'S NO ONE AT ALL" className="w-24 h-24 rounded mb-3 object-cover" />
        <div className="text-white font-bold text-base mb-1 text-center">THERE'S NO ONE AT ALL</div>
        <div className="text-xs text-neutral-400 mb-2 text-center">Sơn Tùng M-TP</div>
        <div className="flex items-center gap-2">
          <button className="hover:text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd" /></svg>
          </button>
          <button className="hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v10.5m-5.25-5.25h10.5" />
            </svg>
          </button>
        </div>
      </div>
      {/* About the artist */}
      <div className="bg-neutral-900 rounded-lg p-4 flex flex-col items-center">
        <div className="w-full text-xs text-neutral-400 mb-2">About the artist</div>
        <img src="https://i.scdn.co/image/ab6761610000e5eb1d6e1de9f4c4d5b4d7f5b1d6" alt="Sơn Tùng M-TP" className="w-24 h-24 rounded-full mb-2 object-cover" />
        <div className="text-white font-bold text-base mb-1">Sơn Tùng M-TP</div>
        <div className="text-xs text-neutral-400 text-center">Vietnamese singer, songwriter, and actor. One of the most successful V-pop artists.</div>
      </div>
    </aside>
  );
} 