import { Search, Filter, Sparkles } from 'lucide-react';

export default function UserListFilters({ filters, setFilters }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 md:p-8 border border-white/50">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="p-2 md:p-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
          <Filter className="w-4 md:w-5 h-4 md:h-5 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-800">Smart Filters</h3>
        <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-yellow-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="group">
          <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Filter By Role</label>
          <select
            value={filters.role}
            onChange={(e) => setFilters({...filters, role: e.target.value})}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:outline-none 
                     focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 
                     hover:border-gray-300 transition-all duration-300 bg-white/90"
          >
            <option value="Customer">Customer</option>
            <option value="Retailer">Retailer</option>
            <option value="Admin">Admin</option>
            <option value="All">All Roles</option>
          </select>
        </div>

        <div className="group">
          <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Filter By Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:outline-none 
                     focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 
                     hover:border-gray-300 transition-all duration-300 bg-white/90"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Banned">Banned</option>
            <option value="All">All Status</option>
          </select>
        </div>

        <div className="group">
          <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Search Users</label>
          <div className="relative">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400 
                            group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
              placeholder="Search by Name, Email, Phone"
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:outline-none 
                       focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 
                       hover:border-gray-300 transition-all duration-300 bg-white/90"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:outline-none 
                     focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 
                     hover:border-gray-300 transition-all duration-300 bg-white/90"
          >
            <option value="Date Joined">Date Joined</option>
            <option value="Order Count">Order Count</option>
            <option value="Revenue">Revenue</option>
          </select>
        </div>
      </div>
    </div>
  );
}
