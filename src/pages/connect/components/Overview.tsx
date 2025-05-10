import OrbitAnimation from "@/components/OrbitAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/helpers/Icons";

const Overview = () => {
  const referralLink = "0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Invite to Patara",
          text: "Join Patara and start earning!",
          url: `https://patara.com/ref/${referralLink}`,
        });
      } catch (err) {
        console.error("Share canceled or failed", err);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="sm:p-10 py-10 px-[5%] flex lg:flex-row flex-col-reverse items-center justify-between gap-5 rounded-3xl bg-[#181818] flex-1 lg:h-[400px] overflow-hidden">
      <div className="flex flex-col justify-between lg:gap-0 gap-10 h-full lg:w-1/2 lg:max-w-[480px] w-full flex-shrink">
        <div className="flex flex-col gap-6 w-full">
          <p className="font-inter font-medium sm:text-[32px] sm:leading-8 text-2xl tracking-tight text-white">
            Refer and Earn
          </p>
          <p className="font-normal sm:text-base sm:leading-[22px] text-sm text-[#808080] xl:pr-24 pr-0">
            Invite your friends to Patara and earn a share of their on-chain
            rewards forever!
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-[480px] lg:w-full">
          <div className="bg-[#282828] rounded-2xl w-full flex flex-col gap-2 py-6 px-4">
            <p className="font-normal sm:text-sm sm:leading-[18px] text-xs text-[#808080]">
              Your Referral Link
            </p>
            <p className="text-white font-medium sm:text-base sm:leading-[18px] text-sm overflow-hidden">
              {referralLink}
            </p>
          </div>
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-[18px]">
            <Button
              onClick={handleCopy}
              className="cursor-pointer bg-[#006EFF] hover:bg-blue-700 text-white font-medium text-sm leading-[18px] text-center w-full rounded-2xl h-12 relative"
            >
              Copy Link
              {copied && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-white bg-[#282828] px-3 py-1 rounded-md shadow-md transition-opacity duration-300">
                  Copied!
                </span>
              )}
            </Button>

            <Button
              onClick={handleShare}
              className="cursor-pointer bg-[#383838] hover:bg-black/50 text-[#808080] font-medium text-sm leading-[18px] text-center w-full rounded-2xl h-12 flex gap-2 items-center justify-center"
            >
              <Icon name="share" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto flex justify-center mb-10 lg:mb-0">
        <OrbitAnimation />
      </div>
    </div>
  );
};

export default Overview;
