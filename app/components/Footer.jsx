import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
  TfiFacebook,
  TfiInstagram,
  TfiTwitter,
  TfiHeadphoneAlt,
  TfiEmail,
  TfiLocationPin,
} from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="bg-black py-2 lg:py-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
          <div>
            <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
              <p className="text-red-300 text-[45px] font-normal leading-snug tracking-[7.50px] font-oswald">
                KIITHYA
              </p>
            </div>
            <p className="text-white text-[15px] font-didact leading-relaxed">
              Hi, it is me Kiithya, Unleash Your Beauty Dreams!
              <br />
              Let’s Glam Together!
            </p>
            <div className="flex gap-6 py-6">
              <TfiFacebook className="text-light-salmon-pink" />
              <TfiInstagram className="text-light-salmon-pink" />
              <TfiTwitter className="text-light-salmon-pink" />
            </div>
          </div>
          <div className="text-[#FFF5F5]">
            <p className="text-red-300 text-[15px] font-normal leading-snug tracking-[5px] font-oswald py-2.5 justify-center items-center">
              GET IN TOUCH
            </p>
            <div className="w-[295px] border border-zinc-800"></div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiHeadphoneAlt className="text-light-salmon-pink" />
              <p className="font-didact">+254 706 766 020</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiEmail className="text-light-salmon-pink" />
              <p className="font-didact">email@example.com</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiLocationPin className="text-light-salmon-pink" />
              <p className="font-didact">Karen, Nairobi</p>
            </div>
          </div>
          <div className="text-[#FFF5F5]  ">
            <p className="text-red-300 text-[15px] font-normal leading-snug tracking-[5px] font-oswald py-2.5 justify-center items-center">
              OPENING HOURS
            </p>
            <div className="w-[295px] border border-zinc-800"></div>
            <div className="flex gap-8 mt-6">
              <p className="font-didact"> Mon - Fri:</p>
              <p className="font-didact"> 9am - 7pm</p>
            </div>
            <div className="flex gap-[32px] mt-6">
              <p className="font-didact"> Saturday: </p>
              <p className="font-didact"> 10am - 5pm</p>
            </div>
            <div className="flex gap-[44px] mt-6">
              <p className="font-didact"> Sunday: </p>
              <Link href="tel:+254 706 766 020">
                <p className="font-didact"> By Call </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider className="mt-10 bg-zinc-800"/>
      
    </footer>
  );
}
