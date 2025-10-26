import { Search } from 'lucide-react';

export default function CouponSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-6">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
          <Search className="w-4 h-4 text-white" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search coupons by code or description..."
          className="w-full pl-14 md:pl-16 pr-4 py-3 md:py-4 bg-white border-2 border-teal-200 
                   rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-200 focus:border-teal-500
                   shadow-lg hover:shadow-xl text-gray-900 placeholder-gray-400 font-semibold
                   transition-all duration-300 text-sm md:text-base"
        />
      </div>
    </div>
  );
}
