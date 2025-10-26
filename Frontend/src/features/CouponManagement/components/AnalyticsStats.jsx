import { Tag, CheckCircle, XCircle, TrendingUp, Percent } from 'lucide-react';

export default function AnalyticsStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
      <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-blue-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-blue-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wide">Total</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 relative">{stats.totalCoupons}</p>
      </div>

      <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-green-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-green-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-green-700 uppercase tracking-wide">Active</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 relative">{stats.activeCoupons}</p>
      </div>

      <div className="group bg-gradient-to-br from-red-50 to-red-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-red-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-red-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-red-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-red-700 uppercase tracking-wide">Inactive</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 relative">{stats.inactiveCoupons}</p>
      </div>

      <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-purple-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-purple-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-purple-700 uppercase tracking-wide">Redemptions</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 relative">{stats.totalRedemptions}</p>
      </div>

      <div className="group bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-teal-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-teal-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Percent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wide">Avg Rate</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent relative">{stats.avgRedemptionRate}%</p>
      </div>
    </div>
  );
}
