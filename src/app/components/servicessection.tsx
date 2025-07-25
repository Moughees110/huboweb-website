"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full bg-transparent text-yellow-300 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-10 gap-12">
        {/* Left Side Images */}
        <div className="relative w-full md:w-1/2 h-[450px]">
          {/* Background Image */}
          <Image
            src="/img/built-with-elementor.png" // replace with your background image path
            alt="Main background"
            fill
            className="object-cover rounded-xl"
          />
          {/* Top Image */}
          <Image
            src="/img/2 (1).jpg"
            alt="Top"
            width={200}
            height={100}
            className="absolute top-4 left-1/2 -translate-x-1/2 rounded shadow-lg"
          />
          {/* Bottom Image */}
          <Image
            src="/img/3.jpg"
            alt="Bottom"
            width={200}
            height={100}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="px-4 py-1 text-sm font-semibold rounded-full bg-white text-black inline-block w-fit">
            Build with Elementor
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Build website visually with the Elementor Page Builder.
          </h2>
          <p className="text-gray-300 text-lg">
            All our WordPress themes are built using Elementor, the world’s
            leading WordPress page builder. It empowers you to create stunning
            websites effortlessly, with no coding required. Experience unmatched
            flexibility, speed, and a user-friendly drag-and-drop interface that
            makes web design a breeze.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-yellow-300 w-5 h-5" />
              <span className="text-white">Drag & Drop Editing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-yellow-300 w-5 h-5" />
              <span className="text-white">Unlimited Creativity</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-yellow-300 w-5 h-5" />
              <span className="text-white">Responsive Design</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-yellow-300 w-5 h-5" />
              <span className="text-white">Global Styling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
