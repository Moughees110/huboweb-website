import React from "react";
import Hero from "../components/hero";
import CareerSection from "../components/careersection";
import WidgetMarqueeSection from "../components/widgetmarqueesection";
import Testimonials from "../components/testimonials";
import Faqs from "../components/faqs";

export default function Careers() {
  return (
    <div>
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/download (1).png"
      />
      <CareerSection />
      <WidgetMarqueeSection />
      <Testimonials />
      <Faqs imageSrc="/img/faq-removebg-preview.png" />
    </div>
  );
}
