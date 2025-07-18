"use client";

import Image from "next/image";
import MarqueeCard from "../components/marqueecard";
<<<<<<< HEAD
import Card from "../card/page";
=======
import  Testimonials  from "../components/testimonials";
import FAQSection from "../components/faqs";
>>>>>>> d327e746ecfb1397029c29bc72c2d7122fc29983

const Hero = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Empower Your Business with Innovative Web Solutions
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto md:mx-0">
            We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/img/download (1).png"
            alt="Hero Image"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
<<<<<<< HEAD
      <MarqueeCard/>
      <Card/>
=======
      
>>>>>>> d327e746ecfb1397029c29bc72c2d7122fc29983
    </section>
  );
};

export default Hero;
