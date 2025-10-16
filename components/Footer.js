'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#0f2b3d] via-[#1a3a4f] to-[#0f2b3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 transition-all group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="HopeNexus Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">HopeNexus</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Our mission is a future where every family including immigrants and refugees thrive as equal partners in shaping resilient, inclusive communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#F5A623] transition-colors duration-200 inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              Ready to transform your business? Let&apos;s start a conversation about your goals and how we can help you achieve them.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-bold rounded-full hover:bg-[#ffb340] hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2B7A9B]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hopenexus. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#2B7A9B] text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#2B7A9B] text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}