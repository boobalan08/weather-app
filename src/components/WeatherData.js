import React from "react";
import { WiHumidity } from "react-icons/wi";
import { WiSandstorm } from "react-icons/wi";
import { WiNightHail } from "react-icons/wi";
import { WiSolarEclipse } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";

const WeatherData = () => {
  return (
    <div className="my-2">
      <header>
        <span className="font-extrabold text-lg">More details of today's weather</span>
      </header>
      <section className="flex justify-between items-center space-x-8 my-4 py-4">
        <div className="card_1 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">Humidity</span>
            <span>
              <WiHumidity
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-xl py-2">82%</span>
          </div>
          <div className="px-4">
            <div className="flex justify-between my-1">
              <span className="text-base font-medium text-gray-400 dark:text-white">
                good
              </span>
              <span className="text-base font-medium text-gray-400 dark:text-white">
                normal
              </span>
              <span className="text-base font-medium text-gray-400 dark:text-white">
                bad
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-400 h-2.5 rounded-full"
                style={{ width: "82%" }}
              />
            </div>
          </div>
        </div>
        <div className="card_2 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">Wind</span>
            <span>
              <WiSandstorm
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-2xl py-2">8</span>
          </div>
          <span className="px-4 text-lg"> km/hr</span>
        </div>
        <div className="card_3 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">Precipitation</span>
            <span>
              <WiNightHail
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-2xl py-2">1.4</span>
          </div>
          <span className="px-4 text-lg">Cm</span>
        </div>
      </section>
      <section className="flex justify-between items-center space-x-8 my-4 py-4">
        <div className="card_4 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">UV index</span>
            <span>
              <WiSolarEclipse
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-2xl py-2">4</span>
          </div>
          <div className="px-4">
            <div className="flex justify-between my-1">
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                slow
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                medium
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                high
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-400 h-2.5 rounded-full"
                style={{ width: "45%" }}
              />
            </div>
          </div>
        </div>
        <div className="card_5 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">Feels like</span>
            <span>
              <WiThermometer
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-2xl py-2">4</span>
          </div>
          <div className="px-4">
            <div className="flex justify-between my-1">
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                0<sup>o</sup>
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                25<sup>o</sup>
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                50<sup>o</sup>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-400 h-2.5 rounded-full"
                style={{ width: "45%" }}
              />
            </div>
          </div>
        </div>
        <div className="card_6 bg-white w-1/3 h-auto rounded-3xl shadow-md p-3 hover:scale-105 ease-in-out duration-200">
          <div className="flex justify-between items-center p-2 px-4">
            <span className="font-bold text-lg">Chance of rain</span>
            <span>
              <WiShowers
                size={24}
                className="bg-blue-400 text-white rounded-2xl"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="font-extrabold text-2xl py-2">42%</span>
          </div>
          <div className="px-4">
            <div className="flex justify-between my-1 ">
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                0%
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                25%
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                50%
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                75%
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-white">
                100%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-400 h-2.5 rounded-full"
                style={{ width: "42%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherData;
