import React from "react";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import EarningsTable from "./components/EarningsTable";

const Connect = () => {
  return (
    <div className="max-w-[1440px] w-11/12 mx-auto pt-[18px] pb-[106px]">
      <div className="w-full flex flex-col xl:flex-row justify-between gap-5">
        <div className="flex-1 min-w-0">
          <Overview />
        </div>

        <div className="w-full xl:w-[335px] flex-shrink-0">
          <Stats />
        </div>
      </div>
      <div className="mt-[60px]">
        <EarningsTable />
      </div>
    </div>
  );
};

export default Connect;
