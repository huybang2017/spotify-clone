export default function Search() {
  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for songs, artists, albums..."
        className="w-full p-3 rounded bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <div className="mt-8 text-neutral-400 text-center">
        Search results will appear here.
      </div>
    </div>
  );
}
