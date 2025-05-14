'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Resources',
      links: [
        { name: 'Articles', href: '#articles' },
        { name: 'Self-Assessment', href: '#self-check' },
        { name: 'Find Help', href: '#contact' },
        { name: 'Crisis Support', href: '#emergency' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Mission', href: '#about' },
        { name: 'Team', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'F', href: '#' },
    { name: 'Twitter', icon: 'T', href: '#' },
    { name: 'Instagram', icon: 'I', href: '#' },
    { name: 'LinkedIn', icon: 'L', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                MindfulHealth
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Dedicated to raising awareness and providing support for mental health issues. 
              Everyone deserves access to mental health resources and support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} MindfulHealth. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            This website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}