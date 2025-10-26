import { AlertCircle, Clock, XCircle } from 'lucide-react';

export default function RetailersStatsCards({ stats, selectedStatus, setSelectedStatus }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 animate-in fade-in duration-500">
      <button
        onClick={() => setSelectedStatus('Pending')}
        className={`bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
          selectedStatus === 'Pending' ? 'border-blue-500 ring-4 ring-blue-200' : 'border-white/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Total Requests</p>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">{stats.totalRequests}</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
            <AlertCircle className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </div>
        </div>
      </button>

      <button
        onClick={() => setSelectedStatus('Inactive')}
        className={`bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
          selectedStatus === 'Inactive' ? 'border-yellow-500 ring-4 ring-yellow-200' : 'border-white/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Inactive</p>
            <p className="text-3xl md:text-4xl font-bold text-yellow-600">{stats.inactive}</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-lg">
            <Clock className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </div>
        </div>
      </button>

      <button
        onClick={() => setSelectedStatus('Banned')}
        className={`bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
          selectedStatus === 'Banned' ? 'border-red-500 ring-4 ring-red-200' : 'border-white/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Banned</p>
            <p className="text-3xl md:text-4xl font-bold text-red-600">{stats.banned}</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl shadow-lg">
            <XCircle className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </div>
        </div>
      </button>
    </div>
  );
}
