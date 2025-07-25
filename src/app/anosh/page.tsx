"use client";

import {
  Cake,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import Image from "next/image";
import React from "react";
import PartnersPage from "../components/partnerspage";

export default function Anosh() {
  return (
    <main className="relative min-h-screen text-white bg-transparent">
      {/* 🔳 Hero Section With Right Side Large Image */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT: Info Area */}
        <div className="w-full md:w-1/2 flex items-center justify-start px-8 py-10 bg-transparent">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl font-bold text-white mb-8">
              Anosh Haider
            </h1>
            <div className="flex gap-4 mb-8">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  size={22}
                  className="text-blue-400 hover:text-blue-500"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={22}
                  className="text-blue-600 hover:text-blue-700"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={22}
                  className="text-pink-500 hover:text-pink-600"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={22}
                  className="text-blue-500 hover:text-blue-600"
                />
              </a>
            </div>

            {/* Small image + Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Small image */}
              <div className="w-[180px] h-[220px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/img/anosh.png"
                  alt="Anosh Portrait"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Info List with Icons */}
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Cake size={18} className="text-white" /> Birthday: Jan
                  1, 1995
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-white" /> Age: 29
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-white" /> +92 300
                  1234567
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-white" />{" "}
                  anosh@example.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-white" /> Lahore,
                  Pakistan
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-white" /> BSCS,
                  PU Lahore
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-Height Image from URL */}
        <div className="w-full md:w-1/2 mt-20 mx-14 relative min-h-[90vh]">
          <Image
            src="/img/service4.png"
            alt="Right Side Image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 🔽 About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-white">
          About Anosh Haider
        </h2>
        <p className="mb-6 leading-relaxed text-gray-300">
          Anosh Haider is a visionary technology leader with years of experience
          in software engineering, system architecture, and innovation strategy.
          As the Chief Technical Officer at our company, he plays a key role in
          driving digital transformation and developing scalable technology
          solutions.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Anosh specializes in cloud computing, microservices architecture,
          DevOps practices, and agile leadership. He has led multiple successful
          projects and believes in building products that truly solve user
          problems. His leadership style is collaborative, transparent, and
          focused on growth.
        </p>
        <p className="leading-relaxed text-gray-300">
          Outside of work, Anosh is a mentor, speaker, and lifelong learner. He
          regularly contributes to open-source projects, attends tech
          conferences, and writes about technology trends and startup culture.
        </p>
      </section>
      <PartnersPage />
    </main>
  );
}
