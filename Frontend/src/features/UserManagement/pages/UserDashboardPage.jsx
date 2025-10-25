import React, { useState } from 'react';
import { Users, UserCheck, UserX, Clock, TrendingUp, ShoppingCart, DollarSign, Award, Sparkles, Activity, RefreshCw } from 'lucide-react';
import { DASHBOARD_DATA } from '../api/userDashboardMock';
import DashboardHeader from '../components/DashboardHeader';
import UserStatCard from '../components/UserStatCard';
import TopBuyersTable from '../components/TopBuyersTable';
import TopSellersTable from '../components/TopSellersTable';

const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleExportCSV = () => {
    const csvContent = `Dashboard Metrics\n\nTotal Users,${DASHBOARD_DATA.totalUsers}\nActive Customers,${DASHBOARD_DATA.activeCustomers}\nActive Retailers,${DASHBOARD_DATA.activeRetailers}\nActive Users,${DASHBOARD_DATA.activeUsers}\nSuspended Users,${DASHBOARD_DATA.suspendedUsers}\nPending Retailers,${DASHBOARD_DATA.pendingRetailers}\nNew Signups,${DASHBOARD_DATA.newSignups}\nAvg Orders/User,${DASHBOARD_DATA.avgOrdersPerUser}\nAvg Revenue/User,₹${DASHBOARD_DATA.avgRevenuePerUser}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dashboard-metrics.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <DashboardHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onExportCSV={handleExportCSV} 
      />

      <div className="p-4 lg:p-8 max-w-[1600px] mx-auto">
        {/* Welcome Section */}
        <div className="mb-6 md:mb-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 md:p-8 
                        bg-gradient-to-r from-white/90 via-blue-50/50 to-indigo-50/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text 
                             bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 flex items-center gap-2 md:gap-3">
                  Dashboard Overview
                  <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-yellow-500 animate-pulse" />
                </h1>
                <p className="text-gray-600 text-sm md:text-lg">Monitor your platform's performance in real-time</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-50 to-emerald-50 
                              rounded-xl border border-green-200/50">
                  <Activity className="w-4 md:w-5 h-4 md:h-5 text-green-600 animate-pulse" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">System Active</span>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-600
                           text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 text-sm md:text-base
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <RefreshCw className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <UserStatCard
            icon={Users}
            title="Total Users"
            value={DASHBOARD_DATA.totalUsers}
            subtitle="Customers + Retailers"
            gradient="from-blue-500 to-indigo-600"
            shadowColor="shadow-blue-500/30"
            trend="+5%"
          />
          <UserStatCard
            icon={UserCheck}
            title="Active Customers"
            value={DASHBOARD_DATA.activeCustomers}
            subtitle="35% activity"
            gradient="from-emerald-500 to-green-600"
            shadowColor="shadow-emerald-500/30"
            trend="+12%"
          />
          <UserStatCard
            icon={Award}
            title="Active Retailers"
            value={DASHBOARD_DATA.activeRetailers}
            subtitle="Verified partners"
            gradient="from-purple-500 to-pink-600"
            shadowColor="shadow-purple-500/30"
            trend="+8%"
          />
        </div>

        {/* Secondary Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <UserStatCard
            icon={UserCheck}
            title="Active Users"
            value={DASHBOARD_DATA.activeUsers}
            subtitle="Fully Active"
            gradient="from-green-500 to-teal-600"
            shadowColor="shadow-green-500/30"
            badge="✓ Updated"
            trend="+15%"
          />
          <UserStatCard
            icon={UserX}
            title="Suspended Users"
            value={DASHBOARD_DATA.suspendedUsers}
            subtitle="Banned/Suspended"
            gradient="from-red-500 to-rose-600"
            shadowColor="shadow-red-500/30"
            trend="-2%"
          />
          <UserStatCard
            icon={Clock}
            title="Pending Retailers"
            value={DASHBOARD_DATA.pendingRetailers}
            subtitle="Awaiting Approval"
            gradient="from-amber-500 to-orange-600"
            shadowColor="shadow-amber-500/30"
          />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <UserStatCard
            icon={TrendingUp}
            title="New Signups"
            value={DASHBOARD_DATA.newSignups}
            subtitle="Recent Registrations of Last 7 Days"
            gradient="from-cyan-500 to-blue-600"
            shadowColor="shadow-cyan-500/30"
            trend="0%"
          />
          <UserStatCard
            icon={ShoppingCart}
            title="Avg Orders/User"
            value={DASHBOARD_DATA.avgOrdersPerUser}
            subtitle="Per Active User"
            gradient="from-indigo-500 to-purple-600"
            shadowColor="shadow-indigo-500/30"
            badge="↗ Current Average"
            trend="+10%"
          />
          <UserStatCard
            icon={DollarSign}
            title="Avg Revenue/User"
            value={`₹${DASHBOARD_DATA.avgRevenuePerUser.toLocaleString()}`}
            subtitle="Per Active User"
            gradient="from-green-500 to-emerald-600"
            shadowColor="shadow-green-500/30"
            trend="+18%"
          />
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
          <TopBuyersTable buyers={DASHBOARD_DATA.topBuyers} />
          <TopSellersTable sellers={DASHBOARD_DATA.topSellers} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
