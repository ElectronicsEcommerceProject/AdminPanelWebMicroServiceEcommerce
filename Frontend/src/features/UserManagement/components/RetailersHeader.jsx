import { Download, ShoppingBag, Users, LayoutDashboard } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RetailersHeader({ onExportCSV }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg sticky top-0 z-40">
      <div className="px-4 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <button 
              onClick={() => navigate('/users')}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:shadow-md flex items-center gap-1 md:gap-2 ${
                location.pathname === '/users' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-4 md:w-5 h-4 md:h-5" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <button 
              onClick={() => navigate('/users/list')}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:shadow-md flex items-center gap-1 md:gap-2 ${
                location.pathname === '/users/list' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 md:w-5 h-4 md:h-5" />
              <span className="hidden sm:inline">User Management</span>
            </button>
            <button 
              onClick={() => navigate('/users/retailers-approvals')}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:shadow-md flex items-center gap-1 md:gap-2 ${
                location.pathname === '/users/retailers-approvals' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ShoppingBag className="w-4 md:w-5 h-4 md:h-5" />
              <span className="hidden sm:inline">Retailers</span>
              <span className="ml-1 md:ml-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-red-500 text-white text-[10px] md:text-xs rounded-full">3</span>
            </button>
          </div>
          <button
            onClick={onExportCSV}
            className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-green-600 
                     text-white rounded-xl hover:from-emerald-600 hover:to-green-700 text-sm md:text-base
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold w-full lg:w-auto"
          >
            <Download className="w-4 md:w-5 h-4 md:h-5" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
