import ReferCard from "@/components/ReferCard";

export default function Home() {
  const letters = ["P", "S", "F", "G", "M", "C", "W", "A"];

  return (
    <div className="w-full py-[60px] relative">
      <div className="absolute max-w-[1440px] w-full mx-auto inset-0 z-10 pointer-events-none hidden md:block">
        {letters.map((letter, i) => {
          const positions = [
            { top: "8%", left: "7%" },
            { top: "30%", left: "4%" },
            { bottom: "40%", left: "14%" },
            { bottom: "15%", left: "2%" },
            { top: "8%", right: "5%" },
            { top: "27%", right: "22%" },
            { bottom: "43%", right: "8%" },
            { bottom: "13%", right: "10%" },
          ];
          const pos = positions[i];

          return (
            <div
              key={i}
              className="absolute text-[#C4C4C8] text-3xl font-bold blur-xs size-[60px] rounded-full flex items-center justify-center select-none"
              style={{
                ...pos,
                background:
                  "linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%)",
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>
      <ReferCard />
    </div>
  );
}
