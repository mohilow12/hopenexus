'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, Users, Globe, ArrowRight } from 'lucide-react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(0)

  const services = [
    {
      icon: TrendingUp,
      title: "Capacity Building for Nonprofits",
      description: "Enhance infrastructure, leadership, and data-driven decision-making to grow your mission sustainably and confidently.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
    },
    {
      icon: Users,
      title: "Equity and Inclusion Advocacy",
      description: "Develop policies and cultures that honor diverse voices, dismantle barriers, and advance systemic equity across your organization.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=800&fit=crop"
    },
    {
      icon: Globe,
      title: "Immigrant & Intergenerational Support",
      description: "Empower immigrant and multigenerational communities through inclusive engagement, leadership pathways, and cross-cultural understanding.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=800&fit=crop"
    }
  ]

  return (
    <section className="relative bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0f2b3d] text-white px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full"></div>
            <span className="text-sm font-medium">Our services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core <span className="italic font-light">Services</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver tailored strategies that strengthen your organization’s foundation, elevate leadership, and accelerate mission impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          
          {services.map((service, index) => {
            const Icon = service.icon
            const isActive = activeCard === index

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive ? 'md:scale-105' : 'md:scale-100'
                }`}
                style={{ minHeight: '400px' }}
              >
                {/* Background Image */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isActive ? 'bg-[#0f2b3d]/50' : 'bg-[#0f2b3d]'
                }`} />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className={`transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-14 h-14 bg-[#F5A623] rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#0f2b3d]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description - shows when not active */}
                  <div className={`transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <p className="text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Overlay Box - only on active card */}
                  {isActive && (
                    <div className="absolute bottom-8 left-8 right-8 bg-[#F5A623] rounded-2xl p-6 animate-fadeIn">
                      <div className="flex items-start space-x-3">
                        <Icon className="w-6 h-6 text-[#0f2b3d] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-[#0f2b3d] mb-2">
                            {service.title}
                          </h4>
                          <p className="text-[#0f2b3d]/90 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2.5 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full hover:bg-[#ffb340] transition-all duration-300 shadow-lg shadow-[#F5A623]/20"
          >
            <div className="w-5 h-5 rounded-full bg-[#0f2b3d] flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
            <span>Explore More</span>
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}