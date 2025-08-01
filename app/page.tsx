import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              Instant AI-Powered Property Intelligence
              <br />
              <span className="text-blue-400">Make Smarter Real Estate Decisions</span>
            </h1>
            <p className="text-xl md:text-xl mb-8 text-gray-300">
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
              Industry-leading AI technology • Instant Results • Trusted by 10,000+ professionals
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
              <Link href="/solutions" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </Link>
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
              <Link href="/solutions" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </Link>
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
              <Link href="/solutions" className="text-blue-400 hover:text-blue-300 font-medium">
                Learn more →
              </Link>
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
    </div>
  );
}
