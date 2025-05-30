import { Button } from "@/components/ui/button";
import OrbitAnimation from "@/components/OrbitAnimation";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ReferCardProps {
  setIsConnected: (val: boolean) => void;
}

const ReferCard: FC<ReferCardProps> = ({ setIsConnected }) => {
  const router = useRouter();

  const handleCorrectClick = () => {
    router.push("/connect");
    setIsConnected(true);
  };
  
  return (
    <div className="bg-[#181818] text-white border border-[#282828] rounded-3xl max-w-[464px] w-full mx-auto text-center py-10 relative z-10">
      <OrbitAnimation />

      <div className="px-5 mt-20 text-center">
        <p className="font-medium sm:text-2xl sm:leading-7 text-xl">
          Refer friends and earn with Patara!
        </p>
        <p className="font-normal sm:text-base sm:leading-[22px] text-sm text-[#808080] mt-5 px-5">
          Invite your friends to Patara and earn a share of their on-chain
          rewards forever!
        </p>

        <Button 
          onClick={handleCorrectClick}
          className="bg-[#006EFF] hover:bg-blue-700 text-white h-12 px-4 rounded-2xl font-medium cursor-pointer mt-10"
        >
          Connect/Sign in
        </Button>
      </div>
    </div>
  );
}

export default ReferCard;