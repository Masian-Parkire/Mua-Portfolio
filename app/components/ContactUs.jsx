import { Divider } from "@nextui-org/react";
import React from "react";
import {TfiHeadphoneAlt, TfiEmail, TfiLocationPin, TfiTime, TfiMapAlt} from "react-icons/tfi"

export default function ContactUs() {
  return (
    <section id="contact" className="bg-[#F0F0F0] py-2 lg:py-[100px] ">
      <div className="container mx-auto ">
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="font-didact">
        <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">Hi, it is me Kiithya, Unleash Your Beauty Dreams!  </p>
        <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">Contact Me for a Transformation That Speaks Louder Than Words.</p>
        <p className="text-neutral-900 text-opacity-70 text-[17px] font-didact leading-7">
        Let's Glam Together!
        </p>
        <div className="flex gap-6 mt-6 items-center">
        <TfiHeadphoneAlt className="text-light-salmon-pink"/>
        <p className="font-didact">+254 706 766 020</p>

        </div>
        <div className="flex gap-6 mt-6 items-center">
        <TfiEmail className="text-light-salmon-pink"/>
        <p className="font-didact">email@example.com</p>

        </div>
        <div className="flex gap-6 mt-6 items-center">
        <TfiLocationPin className="text-light-salmon-pink"/>
        <p className="font-didact">Karen, Nairobi</p>

        </div>
        <div className="flex gap-6 mt-6 items-center">
        <TfiTime className="text-light-salmon-pink"/>
        <p className="font-didact">Mon-Fri: 08.00 - 19.00, Sunday: Closed</p>

        </div>
        <div className="flex gap-6 mt-6 items-center">
        <TfiMapAlt className="text-light-salmon-pink"/>
        <p className="font-didact">Google Maps</p>

        </div>
        </div>
        <div className="font-didact">
            
        </div>
       
      </div>
      </div>
    </section>
  );
}
