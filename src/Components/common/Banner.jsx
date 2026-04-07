import React from "react";
import bannerImg from "../../assets/Banner.jpg";

const Banner = () => {
  return (
    <section
      className="h-[60vh] mt-[80px] flex items-center bg-top bg-cover px-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="max-w-xl">
        <h1 className="text-red-500 text-5xl font-extrabold uppercase mb-3">
          Big Sale!
        </h1>

        <h2 className="text-gray-800 text-lg md:text-xl font-medium tracking-wide mb-6">
          Up to <span className="font-semibold text-black">50% OFF</span> –
          Limited Time Only!
        </h2>

        {/* Countdown */}
        <div className="flex items-center gap-4 text-center">
          {/* Time Box */}
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl px-5 py-3 min-w-[70px]">
            <span className="block text-3xl font-extrabold text-gray-900 leading-none">
              00
            </span>
            <span className="text-xs text-gray-500 tracking-wide">HRS</span>
          </div>

          <span className="text-3xl font-bold text-gray-700">:</span>

          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl px-5 py-3 min-w-[70px]">
            <span className="block text-3xl font-extrabold text-gray-900 leading-none">
              00
            </span>
            <span className="text-xs text-gray-500 tracking-wide">MIN</span>
          </div>

          <span className="text-3xl font-bold text-gray-700">:</span>

          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl px-5 py-3 min-w-[70px]">
            <span className="block text-3xl font-extrabold text-gray-900 leading-none">
              00
            </span>
            <span className="text-xs text-gray-500 tracking-wide">SEC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
