'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Mail, User, MessageSquare, Briefcase, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      })
    }
    initAOS()

    // Initialize EmailJS with your public key
    emailjs.init('_BC5HafABmYFbdfTR')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        'service_0g04zto',
        'template_kta4nkg',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@hopenexus.org',
        }
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d]">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-5 sm:left-10 md:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#2B7A9B] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-5 sm:right-10 md:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#F5A623] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F5A623]/20 rounded-full border border-[#F5A623]/30" data-aos="fade-down">
            <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-xs sm:text-sm">Get In Touch</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4" data-aos="fade-up" data-aos-delay="100">
            Let&apos;s Start a <span className="italic font-light text-[#F5A623]">Conversation</span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="200">
            Have a question or ready to begin your journey with us? We&apos;re here to help and excited to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-5 overflow-hidden hidden lg:block">
          <div className="absolute top-40 right-10 lg:right-20 w-96 h-96 bg-[#2B7A9B] rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-10 lg:left-20 w-80 h-80 bg-[#F5A623] rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-[#0f2b3d] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#2B7A9B]/30 p-6 sm:p-8 lg:p-12" data-aos="fade-up" data-aos-delay="200">
            {submitStatus === 'success' && (
              <div className="mb-6 p-3 sm:p-4 bg-green-900/30 border border-green-500/50 rounded-xl flex items-start sm:items-center space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-green-200 font-medium text-sm sm:text-base">Message sent successfully! We&apos;ll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-3 sm:p-4 bg-red-900/30 border border-red-500/50 rounded-xl">
                <p className="text-red-200 font-medium text-sm sm:text-base">Oops! Something went wrong. Please try again or email us directly.</p>
              </div>
            )}

            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2" data-aos="fade-right" data-aos-delay="300">
                <label htmlFor="name" className="flex items-center space-x-2 text-gray-200 font-semibold text-xs sm:text-sm">
                  <User className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F5A623]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-[#2B7A9B]/30 bg-[#1a3a4f]/50 text-white placeholder:text-gray-400 focus:border-[#F5A623] focus:bg-[#1a3a4f] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2" data-aos="fade-left" data-aos-delay="400">
                <label htmlFor="email" className="flex items-center space-x-2 text-gray-200 font-semibold text-xs sm:text-sm">
                  <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F5A623]" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-[#2B7A9B]/30 bg-[#1a3a4f]/50 text-white placeholder:text-gray-400 focus:border-[#F5A623] focus:bg-[#1a3a4f] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2" data-aos="fade-right" data-aos-delay="500">
                <label htmlFor="subject" className="flex items-center space-x-2 text-gray-200 font-semibold text-xs sm:text-sm">
                  <Briefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F5A623]" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-[#2B7A9B]/30 bg-[#1a3a4f]/50 text-white placeholder:text-gray-400 focus:border-[#F5A623] focus:bg-[#1a3a4f] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2" data-aos="fade-left" data-aos-delay="600">
                <label htmlFor="message" className="flex items-center space-x-2 text-gray-200 font-semibold text-xs sm:text-sm">
                  <MessageSquare className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#F5A623]" />
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-[#2B7A9B]/30 bg-[#1a3a4f]/50 text-white placeholder:text-gray-400 focus:border-[#F5A623] focus:bg-[#1a3a4f] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all duration-200 resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center space-x-2 sm:space-x-3 px-5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#F5A623] to-[#ffb340] text-[#0f2b3d] font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-[#F5A623]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                data-aos="zoom-in" 
                data-aos-delay="700"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-3 border-[#0f2b3d]/30 border-t-[#0f2b3d] rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center space-y-3 sm:space-y-4 px-4" data-aos="fade-up" data-aos-delay="400">
            <p className="text-gray-600 text-sm sm:text-base">
              Prefer to email us directly? Reach out at{' '}
              <a href="mailto:info@hopenexus.org" className="text-[#2B7A9B] font-semibold hover:text-[#F5A623] transition-colors hover:underline break-all">
                info@hopenexus.org
              </a>
            </p>
{/*<p className="text-gray-500 text-xs sm:text-sm">
              We typically respond within 24-48 hours during business days.
            </p>*/}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d] relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 md:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#2B7A9B] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 md:right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-[#F5A623] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" data-aos="fade-up">
            Ready to Make an <span className="text-[#F5A623] italic font-light">Impact?</span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Whether you&apos;re looking for capacity building, equity advocacy, or leadership mentoring—we&apos;re here to help you succeed.
          </p>
        </div>
      </section>
    </div>
  )
}
