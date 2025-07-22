import { ScrollArea } from "../components/ui/scroll-area";

const lyrics = [
  "(Ah, ah, ah)",
  "(Ah, ah, ah-ah-h-h-h-h, no)",
  "Don't wanna make up (make up, ah-h)",
  "(M-TP)",
  "Don't wanna make up, headstrong",
  "Gonna wake up, so long",
  "I kinda die hard and grew",
  "Seeing that part of you",
  "I never knew love somehow",
];

export default function TrackDetail() {
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
}
