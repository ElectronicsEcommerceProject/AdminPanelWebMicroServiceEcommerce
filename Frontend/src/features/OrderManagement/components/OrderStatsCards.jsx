import { Package, Clock, Loader, Truck, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export default function OrderStatsCards({ stats, statusFilter, onStatCardClick }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
      {/* Total Orders - Spans 2 rows on large screens */}
      <button
        onClick={() => onStatCardClick(null)}
        className={`group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden lg:row-span-2 ${
          statusFilter === null ? 'border-blue-500 ring-4 ring-blue-200 shadow-blue-200' : 'border-blue-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-blue-500/10 rounded-full -mr-10 -mt-10 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex flex-col h-full justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-500 rounded-lg sm:rounded-xl shadow-md group-hover:rotate-12 transition-transform duration-300">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide">Total Orders</span>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <p className="text-xs sm:text-sm text-blue-600 font-medium mt-2">All time orders</p>
        </div>
      </button>

      {/* Pending */}
      <button
        onClick={() => onStatCardClick('pending')}
        className={`group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'pending' ? 'border-yellow-500 ring-4 ring-yellow-200 shadow-yellow-200' : 'border-yellow-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-yellow-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-yellow-700 uppercase tracking-wide">Pending</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600 relative">{stats.pending}</p>
      </button>

      {/* Processing */}
      <button
        onClick={() => onStatCardClick('processing')}
        className={`group bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'processing' ? 'border-cyan-500 ring-4 ring-cyan-200 shadow-cyan-200' : 'border-cyan-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-cyan-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Loader className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-cyan-700 uppercase tracking-wide">Processing</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-600 relative">{stats.processing}</p>
      </button>

      {/* Shipped */}
      <button
        onClick={() => onStatCardClick('shipped')}
        className={`group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'shipped' ? 'border-purple-500 ring-4 ring-purple-200 shadow-purple-200' : 'border-purple-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-purple-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-purple-700 uppercase tracking-wide">Shipped</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 relative">{stats.shipped}</p>
      </button>

      {/* Delivered */}
      <button
        onClick={() => onStatCardClick('delivered')}
        className={`group bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'delivered' ? 'border-green-500 ring-4 ring-green-200 shadow-green-200' : 'border-green-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-green-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-green-700 uppercase tracking-wide">Delivered</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 relative">{stats.delivered}</p>
      </button>

      {/* Cancelled */}
      <button
        onClick={() => onStatCardClick('cancelled')}
        className={`group bg-gradient-to-br from-red-50 to-red-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'cancelled' ? 'border-red-500 ring-4 ring-red-200 shadow-red-200' : 'border-red-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-red-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-red-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-red-700 uppercase tracking-wide">Cancelled</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 relative">{stats.cancelled}</p>
      </button>

      {/* Returned */}
      <button
        onClick={() => onStatCardClick('returned')}
        className={`group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'returned' ? 'border-orange-500 ring-4 ring-orange-200 shadow-orange-200' : 'border-orange-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-orange-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-orange-700 uppercase tracking-wide">Returned</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 relative">{stats.returned}</p>
      </button>
    </div>
  );
}
