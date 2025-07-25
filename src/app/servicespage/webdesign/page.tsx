import React from "react";
import Hero from "../../components/hero";
import WebDevServices from "@/app/components/webdevservices";
import TechnologyStack from "@/app/components/technologystack";
import WhyChooseUs from "@/app/components/whychooseus";
import ProjectShowcase from "@/app/components/projectsshowcase";

export default function WebDesign() {
  return (
    <div className="mt-10">
      <Hero
        title="Unlock Your Brand’s Potential with Stunning Web Design & Powerful Development"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/webdesign2.webp"
      />
      <WebDevServices/>
      <TechnologyStack/>
      <WhyChooseUs/>
      <ProjectShowcase/>
    </div>
  );
}