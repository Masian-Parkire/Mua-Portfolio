import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite";

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

        {/* <div id="indicators-carousel" class=" w-full" data-caraousel="static">
          {/* carousel wrapper */}
        {/* <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 px-2 lg:pl-0 ">
              <div
                class=" duration-700 ease-in-out "
                data-carousel-item="active"
              >
                <div className="">
                  <Image
                    src={"/imageone.png"}
                    alt="eyeshadow makeup"
                    width={500}
                    height={450}
                    className="w-full object-cover h-[500px]"
                  />
                </div>
              </div>
              <div
                class=" duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <div className="">
                  <Image
                    src={"/imagetwo.png"}
                    alt="eyeshadow makeup"
                    width={500}
                    height={450}
                    className="w-full object-cover h-[500px] "
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div> */}
      </div>
      <div className="w-full h-screen bg-black lg:h-[500px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 h-full">
            <div className="lg:py-[50px] lg:ml-[239px] px-2 pt-4">
              <Image
                src={"/imageseven.png"}
                alt="makeup artist"
                width={320}
                height={400}
                className="w-full lg:w-80"
              />
            </div>
            <div className="lg:h-[400px] py-[50px] text-white grid justify-center items-center grid-cols-3 grid-flow-row">
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
                  Eyebrow Makeup
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
    </section>
  );
}
