'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-[#0f2b3d] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
                Transforming Communities Through {' '}
                <span className="text-[#F5A623] relative inline-block">
                  Equity-Driven Action
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7 Q 50 2, 100 7 T 195 7" stroke="#F5A623" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-sm sm:text-md mt-8 md:mt-6 text-white/80 leading-relaxed max-w-xl">
               We partner with nonprofits, public agencies, and community leaders to drive lasting, equitable change—anchored in cultural humility, accountability, and shared purpose.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group px-5 py-2.5 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full hover:bg-[#ffb340] transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-lg shadow-[#F5A623]/20"
              >
                <div className="w-5 h-5 rounded-full bg-[#0f2b3d] flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>Partner With Us</span>
              </Link>

              <Link
                href="/about"
                className="group px-5 py-2.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-3 h-3 text-white ml-0.5" />
                </div>
                <span>Our Approach</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-[#0f2b3d] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-[#0f2b3d] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-[#0f2b3d] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-[#0f2b3d] object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Trusted by 50+</p>
                <p className="text-[#F5A623] text-sm">Organizations Nationwide and Growing</p>
              </div>
            </div>
          </div>

          {/* Right Image - Hidden on mobile */}
         <div className="relative hidden md:block">
  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1677152951816-83cc8ff220fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwc29tYWxpJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
      alt="Group of women sitting together"
      className="w-full h-[450px] lg:h-[500px] object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b3d]/40 to-transparent" />
  </div>

            
            {/* Floating accent element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F5A623] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#2B7A9B] rounded-full opacity-20 blur-3xl" />
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#F5A623] rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2B7A9B] rounded-full opacity-5 blur-3xl" />
      </div>
    </section>
  )
}