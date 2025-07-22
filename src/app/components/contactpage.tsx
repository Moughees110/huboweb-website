"use client";

import React from "react";
import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 text-white bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in Touch
        </h2>

        {/* Row: Customer Care & Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Customer Care Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Customer Care</h3>
            <p className="text-gray-300">
              Our support team is available 24/7 to assist you. We value our
              customers and strive to provide the best service possible.
            </p>

            {/* Example Customer Profiles */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/customer3.png"
                  alt="Customer Support"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah Ahmed</p>
                  <p className="text-sm text-gray-400">Senior Support Agent</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/img/customer2.jpg"
                  alt="Customer Support"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Ali Raza</p>
                  <p className="text-sm text-gray-400">Technical Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with MagicCard */}
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <form className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-900 to-gray-900 cursor-pointer transition-colors text-white rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </MagicCard>
        </div>

        {/* Google Map */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold mb-6 text-center">Find Us</h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Google Map - Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.093241732082!2d74.32154765000001!3d31.54970095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483aa823e7f%3A0xb1b36ff4ff5d53e9!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721587070700!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
