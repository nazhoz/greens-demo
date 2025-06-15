"use client";
import { timelineData } from "@/data/data";
import React from "react";

const Products = () => {
  return (
    <div className="bg-[#e8f1ee] py-16 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-start text-[#343434] mb-12">
        The Openfield Timeline
      </h1>

      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-2 left-0 right-0 h-px bg-gray-300 z-0"></div>

        {/* Timeline items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10 " >
          {timelineData.map((item, index) => (
            <div className="text-start" key={index}>
              {/* Circle */}
              <div className="w-4 h-4 rounded-full bg-white border-2 border-[#4b8b71] mx-1 mb-6"></div>

              {/* Year */}
              <h2 className="text-6xl font-extrabold text-[#4b8b71]">{item.year}</h2>

              {/* Title */}
              <h3 className="text-[21px] font-bold text-[#4b8b71] mt-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#999e9c] mt-2 max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
