"use client";

import { TextReveal } from "@/components/magicui/text-reveal";

export default function HuboHeading() {
  return (
    <section className="w-[90vw] bg-transparent text-white py-10 flex items-center justify-center">
      <div className="text-center px-4 space-y-2">
        <h1 className="text-[80px] md:text-[120px] font-extrabold leading-tight">
          <TextReveal>
            Welcome to HuboWeb Technologies,  
            where creativity meets code,  
            and digital experiences come to life  
            with innovation and precision.
          </TextReveal>
        </h1>
      </div>
    </section>
  );
}
