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

export default function Nauman() {
  return (
    <main className="relative min-h-screen text-white bg-transparent">
      {/* 🔳 Hero Section With Right Side Large Image */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT: Info Area */}
        <div className="w-full md:w-1/2 flex items-center justify-start px-8 py-10 bg-transparent">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl font-bold text-yellow-300 mb-4">
              Numan Khan
            </h1>

            {/* 🔗 Social Media Icons */}
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
                  src="/img/nauman.jpeg"
                  alt="Numan Portrait"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Info List with Icons */}
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Cake size={18} className="text-yellow-300" /> Birthday: May
                  15, 1987
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-yellow-300" /> Age: 37
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-yellow-300" /> +92 333
                  1234567
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-yellow-300" />{" "}
                  numan.khan@example.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-yellow-300" /> Lahore,
                  Pakistan
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-yellow-300" /> CFA,
                  LUMS Lahore
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-Height Image */}
        <div className="w-full md:w-1/2 mt-20 mx-15 relative min-h-[90vh]">
          <Image
            src="/img/service4.png"
            alt="Finance Officer Image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 🔽 About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">
          About Numan Khan
        </h2>
        <p className="mb-6 leading-relaxed text-gray-300">
          Numan Khan is a seasoned financial strategist and currently serves as
          the Chief Technical Finance Officer of the company. With a strong
          background in corporate finance, investment strategy, and risk
          management, Numan leads our financial planning and ensures long-term
          financial health.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          He has a deep understanding of tech-driven financial solutions,
          digital payment systems, and fintech integration. Numan uses data to
          drive strategic decisions and ensures every financial action supports
          our business vision.
        </p>
        <p className="leading-relaxed text-gray-300">
          He is passionate about leveraging finance for growth, sustainability,
          and innovation. Outside work, Numan participates in finance
          conferences, mentors young analysts, and explores emerging trends in
          decentralized finance (DeFi).
        </p>
      </section>
      <PartnersPage />
    </main>
  );
}
