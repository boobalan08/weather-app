import React from "react";
import AreaChart from "./AreaChart";

const Chart = () => {
  return (
    <div className="w-full h-80 bg-white rounded-3xl p-3 shadow-lg">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Upcoming hours</p>
        <div className="flex space-x-2 justify-center items-center">
          <button className="bg-gray-100 rounded px-2 text-sm">Rain precipetation</button>
          <button className="bg-gray-200 rounded px-2 text-sm">Next days</button>
        </div>
      </div>
      <div className="w-full h-60">
        <AreaChart className='min-w-full' />
      </div>
    </div>
  );
};

export default Chart;
