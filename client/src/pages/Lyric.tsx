import { ScrollArea } from "@radix-ui/react-scroll-area";
import { lyrics } from "../lib/constants";

export const Lyric = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black text-white flex items-center justify-center">
      <ScrollArea className="max-w-5xl px-10 py-12">
        {lyrics.map((line, index) => (
          <p
            key={index}
            className="text-5xl font-extrabold text-center text-white leading-relaxed mb-10"
          >
            {line}
          </p>
        ))}
      </ScrollArea>
    </div>
  );
};
