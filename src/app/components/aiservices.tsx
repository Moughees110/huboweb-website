"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AiServices() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#070121] to-gray-900 text-white py-20 px-4 md:px-10">
      {/* Top Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug max-w-4xl mx-auto">
          Craft Stunning Visuals with our Powerful AI Tools
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Leverage AI Engine and Smart Assistant to generate stunning visuals instantly.
        </p>
      </div>

      {/* Center Content with overlays */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Main Laptop Image with Overlays */}
        <div className="relative z-10">
          {/* Laptop Image */}
          <Image
            src="/img/ai.jpeg"
            alt="Laptop UI"
            width={900}
            height={600}
            className="rounded-xl shadow-2xl"
          />

          {/* Top Left Icon on Laptop */}
          <div className="absolute -top-12 -left-12 md:-top-16 md:-left-16 z-20">
            <Image
              src="/img/ai1.jpg"
              alt="AI Cat"
              width={200}
              height={120}
              className="rounded mt-6 shadow-xl"
            />
          </div>

          {/* Bottom Right Preview on Laptop */}
          <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 z-20">
            <Image
              src="/img/ai2.jpg"
              alt="Preview Grid"
              width={260}
              height={180}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
