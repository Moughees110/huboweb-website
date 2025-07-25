"use client";

import Image from "next/image";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Reply,
  Search
} from "lucide-react";

const ProductPage = () => {
  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side - Main Content */}
      <div className="md:col-span-2 space-y-6">
        {/* Featured Product Section */}
        <div>
          <Image
            src="/img/product.jpg"
            alt="Featured Product"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-yellow-300">
            Introducing Our Next-Gen SmartWatch Pro X
          </h1>
          <p className="text-white mt-2">
            Discover unmatched performance, sleek design, and health-focused
            innovation with the SmartWatch Pro X. Designed for modern
            professionals and athletes alike.
          </p>
        </div>

        {/* Product Features Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold hover:text-yellow-300">
            Key Features & Benefits
          </h2>
          <Image
            src="/img/product3.webp"
            alt="Product Features"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl font-bold hover:text-yellow-300">
            Experience Innovation in Every Detail
          </h2>
          <p>
            With AI-powered health tracking, 7-day battery life, and water
            resistance up to 50 meters, SmartWatch Pro X empowers your lifestyle
            without compromise.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Customer Reviews */}
        <div className="mt-6">
          {[
            {
              avatar: "/img/comment7.jpg",
              username: "Usman Tariq",
              date: "Jun 22, 2024",
              comment:
                "Absolutely love the SmartWatch Pro X. Battery lasts forever and fitness tracking is super accurate!"
            },
            {
              avatar: "/img/comment9.jpg",
              username: "Zainab Khan",
              date: "Jun 30, 2024",
              comment:
                "Stylish, lightweight, and powerful! Easily integrates with my smartphone and tracks sleep like a pro."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-yellow-300"
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
                  <button className="flex items-center text-gray-400 text-lg hover:text-yellow-300 transition duration-300">
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

      {/* Right Sidebar */}
      <aside className="space-y-6">
        {/* Company Author/Team */}
        <div className="p-2 border rounded-xl text-center border-gray-700">
          <Image
            src="/img/smith4.jpg"
            alt="Brand"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            TechVerse Ltd.
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-yellow-300" />
            <Facebook className="hover:text-yellow-300" />
            <Linkedin className="hover:text-yellow-300" />
            <Instagram className="hover:text-yellow-300" />
          </div>
          <p className="text-white mt-2">
            Innovating wearable technology to help you stay ahead in fitness,
            productivity, and life.
          </p>
        </div>

        {/* Search Products */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-yellow-300">|</span> Search Products
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search product..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Product Categories */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-yellow-300">|</span> Categories
          </h3>
          {["Wearables", "Smart Home", "Accessories", "Audio", "Fitness"].map(
            (cat, i) => (
              <p
                key={i}
                className="text-white hover:text-yellow-300 cursor-pointer"
              >
                {cat} <span className="text-sm text-gray-500">(8)</span>
              </p>
            )
          )}
        </div>

        {/* Recent Launches */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-yellow-300">|</span> New Launches
          </h3>
          {[
            "SmartRing Aura Gen 2",
            "HomeHub Mini",
            "AirBeats Pro Wireless"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-white hover:text-yellow-300 cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-500">Jul {5 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Product Tags */}
        <div className="p-4 border rounded-xl border-gray-700">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-yellow-300">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Smartwatch",
              "Fitness",
              "HealthTech",
              "Wearable",
              "Bluetooth",
              "Innovation"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-yellow-300 hover:text-black cursor-pointer"
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

export default ProductPage;
