import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* 背景のグリッドエフェクト */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="aspect-square border border-blue-500/20" />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-pulse-neon">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            GAME SURVEY II
          </span>
        </h1>

        <div className="space-y-4 mt-12">
          <button className="neon-button text-2xl md:text-3xl w-64 py-3 px-6">
            START
          </button>
          <div className="h-4" />
          <button className="neon-button text-2xl md:text-3xl w-64 py-3 px-6">
            OPTIONS
          </button>
        </div>

        <div className="mt-16 text-yellow-400 animate-blink">
          PUSH START BUTTON
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          © 2025 KUROSAWA ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}
