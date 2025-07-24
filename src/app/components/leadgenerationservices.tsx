"use client";

import { Rocket, Target, Users, MailCheck, Phone, Handshake } from "lucide-react";

export default function LeadGenerationServices() {
  return (
    <section className="w-full bg-gradient-to-r from-[#070121] to-gray-900 text-white py-20 px-4 md:px-16 space-y-24">
      {/* Section: Introduction */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Lead Generation Services</h2>
        <p className="text-lg md:text-xl text-gray-300">
          Supercharge your business with high-quality leads tailored to your audience. Our lead generation service helps you connect with potential customers who are already interested in what you offer, turning prospects into loyal clients.
        </p>
      </div>

      {/* Section: Why Lead Generation */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-yellow-400">Why Lead Generation is Crucial</h3>
          <p className="text-gray-300">
            In today’s competitive market, attracting new customers is more challenging than ever. Lead generation bridges the gap between consumer interest and actual sales by identifying and nurturing interested prospects, giving your sales team a significant advantage. 
            We focus on quality over quantity, ensuring you receive leads that convert.
          </p>
        </div>
        <div className="bg-[#1a1f3c] p-6 rounded-xl shadow-md">
          <Rocket className="text-yellow-400 w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold text-white">Boost Conversions</h4>
          <p className="text-gray-400 mt-2">Receive leads that are primed to convert through targeted strategies and analytics.</p>
        </div>
      </div>

      {/* Section: Our Approach */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 text-center">Our Lead Generation Approach</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <Target className="text-yellow-400 w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">Targeted Campaigns</h4>
            <p className="text-gray-400">We design custom strategies based on your audience demographics, interests, and buying behavior.</p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <Users className="text-yellow-400 w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">Data-Driven Insights</h4>
            <p className="text-gray-400">Leverage analytics and reporting tools to measure performance and adjust tactics in real time.</p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <MailCheck className="text-yellow-400 w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">Email & Outreach Automation</h4>
            <p className="text-gray-400">Reach out at scale with personalized, automated email and follow-up sequences that convert.</p>
          </div>
        </div>
      </div>

      {/* Section: Success Metrics */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 text-center">Success Metrics We Track</h3>
        <ul className="text-gray-300 list-disc pl-6 max-w-3xl mx-auto">
          <li className="mb-2">Lead conversion rate</li>
          <li className="mb-2">Cost per lead (CPL)</li>
          <li className="mb-2">Time to conversion</li>
          <li className="mb-2">Lead quality scoring</li>
          <li className="mb-2">Customer lifetime value (CLV)</li>
        </ul>
      </div>

      {/* Section: Testimonials */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-yellow-400 text-center">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <p className="text-gray-300 italic">“We’ve doubled our qualified leads thanks to their expert campaigns. Their team is responsive, smart, and results-driven.”</p>
            <p className="text-yellow-400 mt-4 font-semibold">— Ayesha Tariq, Growth Manager</p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <p className="text-gray-300 italic">“Their lead generation service gave our sales pipeline the fuel it needed. Absolutely recommended!”</p>
            <p className="text-yellow-400 mt-4 font-semibold">— Hamza Sheikh, Co-founder</p>
          </div>
        </div>
      </div>

      {/* Section: Call to Action */}
      <div className="text-center space-y-4 mt-16">
        <h3 className="text-3xl font-semibold text-yellow-400">Ready to Attract More Leads?</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Start converting interest into revenue. Let our expert team design a lead generation funnel that works for your unique audience.
        </p>
        <button className="mt-4 px-8 py-3 rounded-lg bg-yellow-400 text-black font-semibold transition">Start Generating Leads</button>
      </div>
    </section>
  );
}