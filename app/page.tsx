export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-400">
                KnowMyProperty
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-400">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-blue-400">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-blue-400">Resources</a>
              <a href="#" className="text-gray-300 hover:text-blue-400">About</a>
              <a href="/login" className="text-gray-300 hover:text-blue-400">Login</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                Get Started
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 hover:text-blue-400 p-2">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu - you'll need JavaScript to toggle this */}
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-blue-400">About</a>
              <a href="/login" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Login</a>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Instant AI-Powered Property Intelligence
              <br />
              <span className="text-blue-400">Make Smarter Real Estate Decisions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Get comprehensive property reports in under 30 seconds. Trusted by real estate professionals, 
              lenders, and investors to assess risk and unlock opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 text-lg">
                Get Sample Report
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-md font-semibold hover:bg-gray-800 hover:text-white text-lg">
                Watch 2-Min Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Industry-leading AI technology • Instant results • Trusted by 10,000+ professionals
            </p>
          </div>
        </div>
      </section>

      {/* Three Core User Groups */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real Estate Professionals */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Real Estate Agents & Brokers</h3>
              <p className="text-gray-400 mb-4">
                Win more listings and close deals faster with instant property intelligence. 
                Provide clients with detailed condition reports and market insights.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </a>
            </div>

            {/* Lenders & Mortgage */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-green-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Lenders & Underwriters</h3>
              <p className="text-gray-400 mb-4">
                Reduce inspection costs and speed up loan processing. Get automated 
                property condition assessments for better risk evaluation.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </a>
            </div>

            {/* Property Investors */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-400 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Investors & Portfolio Managers</h3>
              <p className="text-gray-400 mb-4">
                Scale your investment analysis with bulk property assessments. 
                Identify hidden risks and opportunities across entire portfolios.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              KnowMyProperty delivers property insights that matter
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-lg text-gray-400">Property Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-lg text-gray-400">Professionals Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;30s</div>
              <div className="text-lg text-gray-400">Average Report Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              KnowMyProperty combines cutting-edge AI with real estate expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate Expertise</h3>
              <p className="text-gray-400">
                Deep understanding of property markets, valuation factors, and industry needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Technology</h3>
              <p className="text-gray-400">
                Advanced machine learning and computer vision for accurate property analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Accuracy</h3>
              <p className="text-gray-400">
                Comprehensive data analysis delivering reliable insights you can trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Scale</h3>
              <p className="text-gray-400">
                Built for high-volume processing with enterprise-grade security and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white">Property Reports</a></li>
                <li><a href="#" className="hover:text-white">Risk Assessment</a></li>
                <li><a href="#" className="hover:text-white">Portfolio Analysis</a></li>
                <li><a href="#" className="hover:text-white">API Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Real Estate</a></li>
                <li><a href="#" className="hover:text-white">Lending</a></li>
                <li><a href="#" className="hover:text-white">Investment</a></li>
                <li><a href="#" className="hover:text-white">Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KnowMyProperty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
