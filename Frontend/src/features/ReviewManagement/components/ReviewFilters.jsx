import { Filter, Search } from 'lucide-react';

export default function ReviewFilters({ 
  selectedFilter, 
  setSelectedFilter, 
  searchQuery, 
  setSearchQuery, 
  setStatusFilter 
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-6">
      <div className="relative group hidden lg:block">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-focus-within:scale-110 transition-transform duration-300 z-10 pointer-events-none">
          <Filter className="w-4 h-4 text-white" />
        </div>
        <select
          value={selectedFilter}
          onChange={(e) => {
            setSelectedFilter(e.target.value);
            setStatusFilter(null);
          }}
          className="w-full pl-14 pr-8 py-4 bg-white border-2 border-purple-200 
                   rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500
                   shadow-lg hover:shadow-xl text-gray-900 font-semibold cursor-pointer
                   transition-all duration-300 text-base"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Flagged</option>
          <option>Rejected</option>
          <option>Verified</option>
        </select>
      </div>
      <div className="relative group">
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md sm:rounded-lg group-focus-within:scale-110 transition-transform duration-300 z-10 pointer-events-none">
          <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full pl-9 sm:pl-11 md:pl-14 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-purple-200 
                   rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-purple-200 focus:border-purple-500
                   shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-400 font-semibold
                   transition-all duration-300 text-xs sm:text-sm md:text-base"
        />
      </div>
    </div>
  );
}
