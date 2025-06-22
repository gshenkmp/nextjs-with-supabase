"use client";

import './globals.css'
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {/* Shared Navigation - appears on ALL pages */}
        <nav className="bg-gray-900 shadow-sm border-b border-gray-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-left">
                  <div className="text-4xl font-extrabold text-blue-400 leading-none" style={{transform: 'scaleX(1.45)', transformOrigin: 'left'}}>KMP</div>
                  <div className="text-sm text-blue-400 font-medium">Know My Property</div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/solutions" className="text-gray-300 hover:text-blue-400">Solutions</Link>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400">Pricing</Link>
                <Link href="/insights" className="text-gray-300 hover:text-blue-400">Business Insights</Link>
                <Link href="/resources" className="text-gray-300 hover:text-blue-400">Resources</Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400">About</Link>
                <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Dashboard
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-blue-400 p-2"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile menu */}
            <div className={`absolute top-16 right-0 w-64 bg-gray-900 border-l border-gray-800 shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
            }`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/solutions" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Solutions</Link>
                <Link href="/pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Pricing</Link>
                <Link href="/resources" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Resources</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-blue-400">About</Link>
                <Link href="/dashboard" className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium block text-center">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content - this changes based on the route */}
        <main>
          {children}
        </main>

        {/* Shared Footer - appears on ALL pages */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-xl font-bold mb-4">KnowMyProperty</div>
                <p className="text-gray-400">
                  AI-powered property intelligence for smarter real estate decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/solutions" className="hover:text-white">Property Reports</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Risk Assessment</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Portfolio Analysis</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">API Access</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/solutions" className="hover:text-white">Real Estate</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Lending</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Investment</Link></li>
                  <li><Link href="/solutions" className="hover:text-white">Insurance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 KnowMyProperty. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
