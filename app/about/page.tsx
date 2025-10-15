import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-5x1 font-bold mb-6">
            Transforming Real Estate with
            <span className="text-primary block">Machine Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            KnowMyProperty combines cutting-edge AI and ML technology with deep real estate expertise to deliver instant, accurate property intelligence for professionals worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We believe that every property decision should be backed by comprehensive, accurate data. Our mission is to democratize access to professional-grade property intelligence, making it instant, affordable, and accessible to everyone in the real estate ecosystem.
              </p>
              <p className="text-muted-foreground text-lg">
                By combining advanced AI with industry expertise, we&apos;re eliminating guesswork and enabling data-driven decisions that protect investments and uncover opportunities.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Professionals Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500,000+</div>
                  <div className="text-muted-foreground">Reports Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">States Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Accuracy</h3>
              <p className="text-muted-foreground">
                We&apos;re committed to providing the most accurate and reliable property intelligence available, backed by rigorous testing and continuous improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Speed</h3>
              <p className="text-muted-foreground">
                Time is money in real estate. Our platform delivers comprehensive property reports in under 30 seconds, enabling faster decisions and competitive advantages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Professional-grade property intelligence shouldn&apos;t be limited to large institutions. We make powerful tools accessible to professionals of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
              <p className="text-primary mb-3">CEO & Co-Founder</p>
              <p className="text-muted-foreground text-sm">
                15+ years in real estate technology and AI. Former VP of Engineering at PropTech leader, Stanford CS graduate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Rodriguez</h3>
              <p className="text-primary mb-3">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-sm">
                Machine learning expert with 12+ years building AI systems at scale. Former Lead Scientist at major tech company.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jennifer Martinez</h3>
              <p className="text-primary mb-3">VP of Product</p>
              <p className="text-muted-foreground text-sm">
                20+ years in real estate, former real estate agent and broker. Deep understanding of industry needs and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform leverages the latest advances in artificial intelligence, machine learning, and computer vision to deliver unparalleled property intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
              <p className="text-muted-foreground text-sm">
                Advanced image analysis for property condition assessment and feature detection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Predictive models trained on millions of data points for accurate risk assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Big Data</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive datasets from multiple sources providing complete property intelligence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground text-sm">
                Bank-grade security and compliance ensuring your data is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
              <div className="flex-1 border-l border-border pl-8 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Founded</h3>
                    <p className="text-muted-foreground">Company founded with vision to democratize property intelligence</p>
                  </div>
                  <span className="text-primary font-medium mt-2 md:mt-0">2022</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1 border-l border-border pl-8 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Series A Funding</h3>
                    <p className="text-muted-foreground">Raised $15M to accelerate product development and market expansion</p>
                  </div>
                  <span className="text-primary font-medium mt-2 md:mt-0">2023</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1 border-l border-border pl-8 pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Platform Launch</h3>
                    <p className="text-muted-foreground">Launched AI-powered property intelligence platform to market</p>
                  </div>
                  <span className="text-primary font-medium mt-2 md:mt-0">2024</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-yellow-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1 pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">10,000+ Customers</h3>
                    <p className="text-muted-foreground">Reached milestone of serving over 10,000 real estate professionals</p>
                  </div>
                  <span className="text-primary font-medium mt-2 md:mt-0">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your property decision-making with AI-powered intelligence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90">
              Get Started Today
            </Link>
            <button className="border border-border text-foreground px-8 py-3 rounded-md font-semibold hover:bg-card">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
