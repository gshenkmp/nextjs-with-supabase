import Link from 'next/link';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Estate Market
            <span className="text-blue-400 block">Insights & Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of market trends with data-driven insights, industry reports, and actionable intelligence for real estate professionals.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Market Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">National Median Home Price</h3>
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">$421,700</div>
              <div className="text-green-400 text-sm">+3.2% from last month</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Average Days on Market</h3>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">28 days</div>
              <div className="text-red-400 text-sm">+2 days from last month</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Inventory Levels</h3>
                <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">3.1 months</div>
              <div className="text-yellow-400 text-sm">Balanced market</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Mortgage Rates</h3>
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">6.82%</div>
              <div className="text-green-400 text-sm">-0.15% from last week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Q1 2025 Market Trends</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive analysis of the latest market movements, emerging buyer preferences, and regional variations in property demand.
              </p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Read Report →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investment Hotspots</h3>
              <p className="text-gray-400 mb-4">
                AI-identified emerging markets with high investment potential based on demographic shifts, infrastructure development, and economic indicators.
              </p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Explore Markets →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Risk Insights</h3>
              <p className="text-gray-400 mb-4">
                Advanced analytics on property risk factors including climate change impact, natural disaster exposure, and maintenance predictions.
              </p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                View Analysis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Reports */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest Industry Reports</h2>
          <div className="space-y-6">
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">AI in Real Estate: 2025 Adoption Report</h3>
                <p className="text-gray-400 mb-2">How artificial intelligence is transforming property valuation, risk assessment, and market analysis across the industry.</p>
                <span className="text-sm text-gray-500">Published: June 15, 2025</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Climate Risk & Property Values</h3>
                <p className="text-gray-400 mb-2">Comprehensive analysis of how climate change is affecting property values and insurance costs nationwide.</p>
                <span className="text-sm text-gray-500">Published: June 8, 2025</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Remote Work Impact on Housing Markets</h3>
                <p className="text-gray-400 mb-2">Analysis of continued remote work trends and their lasting effects on suburban vs. urban property demand.</p>
                <span className="text-sm text-gray-500">Published: May 25, 2025</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly market insights and industry reports delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
