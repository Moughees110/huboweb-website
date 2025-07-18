"use client";

import Image from "next/image";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Anosh Haider",
    position: "Chief Technical Officer",
    image: "/img/card.jpg",
    email: "ranahaider998@gmail.com"
  },
  {
    name: "Akhter Abbas",
    position: "Chief Technical Officer",
    image: "/img/card4.jpeg",
    email: "akhtarabbas909@gmail.com"
  },
  {
    name: "Moughees Hassan",
    position: "Chief Technical Officer",
    image: "/img/card.jpg",
    email: "mougheeshassan@gmail.com"
  },
  {
    name: "Nuauman Naeem",
    position: "Chief Finance Officer",
    image: "/img/card4.jpeg",
    email: "naumannaeem81@gmail.com"
  }
  // Add more members here
];

export default function Team() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#070121] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">WHO WE ARE</h2>
        <p className="text-sm text-center items-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-[200px] sm:w-[220px] md:w-[340px] overflow-hidden rounded-xl group shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:translate-x-2"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full px-6 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <div className="flex justify-center gap-4 mb-3">
                  <a href="#" className="text-white hover:text-pink-400">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-blue-500">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-sky-400">
                    <Twitter size={20} />
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.position}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  <button className="mt-2 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-[#070121] hover:text-white transition">
                    Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
