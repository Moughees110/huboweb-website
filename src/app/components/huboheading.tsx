"use client";

import Image from "next/image";
import { TextReveal } from "@/components/magicui/text-reveal";

interface HuboHeadingProps {
  text: string;
}

export default function HuboHeading({ text }: HuboHeadingProps) {
  return (
    <section className="w-[90vw] bg-transparent text-white py-10 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto">
      
      {/* Left: Heading */}
      <div className="w-full md:w-1/2 px-4 space-y-2 text-left">
        <h1 className="text-[50px] md:text-[100px] font-extrabold leading-tight">
          <TextReveal>{text}</TextReveal>
        </h1>
      </div>

      {/* Right: Larger images stacked vertically */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/ai.jpeg"
            alt="Image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/ai1.jpg"
            alt="Image 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/ai2.jpg"
            alt="Image 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
