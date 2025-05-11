"use client";

import { motion } from "framer-motion";
import { Icon } from "@/helpers/Icons";

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

export default function OrbitAnimation() {
  return (
    <div className="relative size-80 mx-auto">
      
      <div className="absolute left-1/2 -translate-x-1/2 size-96 top-1/2 -translate-y-1/2 inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(127, 232, 255, 0.15) 25%, transparent 70%)",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0">
        {[60, 75, 90, 105, 120].map((r, i) => {
          const max = 5;
          const opacity = 1 - i * (1 / max);

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
  );
}
