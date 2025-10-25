import React from 'react';
import { Download, ShoppingBag, LayoutDashboard, Users, Activity, Sparkles, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardHeader = ({ activeTab, setActiveTab, onExportCSV }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-2xl sticky top-0 z-40">
      <div className="px-4 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <button
              onClick={() => navigate('/users')}
              className={`group px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 
                       flex items-center gap-1 md:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                location.pathname === '/users'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200'
              }`}
            >
              <LayoutDashboard className={`w-4 md:w-5 h-4 md:h-5 ${
                location.pathname === '/users' ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'
              }`} />
              <span className="hidden sm:inline">Dashboard</span>
              {location.pathname === '/users' && (
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-yellow-300 animate-pulse" />
              )}
            </button>
            
            <button
              onClick={() => navigate('/users/list')}
              className={`group px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 
                       flex items-center gap-1 md:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                location.pathname === '/users/list'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/30'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200'
              }`}
            >
              <Users className={`w-4 md:w-5 h-4 md:h-5 ${
                location.pathname === '/users/list' ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'
              }`} />
              <span className="hidden sm:inline">User Management</span>
            </button>
            
            <button
              onClick={() => navigate('/users/retailers-approvals')}
              className={`group px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 
                       flex items-center gap-1 md:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 relative ${
                location.pathname === '/users/retailers-approvals'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-orange-500/30'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200'
              }`}
            >
              <ShoppingBag className={`w-4 md:w-5 h-4 md:h-5 ${
                location.pathname === '/users/retailers-approvals' ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'
              }`} />
              <span className="hidden sm:inline">Retailers</span>
              <span className="absolute -top-1 md:-top-2 -right-1 md:-right-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-gradient-to-r from-red-500 to-rose-500 
                            text-white text-[10px] md:text-xs rounded-full font-bold shadow-lg animate-bounce">
                3
              </span>
            </button>

            <div className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2" />
            
            <div className="hidden md:flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-50 to-emerald-50 
                          rounded-xl border border-green-200/50">
              <Activity className="w-4 md:w-5 h-4 md:h-5 text-green-600 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Live</span>
            </div>

            <button className="hidden md:block relative p-2 md:p-3 bg-white rounded-xl border-2 border-gray-200 
                             hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 
                             transform hover:scale-110 transition-all duration-300">
              <Bell className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2.5 md:w-3 h-2.5 md:h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
          
          <button
            onClick={onExportCSV}
            className="group flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-green-600 
                     text-white rounded-xl hover:from-emerald-600 hover:to-green-700 text-sm md:text-base
                     shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 
                     transform hover:scale-105 transition-all duration-300 font-semibold w-full lg:w-auto"
          >
            <Download className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-y-0.5 transition-transform" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
