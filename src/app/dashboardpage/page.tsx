"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Reply,
  Search
} from "lucide-react";

const DashboardPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/dashboard3.jpg"
            alt="Dashboard Design"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white">
            How to Design a Clean & Functional Admin Dashboard
          </h1>
          <p className="text-white mt-2">
            Explore essential strategies for building intuitive and visually
            compelling dashboard UIs using React, Tailwind CSS, and component
            libraries.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold hover:text-white">
            Key Principles of Dashboard UX
          </h2>
          <Image
            src="/img/dashboard4.jpg"
            alt="Inside Post"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl font-bold hover:text-white">
            Prioritize Clarity, Structure & Visual Hierarchy
          </h2>
          <p>
            Successful dashboards guide the user through clear layout,
            accessible controls, and real-time data. Use cards, grids, and
            charts to enhance information architecture.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          {[
            {
              avatar: "/img/comment3.jpg",
              username: "Bilal Khan",
              date: "Jul 15, 2024",
              comment:
                "Loved the point about keeping KPIs above the fold. Very helpful for product teams."
            },
            {
              avatar: "/img/comment4.jpg",
              username: "Zara Aslam",
              date: "Jul 18, 2024",
              comment:
                "Finally someone explained how to use dark mode in dashboards without ruining readability!"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-white"
              data-aos="fade-up"
              data-aos-delay={500 + i * 100}
            >
              <Image
                src={item.avatar}
                alt={item.username}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">{item.username}</h4>
                  <button className="flex items-center text-gray-400 text-lg hover:text-white transition duration-300">
                    <Reply className="mr-1 w-4 h-4" /> Reply
                  </button>
                </div>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-white">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* Author */}
        <div className="p-2 border rounded-xl text-center border-gray-700" data-aos="fade-left">
          <Image
            src="/img/smith2.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">Jamson</h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            UX designer focused on admin panels, SaaS UI kits, and interactive
            design systems for B2B products.
          </p>
        </div>

        {/* Search */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="100">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Search
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {[
            "UI/UX",
            "Admin Panels",
            "Charts & Graphs",
            "Tailwind CSS",
            "Figma to Code"
          ].map((cat, i) => (
            <p key={i} className="text-white hover:text-white cursor-pointer">
              {cat} <span className="text-sm text-gray-500">(8)</span>
            </p>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[
            "Building KPI Dashboards with Recharts",
            "Why Dark UI Works for Admin Panels",
            "Designing CRUD Interfaces That Don’t Suck"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-white hover:text-white cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-500">Jul {20 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Dashboard",
              "KPI",
              "Tailwind",
              "Next.js",
              "React",
              "Dark UI"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-900 to-gray-900 hover:text-black cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardPage;
