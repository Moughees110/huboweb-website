"use client";

import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import clsx from "clsx";

const team = [
  {
    name: "Muhammad Raza",
    role: "Senior 'React & Next-js Developer",
    desc: "Skilled in React & next js, JavaScript, HTML, CSS,  with API integration. ",
    image: "/img/raza.jpg",
    animation: "fade-left"
  },
  {
    name: "Saadat Ali",
    role: "UI Design Maker React & Next-js Developer",
    desc: " Skilled in React & next js, JavaScript, HTML, CSS,  with Redux or Context API integrations. ",
    image: "/img/me7.jpg",
    animation: "fade-up"
  },
  {
    name: "Ahsan Shahzad Khan",
    role: ".Net & Backend Developer",
    desc: "A .NET developer focuses on server-side logic and infrastructure of web applications.",
    image: "/img/ahsan-DHYrVaVD.jpeg",
    animation: "fade-right"
  },
  {
    name: "Wafadar Hussain",
    role: "Backend Developer",
    desc: " focuses on the server-side logic of web applications,handling databases, servers, and APIs to ensure smooth functionality.",
    image: "/img/wafadar.jpg",
    animation: "fade-left"
  },
  {
    name: "Faizan Fareed Khan ",
    role: "Senior React.js Developer",
    desc: "API integrations and backend architecture.Ensures product quality and user focus.",
    image: "/img/faizan-DpARnDmW.jpeg",
    animation: "fade-up"
  },
  {
    name: "Bilal Khan",
    role: "QA Engineer",
    desc: "Testing and reliability specialist.",
    image: "/img/me2.jpg",
    animation: "fade-right"
  }
];

export default function OverTeam() {
  return (
    <section className="relative h-screen bg-transparent text-white py-10 px-2 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 h-full">
        {/* COMBINED SCROLL WRAPPER */}
        <div className="flex w-full gap-10 overflow-y-scroll scrollbar-hide h-full">
          {/* LEFT SECTION */}
          <div className="flex-1 min-w-[300px] sticky top-0 h-fit py-4 self-start">
            <div className="space-y-5">
              <h2 className="text-4xl font-bold relative group inline-block w-fit">
                Meet Our Visionary Team
                <span className="block h-[3px] w-0 bg-white transition-all duration-500 group-hover:w-full mt-1" />
              </h2>
              <p className="text-gray-300">
                Our team of dedicated professionals brings ideas to life. From
                creative minds to technical experts, we work together to shape
                the future of digital experiences.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex-1 pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className={clsx(
                    "relative overflow-hidden rounded-xl shadow-lg group transition-all duration-500",
                    i % 3 === 1 ? "h-[440px]" : "h-[360px]",
                    "bg-cover bg-center"
                  )}
                  style={{
                    backgroundImage: `url(${member.image})`
                  }}
                >
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-white text-[#070121] px-3 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{member.desc}</p>
                    <div className="flex gap-3 mt-3">
                      <a href="#">
                        <Instagram size={18} />
                      </a>
                      <a href="#">
                        <Twitter size={18} />
                      </a>
                      <a href="#">
                        <Linkedin size={18} />
                      </a>
                      <a href="#">
                        <Facebook size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Removed Shade Layer */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
