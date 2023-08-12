import React from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-between items-center py-4">
        <span>
          <RiAddBoxFill size={30} className="text-white rounded-3xl" />
        </span>
        <span></span>
        <div>
          <label
            className="inline-block px-3 hover:cursor-pointer text-white text-sm"
            htmlFor="flexSwitchCheckDefault"
          >
            {" "}
            <sup>o</sup>C
          </label>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer text-white text-sm"
            htmlFor="flexSwitchCheckDefault"
          >
            <sup>o</sup>F
          </label>
        </div>
      </div>
      <div className="time_bar pt-4">
        <div className="flex justify-between">
          <span className="flex justify-between text-lg font-semibold text-white">
            <CiLocationArrow1 size={24} className="text-white rounded-3xl" />
            New York,USA
          </span>
          <div className="flex justify-between items-center">
            <span>
              <WiSunrise size={24} className="text-white rounded-3xl" />
            </span>
            <span className="text-md text-white">07.19</span>
          </div>
        </div>
      </div>
      <div className="time_bar">
        <div className="flex justify-between pt-2">
          <span className="flex justify-between text-sm font-base text-white">
            Today 28 sept
          </span>
          <div className="flex justify-between items-center">
            <span>
              <WiSunset size={24} className="text-white rounded-3xl" />
            </span>
            <span className="text-md text-white">19.32</span>
          </div>
        </div>
      </div>
      <div className="mt-10 p-1 pt-5">
        <span className="flex items-center font-medium text-8xl text-center text-white">
          <button className="hover:scale-150 ease-in-out duration-300">
            <MdOutlineKeyboardArrowLeft size={30} className="mr-5" />
          </button>
          27<sup className="text-2xl mb-8 font-bold">o</sup>
          <button className="hover:scale-150 ease-in-out duration-300">
            <MdOutlineKeyboardArrowRight size={30} className="ml-3"/>
          </button>
        </span>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <span>
          <WiDaySunny size={25} className="text-white text-3xl" />
        </span>
        <span className="text-white text-xl pr-5">Sunny</span>
      </div>
      <div className="mt-44 w-full h-96">
        <img src="https://i.ibb.co/PZQXH8V/27.png" alt="Weather"  className="min-w-full"/>
      </div>
    </div>
  );
};

export default Sidebar;
