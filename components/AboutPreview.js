'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* Image Section - Left Side */}
          <div className="relative lg:w-1/2 w-full">
            <div className="relative rounded-l-3xl lg:rounded-l-3xl lg:rounded-r-none rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
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
              The Core Mission Behind{' '}
              <span className="italic font-light text-[#F5A623]">all Our Work</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              We are driven by a clear mission—to deliver tailored strategies, 
              actionable insights, and long-term value that empower businesses 
              to grow with confidence.
            </p>

            {/* CTA Button */}
            <button className="group inline-flex items-center space-x-3 px-5 py-2.5 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300">
              <div className="w-7 h-7 rounded-full bg-[#0f2b3d] flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <span>Learn More</span>
            </button>
          </div>
        </div>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center space-y-3">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#0f2b3d]">12+</h3>
            <p className="text-xl font-semibold text-[#0f2b3d]">Years in Business</p>
            <p className="text-gray-500 text-sm">A decade of trusted consulting experience.</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center space-y-3">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#0f2b3d]">200+</h3>
            <p className="text-xl font-semibold text-[#0f2b3d]">Projects Delivered</p>
            <p className="text-gray-500 text-sm">Real-world solutions that achieved measurable results.</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center space-y-3">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#0f2b3d]">95%</h3>
            <p className="text-xl font-semibold text-[#0f2b3d]">Client Retention Rate</p>
            <p className="text-gray-500 text-sm">Our clients come back—and that says everything.</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center space-y-3">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#0f2b3d]">$10M+</h3>
            <p className="text-xl font-semibold text-[#0f2b3d]">Revenue Impacted</p>
            <p className="text-gray-500 text-sm">We&apos;ve helped businesses unlock millions in growth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}