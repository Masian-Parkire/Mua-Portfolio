import { Divider } from "@nextui-org/react";
import React from "react";

export default function Prices() {
  return (
    <section id="pricing" className="bg-[#F0F0F0] ">
      <div className="container mx-auto py-2 lg:py-[100px]">
        <div className="pl-2 lg:pl-0">
          <div className="pb-2">
            <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
              PRICES
            </p>
          </div>
          <div className="pb-4">
            <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
              PRICING PLAN
            </p>
          </div>
          <div className="pb-6">
            <Divider className=" bg-light-salmon-pink w-[85px] " />
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen lg:h-full gap-2  ">
          <div className="bg-[url(/imageone.png)] w-full h-full lg:h-[30rem] bg-no-repeat bg-cover relative  ">
            <div className="w-full h-full backdrop-blur-sm bg-black/30 absolute flex justify-center align-middle">
              <h2 className="left-[40px] top-[83px] absolute text-white text-2xl font-normal font-oswald leading-snug tracking-widest">
                General Prices:
              </h2>
              {/* Eye Makeup */}
              <div className="flex font-didact text-white left-[40px] top-[145px] absolute">
                <p>Eye Makeup</p>
                <div className="border border-dotted border-white  lg:w-[210px] h-[0px] left-36 w-20 lg:left-[209px] top-[11px] absolute" />
                <p className="left-60 lg:left-[441px] top-0 absolute">$20</p>
              </div>
              {/* Hair Makeup */}
              <div className="w-[200px] lg:w-full flex text-white left-[40px] top-[175px] absolute font-didact">
                <p className="left-0 top-0 absolute text-white text-[15px] font-normal leading-snug">
                  Hair Makeup
                </p>
                <div className="border border-dotted border-white lg:w-[210px] h-[0px] left-36 w-20 lg:left-[209px] top-[11px] absolute"></div>
                <p className=" left-60 lg:left-[441px] top-0 absolute text-white text-[15px] font-normal leading-snug">
                  $40
                </p>
              </div>
              {/* Bridal Makeup */}
              <div className="flex font-didact text-white left-[41px] top-[205px] absolute ">
                <p>Bridal Makeup</p>
                <div className=" left-36 w-20 lg:w-[210px] h-[0px] lg:left-[208px] top-[11px] absolute border border-dotted border-white"></div>
                <p className=" left-60 lg:left-[441px] top-0 absolute text-white text-[15px] font-normal leading-snug">
                  $200
                </p>
              </div>
              {/* Effect makeup */}
              <div className="flex font-didact text-white  left-[42px] top-[235px] absolute">
                <p> Effect Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$100</p>
              </div>
              {/* Facial Makeup */}
              <div className="flex font-didact text-white  left-[42px] top-[265px] absolute">
                <p> Facial Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$60</p>
              </div>
              {/* Child Face Painting */}
              <div className="flex font-didact text-white  left-[42px] top-[295px] absolute">
                <p> Child Face Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$25</p>
              </div>
            </div>
          </div>
          <div className="bg-[url(/imagetwo.png)] w-full h-full lg:h-[30rem] bg-no-repeat bg-cover relative j ">
            <div className="w-full h-full backdrop-blur-sm bg-black/30 absolute flex justify-center align-middle">
              <h2 className="left-[40px] top-[83px] absolute text-white text-2xl font-normal font-oswald leading-snug tracking-widest">
                Bridal Prices:
              </h2>
              {/* Eye Makeup */}
              <div className="flex font-didact text-white left-[40px] top-[145px] absolute">
                <p>Eye Makeup</p>
                <div className="border border-dotted border-white  lg:w-[210px] h-[0px] left-36 w-20 lg:left-[209px] top-[11px] absolute" />
                <p className="left-60 lg:left-[441px] top-0 absolute">$20</p>
              </div>
              {/* Hair Makeup */}
              <div className="w-[200px] lg:w-full flex text-white left-[40px] top-[175px] absolute font-didact">
                <p className="left-0 top-0 absolute text-white text-[15px] font-normal leading-snug">
                  Hair Makeup
                </p>
                <div className="border border-dotted border-white lg:w-[210px] h-[0px] left-36 w-20 lg:left-[209px] top-[11px] absolute"></div>
                <p className=" left-60 lg:left-[441px] top-0 absolute text-white text-[15px] font-normal leading-snug">
                  $40
                </p>
              </div>
              {/* Bridal Makeup */}
              <div className="flex font-didact text-white left-[41px] top-[205px] absolute ">
                <p>Bridal Makeup</p>
                <div className=" left-36 w-20 lg:w-[210px] h-[0px] lg:left-[208px] top-[11px] absolute border border-dotted border-white"></div>
                <p className=" left-60 lg:left-[441px] top-0 absolute text-white text-[15px] font-normal leading-snug">
                  $200
                </p>
              </div>
              {/* Effect makeup */}
              <div className="flex font-didact text-white  left-[42px] top-[235px] absolute">
                <p> Effect Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$100</p>
              </div>
              {/* Facial Makeup */}
              <div className="flex font-didact text-white  left-[42px] top-[265px] absolute">
                <p> Facial Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$60</p>
              </div>
              {/* Child Face Painting */}
              <div className="flex font-didact text-white  left-[42px] top-[295px] absolute">
                <p> Child Face Makeup</p>
                <div className="w-20 lg:w-[210px] h-[0px] left-36 lg:left-[207px] top-[11px] absolute border border-dotted border-white"></div>
                <p className="left-60 lg:left-[441px] top-0 absolute">$25</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <Divider className=" bg-light-salmon-pink w-[85px] mx-auto rotate-90"/>
    </section>
  );
}
