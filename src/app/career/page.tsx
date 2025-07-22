import React from 'react'
import Hero from '../components/hero'
import PartnersPage from '../components/partnerspage'
import CareerSection from '../components/careersection'

export default function Careers() {
  return (
    <div>
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/download (1).png"
      />
      <PartnersPage/>
      <CareerSection/>
    </div>
  )
}
