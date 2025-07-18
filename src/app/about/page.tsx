import React from 'react'
import Hero from '../components/hero'
import Team from '../team/page'

export default function About() {
  return (
    <div>
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/download (1).png"
      />
      <Team/>
    </div>
  )
}
  