import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://yourcompany.com'), // Replace with your actual domain
  title: {
    default: 'HopeNexus Consultancy | Business Consultancy in Seattle, WA',
    template: '%s | HopeNexus Consultancy',
  },
  description: 'HopeNexus strengthens nonprofits and communities through capacity building, equity advocacy, immigrant support, and youth leadership programs. Empowering organizations to create lasting change in Seattle and beyond.',
  keywords: [
    'nonprofit capacity building',
    'organizational development nonprofit',
    'nonprofit consulting Seattle',
    'equity and inclusion training',
    'DEI consulting services',
    'immigrant support services',
    'youth mentorship programs',
    'leadership development nonprofit',
    'community empowerment',
    'nonprofit board development',
    'fundraising strategy consulting',
    'cultural competency training',
    'intergenerational programs',
    'nonprofit leadership coaching',
    'program evaluation nonprofit',
    'community capacity building',
    'social impact consulting',
    'nonprofit governance training'
  ],
  authors: [{ name: 'HopeNexus Consultancy' }],
  creator: 'HopeNexus Consultancy ',
  publisher: 'HopeNexus Consultancy',
  
  // Geographic targeting
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Seattle',
    'geo.position': '47.6062;-122.3321', // Seattle coordinates
  },
  
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // verification: {
  //   google: 'your-google-verification-code', 
  // },
  
  alternates: {
    canonical: 'https://hopenexus.org',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
