"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
   <div className="text-black text-4xl">
    Welcome to Dashboard
   </div>
  );
};

export default Dashboard;
