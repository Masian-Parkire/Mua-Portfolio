import { Divider } from "@nextui-org/react";
import React from "react";
import {
  TfiHeadphoneAlt,
  TfiEmail,
  TfiLocationPin,
  TfiTime,
  TfiMapAlt,
} from "react-icons/tfi";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#F0F0F0]  ">
      <div className="container mx-auto py-2 lg:py-[100px] ">
        <div className="pl-2 lg:pl-0">
          <div className="pb-2">
            <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
              LOCATION
            </p>
          </div>
          <div className="pb-4">
            <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
              CONTACT US
            </p>
          </div>
          <div className="pb-6">
            <Divider className=" bg-light-salmon-pink w-[85px] " />
          </div>
        </div>
        {/* contact us */}
        <div className="grid grid-cols-1 lg:grid-cols-2  pl-2 lg:pl-0">
          <div className="font-didact">
            <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">
              Hi, it is me Kiithya, Unleash Your Beauty Dreams!{" "}
            </p>
            <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">
              Contact Me for a Transformation That Speaks Louder Than Words.
            </p>
            <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">
              Let's Glam Together!
            </p>
            <div className="flex gap-6 mt-6 items-center">
              <TfiHeadphoneAlt className="text-light-salmon-pink" />
              <p className="font-didact">+254 706 766 020</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiEmail className="text-light-salmon-pink" />
              <p className="font-didact">Kiithyaian@gmail.com</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiLocationPin className="text-light-salmon-pink" />
              <p className="font-didact">Karen, Nairobi</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiTime className="text-light-salmon-pink" />
              <p className="font-didact">
                Mon-Fri: 08.00 - 19.00, Sunday: Closed
              </p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiMapAlt className="text-light-salmon-pink" />
              <p className="font-didact">Google Maps</p>
            </div>
          </div>
          <div className="font-didact">
            <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald pt-4 lg:pt-0">
              GET IN TOUCH
            </p>

            <div className=" grid-cols-1 lg:grid-cols-2 gap-3 pt-6 grid">
            <div class="relative z-0 ">
                <input
                  type="text"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  for="name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
            <div class="relative z-0 ">
                <input
                  type="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
          
            </div>
           
            <div class="relative z-0 mt-6">
              <textarea
                type="textarea"
                id="textarea"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="textarea"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <button
              title="submit"
              type="submit"
              className=" px-8 py-3 bg-red-300 justify-center items-center gap-2.5 inline-flex mt-6"
            >
              <p className="text-[#030202] text-[15px] font-normal leading-snug font-didact">
                Submit
              </p>
            </button>
          </div>
        </div>
      </div>
      <Divider className=" bg-light-salmon-pink w-[85px] mx-auto rotate-90 md:block hidden" />
    </section>
  );
}
