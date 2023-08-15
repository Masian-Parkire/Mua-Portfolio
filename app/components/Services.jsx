import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="bg-[#F0F0F0] py-2 lg:py-[100px]">
      <div className="container mx-auto">
        <div className="pl-2 lg:pl-0">
          <div className="pb-2">
            <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
              What I do
            </p>
          </div>
          <div className="pb-4">
            <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
              MAKEUP SERVICES
            </p>
          </div>
          <div className="pb-6">
            <Divider className=" bg-light-salmon-pink w-[85px] " />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 lg:pl-0">
          <div className="cols-span-12 lg:cols-span-6 ">
            <div className="relative">
              <Image
                src="/imageone.png"
                alt="eye shadow makeup"
                width={550}
                height={500}
                className="w-full lg:h-[600px] "
              />

            </div>
          </div>
          <div className="cols-span-12 lg:cols-span-6">
            <Image
              src="/imagetwo.png"
              alt="eye shadow makeup"
              width={500}
              height={450}
              className="w-full lg:h-[600px] lg:object-cover"
            />
          </div>
          {/* <div className="w-[564px] h-[444px] relative">
            <img
              className="w-[564px] h-[400px] left-0 top-0 absolute"
              src="https://via.placeholder.com/564x400"
            />
            <div className="w-[455px] h-[100px] left-[54px] top-[344px] absolute">
              <div className="w-[455px] h-[100px] left-0 top-0 absolute bg-white" />
              <div className="left-[24px] top-[35px] absolute text-neutral-900 text-xl font-normal leading-[30px]">
                Eye Makeup
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
