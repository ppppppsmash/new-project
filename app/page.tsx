import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between relative overflow-hidden
      pb-10">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-pulse-neon text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            GAME SURVEY II
          </span>
        </h1>

        <div className="mt-[200px] text-yellow-400 animate-blink">
          PUSH START BUTTON
        </div>
      </div>

      <div className="text-gray-500 text-sm">
        © 2025 KUROSAWA ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
