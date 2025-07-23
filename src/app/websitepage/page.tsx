// app/blog-detail/page.tsx
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

const WebsitePage = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Main Content */}
        <div>
          <Image
            src="/img/developer.jpg"
            alt="Blog"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4">
            Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
            quia
          </h1>
          <p className="text-gray-600 mt-2">
            Similique neque nam consequuntur ad non maxime aliquam quas.
            Quibusdam animi praesentium...
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Blog Inside Post</h2>
          <Image
            src="/img/developer2.jpg"
            alt="Inside Post"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl text-black font-bold">
            Ut repellat blanditiis est dolore sunt dolorum quae.
          </h2>
          <p className="text-gray-600">
            Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro
            amet nostrum...
          </p>
          <hr />
        </div>

        {/* Comments */}
        <div className="mt-6">
          {[
            {
              avatar: "/images/img/blog/comments-1.jpg",
              username: "Georgia Reader",
              date: "Jan 5, 2024",
              comment: "Et rerum totam nisi..."
            },
            {
              avatar: "/images/img/blog/comments-2.jpg",
              username: "Aron Alvarado",
              date: "Jan 6, 2024",
              comment: "Ipsam tempora sequi..."
            },
            {
              avatar: "/images/img/blog/comments-3.jpg",
              username: "Lynda Small",
              date: "Jan 7, 2024",
              comment: "Enim ipsa eum fugiat fuga..."
            },
            {
              avatar: "/images/img/blog/comments-4.jpg",
              username: "Sianna Ramsay",
              date: "Jan 8, 2024",
              comment: "Et dignissimos impedit..."
            },
            {
              avatar: "/images/img/blog/comments-5.jpg",
              username: "Nolan Davidson",
              date: "Jan 9, 2024",
              comment: "Distinctio nesciunt rerum..."
            },
            {
              avatar: "/images/img/blog/comments-6.jpg",
              username: "Kay Duggan",
              date: "Jan 10, 2024",
              comment: "Dolorem atque aut..."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer text-gray-800 hover:text-orange-600"
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
                  <button className="flex items-center text-gray-500 text-lg hover:text-orange-500 transition duration-300">
                    <Reply className="mr-1 w-4 h-4" />
                    Reply
                  </button>
                </div>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-gray-600">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* Author */}
        <div className="p-2 border rounded-xl text-center">
          <Image
            src="/img/smith.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-gray-500 text-2xl font-semibold mt-2">
            Jane Smith
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-500">
            <Twitter className="hover:text-orange-600" />
            <Facebook className="hover:text-orange-600" />
            <Linkedin className="hover:text-orange-600" />
            <Instagram className="hover:text-orange-600" />
          </div>
          <p className="text-gray-600 mt-2">
            Itaque quidem optio quia voluptatibus dolorem dolor...
          </p>
        </div>

        {/* Search */}
        <div className="p-4 border rounded-xl">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-orange-600">|</span> Search
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2">
            <Search className="text-gray-500 text-xl mr-2" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-orange-600">|</span> Categories
          </h3>
          {[
            "General",
            "Lifestyle",
            "Travel",
            "Design",
            "Creative",
            "Education"
          ].map((cat, i) => (
            <p
              key={i}
              className="text-gray-500 hover:text-orange-600 cursor-pointer"
            >
              {cat} <span className="text-sm text-gray-400">(12)</span>
            </p>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-orange-600">|</span> Recent Posts
          </h3>
          {[
            "Understanding React Hooks",
            "Mastering Tailwind CSS",
            "JavaScript ES6 Features",
            "Building a Full-Stack App",
            "State Management with Redux"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-gray-600 hover:text-orange-600 cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-400">Jan {12 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="p-4 border rounded-xl">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-orange-600">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Tailwind",
              "CSS",
              "Next.js",
              "Frontend",
              "UI/UX",
              "Blog"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-orange-500 hover:text-white cursor-pointer"
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

export default WebsitePage;
