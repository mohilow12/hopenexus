'use client'

import { useState, useEffect } from 'react'
import { Users, ChevronDown, ChevronUp, UserCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TeamPage() {
  const [expandedBios, setExpandedBios] = useState({})

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 80,
    })
  }, [])

  const toggleBio = (index) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const teamMembers = [
    {
      name: "Eman I. Yarrow, Ph.D.",
      role: "Founder & Team Lead",
      image: "/hopenexus1.png",
      shortBio: "Former U.S. Diplomat with 20+ years leading global development programs across Africa, the Middle East, and the U.S.",
      fullBio: "Former U.S. Diplomat with 20+ years leading global development programs across Africa, the Middle East, and the U.S. Specializes in strategic planning, policy reform, and fiscal accountability in education, youth empowerment, and community resilience. Extensive experience in early childhood and refugee resettlement."
    },
    {
      name: "Mohamed Mohamud",
      role: "Co-founder & Consultant",
      image: "/hopenexus4.png",
      shortBio: "Accomplished entrepreneur with 20+ years in telecommunications, transportation, and community services.",
      fullBio: "Accomplished entrepreneur with 20+ years in telecommunications, transportation, and community services. Proven track record in operational excellence, organizational growth, and developing innovative service models that advance community access and equity."
    },
    {
      name: "Habiba Ibrahim, Ph.D.",
      role: "Consultant",
      image: "/hopenexus2.jpeg",
      shortBio: "Social work scholar with 15+ years in community development and policy analysis.",
      fullBio: "Social work scholar with 15+ years in community development and policy analysis. Focuses on racial justice, equity in K–12 education, and immigrant and refugee integration with expertise bridging research and practice."
    },
    {
      name: "Sisay Teketele, Ph.D.",
      role: "Consultant",
      image: "/hopenexus3.png",
      shortBio: "18+ years leading data analytics and data science programs with 15+ years teaching business analytics.",
      fullBio: "18+ years leading data analytics and data science programs with 15+ years teaching business analytics at graduate and undergraduate levels. Organisational development practitioner and academician. Experienced dissertation mentor and subject matter expert in advanced analytics."
    },
    {
      name: "Abdi Ali Maalim, MSA, CFE, EA",
      role: "Consultant",
      image: "/hopenexus5.jpeg",
      shortBio: "Seasoned tax accountant and CEO with 20+ years of experience in tax, audit, and fraud prevention.",
      fullBio: "Seasoned tax accountant and CEO with 20+ years of experience in tax, audit, and fraud prevention. He leads a successful Seattle-based firm and is a Certified Fraud Examiner and IRS Enrolled Agent."
    },
    {
      name: "Mohamed Hillow",
      role: "IT and Data Management",
      image: "/hopenexus6.jpeg",
      shortBio: "Senior Healthcare Economics Consultant with expertise in health informatics and data analytics.",
      fullBio: "Senior Healthcare Economics Consultant with expertise in health informatics and data analytics. He helps healthcare organizations turn data into insights, improve performance, and support data-driven decisions across clinical and business teams."
    },
    {
      name: "Hassan Arur",
      role: "Communications and Marketing",
      image: "/hopenexus7.png",
      shortBio: "Journalist-turned-digital content creator who leads communications and marketing at HopeNexus.",
      fullBio: "Journalist-turned-digital content creator who leads communications and marketing at HopeNexus. He crafts clear, authentic messages that connect audiences with the firm's mission, turning interest into engagement."
    },
    {
      name: "Asha Handulleh, RN, BSN, RT(R)",
      role: "Consultant",
      image: "/hopenexus8.png",
      shortBio: "Accomplished Registered Nurse and entrepreneur with 20+ years in healthcare leadership across ICU, Oncology, and Medical-Surgical nursing.",
      fullBio: "Accomplished Registered Nurse and entrepreneur with 20+ years in healthcare leadership across ICU, Oncology, and Medical-Surgical nursing. Founder of All About Kidz LLC childcare center in Lynnwood. Nominated Outstanding Businesswoman of the Year (2025). Active advocate for environmental health equity through The Lead Safe Community Program, bridging healthcare, early education, and community wellness."
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
            <Users className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-sm">Our Team</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight px-4"
          >
            Meet the <span className="italic font-light text-[#F5A623]">Experts</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          >
            A diverse team of experienced professionals united by a passion for driving equity-driven change and empowering communities through collaborative, trust-based strategies.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2B7A9B 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
              Leadership & <span className="text-[#F5A623] italic font-light">Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
              Each team member brings deep expertise, cultural insight, and a commitment to transforming communities through meaningful partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => {
              const isFeatured = index === 0

              return (
                <div
                  key={index}
                  className={`group text-center ${isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5A623] to-[#2B7A9B] p-1 group-hover:scale-105 transition-transform duration-300 group-hover:rotate-6">
                        {member.image === "placeholder" ? (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <UserCircle className="w-20 h-20 sm:w-24 sm:h-24 text-gray-400" strokeWidth={1.5} />
                          </div>
                        ) : (
                          <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={400}
                              height={400}
                              className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 flex-grow flex flex-col">
                      <div className="min-h-[80px] flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-[#0f2b3d] group-hover:text-[#2B7A9B] transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>

                      <p className="text-[#F5A623] font-semibold text-xs uppercase tracking-wide">
                        {member.role}
                      </p>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#F5A623] to-[#2B7A9B] rounded-full mx-auto" />

                      <div className="text-gray-600 text-sm leading-relaxed flex-grow">
                        <p className={`transition-all duration-300 ${expandedBios[index] ? '' : 'line-clamp-3'}`}>
                          {expandedBios[index] ? member.fullBio : member.shortBio}
                        </p>

                        <button
                          onClick={() => toggleBio(index)}
                          className="mt-3 inline-flex items-center space-x-1 text-[#2B7A9B] hover:text-[#F5A623] font-semibold text-xs transition-colors duration-200 group/btn"
                        >
                          <span>{expandedBios[index] ? 'Read Less' : 'Read More'}</span>
                          {expandedBios[index] ? (
                            <ChevronUp className="w-3 h-3 group-hover/btn:-translate-y-0.5 transition-transform" />
                          ) : (
                            <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
            Ready to Transform Your <span className="text-[#F5A623] italic font-light">Organization?</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Let&apos;s talk about how HopeNexus can help you strengthen your mission, deepen your impact, and lead lasting community change.
          </p>

          <Link href="/contact">
              <button className="group inline-flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0f2b3d] transition-all duration-300">
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </div>
      </section>
    </div>
  )
}