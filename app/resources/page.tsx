import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resources & 
            <span className="text-primary block">Learning Center</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Everything you need to get the most out of KnowMyProperty&apos;s AI-powered property intelligence platform.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Documentation */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-muted-foreground mb-6">
                Complete guides, API reference, and technical documentation to help you integrate and use our platform effectively.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Getting Started Guide</li>
                <li>• API Documentation</li>
                <li>• Integration Examples</li>
                <li>• Best Practices</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                View Docs →
              </Link>
            </div>

            {/* Video Tutorials */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a1 1 0 001 1h4M9 10V9a2 2 0 112 2M15 15v-1a1 1 0 00-1-1h-1m1 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2m0 8v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
              <p className="text-muted-foreground mb-6">
                Step-by-step video guides to help you master every feature of the KnowMyProperty platform.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Platform Overview (5 min)</li>
                <li>• Generating Your First Report</li>
                <li>• Using Bulk Analysis</li>
                <li>• Reading Risk Assessments</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                Watch Videos →
              </Link>
            </div>

            {/* Industry Guides */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Guides</h3>
              <p className="text-muted-foreground mb-6">
                Expert guides on real estate industry best practices, market analysis, and property intelligence strategies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Real Estate Valuation</li>
                <li>• Risk Assessment Methods</li>
                <li>• Market Analysis Techniques</li>
                <li>• Investment Strategies</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                Read Guides →
              </Link>
            </div>

            {/* Tools & Calculators */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools & Calculators</h3>
              <p className="text-muted-foreground mb-6">
                Free tools and calculators to help with property analysis, investment calculations, and market research.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• ROI Calculator</li>
                <li>• Property Value Estimator</li>
                <li>• Risk Score Calculator</li>
                <li>• Market Comparison Tool</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                Use Tools →
              </Link>
            </div>

            {/* Webinars & Events */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Webinars & Events</h3>
              <p className="text-muted-foreground mb-6">
                Join our live webinars and events to learn from industry experts and connect with other professionals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Monthly Expert Sessions</li>
                <li>• Product Updates</li>
                <li>• Industry Conferences</li>
                <li>• Q&A Sessions</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                View Events →
              </Link>
            </div>

            {/* Support Center */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Support Center</h3>
              <p className="text-muted-foreground mb-6">
                Get help when you need it with our comprehensive support resources and dedicated customer success team.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• FAQ Database</li>
                <li>• Live Chat Support</li>
                <li>• Email Support</li>
                <li>• Phone Support</li>
              </ul>
              <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                Get Help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Popular Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Complete Platform Guide</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Comprehensive guide covering all features and best practices for maximizing your property intelligence insights.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Download PDF →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a1 1 0 001 1h4M9 10V9a2 2 0 112 2M15 15v-1a1 1 0 00-1-1h-1m1 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2m0 8v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">API Quick Start</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Get up and running with our API in minutes. Includes sample code and integration examples.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Start Tutorial →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Risk Assessment Masterclass</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Learn how to interpret risk scores and use them to make informed investment and lending decisions.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Watch Video →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Market Analysis Toolkit</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Essential tools and techniques for conducting thorough market analysis and competitive research.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    Access Toolkit →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our customer success team is here to help you succeed with KnowMyProperty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 font-medium">
              Contact Support
            </button>
            <button className="border border-border text-foreground px-8 py-3 rounded-md hover:bg-secondary font-medium">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
