"use client";

import Hero from "../components/hero"; // adjust path based on your file structure
import MarqueeCard from "../components/marqueecard";
import Card from "../card/page";
import Testimonials from "../components/testimonials";
import { MarqueeDemo } from "../components/page";
import Faqs from "../components/faqs";
import FaqTutorialSection from "../components/faqtutorialsection";
import OrbitSection from "../components/orbitsection";
import HuboHeading from "../components/huboheading";

export default function Home() {
  return (
    <div>
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/download (1).png"
      />
      <MarqueeCard/>
      <FaqTutorialSection/>
      <Card/>
      <HuboHeading/>
      <OrbitSection/>
      <Testimonials/>
      {/* <FAQSection/> */}
      <MarqueeDemo/>
      <Faqs imageSrc="/img/faq-removebg-preview.png"/>
    </div>
  );
}
