import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, Label } from 'recharts';

const ReportsOverviewPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dateRange, setDateRange] = useState('Month');
  const [worstSellingSearch, setWorstSellingSearch] = useState('');
  const [wishlistedSearch, setWishlistedSearch] = useState('');
  const [outOfStockSearch, setOutOfStockSearch] = useState('');
  const [expiredCouponSearch, setExpiredCouponSearch] = useState('');
  const [worstSellingPage, setWorstSellingPage] = useState(1);
  const [wishlistedPage, setWishlistedPage] = useState(1);
  const [outOfStockPage, setOutOfStockPage] = useState(1);
  const itemsPerPage = 5;

  const getDataByRange = () => {
    if (dateRange === 'Today') {
      return {
        totalRevenue: 12500,
        totalOrders: 45,
        totalCustomers: 38,
        avgOrderValue: 277.78,
        revenueOverTime: [
          { name: '9 AM', value: 800 }, { name: '10 AM', value: 1200 }, { name: '11 AM', value: 950 },
          { name: '12 PM', value: 1500 }, { name: '1 PM', value: 1100 }, { name: '2 PM', value: 1300 },
          { name: '3 PM', value: 1400 }, { name: '4 PM', value: 1250 }, { name: '5 PM', value: 1600 },
          { name: '6 PM', value: 1400 }
        ]
      };
    } else if (dateRange === 'Week') {
      return {
        totalRevenue: 85000,
        totalOrders: 320,
        totalCustomers: 280,
        avgOrderValue: 265.63,
        revenueOverTime: [
          { name: 'Mon', value: 10000 }, { name: 'Tue', value: 12000 }, { name: 'Wed', value: 11500 },
          { name: 'Thu', value: 13000 }, { name: 'Fri', value: 14500 }, { name: 'Sat', value: 15000 },
          { name: 'Sun', value: 9000 }
        ]
      };
    } else {
      return {
        totalRevenue: 150000,
        totalOrders: 570,
        totalCustomers: 1200,
        avgOrderValue: 263.16,
        revenueOverTime: [
          { name: 'Sep-24', value: 6500 }, { name: 'Oct-2', value: 2000 }, { name: 'Oct-4', value: 5500 },
          { name: 'Oct-6', value: 3500 }, { name: 'Oct-8', value: 6500 }, { name: 'Oct-10', value: 4500 },
          { name: 'Oct-12', value: 7000 }, { name: 'Oct-14', value: 5000 }, { name: 'Oct-16', value: 2000 },
          { name: 'Oct-18', value: 6000 }, { name: 'Oct-20', value: 3000 }, { name: 'Oct-22', value: 7000 },
          { name: 'Oct-24', value: 5500 }, { name: 'Oct-26', value: 2000 }, { name: 'Oct-28', value: 4000 }
        ]
      };
    }
  };

  const dashboardData = {
    ...getDataByRange(),
    customerSatisfaction: 84,
    totalRetailers: 15,
    stockAlerts: 0,
    orderStatus: [
      { name: 'Pending', value: 50 },
      { name: 'Processing', value: 120 },
      { name: 'Shipped', value: 200 },
      { name: 'Delivered', value: 300 },
      { name: 'Cancelled', value: 20 }
    ],
    categoryDistribution: [
      { name: 'Electronics', value: 250 },
      { name: 'Fashion', value: 180 },
      { name: 'Home & Kitchen', value: 140 },
      { name: 'Beauty', value: 100 }
    ],
    brandDistribution: [
      { name: 'Apple', value: 120 },
      { name: 'Samsung', value: 95 },
      { name: 'Sony', value: 75 },
      { name: 'LG', value: 60 },
      { name: 'Others', value: 80 }
    ],
    salesByBrand: [
      { name: 'Apple', value: 32000 },
      { name: 'Samsung', value: 25000 },
      { name: 'Sony', value: 19000 },
      { name: 'LG', value: 15000 },
      { name: 'Others', value: 20000 }
    ],
    performanceComparison: [
      { name: 'Revenue', thisMonth: 150000, lastMonth: 140000 },
      { name: 'Orders', thisMonth: 570, lastMonth: 550 }
    ],
    salesByCategory: [
      { name: 'Electronics', value: 250 },
      { name: 'Fashion', value: 180 },
      { name: 'Home & Kitchen', value: 130 },
      { name: 'Beauty', value: 100 }
    ]
  };

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
  const BRAND_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
  const SALES_COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  const productData = {
    worstSelling: [
      { name: 'Basic Phone Case', sales: 5 },
      { name: 'Old Charger Model', sales: 8 },
      { name: 'Legacy Headphones', sales: 12 },
      { name: 'Outdated Mouse Pad', sales: 15 },
      { name: 'Generic USB Cable', sales: 18 },
      { name: 'Plain Screen Protector', sales: 20 },
      { name: 'Basic Earbuds', sales: 22 },
      { name: 'Simple Phone Stand', sales: 25 },
      { name: 'Old Model Adapter', sales: 28 },
      { name: 'Basic Stylus Pen', sales: 30 }
    ],
    topWishlisted: [
      { name: 'iPhone 15 Pro Max', count: 450 },
      { name: 'MacBook Pro M3', count: 380 },
      { name: 'PlayStation 5', count: 320 },
      { name: 'Samsung Galaxy S24', count: 295 },
      { name: 'iPad Pro 2024', count: 270 },
      { name: 'AirPods Pro 2', count: 245 },
      { name: 'Nintendo Switch OLED', count: 220 },
      { name: 'Sony WH-1000XM5', count: 195 },
      { name: 'Apple Watch Ultra 2', count: 170 },
      { name: 'DJI Mini 4 Pro', count: 145 }
    ],
    outOfStock: [
      { name: 'iPhone 15 Pro', stock: 0, category: 'Electronics' },
      { name: 'PS5 Console', stock: 0, category: 'Gaming' },
      { name: 'Nintendo Switch OLED', stock: 0, category: 'Gaming' },
      { name: 'MacBook Air M3', stock: 0, category: 'Electronics' },
      { name: 'Samsung Galaxy Tab S9', stock: 0, category: 'Electronics' },
      { name: 'Xbox Series X', stock: 0, category: 'Gaming' },
      { name: 'Sony A7 IV Camera', stock: 0, category: 'Electronics' },
      { name: 'Bose QuietComfort', stock: 0, category: 'Audio' },
      { name: 'GoPro Hero 12', stock: 0, category: 'Electronics' },
      { name: 'Meta Quest 3', stock: 0, category: 'Gaming' }
    ]
  };

  const couponData = {
    usageStats: [
      { name: 'SAVE10', usageLeft: 100, redemptions: 90 },
      { name: 'FIRST10', usageLeft: 70, redemptions: 60 },
      { name: 'WELCOME10', usageLeft: 200, redemptions: 120 },
      { name: 'FLASH40', usageLeft: 150, redemptions: 110 },
      { name: 'VIP25', usageLeft: 90, redemptions: 70 }
    ],
    typeEffectiveness: [
      { name: 'Percentage', value: 45 },
      { name: 'Flat', value: 30 },
      { name: 'Free Shipping', value: 25 }
    ],
    redemptionTrends: [
      { name: 'Sep-5', count: 15, discounts: 2800 },
      { name: 'Oct-7', count: 28, discounts: 1500 },
      { name: 'Oct-9', count: 22, discounts: 3200 },
      { name: 'Oct-11', count: 35, discounts: 2000 },
      { name: 'Oct-13', count: 18, discounts: 3800 },
      { name: 'Oct-15', count: 30, discounts: 1800 },
      { name: 'Oct-17', count: 25, discounts: 3500 },
      { name: 'Oct-19', count: 38, discounts: 2200 },
      { name: 'Oct-21', count: 20, discounts: 3000 },
      { name: 'Oct-23', count: 32, discounts: 1600 },
      { name: 'Oct-25', count: 28, discounts: 3400 },
      { name: 'Oct-27', count: 35, discounts: 2400 },
      { name: 'Oct-29', count: 22, discounts: 3100 }
    ],
    topPerforming: [
      { name: 'SAVE10', revenue: 25000 },
      { name: 'FIRST10', revenue: 15000 },
      { name: 'WELCOME10', revenue: 12000 },
      { name: 'FLASH40', revenue: 10000 },
      { name: 'VIP25', revenue: 8000 }
    ],
    expiredUnused: [
      { code: 'EXPIRED1', value: 500 },
      { code: 'EXPIRED2', value: 300 },
      { code: 'OLD2024', value: 1000 },
      { code: 'SUMMER50', value: 750 }
    ]
  };

  const satisfactionData = [
    { name: 'Low', value: 33.33, fill: '#EF4444' },
    { name: 'Medium', value: 33.33, fill: '#FFCE56' },
    { name: 'High', value: 33.34, fill: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-stone-600 to-neutral-700 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg truncate">Reports & Analytics</h1>
                <p className="text-stone-100 text-xs sm:text-sm md:text-base mt-0.5 md:mt-1 font-medium hidden sm:block">Track performance and insights</p>
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-1.5 md:gap-2 px-3 sm:px-4 md:px-5 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-white/20 backdrop-blur-xl text-white rounded-lg md:rounded-xl hover:bg-white/30 text-xs sm:text-sm md:text-base border border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto group flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        {/* Navigation Tabs and Filter */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex gap-2 sm:gap-3">
              {['dashboard', 'products', 'coupons'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold capitalize transition-all text-sm sm:text-base shadow-md ${
                    activeTab === tab
                      ? 'bg-slate-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-slate-50 border-2 border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-3 border-2 border-slate-200 rounded-lg sm:rounded-xl bg-white shadow-md hover:border-slate-400 transition-all font-semibold text-sm sm:text-base w-full sm:w-auto"
            >
              <option>Today</option>
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-green-100 font-medium">Total Revenue ({dateRange})</p>
                <p className="text-3xl font-bold text-white mt-2">₹{dashboardData.totalRevenue.toLocaleString()}</p>
                <div className="mt-3 flex items-center text-green-100 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                  +12.5% from last month
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-blue-100 font-medium">Total Orders ({dateRange})</p>
                <p className="text-3xl font-bold text-white mt-2">{dashboardData.totalOrders}</p>
                <div className="mt-3 flex items-center text-blue-100 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                  +8.2% from last month
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-purple-100 font-medium">Total Customers ({dateRange})</p>
                <p className="text-3xl font-bold text-white mt-2">{dashboardData.totalCustomers.toLocaleString()}</p>
                <div className="mt-3 flex items-center text-purple-100 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                  +15.3% from last month
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-orange-100 font-medium">Average Order Value ({dateRange})</p>
                <p className="text-3xl font-bold text-white mt-2">₹{dashboardData.avgOrderValue}</p>
                <div className="mt-3 flex items-center text-orange-100 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                  +5.7% from last month
                </div>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-yellow-100 font-medium">Customer Satisfaction</p>
                <p className="text-3xl font-bold text-white mt-2">4.2/5.0</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-indigo-100 font-medium">Total Retailers ({dateRange})</p>
                <p className="text-3xl font-bold text-white mt-2">{dashboardData.totalRetailers}</p>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-rose-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <p className="text-sm text-red-100 font-medium">Stock Alerts</p>
                <p className="text-3xl font-bold text-white mt-2">{dashboardData.stockAlerts}</p>
              </div>
            </div>

            {/* Revenue Over Time & Orders by Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Revenue Over Time (By Revenue) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dashboardData.revenueOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3, fill: '#3B82F6', strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Orders by Status (By Orders) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={dashboardData.orderStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100}>
                      {dashboardData.orderStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category & Brand Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Category Distribution (By Orders) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={dashboardData.categoryDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={120}>
                      {dashboardData.categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={BRAND_COLORS[index % BRAND_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Brand Distribution (By Orders) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={dashboardData.brandDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                      {dashboardData.brandDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={BRAND_COLORS[index % BRAND_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sales by Brand & Performance Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border-2 border-teal-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Sales by Brand (By Revenue) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.salesByBrand}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {dashboardData.salesByBrand.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={SALES_COLORS[index % SALES_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg border-2 border-indigo-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Performance Comparison (Revenue vs Orders) ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.performanceComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="thisMonth" fill="#3B82F6" name="This Month" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="lastMonth" fill="#9CA3AF" name="Last Month" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Customer Satisfaction Score - Semicircle Gauge */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                Customer Satisfaction Score ({dateRange})
              </h3>
              <div className="relative" style={{ height: '280px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="70%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={90}
                      outerRadius={110}
                      dataKey="value"
                      stroke="none"
                    >
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <svg className="absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="2.5" orient="auto">
                      <polygon points="0 0, 8 2.5, 0 5" fill="#1f2937" />
                    </marker>
                  </defs>
                  <line
                    x1="50%"
                    y1="70%"
                    x2={`calc(50% + ${100 * Math.cos((180 - (180 * dashboardData.customerSatisfaction / 100)) * Math.PI / 180)}px)`}
                    y2={`calc(70% - ${100 * Math.sin((180 - (180 * dashboardData.customerSatisfaction / 100)) * Math.PI / 180)}px)`}
                    stroke="#1f2937"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '60px' }}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-800">{dashboardData.customerSatisfaction}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales by Category */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-rose-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
                Sales by Category (By Orders) ({dateRange})
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData.salesByCategory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {dashboardData.salesByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={BRAND_COLORS[index % BRAND_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Products Section */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Product Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Product Sales Trend ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dashboardData.revenueOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4, fill: '#3B82F6' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Top 5 Selling Products ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.salesByBrand} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={120} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                      {dashboardData.salesByBrand.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={SALES_COLORS[index % SALES_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Product Ratings Trend ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'Oct 6', rating: 4.2, reviews: 45 },
                    { name: 'Oct 8', rating: 4.5, reviews: 52 },
                    { name: 'Oct 10', rating: 4.3, reviews: 48 },
                    { name: 'Oct 12', rating: 4.6, reviews: 58 },
                    { name: 'Oct 14', rating: 4.8, reviews: 65 },
                    { name: 'Oct 16', rating: 4.4, reviews: 50 },
                    { name: 'Oct 18', rating: 3.9, reviews: 38 },
                    { name: 'Oct 20', rating: 4.1, reviews: 42 },
                    { name: 'Oct 22', rating: 4.7, reviews: 60 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="rating" fill="#10B981" name="Average Rating" radius={[8, 8, 0, 0]} />
                    <Bar yAxisId="right" dataKey="reviews" fill="#3B82F6" name="Review Count" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Category Performance ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={dashboardData.categoryDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={120}>
                      {dashboardData.categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={BRAND_COLORS[index % BRAND_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl shadow-lg border-2 border-red-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Worst-Selling Products
                </h3>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full mb-4 px-3 py-2 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all" 
                  value={worstSellingSearch}
                  onChange={(e) => setWorstSellingSearch(e.target.value)}
                />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[300px]">
                    <thead>
                      <tr className="border-b-2 border-red-200">
                        <th className="text-left py-2 px-2 font-bold text-red-900 text-xs sm:text-sm">Name</th>
                        <th className="text-left py-2 px-2 font-bold text-red-900 text-xs sm:text-sm">Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.worstSelling
                        .filter(item => item.name.toLowerCase().includes(worstSellingSearch.toLowerCase()))
                        .slice((worstSellingPage - 1) * itemsPerPage, worstSellingPage * itemsPerPage)
                        .map((item, i) => (
                          <tr key={i} className="border-b hover:bg-red-100 transition-colors">
                            <td className="py-2 px-2 text-blue-600 font-medium text-xs sm:text-sm">{item.name}</td>
                            <td className="py-2 px-2 font-semibold text-xs sm:text-sm">{item.sales}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 text-xs sm:text-sm">
                  <button 
                    onClick={() => setWorstSellingPage(Math.max(1, worstSellingPage - 1))}
                    disabled={worstSellingPage === 1}
                    className="w-full sm:w-auto px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                  >
                    Previous
                  </button>
                  <span className="font-semibold text-red-900">Page {worstSellingPage} of {Math.ceil(productData.worstSelling.filter(item => item.name.toLowerCase().includes(worstSellingSearch.toLowerCase())).length / itemsPerPage)}</span>
                  <button 
                    onClick={() => setWorstSellingPage(worstSellingPage + 1)}
                    disabled={worstSellingPage >= Math.ceil(productData.worstSelling.filter(item => item.name.toLowerCase().includes(worstSellingSearch.toLowerCase())).length / itemsPerPage)}
                    className="w-full sm:w-auto px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg border-2 border-yellow-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                  Top Wishlisted Products
                </h3>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full mb-4 px-3 py-2 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all" 
                  value={wishlistedSearch}
                  onChange={(e) => setWishlistedSearch(e.target.value)}
                />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[300px]">
                    <thead>
                      <tr className="border-b-2 border-yellow-200">
                        <th className="text-left py-2 px-2 font-bold text-yellow-900 text-xs sm:text-sm">Product Name</th>
                        <th className="text-left py-2 px-2 font-bold text-yellow-900 text-xs sm:text-sm">Wishlist Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.topWishlisted
                        .filter(item => item.name.toLowerCase().includes(wishlistedSearch.toLowerCase()))
                        .slice((wishlistedPage - 1) * itemsPerPage, wishlistedPage * itemsPerPage)
                        .map((item, i) => (
                          <tr key={i} className="border-b hover:bg-yellow-100 transition-colors">
                            <td className="py-2 px-2 text-blue-600 font-medium text-xs sm:text-sm">{item.name}</td>
                            <td className="py-2 px-2 font-semibold text-xs sm:text-sm">{item.count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 text-xs sm:text-sm">
                  <button 
                    onClick={() => setWishlistedPage(Math.max(1, wishlistedPage - 1))}
                    disabled={wishlistedPage === 1}
                    className="w-full sm:w-auto px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                  >
                    Previous
                  </button>
                  <span className="font-semibold text-yellow-900">Page {wishlistedPage} of {Math.ceil(productData.topWishlisted.filter(item => item.name.toLowerCase().includes(wishlistedSearch.toLowerCase())).length / itemsPerPage)}</span>
                  <button 
                    onClick={() => setWishlistedPage(wishlistedPage + 1)}
                    disabled={wishlistedPage >= Math.ceil(productData.topWishlisted.filter(item => item.name.toLowerCase().includes(wishlistedSearch.toLowerCase())).length / itemsPerPage)}
                    className="w-full sm:w-auto px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl shadow-lg border-2 border-slate-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                Out-of-Stock Products
              </h3>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full mb-4 px-3 py-2 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all" 
                value={outOfStockSearch}
                onChange={(e) => setOutOfStockSearch(e.target.value)}
              />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[300px]">
                  <thead>
                    <tr className="border-b-2 border-slate-300">
                      <th className="text-left py-2 px-2 font-bold text-slate-900 text-xs sm:text-sm">Name</th>
                      <th className="text-left py-2 px-2 font-bold text-slate-900 text-xs sm:text-sm">Stock</th>
                      <th className="text-left py-2 px-2 font-bold text-slate-900 text-xs sm:text-sm">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.outOfStock
                      .filter(item => item.name.toLowerCase().includes(outOfStockSearch.toLowerCase()) || 
                                     item.category.toLowerCase().includes(outOfStockSearch.toLowerCase()))
                      .slice((outOfStockPage - 1) * itemsPerPage, outOfStockPage * itemsPerPage)
                      .map((item, i) => (
                        <tr key={i} className="border-b hover:bg-slate-100 transition-colors">
                          <td className="py-2 px-2 text-blue-600 font-medium text-xs sm:text-sm">{item.name}</td>
                          <td className="py-2 px-2 font-semibold text-red-600 text-xs sm:text-sm">{item.stock}</td>
                          <td className="py-2 px-2 text-slate-700 font-medium text-xs sm:text-sm">{item.category}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 text-xs sm:text-sm">
                <button 
                  onClick={() => setOutOfStockPage(Math.max(1, outOfStockPage - 1))}
                  disabled={outOfStockPage === 1}
                  className="w-full sm:w-auto px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                >
                  Previous
                </button>
                <span className="font-semibold text-slate-900">Page {outOfStockPage} of {Math.ceil(productData.outOfStock.filter(item => item.name.toLowerCase().includes(outOfStockSearch.toLowerCase()) || item.category.toLowerCase().includes(outOfStockSearch.toLowerCase())).length / itemsPerPage)}</span>
                <button 
                  onClick={() => setOutOfStockPage(outOfStockPage + 1)}
                  disabled={outOfStockPage >= Math.ceil(productData.outOfStock.filter(item => item.name.toLowerCase().includes(outOfStockSearch.toLowerCase()) || item.category.toLowerCase().includes(outOfStockSearch.toLowerCase())).length / itemsPerPage)}
                  className="w-full sm:w-auto px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Coupons Section */}
        {activeTab === 'coupons' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg border-2 border-cyan-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-cyan-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                  Coupon Usage Stats ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={couponData.usageStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usageLeft" fill="#36A2EB" name="Usage Left" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="redemptions" fill="#FF6384" name="Redemptions/Usage" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-lg border-2 border-pink-200 hover:shadow-2xl transition-all">
                <h3 className="font-bold text-pink-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Coupon Type Effectiveness ({dateRange})
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={couponData.typeEffectiveness} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100}>
                      <Cell fill="#FF6384" />
                      <Cell fill="#36A2EB" />
                      <Cell fill="#FFCE56" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl shadow-lg border-2 border-violet-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-violet-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                Redemption Trends ({dateRange})
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={couponData.redemptionTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="count" stroke="#36A2EB" strokeWidth={2} name="Redemption Count" dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="discounts" stroke="#FF9F40" strokeWidth={2} name="Total Discount Amount (₹)" dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl shadow-lg border-2 border-emerald-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                Top Performing Coupons ({dateRange})
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={couponData.topPerforming}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#9966FF" name="Discount Amount (₹)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                Expired/Unused Coupons ({dateRange})
              </h3>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full mb-4 px-3 py-2 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all" 
                value={expiredCouponSearch}
                onChange={(e) => setExpiredCouponSearch(e.target.value)}
              />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[300px]">
                  <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="text-left py-2 px-2 font-bold text-amber-900 text-xs sm:text-sm">Coupon Code</th>
                      <th className="text-left py-2 px-2 font-bold text-amber-900 text-xs sm:text-sm">Discount Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {couponData.expiredUnused
                      .filter(item => item.code.toLowerCase().includes(expiredCouponSearch.toLowerCase()))
                      .map((item, i) => (
                        <tr key={i} className="border-b hover:bg-amber-50 transition-colors">
                          <td className="py-2 px-2 text-orange-600 font-medium text-xs sm:text-sm">{item.code}</td>
                          <td className="py-2 px-2 text-red-600 font-semibold text-xs sm:text-sm">₹{item.value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsOverviewPage;
