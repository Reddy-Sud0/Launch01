'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  launch01: [
    { name: 'Sign up', href: '#' },
    { name: 'Login', href: '#' }
  ],
  company: [
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'People', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Notice at Collection', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Terms of Use', href: '#' },
  ],
  resources: [
    { name: 'Startup Library', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'Hacker News', href: '#' },
  ],
  social: [
    { name: 'Twitter', icon: FaTwitter, href: '#', color: '#1DA1F2' },
    { name: 'Facebook', icon: FaFacebookF, href: '#', color: '#4267B2' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: '#E4405F' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: '#', color: '#0077B5' },
    { name: 'YouTube', icon: FaYoutube, href: '#', color: '#FF0000' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-creme-dark to-creme-dark/90 pt-16 pb-8">
      <div className="container mx-auto px-2 md:px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="flex items-start -ml-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Launch01 Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Launch01</h3>
            <ul className="space-y-2">
              {footerLinks.launch01.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <div className="text-white mb-4">The proven blueprint for a zero to one launch.</div>
            <Link
              href="/signup"
              className="inline-block bg-[#FF4F00] text-white px-6 py-2 rounded hover:bg-[#FF4F00]/90 transition-colors"
            >
              Launch now!
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 mb-4 md:mb-0">© 2025 Symbiotes Martech Private Ltd.</div>
            <div className="flex space-x-8">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon 
                    className="w-6 h-6" 
                    style={{ color: link.color }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
