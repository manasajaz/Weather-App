import React, { useState } from "react";
import search_icon from "../assets/images/search.png";
import cloud_img from "../assets/images/cloud.png";
import clear_img from "../assets/images/clear.png";
import drizzle_img from "../assets/images/drizzle.png";
import rain_img from "../assets/images/rain.png";
import wind_img from "../assets/images/wind.png";
import humidity_img from "../assets/images/humidity.png";

import snow_img from "../assets/images/snow.png";

const WeatherApp = () => {
  let api_key = "d6b09f3cd9e5cedadb758cbd7efe26ab";
  const [wicon, setwicon] = useState(cloud_img);

  const search = async () => {
    const inp = document.getElementById("cityInput");
    if (!inp || inp.value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    let wind = document.getElementById("wind");
    let humidity = document.getElementById("humidity");
    const temp = document.getElementById("temp");
    const location = document.getElementById("location");

    humidity.textContent = Math.floor(data.main.humidity) + " %";
    wind.textContent = data.wind.speed + " km /h";
    temp.textContent = Math.floor(data.main.temp);
    location.textContent = data.name;


    inp.addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
      }
    });

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setwicon(snow_img);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setwicon(cloud_img);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setwicon(drizzle_img);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setwicon(rain_img);
    } else {
      setwicon(clear_img);
    }
  };

  return (
    <section className="md:my-10 my-5 mx-2">
      <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-[20px] max-w-[500px] mx-auto md:p-8 p-6">
        <div className="max-w-7xl mx-auto lg:px-0 px-2">
          <div className="grid grid-cols-12">
            <div className="col-span-12">

              <div className="top-bar flex gap-4 items-center justify-center">
                <div>                <input type="text" id="cityInput" className="rounded-[30px] focus-none outline-none p-2" placeholder="Enter City" />
                </div>
                <div className="bg-[#fff] sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                  <img id="search-icon" className="" src={search_icon} alt=""
                    onClick={() => {
                      search();
                    }}
                  />
                </div>


              </div>
              <div >
                <img className="mx-auto" src={wicon} alt="" />
              </div>


              <div
                id="temp"
                className="text-white md:text-[40px] text-[36px] text-center"
              >
                0 c
              </div>
              <div
                id="location"
                className="text-white md:text-[32px] text-[28px] text-center"
              >
                karachi
              </div>

              <div className="flex justify-between items-center mt-10">
                <div className="element flex sm:flex-no-wrap flex-wrap gap-4 items-center">
                  <img src={wind_img} className="mx-auto" alt="" />
                  <div className="mx-auto">
                    <div
                      id="wind"
                      className="text-white text-white md:text-[18px] text-[16px]"
                    >
                      18 km/h
                    </div>
                    <div className="text-white md:text-[14px] text-[12px]">
                      wind
                    </div>
                  </div>
                </div>
                <div className="element flex sm:flex-no-wrap flex-wrap gap-4 items-center">
                  <img src={humidity_img} className="mx-auto" alt="" />
                  <div className="mx-auto">
                    <div
                      id="humidity"
                      className="text-white md:text-[18px] text-[16px]"
                    >
                      54%
                    </div>
                    <div className="text-white md:text-[14px] text-[12px]">
                      humidity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

  );
};

export default WeatherApp;
