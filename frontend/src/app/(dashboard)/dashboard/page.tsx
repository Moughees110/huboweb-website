"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "@/app/(website)/page";


const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
   <div>
    <Home/>
   </div>
  );
};

export default Dashboard;
