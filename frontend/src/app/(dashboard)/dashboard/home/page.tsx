"use client";

export default function DashboardHome() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here’s what’s happening with your project today.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
            <p className="text-2xl font-semibold text-gray-800">$24,000</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Users</h2>
            <p className="text-2xl font-semibold text-gray-800">1,204</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Sessions</h2>
            <p className="text-2xl font-semibold text-gray-800">3,892</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-sm font-medium text-gray-500">Bounce Rate</h2>
            <p className="text-2xl font-semibold text-gray-800">32.5%</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h2>
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>✅ You updated your profile</li>
              <li>📦 New order received</li>
              <li>🛠️ Server maintenance scheduled</li>
              <li>🔔 New comment on your post</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}