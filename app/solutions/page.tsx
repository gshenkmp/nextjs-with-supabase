export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation - you can copy from homepage or create a shared component */}
      <nav className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-left">
                <div className="text-3xl font-bold text-blue-400 leading-none" style={{letterSpacing: '8px'}}>KMP</div>
                <div className="text-sm text-blue-400 font-medium">Know My Property</div>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/solutions" className="text-blue-400 font-medium">Solutions</a>
              <a href="/pricing" className="text-gray-300 hover:text-blue-400">Pricing</a>
              <a href="/resources" className="text-gray-300 hover:text-blue-400">Resources</a>
              <a href="/about" className="text-gray-300 hover:text-blue-400">About</a>
              <a href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Property Intelligence
            <span className="text-blue-400 block">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive property intelligence solutions for real estate professionals, 
            lenders, and investors. Get the insights you need to make data-driven decisions.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Property Reports */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Property Reports</h3>
              <p className="text-gray-400 mb-6">
                Generate comprehensive property intelligence reports in under 30 seconds. 
                Get condition assessments, risk analysis, and market insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Roof condition analysis</li>
                <li>• Property risk scoring</li>
                <li>• Market value estimates</li>
                <li>• Historical data insights</li>
              </ul>
            </div>

            {/* Bulk Analysis */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Portfolio Analysis</h3>
              <p className="text-gray-400 mb-6">
                Analyze hundreds or thousands of properties simultaneously. 
                Perfect for investors and portfolio managers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Bulk property processing</li>
                <li>• Portfolio risk assessment</li>
                <li>• Comparative market analysis</li>
                <li>• Investment opportunity scoring</li>
              </ul>
            </div>

            {/* API Integration */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-400 mb-6">
                Integrate property intelligence directly into your existing 
                workflows and applications with our robust API.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• RESTful API access</li>
                <li>• Real-time data feeds</li>
                <li>• Custom integrations</li>
                <li>• Enterprise-grade security</li>
              </ul>
            </div>

            {/* Risk Assessment */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-400 mb-6">
                Advanced risk modeling for insurance, lending, and investment decisions. 
                Predict potential issues before they become problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Natural disaster risk</li>
                <li>• Property condition risks</li>
                <li>• Market volatility analysis</li>
                <li>• Predictive maintenance alerts</li>
              </ul>
            </div>

            {/* Market Intelligence */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Intelligence</h3>
              <p className="text-gray-400 mb-6">
                Stay ahead of market trends with real-time market data and 
                predictive analytics for informed decision making.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Market trend analysis</li>
                <li>• Comparable sales data</li>
                <li>• Price prediction models</li>
                <li>• Neighborhood insights</li>
              </ul>
            </div>

            {/* Custom Solutions */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-400 mb-6">
                Need something specific? We build custom property intelligence 
                solutions tailored to your unique business requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Bespoke analytics models</li>
                <li>• Custom data integrations</li>
                <li>• White-label solutions</li>
                <li>• Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the solution that fits your needs and start making smarter property decisions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 text-lg">
              Start Free Trial
            </a>
            <a href="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-700 text-lg">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
