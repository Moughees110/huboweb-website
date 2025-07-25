"use client";

import { TextReveal } from "@/components/magicui/text-reveal";

interface HuboHeadingProps {
  text: string;
}

export default function HuboHeading({ text }: HuboHeadingProps) {
  return (
    <section className="w-[90vw] bg-transparent text-yellow-300 py-10 flex items-center justify-center">
      <div className="text-center px-4 space-y-2">
        <h1 className="text-[80px] md:text-[120px] font-extrabold leading-tight">
          <TextReveal>{text}</TextReveal>
        </h1>
      </div>
    </section>
  );
}
