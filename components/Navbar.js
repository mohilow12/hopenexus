'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Change background after scrolling past threshold
      setScrolled(currentScrollY > 20)
      
      // Hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-[#0f2b3d] backdrop-blur-xl shadow-lg shadow-black/10' 
          : 'bg-[#0f2b3d]/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
  <div className={`relative transition-all group-hover:scale-110 ${
    scrolled ? 'w-16 h-16' : 'w-20 h-20'
  }`}>
    <Image
      src="/logo.png"
      alt="HopeNexus Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
  <div className="block">
    <span className={`text-white font-bold transition-all ${
      scrolled ? 'text-lg' : 'text-xl'
    }`}>HopeNexus</span>
    <div className="text-yellow-500 font-bold text-[8px]">
      Empowering Communities, Strengthening Systems
    </div>
  </div>
</Link>
          {/* <Link href="/" className="flex items-center space-x-2 group">
            <div className={`relative transition-all group-hover:scale-110 ${
              scrolled ? 'w-12 h-12' : 'w-14 h-14'
            }`}>
              <Image
                src="/logo.png"
                alt="HopeNexus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className={`text-white font-bold transition-all ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>HopeNexus</span>
            </div>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 tracking-wider transition-colors relative group ${
                  isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#F5A623] transition-all duration-300 ${
                  isActive(link.href) ? 'w-3/5' : 'w-0 group-hover:w-3/5'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`group px-4 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full hover:bg-[#ffb340] transition-all duration-300 flex items-center space-x-2.5 shadow-lg shadow-[#F5A623]/20 ${
                scrolled ? 'py-1.5' : 'py-2'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-[#0f2b3d] flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-[#F5A623] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F5A623] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 right-0 bg-[#0f2b3d] border-b border-white/10 transition-all duration-300 ease-in-out ${
          scrolled ? 'top-16' : 'top-20'
        } ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(link.href) 
                  ? 'text-white bg-white/10' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-6 py-3 bg-[#F5A623] text-[#0f2b3d] font-semibold rounded-full text-center hover:bg-[#ffb340] transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
