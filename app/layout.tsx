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

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

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
      setIsMobileMenuOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors duration-200 font-medium";
    if (isActive(path)) {
      return `${baseClasses} text-primary`;
    }
    return `${baseClasses} text-foreground hover:text-primary`;
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block px-3 py-2 transition-colors duration-200";
    if (isActive(path)) {
      return `${baseClasses} text-primary bg-accent rounded-md font-medium`;
    }
    return `${baseClasses} text-foreground hover:text-primary font-medium`;
  };

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Navigation */}
        <nav className="bg-card shadow-sm border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-left" onClick={handleMobileNavClick}>
                  <div className="text-4xl font-extrabold text-primary leading-none" style={{transform: 'scaleX(1.45)', transformOrigin: 'left'}}>KMP</div>
                  <div className="text-sm text-primary font-medium">Know My Property</div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/solutions" className={getLinkClasses('/solutions')}>Solutions</Link>
                <Link href="/pricing" className={getLinkClasses('/pricing')}>Pricing</Link>
                <Link href="/insights" className={getLinkClasses('/insights')}>Business Insights</Link>
                <Link href="/resources" className={getLinkClasses('/resources')}>Resources</Link>
                <Link href="/about" className={getLinkClasses('/about')}>About</Link>
                
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link href="/protected/dashboard" className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 font-medium transition-colors duration-200 shadow-sm">
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 font-medium transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link href="/dashboard" className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 font-medium transition-colors duration-200 shadow-sm">
                    Dashboard
                  </Link>
                )}
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-foreground hover:text-primary p-2"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile menu backdrop */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}

            {/* Mobile menu panel */}
            <div className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-card border-l border-border shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out flex flex-col ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
            }`}>
              
              <div className="flex-1 px-2 pt-4 pb-3">
                <div className="space-y-1">
                  <Link href="/solutions" className={getMobileLinkClasses('/solutions')} onClick={handleMobileNavClick}>
                    Solutions
                  </Link>
                  <Link href="/pricing" className={getMobileLinkClasses('/pricing')} onClick={handleMobileNavClick}>
                    Pricing
                  </Link>
                  <Link href="/insights" className={getMobileLinkClasses('/insights')} onClick={handleMobileNavClick}>
                    Business Insights
                  </Link>
                  <Link href="/resources" className={getMobileLinkClasses('/resources')} onClick={handleMobileNavClick}>
                    Resources
                  </Link>
                  <Link href="/about" className={getMobileLinkClasses('/about')} onClick={handleMobileNavClick}>
                    About
                  </Link>
                  
                  {isAuthenticated && (
                    <div className="pt-4">
                      <Link 
                        href="/protected/dashboard" 
                        className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-md hover:bg-primary/90 font-medium block text-center shadow-sm"
                        onClick={handleMobileNavClick}
                      >
                        Dashboard
                      </Link>
                    </div>
                  )}
                  
                  {!isAuthenticated && (
                    <div className="pt-4">
                      <Link 
                        href="/dashboard" 
                        className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-md hover:bg-primary/90 font-medium block text-center shadow-sm"
                        onClick={handleMobileNavClick}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {isAuthenticated && (
                <div className="border-t border-border p-4 bg-secondary">
                  <div className="text-center mb-3">
                    <p className="text-muted-foreground text-sm">Signed in</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-md hover:bg-secondary/80 font-medium transition-colors duration-200 border border-border"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-foreground py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-xl font-bold mb-4 text-primary">KnowMyProperty</div>
                <p className="text-muted-foreground">
                  AI-powered property intelligence for smarter real estate decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/solutions" className="hover:text-primary">Property Reports</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">Risk Assessment</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">Portfolio Analysis</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">API Access</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/solutions" className="hover:text-primary">Real Estate</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">Lending</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">Investment</Link></li>
                  <li><Link href="/solutions" className="hover:text-primary">Insurance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2025 KnowMyProperty. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
