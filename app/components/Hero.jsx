import { Divider } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <div className="container mx-auto flex items-center h-[100vh]  ">
    <div className="pl-4 lg:pl-0">
      <div className="pb-6">
        <Divider className=" bg-light-salmon-pink w-[85px] " />
      </div>
      <div className="pb-2">
        <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
          MAKEUP ARTIST
        </p>
      </div>
      <div className="pb-4">
        <p className="text-white text-3xl md:text-[70px] font-normal leading-relaxed tracking-[12.60px] font-oswald">
          IAN KIITHYA
        </p>
      </div>

      <button title="About Me" className="py-2 px-3 first-letter:px-3 bg-light-salmon-pink text-[##030202] font-didact text-base leading-snug inline-flex">
        About Me
      </button>
    </div>
  </div>
  );
}
