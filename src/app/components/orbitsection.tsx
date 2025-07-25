"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  Chrome,
  Twitter,
  Dribbble,
  Github,
  Figma,
  Slack,
  Youtube,
  Linkedin,
  Gitlab,
  Mail
} from "lucide-react";

export default function SectionWithOrbit() {
  return (
    <section className="w-full bg-white text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side with Padding and Improved Styling */}
        <div className="space-y-6 animate-slide-in-left pl-6 md:pl-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-black">
            Building Digital Products <br /> for the Modern World
          </h1>
          <p className="text-base md:text-lg text-black leading-relaxed max-w-xl">
            We are a software house specializing in web and mobile application
            development, UI/UX design, branding, and product strategy. From
            innovative startups to established enterprises, we help brands build
            exceptional digital experiences.
          </p>
          <button className="px-6 py-2 bg-[#071c55] cursor-pointer text-white border hover:text-[#071c55] hover:bg-white rounded-full transition font-medium">
            Get in Touch
          </button>
        </div>

        {/* Right Side with extra left margin */}
        <div className="md:w-1/2 ml-14 flex items-center justify-center min-h-[450px] md:ml-12">
          <div className="relative h-[400px] w-[350px]">
            <OrbitingCircles
              iconSize={48}
              outerRadius={150}
              innerRadius={90}
              outerIcons={[
                <Github className="text-black w-12 h-12" />,
                <Figma className="text-black w-12 h-12" />,
                <Chrome className="text-black w-12 h-12" />,
                <Twitter className="text-black w-12 h-12" />,
                <Gitlab className="text-black w-12 h-12" />,
                <Mail className="text-black w-12 h-12" />
              ]}
              innerIcons={[
                <Dribbble className="text-black w-10 h-10" />,
                <Slack className="text-black w-10 h-10" />,
                <Youtube className="text-black w-10 h-10" />,
                <Linkedin className="text-black w-10 h-10" />
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
