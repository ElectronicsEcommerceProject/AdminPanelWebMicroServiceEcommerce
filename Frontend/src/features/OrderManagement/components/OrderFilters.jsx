import { FileText, Download, Calendar, Filter, Plus } from 'lucide-react';
import { useState } from 'react';

export default function OrderFilters({ 
  filters, 
  setFilters,
  onExportCSV,
  onExportPDF,
  onCreateOrder
}) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilters = filters.status !== 'Status' || filters.dateFrom || filters.dateTo;

  const clearFilters = () => {
    setFilters({ status: 'Status', dateFrom: '', dateTo: '' });
  };

  return (
    <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-emerald-200 text-emerald-600 rounded-lg sm:rounded-xl hover:bg-emerald-50 transition-all font-semibold text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Filters</span>
          {hasActiveFilters && <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>}
        </button>

        <button
          onClick={onExportCSV}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500 text-white rounded-lg sm:rounded-xl hover:bg-emerald-600 font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Export CSV</span>
          <span className="sm:hidden">CSV</span>
        </button>

        <button
          onClick={onExportPDF}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white rounded-lg sm:rounded-xl hover:bg-teal-600 font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Export PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>

        <button
          onClick={onCreateOrder}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg sm:rounded-xl hover:from-emerald-600 hover:to-teal-700 font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Create Order</span>
          <span className="sm:hidden">Create</span>
        </button>
      </div>

      {showFilters && (
        <div className="bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-emerald-100 shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">Filter Orders</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Clear All
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              >
                <option>Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
                <option value="returned">Returned</option>
              </select>
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                Date From
              </label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                Date To
              </label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
