import React from 'react'
import Hero from '../components/hero'
import CardSection from '../components/cardsection'
import Testimonials from '../components/testimonials'
import Faqs from '../components/faqs'
import WidgetMarqueeSection from '../components/widgetmarqueesection'

export default function Services() {
  return (
    <div className='mt-10'>
      <Hero
        title="Empower Your Business with Innovative Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/bg2.jpg"
      />
      <WidgetMarqueeSection/>
      <CardSection/>
      <Testimonials/>
      <Faqs imageSrc="/img/faq-removebg-preview.png"/>
    </div>
  )
}
