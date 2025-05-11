import { Icon } from "@/helpers/Icons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CardItem {
  id: number;
  icon: string;
  title: string;
  amount: string | number;
  claimBtn: boolean;
}

const Stats = () => {
  const cardItems: CardItem[] = [
    {
      id: 1,
      icon: "earned",
      title: "Total Earned Fee",
      amount: "$1,000.00",
      claimBtn: false,
    },
    {
      id: 2,
      icon: "unclaimed",
      title: "Unclaimed Fee",
      amount: "$500.00",
      claimBtn: true,
    },
    {
      id: 3,
      icon: "points",
      title: "Total Referral Points",
      amount: 1289,
      claimBtn: false,
    },
    {
      id: 4,
      icon: "referrals",
      title: "Referrals",
      amount: 34,
      claimBtn: false,
    },
  ];

  return (
    <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
      {cardItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.25,
            ease: "easeOut",
          }}
          className="bg-[#181818] rounded-2xl px-4 py-5 xl:py-0 xl:w-[335px] w-full xl:h-[85px] flex justify-center overflow-hidden"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 w-full">
            <div className="flex items-center gap-3.5">
              <div className="rounded-lg bg-[#282828] sm:size-12 size-10 flex items-center justify-center">
                <Icon name={item.icon as any} className="sm:size-6 size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-normal sm:text-sm sm:leading-[18px] text-xs text-[#808080]">
                  {item.title}
                </p>
                <p className="font-medium sm:text-2xl sm:leading-7 text-xl text-white">
                  {item.amount}
                </p>
              </div>
            </div>
            {item.claimBtn && (
              <Button className="bg-[#006EFF] hover:bg-blue-700 text-white h-12 px-4 rounded-2xl cursor-pointer font-medium text-sm leading-[18px]">
                Claim
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
