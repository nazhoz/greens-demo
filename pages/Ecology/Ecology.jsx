import { ecology } from "@/data/data";
import Image from "next/image";
import React from "react";

const Ecology = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 px-4 md:px-16 gap-6">
      {/* Left Side Text */}
      <div className="w-full md:w-1/3 flex flex-col justify-start text-[#333333]">
        <span className="font-extrabold text-2xl sm:text-3xl">AgriCom</span>
        <span className="font-extrabold text-2xl sm:text-3xl">Farm Ecology</span>
        <span className="font-extrabold text-2xl sm:text-3xl">Products</span>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <span className="text-base sm:text-lg font-medium text-[#333333]">
          Smells racy free announcing than durable zesty smart exotic far feel.
          Screamin' affordable secret way absolutely.
        </span>
        <span className="text-sm sm:text-base font-normal text-gray-400">
          Evulates vast a real proven works discount secure care. Market
          invigorate a awesome handcrafted bigger comes newer recommended
          lifetime. Odor to yummy high racy bonus soaking mouthwatering. First
          superior full-bodied drink. Like outstanding odor economical deal
          clinically
        </span>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {ecology.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center text-center gap-2">
              <Image
                src={item.image}
                width={70}
                height={70}
                alt="Ecology Icon"
              />
              <div className="text-[#333333] font-bold text-sm sm:text-base">
                <span className="block">{item.title}</span>
                <span className="block">{item.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecology;
