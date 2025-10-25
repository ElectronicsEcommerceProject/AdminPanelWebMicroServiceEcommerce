import React from 'react';
import { Award, Crown, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';

const TopBuyersTable = ({ buyers }) => {
  const getMedalIcon = (index) => {
    if (index === 0) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (index === 1) return <Award className="w-5 h-5 text-gray-400" />;
    if (index === 2) return <Award className="w-5 h-5 text-orange-600" />;
    return null;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden 
                  border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
      {/* Header */}
      <div className="px-4 md:px-6 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-yellow-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 backdrop-blur rounded-xl">
              <Award className="w-5 md:w-6 h-5 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base md:text-lg">Top Buyers</h3>
              <p className="text-yellow-100 text-xs md:text-sm">By Total Spend</p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-white/20 backdrop-blur rounded-full">
            <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-white" />
            <span className="text-white text-xs md:text-sm font-semibold hidden sm:inline">This Month</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Buyer Name
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Total Spend
              </th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-center text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider">
                Orders
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {buyers.map((buyer, index) => (
              <tr key={index} 
                  className="hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-yellow-50/50 
                           transition-all duration-300 group">
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 md:gap-2">
                    {getMedalIcon(index)}
                    <span className="text-sm md:text-base font-bold text-gray-700">#{index + 1}</span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-xl flex items-center justify-center 
                                  text-white font-bold shadow-lg group-hover:scale-110 transition-transform text-sm md:text-base
                                  ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                                    'bg-gradient-to-br from-blue-400 to-indigo-500'}`}>
                      {buyer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {buyer.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500">Premium Customer</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 md:gap-2">
                    <DollarSign className="w-3 md:w-4 h-3 md:h-4 text-green-500" />
                    <span className="text-sm md:text-lg font-bold text-gray-900">
                      ₹{buyer.totalSpend.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-center">
                  <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 
                                rounded-full">
                    <ShoppingBag className="w-3 md:w-4 h-3 md:h-4 text-blue-600" />
                    <span className="text-xs md:text-base font-semibold text-blue-700">{buyer.orders}</span>
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
              ₹{buyers.reduce((sum, b) => sum + b.totalSpend, 0).toLocaleString('en-IN')}
            </span>
          </span>
          <button className="text-xs md:text-sm font-semibold text-transparent bg-clip-text 
                          bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 
                          transition-all duration-300">
            View All Buyers →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBuyersTable;
