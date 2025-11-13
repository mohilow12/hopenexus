'use client'

import { useEffect } from 'react'
import { ArrowRight, Users, Heart, Globe, Sparkles, Target, TrendingUp, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 80,
    })
  }, [])
  const services = [
    {
      icon: Users,
      title: "Capacity Building for Government Agencies, Public Institutions and Nonprofit Organizations",
      shortDesc: "We strengthen government agencies, public institutions, and nonprofit organizations through strategic consulting, leadership development, and capacity-building initiatives. Our tailored, people-centered approach enhances operations, governance, and sustainability so your organization can deliver greater impact and thrive in complex, evolving communities.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      features: [
        "Strategic planning and organizational development",
        "Board development and governance training",
        "Fundraising strategy and donor engagement",
        "Program evaluation and impact measurement",
        "Leadership development for executive teams"
      ]
    },
    {
      icon: Heart,
      title: "Equity and Inclusion Advocacy",
      shortDesc: "We help organizations design equitable systems, policies, and practices that amplify diverse voices. From inclusive training to organizational assessments, we support long-term culture change that advances fairness and belonging for all.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
      features: [
        "DEI assessments and strategic planning",
        "Unconscious bias training and workshops",
        "Policy development for inclusive practices",
        "Community engagement and dialogue facilitation",
        "Cultural competency training programs"
      ]
    },
    {
      icon: Globe,
      title: "Immigrant & Intergenerational Support",
      shortDesc: "We bridge cultural and generational divides through mentorship, dialogue, and wellness initiatives that strengthen families, foster connection, and build cohesive, resilient communities.",
      image: "https://images.unsplash.com/photo-1664874322412-66e589265c15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhcHB5JTIwc29tYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
      features: [
        "Cultural integration and adaptation support",
        "Intergenerational dialogue programs",
        "Resource navigation and advocacy",
        "Community building initiatives",
        "Language access and interpretation services"
      ]
    },
    {
      icon: Sparkles,
      title: "Leadership & Youth Mentoring",
      shortDesc: "We equip youth and emerging leaders with the skills, confidence, and purpose to lead change. Through mentorship, career development, and civic engagement programs, we cultivate the next generation of resilient, community-driven changemakers.",
      image: "https://images.unsplash.com/photo-1692638324021-0d2761c6d1b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvcmVzdCUyMHJvYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
      features: [
        "One-on-one mentorship programs",
        "Leadership skills development workshops",
        "Career guidance and goal setting",
        "Confidence building and public speaking",
        "Networking and professional connections"
      ]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We begin by learning your story—understanding your goals, challenges, and organizational culture."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We co-create an actionable strategy aligned with your mission, vision, and measurable objectives."
    },
    {
      step: "03",
      title: "Implementation & Support",
      description: "We partner closely to implement solutions, providing hands-on support and accountability throughout the process."
    },
    {
      step: "04",
      title: "Evaluation & Growth",
      description: "We track results, share insights, and refine strategies to sustain progress and scale success."
    }
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative mt-12 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 md:left-20 w-64 h-64 bg-[#2B7A9B] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 md:right-20 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div
            data-aos="fade-down"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F5A623]/20 rounded-full border border-[#F5A623]/30"
          >
            <Target className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-sm">Our Services</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight px-4"
          >
            Transformative Solutions for <span className="italic font-light text-[#F5A623]">Meaningful, Measurable Impact</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          >
            From organizational development to youth leadership, we deliver customized strategies that empower government agencies and nonprofit partners to serve all communities, including immigrants and refugee to create measurable, lasting change.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px] sm:h-[400px] lg:h-[500px] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2b3d]/40 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#F5A623]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2B7A9B]/10 rounded-full">
                  <div className="w-2 h-2 bg-[#2B7A9B] rounded-full" />
                  <span className="text-[#2B7A9B] font-semibold text-sm">Service {index + 1}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
                  {service.title.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="text-[#F5A623] italic font-light">
                    {service.title.split(' ').slice(-2).join(' ')}
                  </span>
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {service.shortDesc}
                </p>

                <Link href="/contact">
                  <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-bold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300 mt-4">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section - Waterfall */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b3d] px-4"
            >
              Our <span className="text-[#F5A623] italic font-light">Process</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
            >
              Our proven, collaborative framework ensures every partnership delivers results and growth from first conversation to measurable outcomes.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F5A623] via-[#2B7A9B] to-[#F5A623] transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-24">
              {process.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#F5A623]">
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-[#F5A623]/10 rounded-full mb-4 ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                        <span className="text-[#F5A623] font-bold text-sm">STEP {item.step}</span>
                      </div>
                      <div className="clear-both space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0f2b3d] group-hover:text-[#F5A623] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative lg:w-2/12 flex justify-center">
                    <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#F5A623] to-[#2B7A9B] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl lg:text-3xl">{item.step}</span>
                    </div>

                    {/* Connecting dots */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-2 h-2 bg-[#2B7A9B] rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-[#2B7A9B] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-[#2B7A9B] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              ))}
            </div>

            {/* Decorative elements - constrained */}
            <div className="absolute -top-10 left-0 w-40 h-40 bg-[#F5A623] rounded-full blur-3xl opacity-10" />
            <div className="absolute -bottom-10 right-0 w-40 h-40 bg-[#2B7A9B] rounded-full blur-3xl opacity-10" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f2b3d] to-[#1a3a4f] rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4">
              Why Organizations <span className="text-[#F5A623] italic font-light">Choose Us</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3 px-4">
                <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Proven Expertise</h3>
                <p className="text-gray-300 text-sm sm:text-base">over 20 years of federal, state, and nonprofit experience, in building equitable systems and empowering communities to thrive.</p>
              </div>

              <div className="space-y-3 px-4">
                <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Authentic Partnership</h3>
                <p className="text-gray-300 text-sm sm:text-base">We co-create solutions with you, ensuring strategies fit your vision and values.</p>
              </div>

              <div className="space-y-3 px-4">
                <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Measurable Impact</h3>
                <p className="text-gray-300 text-sm sm:text-base">Our evidence-based approach delivers clear results—helping organizations grow stronger, smarter, and more sustainable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
            Ready to Transform Your <span className="text-[#F5A623] italic font-light">Organization?</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Let&apos;s talk about how HopeNexus can help you strengthen your mission, deepen your impact, and lead lasting community change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            {/* <Link href="/contact">
              <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-bold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link> */}

            <Link href="/contact">
              <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0f2b3d] transition-all duration-300">
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
