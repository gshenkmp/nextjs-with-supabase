"use client";

import './globals.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    // Listen for auth changes
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      setIsMobileMenuOpen(false); // Close mobile menu
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Helper function to close mobile menu
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Helper function to get link classes
  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors duration-200";
    if (isActive(path)) {
      return `${baseClasses} text-blue-400`;
    }
    return `${baseClasses} text-gray-300 hover:text-blue-400`;
  };

  // Helper function for mobile link classes
  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block px-3 py-2 transition-colors duration-200";
    if (isActive(path)) {
      return `${baseClasses} text-blue-400 bg-blue-900/20 rounded-md`;
    }
    return `${baseClasses} text-gray-300 hover:text-blue-400`;
  };

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {/* Shared Navigation - appears on ALL pages */}
        <nav className="bg-gray-900 shadow-sm border-b border-gray-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-left" onClick={handleMobileNavClick}>
                  <div className="text-4xl font-extrabold text-blue-400 leading-none" style={{transform: 'scaleX(1.45)', transformOrigin: 'left'}}>KMP</div>
                  <div className="text-sm text-blue-400 font-medium">Know My Property</div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/solutions" className={getLinkClasses('/solutions')}>Solutions</Link>
                <Link href="/pricing" className={getLinkClasses('/pricing')}>Pricing</Link>
                <Link href="/insights" className={getLinkClasses('/insights')}>Business Insights</Link>
                <Link href="/resources" className={getLinkClasses('/resources')}>Resources</Link>
                <Link href="/about" className={getLinkClasses('/about')}>About</Link>
                
                {/* Show different buttons based on auth status */}
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link href="/protected/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors duration-200">
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-medium transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors duration-200">
                    Dashboard
                  </Link>
                )}
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
            {/* Backdrop - click anywhere to close menu */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}

            {/* Mobile menu panel - Full height with logout at bottom */}
            <div className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-gray-900 border-l border-gray-800 shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out flex flex-col ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
            }`}>
              
              {/* Main Navigation - Top section */}
              <div className="flex-1 px-2 pt-4 pb-3">
                <div className="space-y-1">
                  <Link 
                    href="/solutions" 
                    className={getMobileLinkClasses('/solutions')}
                    onClick={handleMobileNavClick}
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="/pricing" 
                    className={getMobileLinkClasses('/pricing')}
                    onClick={handleMobileNavClick}
                  >
                    Pricing
                  </Link>
                  <Link 
                    href="/insights" 
                    className={getMobileLinkClasses('/insights')}
                    onClick={handleMobileNavClick}
                  >
                    Business Insights
                  </Link>
                  <Link 
                    href="/resources" 
                    className={getMobileLinkClasses('/resources')}
                    onClick={handleMobileNavClick}
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/about" 
                    className={getMobileLinkClasses('/about')}
                    onClick={handleMobileNavClick}
                  >
                    About
                  </Link>
                  
                  {/* Dashboard button in main nav area */}
                  {isAuthenticated && (
                    <div className="pt-4">
                      <Link 
                        href="/protected/dashboard" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-medium block text-center"
                        onClick={handleMobileNavClick}
                      >
                        Dashboard
                      </Link>
                    </div>
                  )}
                  
                  {/* Login button for non-authenticated users */}
                  {!isAuthenticated && (
                    <div className="pt-4">
                      <Link 
                        href="/dashboard" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-medium block text-center"
                        onClick={handleMobileNavClick}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Logout Section - Bottom (only show if authenticated) */}
              {isAuthenticated && (
                <div className="border-t border-gray-700 p-4">
                  <div className="text-center mb-3">
                    <p className="text-gray-400 text-sm">Signed in as user</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-md hover:bg-red-600 font-medium transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}
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
