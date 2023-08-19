import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="bg-[#F0F0F0] ">
      <div className="container mx-auto py-2 lg:pt-[100px]">
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

        <Carousel className=" h-[40vh] md:h-screen px-2 lg:px-0 text-[#030202] ">
          {/* I/tem 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Eye Makeup
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imagetwo.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Full Makeup
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imagethree.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto  object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="grid grid-cols-2 gap-6 ">
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Eye Shadow
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imageone.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto   object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Face Makeup
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imagefour.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* Item 3 */}

          <div className="grid grid-cols-2 gap-6">
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Bridal Makeup
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imagefive.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto   object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="relative flex justify-center">
              <Link
                className="w-[80%] bg-light-salmon-pink font-didact flex items-center py-3 px-2 lg:py-8 lg:px-4 absolute -bottom-6 lg:-bottom-10 z-10 transition-transform duration-300 transform hover:-translate-y-12"
                href=""
              >
                Eye Lashes
              </Link>
              <div className="relative overflow-hidden w-full">
                <Image
                  src={"/imagethree.webp"}
                  alt="eyeshadow"
                  width={400}
                  height={500}
                  className="w-full h-full lg:h-auto  object-cover z-0 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="w-full h-screen bg-black lg:h-[500px] mt-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 h-full">
            <div className="lg:py-[40px] lg:ml-[239px] px-2 pt-4">
              <Image
                src={"/kiithya.png"}
                alt="makeup artist"
                width={320}
                height={400}
                className="w-full h-auto lg:w-80"
              />
            </div>
            <div className="text-white grid grid-cols-3 gap-3 align-middle pt-4" >
              <div className="flex flex-col items-center border-r border-gray">
                <div>
                  <Image
                    src={"/facemakeup.png"}
                    alt="facemakeup icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Facial Makeup
                </h5>
              </div>

              <div className="flex flex-col items-center border-r border-gray">
                <div>
                  <Image
                    src={"/mascara.png"}
                    alt="facemakeup icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Eye Lashes
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src={"/facialmask.png"}
                    alt="facial mask icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Facial Mask
                </h5>
              </div>
             

              <div className="flex flex-col items-center border-r border-gray">
                <div>
                  <Image
                    src={"/eyebrow.png"}
                    alt="eyebrow"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Eye Makeup
                </h5>
              </div>
              <div className="flex flex-col items-center border-r border-gray">
                <div>
                  <Image
                    src={"/bridal.png"}
                    alt="bridal makeup"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Bridal Makeup
                </h5>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src={"/dressingtable.png"}
                    alt="full makeup"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="font-didact text-[15px] font-normal leading-[30px]">
                  Full Makeup
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className=" bg-light-salmon-pink w-[85px] mx-auto rotate-90 md:block hidden"/>
    </section>
  );
}
