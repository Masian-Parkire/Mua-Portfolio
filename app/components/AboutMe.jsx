import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <section className="  bg-white py-2 lg:py-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-2 items-center">
          <div className="cols-span-5">
            <Image src="/aboutme.jpg" width={550} height={500} alt="kiithya" className="max-lg:w-full" />
          </div>
          <div className="cols-span-7 
        pt-2 lg:pt-0">
           
            <div className="pb-2">
              <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
                MAKEUP ARTIST
              </p>
            </div>
            <div className="pb-4">
              <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
                IAN KIITHYA
              </p>
            </div>
            <div className="pb-6">
              <Divider className=" bg-light-salmon-pink w-[85px] " />
            </div>
            <div className="text-zinc-400 text-[15px] font-normal leading-relaxed">
              <p className="font-didact">
                Hey there, I'm Kiithya, a professional makeup artist breaking
                the norms. While makeup might seem like a female-dominated
                field, I've carved my path with creativity and passion. My
                favorite color, a gentle and soothing light salmon pink, defines
                not only my style but also my perspective – a fusion of warmth
                and sophistication.
              </p>
              <p className="font-didact pt-6">
                Beyond the glitz and glamour, I find my joy in the simplest of
                activities. You'll often catch me at home, wrapped up in
                captivating docuseries. There's something about unraveling real
                stories that keeps me hooked and inspires my artistry.
              </p>
              <p className="font-didact pt-6">
                My brushes and palette are extensions of my imagination and
                skill. I turn faces into living, breathing works of art, each
                stroke telling a unique story. As a guy in the makeup world, I
                bring a fresh take, pushing boundaries and embracing the
                unexpected.
              </p>
              <p className="font-didact pt-6">
                So here's to embracing pink, creating beauty, and finding
                inspiration in the comfort of my home, one docuseries at a time.
                I'm Kiithya – makeup artist, storyteller, and advocate for
                breaking stereotypes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
