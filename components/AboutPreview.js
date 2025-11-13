'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* Image Section - Left Side */}
          <div className="relative lg:w-1/2 w-full">
            <div className="relative rounded-l-3xl lg:rounded-l-3xl lg:rounded-r-none rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1602181026089-ef2bf4a3e23e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBzb21hbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=800"
                alt="Team meeting discussing strategies"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2B7A9B]/20 to-transparent" />
            </div>
            
            {/* Floating accent circle */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#2B7A9B] to-[#F5A623] rounded-full blur-3xl opacity-40" />
          </div>

          {/* Content Section - Right Side */}
          <div className="lg:w-1/2 w-full bg-white rounded-r-3xl lg:rounded-r-3xl lg:rounded-l-none rounded-3xl shadow-2xl p-8 lg:p-16 lg:-ml-12 z-10 mt-8 lg:mt-0 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2B7A9B]/10 rounded-full">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0f2b3d] to-[#0f2b3d] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[#0f2b3d] font-semibold text-sm">About us</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d] leading-tight">
              Our Mission{' '}
              <span className="italic font-light text-[#F5A623]">& Focus</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
               We build organizations that not only meet compliance standards but thrive through equity, inclusion, and responsiveness to the lived experiences of ALL including immigrant and refugee families.
            </p>

            {/* CTA Button */}
            <Link href="/about">
              <button className="group inline-flex items-center space-x-3 px-5 py-2.5 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300">
                <div className="w-7 h-7 rounded-full bg-[#0f2b3d] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <span>Learn More</span>
              </button>
            </Link>
          </div>
        </div>
                            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center space-y-3 group">
            <div className="relative inline-block">
              <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#0f2b3d] to-[#2B7A9B] bg-clip-text text-transparent">
                160+
              </h3>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F5A623]/20 to-[#2B7A9B]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-xl font-semibold text-[#0f2b3d]">Years Combined Experience</p>
            <p className="text-gray-500 text-sm">Our multidisciplinary team brings decades of nonprofit leadership, academic rigor, and cultural insight.</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center space-y-3 group">
            <div className="relative inline-block">
              <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#0f2b3d] to-[#2B7A9B] bg-clip-text text-transparent">
                8
              </h3>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F5A623]/20 to-[#2B7A9B]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-xl font-semibold text-[#0f2b3d]">Expert Consultants</p>
            <p className="text-gray-500 text-sm">Leaders across education, healthcare, and social equity—united by one mission: stronger, more inclusive communities.</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center space-y-3 group">
            <div className="relative inline-block">
              <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#0f2b3d] to-[#2B7A9B] bg-clip-text text-transparent">
                20+
              </h3>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F5A623]/20 to-[#2B7A9B]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-xl font-semibold text-[#0f2b3d]">Countries’ experience</p>
            <p className="text-gray-500 text-sm">Global experience, local partnerships, measurable results.</p>
          </div>

          {/* Stat 4 */}
          {/* <div className="text-center space-y-3 group">
            <div className="relative inline-block">
              <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#0f2b3d] to-[#2B7A9B] bg-clip-text text-transparent">
                5
              </h3>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F5A623]/20 to-[#2B7A9B]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-xl font-semibold text-[#0f2b3d]">Ph.D. Level Experts</p>
            <p className="text-gray-500 text-sm">Academic excellence meets practical application.</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
