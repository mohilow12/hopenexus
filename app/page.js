'use client'

import { useEffect } from 'react'
import AboutPreview from '@/components/AboutPreview'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import WhyWorkWithUs from '@/components/WhyUs'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100,
    })
  }, [])

  return (
    <>
      <div data-aos="fade-down">
        <Hero />
      </div>
      
      <div data-aos="fade-up">
        <Services />
      </div>
      
      <div data-aos="fade-up">
        <AboutPreview />
      </div>
      
      <div data-aos="fade-up">
        <WhyWorkWithUs />
      </div>
    </>
  )
}

export default Page