'use client'

import { useEffect } from 'react'
import { ArrowRight, Target, Users, Award, Heart, Shield, Scale, Lightbulb, Globe, TrendingUp, Building } from 'lucide-react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 80,
    })
  }, [])

  const teamMembers = [
    {
      name: "Eman I. Yarrow",
      role: "Ph.D. Consultant",
      image: "/hopenexus1.png",
      bio: "Former U.S. Diplomat with 20+ years leading global development programs across Africa, the Middle East, and the U.S. Specializes in strategic planning, policy reform, and fiscal accountability in education, youth empowerment, and community resilience."
    },
    {
      name: "Habiba Ibrahim",
      role: "Ph.D. Consultant",
      image: "/hopenexus2.png",
      bio: "Social work scholar with 15+ years in community development and policy analysis. Focuses on racial justice, equity in K–12 education, and immigrant and refugee integration with expertise bridging research and practice."
    },
    {
      name: "Sisay Teketele",
      role: "Ph.D. Consultant",
      image: "/hopenexus3.png",
      bio: "18+ years leading data analytics and data science programs with 15+ years teaching business analytics at graduate and undergraduate levels. Experienced dissertation mentor and subject matter expert in advanced analytics."
    },
    {
      name: "Mohamed Mohamud",
      role: "Consultant",
      image: "/hopenexus4.png",
      bio: "Accomplished entrepreneur with 20+ years in telecommunications, transportation, and community services. Proven track record in operational excellence, organizational growth, and developing innovative service models that advance community access and equity."
    }
  ]

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We act with honesty, transparency, and accountability in everything we do."
    },
    {
      icon: Scale,
      title: "Equity",
      description: "We work to break down barriers, ensuring fairness, access, and inclusion for all communities."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We thrive on partnerships that multiply impact and create meaningful & lasting change."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We design forward-thinking solutions that respond to real-world challenges with creativity and practicality."
    },
    {
      icon: Globe,
      title: "Cultural Humility",
      description: "We honour diverse traditions and perspectives, approaching every community with respect and openness to learn."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative mt-12 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#2B7A9B] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div 
            data-aos="fade-down"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F5A623]/20 rounded-full border border-[#F5A623]/30"
          >
            <Building className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-sm">About Us</span>
          </div>
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Building Success <span className="italic font-light text-[#F5A623]">Together</span>
          </h1>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We're more than consultants—we're your strategic partners in growth, 
            dedicated to turning challenges into opportunities.
          </p>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
            <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
                Our <span className="text-[#F5A623] italic font-light">Story</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                HopeNexus was founded by a group of dedicated professionals who saw first hand the challenges faced by nonprofits and the communities they serve. Recognizing a deep need for culturally responsive guidance, our founders came together with a shared vision: to help organizations grow stronger, more inclusive, and more impactful.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What started as a small team of three passionate consultants has grown into 
                a trusted partner for over 200 businesses. Through every project, we've 
                maintained our commitment to delivering personalized strategies that drive 
                real, measurable results.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we're proud to be known not just for our expertise, but for the 
                lasting relationships we build and the transformative impact we create 
                for every client we serve.
              </p>
            </div>
            
            <div className="lg:w-2/5" data-aos="fade-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2b3d]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2B7A9B]/5 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-8" data-aos="zoom-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#2B7A9B]/10 rounded-full">
            <Target className="w-4 h-4 text-[#2B7A9B]" />
            <span className="text-[#2B7A9B] font-semibold text-sm">Our Mission</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d] leading-tight max-w-4xl mx-auto">
            "To empower businesses with strategic insights and actionable solutions 
            that drive <span className="text-[#F5A623]">sustainable growth</span> and 
            lasting success."
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Every decision we make, every strategy we craft, and every relationship we 
            build is guided by this unwavering commitment to your success.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
              Meet Our <span className="text-[#F5A623] italic font-light">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced professionals united by a passion for driving success.
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 flex md:flex-none overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group flex-shrink-0 w-[75vw] md:w-auto snap-center text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5A623] to-[#2B7A9B] p-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 px-4">
                  <h3 className="text-2xl font-bold text-[#0f2b3d] group-hover:text-[#F5A623] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <div className="h-1 w-16 bg-[#F5A623] rounded-full mx-auto" />
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
              Our Core <span className="text-[#F5A623] italic font-light">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className="bg-[#0f2b3d] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 bg-[#F5A623] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-[#0f2b3d]" />
                </div>
                <h3 className="text-2xl font-bold text-white/80">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Start Your <span className="text-[#F5A623] italic font-light">Growth Journey?</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's discuss how we can help you overcome challenges, seize opportunities, 
            and achieve your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-bold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0f2b3d] transition-all duration-300">
              <span>Schedule a Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}