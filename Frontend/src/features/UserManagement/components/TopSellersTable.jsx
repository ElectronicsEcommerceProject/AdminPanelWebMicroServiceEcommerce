import React from 'react';
import { Store, TrendingUp, Package, DollarSign } from 'lucide-react';

const TopSellersTable = ({ sellers }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden 
                  border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
      {/* Header */}
      <div className="px-4 md:px-6 py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 backdrop-blur rounded-xl">
              <Store className="w-5 md:w-6 h-5 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base md:text-lg">Top Sellers</h3>
              <p className="text-purple-100 text-xs md:text-sm">By Order Volume</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full">
            <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-white" />
            <span className="text-white text-xs md:text-sm font-semibold hidden sm:inline">This Month</span>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Retailer
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-center text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sellers.slice(0, 3).map((seller, index) => (
              <tr key={index} 
                  className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 
                           transition-all duration-300 group">
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-purple-400 to-pink-500 
                                  rounded-xl flex items-center justify-center text-white font-bold text-sm md:text-base
                                  shadow-lg group-hover:scale-110 transition-transform">
                      {seller.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {seller.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500">Verified Seller</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-center">
                  <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 
                                rounded-full">
                    <Package className="w-3 md:w-4 h-3 md:h-4 text-purple-600" />
                    <span className="text-xs md:text-base font-semibold text-purple-700">{seller.orders}</span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 md:gap-2">
                    <DollarSign className="w-3 md:w-4 h-3 md:h-4 text-green-500" />
                    <span className="text-sm md:text-lg font-bold text-gray-900">
                      ₹{seller.revenue.toLocaleString('en-IN')}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="px-4 md:px-6 py-6 md:py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs md:text-sm text-gray-600">
            Total Revenue: <span className="font-bold text-gray-900">
              ₹{sellers.reduce((sum, s) => sum + s.revenue, 0).toLocaleString('en-IN')}
            </span>
          </span>
          <button className="text-xs md:text-sm font-semibold text-transparent bg-clip-text 
                          bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                          transition-all duration-300">
            View All Sellers →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellersTable;
