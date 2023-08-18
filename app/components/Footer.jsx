import React from "react";
import { TfiFacebook, TfiInstagram, TfiTwitter } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="bg-black py-2 lg:py-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
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
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
