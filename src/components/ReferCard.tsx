"use client";

import { motion } from "framer-motion";
import { Icon } from "@/helpers/Icons";
import { Button } from "@/components/ui/button";

const letters = ["F", "P", "M", "A", "W", "C", "G", "S"];

const letterStyles: Record<string, string> = {
  P: "bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300",
  M: "bg-gradient-to-br from-yellow-300 via-green-300 to-blue-400",
  A: "bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400",
  W: "bg-gradient-to-br from-green-300 via-blue-300 to-purple-300",
  C: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400",
  G: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
  S: "bg-gradient-to-br from-purple-300 via-pink-300 to-red-400",
  F: "bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-300",
};

export default function ReferCard() {
  return (
    <div className="bg-[#181818] text-white border border-[#282828] rounded-3xl max-w-[464px] w-full mx-auto text-center py-10 relative z-10">
      {/* Sabit merkez + dönen halka */}
      <div className="relative size-80 mx-auto">
        {/* Glow efekti */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
        </div>

        {/* Orbit çemberleri */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          {[60, 75, 90, 105, 120].map((r, i) => {
            const max = 5;
            const opacity = 1 - i * (1 / max); // 1 → 0.2 arası kademeli opaklık

            return (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{
                  width: r * 2,
                  height: r * 2,
                  opacity,
                }}
              />
            );
          })}
        </div>

        {/* Dönen kapsayıcı */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            {letters.map((letter, index) => {
              const angle = (index / letters.length) * 2 * Math.PI;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={letter}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                    className={`sm:size-[52px] size-12 flex items-center justify-center rounded-full text-black font-bold ${letterStyles[letter]}`}
                  >
                    {letter}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Ortadaki sabit logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
          className="size-[84px] rounded-full flex justify-center items-end"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #A284ED 0%, #6775FF 25%, #FFA3FE 50%, #4993E1 76%, #7FE8FF 99%)",
            }}
          >
            <Icon name="refer" className="mb-1" />
          </div>
        </div>
      </div>

      <div className="px-5 mt-20 text-center">
        {/* Metin alanı */}
        <p className="font-medium sm:text-2xl sm:leading-7 text-xl">
          Refer friends and earn with Patara!
        </p>
        <p className="font-normal sm:text-base sm:leading-[22px] text-sm text-[#808080] mt-5 px-5">
          Invite your friends to Patara and earn a share of their on-chain
          rewards forever!
        </p>

        <Button className="bg-[#006EFF] hover:bg-blue-700 text-white h-12 px-4 rounded-sm font-medium cursor-pointer mt-10">
          Connect/Sign in
        </Button>
      </div>
    </div>
  );
}
