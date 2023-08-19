import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";



export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#FFF5F5] ">
      <div className="container mx-auto py-2 lg:py-[100px]">
        <div className="px-2 lg:px-0">
          <div className="pb-2">
            <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
              GALLERY
            </p>
          </div>
          <div className="pb-4">
            <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
              PORTFOLIO
            </p>
          </div>
          <div className="pb-6">
            <Divider className=" bg-light-salmon-pink w-[85px] " />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
        <Image src="/imageone.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagetwo.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagethree.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagefour.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagefive.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imageone.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagetwo.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagethree.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>
        <Image src="/imagefour.webp" width={376} height = {250} alt="Image" className="w-full h-auto object-cover"/>

        </div>
        </div>
        {/* Portfolio */}
       

 
      </div>
      
      <Divider className=" bg-light-salmon-pink w-[85px] mx-auto rotate-90 md:block hidden"  />
    </section>
  );
}
