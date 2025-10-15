"use client";

export default function ProtectedDashboard() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-card p-6 rounded-xl border border-border shadow-sm">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to Your Dashboard</h2>
          <p className="text-muted-foreground">Manage your property intelligence reports and analysis tools.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Reports</p>
                <p className="text-3xl font-bold text-foreground mt-1">247</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-foreground mt-1">43</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Avg. Response</p>
                <p className="text-3xl font-bold text-foreground mt-1">23s</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">API Credits</p>
                <p className="text-3xl font-bold text-foreground mt-1">8,756</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200">
            <div className="w-14 h-14 bg-primary rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Generate New Report</h3>
            <p className="text-muted-foreground mb-6">Create a comprehensive property intelligence report in under 30 seconds.</p>
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 font-semibold transition-colors duration-200 shadow-sm">
              Start Report
            </button>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200">
            <div className="w-14 h-14 bg-green-600 rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Bulk Analysis</h3>
            <p className="text-muted-foreground mb-6">Upload a CSV file to analyze multiple properties simultaneously.</p>
            <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 font-semibold transition-colors duration-200 shadow-sm">
              Upload CSV
            </button>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
            <div className="w-14 h-14 bg-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">View Analytics</h3>
            <p className="text-muted-foreground mb-6">Review your usage patterns and report performance metrics.</p>
            <button className="bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 font-semibold transition-colors duration-200 shadow-sm">
              View Reports
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h3>
          <div className="bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Property Report Generated</p>
                      <p className="text-muted-foreground text-sm">123 Main St, Houston TX</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">2 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1-1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Bulk Analysis Completed</p>
                      <p className="text-muted-foreground text-sm">25 properties processed</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">1 day ago</span>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">API Integration Setup</p>
                      <p className="text-muted-foreground text-sm">New API key generated</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
