import React from 'react'
import Hero from '../components/hero'
import CardSection from '../components/cardsection'
import Testimonials from '../components/testimonials'
import Faqs from '../components/faqs'
import WidgetMarqueeSection from '../components/widgetmarqueesection'
import ServicesSection from '../components/servicessection'
import AiServices from '../components/aiservices'
import HuboHeading from '../components/huboheading'
import AnimatedCard from '../components/animatedcard'

export default function Services() {
  return (
    <div className='mt-10'>
      <Hero
        title="Drive Growth with Cutting-Edge Digital Experiences"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/custom-dev.png"
      />
      <AnimatedCard/>
      <WidgetMarqueeSection/>
      <CardSection/>
      <ServicesSection/>
      <HuboHeading text="At HuboWeb Technologies, we blend creativity and code to craft digital experiences that are innovative, precise, and unforgettable." />
      <Testimonials/>
      <AiServices/>
      <Faqs imageSrc="/img/faq-removebg-preview.png"/>
    </div>
  )
}
