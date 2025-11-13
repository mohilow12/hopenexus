'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Target, Users, Shield, Scale, Lightbulb, Globe, Building, UserCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutPage() {
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

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We lead with honesty, transparency, and accountability in every relationship."
    },
    {
      icon: Scale,
      title: "Equity",
      description: "We challenge systemic barriers and expand access—building fairness and inclusion into every solution."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe strong partnerships multiply impact and create lasting, community-led change."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We bring fresh thinking to real-world challenges—blending creativity with practical, results-driven solutions."
    },
    {
      icon: Globe,
      title: "Cultural Humility",
      description: "We honor diverse traditions and perspectives, approaching every community with respect, curiosity, and a commitment to learning."
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
            <Building className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-sm">About Us</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight px-4"
          >
            Building Success <span className="italic font-light text-[#F5A623]">Together</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          >
            We partner with government agencies, public institutions and nonprofit organizations to build success through equity driven action uplifting all communities, including immigrants and emerging leaders,
            through collaborative, trust-based strategies that turn shared vision into measurable
            impact.
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
                HopeNexus began with a simple but powerful idea: that meaningful change happens when equity, culture, vision, and leadership align. Founded by professionals who witnessed first-hand the challenges human service agencies, including  nonprofits face, we created HopeNexus to provide culturally responsive, equity-driven consulting that helps organizations grow stronger, more inclusive, and sustainable.
              </p>
              {/* <p className="text-gray-600 text-lg leading-relaxed">
                What started as a small team of three passionate consultants has grown into 
                a trusted partner for over 200 businesses. Through every project, we&apos;ve
                maintained our commitment to delivering personalized strategies that drive 
                real, measurable results.
              </p> */}
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we&apos;re recognized for more than expertise—we&apos;re known for the trust we build, the communities we empower, and the lasting transformation we help our partners achieve.
              </p>
            </div>

            <div className="lg:w-2/5 w-full" data-aos="fade-left">
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
            <span className="text-[#2B7A9B] font-semibold text-sm">Our Vision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b3d] leading-tight max-w-4xl mx-auto px-4">
            A future where every family immigrant and refugee family thrives as
            <span className="text-[#F5A623]"> equal partners</span> in building resilient, inclusive communities.
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto px-4">
            Every decision, strategy, and partnership we pursue reflects our commitment to equity, empowerment, and shared success.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      {/* Team Grid Section */}

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f2b3d]">
              Our Core <span className="text-[#F5A623] italic font-light">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
              The guiding principles behind every partnership, program, and piece of progress.
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
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight px-4">
            Ready to Start Your <span className="text-[#F5A623] italic font-light">Growth Journey?</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Let&apos;s discuss how we can help you overcome challenges, seize opportunities, 
            and achieve your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4" data-aos="fade-up" data-aos-delay="100">
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
      </section> */}
    </div>
  )
}
