'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  const backgroundImages = [
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", position: "top-left" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80", position: "top-right" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80", position: "bottom-left" },
    { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", position: "center-left" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80", position: "center-right" },
    { src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80", position: "bottom-right" },
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-20">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src={img.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2b3d]/90 via-[#0f2b3d]/85 to-[#0f2b3d]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2B7A9B]/20 rounded-full border border-[#2B7A9B]/30">
          <Sparkles className="w-4 h-4 text-[#2B7A9B]" />
          <span className="text-white font-medium text-sm">Work With Us</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Build <span className="italic font-light text-gray-300">Stronger,</span><br />
          More Resilient Communities
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          HopeNexus Consulting partners with government agencies, nonprofit organizations, and
          educational institutions to strengthen capacity, improve outcomes, and build lasting public
          trust. Together, we ensure that agencies implementing taxpayer-funded programs are
          strong partners of the government and have the capacity to deliver effective and efficient
          services, creating sustainable and positive changes in the communities they serve.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <a href="/contact" className="group inline-flex items-center space-x-3 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-bold text-lg rounded-full hover:bg-[#ffb340] hover:shadow-2xl hover:shadow-[#F5A623]/30 hover:scale-105 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-[#0f2b3d] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <span>Let&apos;s connect</span>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#2B7A9B] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#F5A623] rounded-full blur-3xl opacity-20" />
    </section>
  )
}