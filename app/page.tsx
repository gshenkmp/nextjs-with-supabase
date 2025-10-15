import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              Instant AI-Powered Property Intelligence
            </h1>
            <p className="text-xl md:text-xl mb-8 text-muted-foreground">
              Get comprehensive property reports in under 30 seconds. Trusted by real estate professionals, 
              lenders, and investors to assess risk and unlock opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 text-lg">
                Get Sample Report
              </button>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-md font-semibold hover:bg-secondary text-lg">
                Watch 2-Min Demo
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Industry-leading AI technology • Instant Results • Trusted by 10,000+ professionals
            </p>
          </div>
        </div>
      </section>

      {/* Three Core User Groups */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real Estate Professionals */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Real Estate Agents & Brokers</h3>
              <p className="text-muted-foreground mb-4">
                Win more listings and close deals faster with instant property intelligence. 
                Provide clients with detailed condition reports and market insights.
              </p>
              <Link href="/solutions" className="text-primary hover:text-primary/80 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Lenders & Mortgage */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Lenders & Underwriters</h3>
              <p className="text-muted-foreground mb-4">
                Reduce inspection costs and speed up loan processing. Get automated 
                property condition assessments for better risk evaluation.
              </p>
              <Link href="/solutions" className="text-primary hover:text-primary/80 font-medium">
                Learn more →
              </Link>
            </div>

            {/* Property Investors */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Investors & Portfolio Managers</h3>
              <p className="text-muted-foreground mb-4">
                Scale your investment analysis with bulk property assessments. 
                Identify hidden risks and opportunities across entire portfolios.
              </p>
              <Link href="/solutions" className="text-primary hover:text-primary/80 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              KnowMyProperty delivers property insights that matter
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-muted-foreground">Property Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg text-muted-foreground">Professionals Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-lg text-muted-foreground">Average Report Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              KnowMyProperty combines cutting-edge AI with real estate expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Real Estate Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of property markets, valuation factors, and industry needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI Technology</h3>
              <p className="text-muted-foreground">
                Advanced machine learning and computer vision for accurate property analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Proven Accuracy</h3>
              <p className="text-muted-foreground">
                Comprehensive data analysis delivering reliable insights you can trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Enterprise Scale</h3>
              <p className="text-muted-foreground">
                Built for high-volume processing with enterprise-grade security and reliability
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
