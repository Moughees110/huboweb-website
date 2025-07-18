import React from "react";
import { Marquee } from "@/components/magicui/marquee"; // ShadCN Marquee component

const cards = [
  "Our team utilizes cutting-edge technology, ensuring fast load times, security, and scalable solutions for your growing business. ",
  "Our web development services create responsive, user-friendly websites, delivering seamless experiences across all devices and platforms.",
  "We build custom websites tailored to your brand, focusing on design, functionality, and optimized user engagement.",
  "From front-end design to back-end functionality, we ensure your site operates smoothly and efficiently for users.",
 
];

function MarqueeCard() {
  return (
    <div className="w-full  py-6">
      <Marquee className="gap-4">
        {cards.map((text, index) => (
          <div
            key={index}
            className="w-64 px-6 py-4 bg-[#1F1F4B] text-white rounded-xl shadow-md font-medium"
          >
            {text}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeCard;
