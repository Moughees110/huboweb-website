"use client";

import { useRouter } from "next/navigation"; // ✅ IMPORT
import { Instagram, Linkedin, Facebook, Twitter, Send } from "lucide-react";

const teamMembers = [
  {
    name: "Anosh Haider",
    position: "Chief Technical Officer",
    image: "/img/anosh.png",
    email: "ranahaider998@gmail.com"
  },
  {
    name: "Akhter Abbas",
    position: "Chief Technical Officer",
    image: "/img/akhter.jpg",
    email: "akhtarabbas909@gmail.com"
  },
  {
    name: "Moughees Hassan",
    position: "Chief Technical Officer",
    image: "/img/moughees.jpeg",
    email: "mougheeshassan@gmail.com"
  },
  {
    name: "Nauman Naeem",
    position: "Chief Finance Officer",
    image: "/img/nauman.jpeg",
    email: "naumannaeem81@gmail.com"
  }
];
const getMemberRoute = (name) => {
  switch (name) {
    case "Anosh Haider":
      return "/anosh";
    case "Akhter Abbas":
      return "/akhter";
    case "Moughees Hassan":
      return "/moughees";
    case "Nauman Naeem":
      return "/nauman";
    default:
      return "/";
  }
};

export default function Team() {
  const router = useRouter(); // ✅ INIT ROUTER

  return (
    <section className="py-36 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">WHO WE ARE</h2>
        <p className="text-sm text-white text-center mb-10">
          Meet the core people driving the vision forward.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[420px] overflow-hidden rounded-xl group shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-end">
                <div className="px-5 py-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-center gap-4 mb-3">
                    <a href="#">
                      <Instagram size={20} />
                    </a>
                    <a href="#">
                      <Linkedin size={20} />
                    </a>
                    <a href="#">
                      <Facebook size={20} />
                    </a>
                    <a href="#">
                      <Twitter size={20} />
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.position}</p>
                      <p className="text-sm text-gray-400">{member.email}</p>
                    </div>

                    {/* ✅ OnClick navigation */}
                    <button
                      onClick={() => router.push(getMemberRoute(member.name))}
                      className="mt-2 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-[#070121] hover:text-white transition"
                    >
                      Details
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
