import { Search } from 'lucide-react';

export default function OrderSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="relative">
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
          <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search orders by ID, email, or customer name..."
          className="w-full pl-12 sm:pl-14 md:pl-16 pr-3 sm:pr-4 py-2 sm:py-3 md:py-4 bg-white border-2 border-emerald-200 
                   rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500
                   shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-400 font-semibold
                   transition-all duration-300 text-xs sm:text-sm md:text-base"
        />
      </div>
    </div>
  );
}
