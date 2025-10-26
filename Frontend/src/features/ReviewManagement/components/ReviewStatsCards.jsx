import { MessageSquare, AlertCircle, CheckCircle, Flag, XCircle, Award } from 'lucide-react';

export default function ReviewStatsCards({ stats, statusFilter, onStatCardClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
      <button
        onClick={() => onStatCardClick(null)}
        className={`group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === null ? 'border-blue-500 ring-4 ring-blue-200 shadow-blue-200' : 'border-blue-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-blue-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-blue-700 uppercase tracking-wide">Total</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 relative">{stats.totalReviews}</p>
      </button>
      <button
        onClick={() => onStatCardClick('Pending')}
        className={`group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'Pending' ? 'border-yellow-500 ring-4 ring-yellow-200 shadow-yellow-200' : 'border-yellow-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-yellow-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-yellow-700 uppercase tracking-wide">Pending</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600 relative">{stats.pending}</p>
      </button>
      <button
        onClick={() => onStatCardClick('Approved')}
        className={`group bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'Approved' ? 'border-green-500 ring-4 ring-green-200 shadow-green-200' : 'border-green-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-green-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-green-700 uppercase tracking-wide">Approved</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 relative">{stats.approved}</p>
      </button>
      <button
        onClick={() => onStatCardClick('Flagged')}
        className={`group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'Flagged' ? 'border-orange-500 ring-4 ring-orange-200 shadow-orange-200' : 'border-orange-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-orange-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Flag className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-orange-700 uppercase tracking-wide">Flagged</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 relative">{stats.flagged}</p>
      </button>
      <button
        onClick={() => onStatCardClick('Rejected')}
        className={`group bg-gradient-to-br from-red-50 to-red-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-left relative overflow-hidden ${
          statusFilter === 'Rejected' ? 'border-red-500 ring-4 ring-red-200 shadow-red-200' : 'border-red-200'
        }`}
      >
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-red-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-red-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-red-700 uppercase tracking-wide">Rejected</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 relative">{stats.rejected}</p>
      </button>
      <div className="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg border-2 border-purple-200 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full -mr-8 -mt-8 md:-mr-10 md:-mt-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 relative">
          <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md sm:rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold text-purple-700 uppercase tracking-wide">Avg Rating</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">{stats.avgRating}★</p>
      </div>
    </div>
  );
}
