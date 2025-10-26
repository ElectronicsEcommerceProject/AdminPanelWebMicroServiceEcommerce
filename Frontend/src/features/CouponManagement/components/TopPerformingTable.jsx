import { TrendingUp } from 'lucide-react';

export default function TopPerformingTable({ coupons, totalCoupons, startIndex }) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-teal-100">
      <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-teal-500 to-cyan-500">
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
            Top-Performing Coupons
          </h3>
          <p className="text-white font-semibold text-sm sm:text-base">
            Showing <span className="font-bold">{coupons.length}</span> of <span className="font-bold">{totalCoupons}</span> coupons
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Rank</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Code</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider hidden sm:table-cell">Discount</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Redemptions</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider hidden md:table-cell">Success Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {coupons.map((coupon, index) => {
              const actualRank = startIndex + index;
              const successRate = ((coupon.redemptions / coupon.totalUsage) * 100).toFixed(1);
              return (
                <tr key={coupon.id} className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300">
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                    <div className="flex items-center gap-2">
                      {actualRank === 0 && <span className="text-xl sm:text-2xl">🥇</span>}
                      {actualRank === 1 && <span className="text-xl sm:text-2xl">🥈</span>}
                      {actualRank === 2 && <span className="text-xl sm:text-2xl">🥉</span>}
                      <span className="text-xs sm:text-sm font-bold text-gray-900">#{actualRank + 1}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                    <span className="text-xs sm:text-sm font-bold text-gray-900">{coupon.code}</span>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden sm:table-cell">
                    <span className="text-xs sm:text-sm font-bold text-teal-600">{coupon.discount}</span>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                    <span className="text-xs sm:text-sm font-bold text-purple-600">{coupon.redemptions}</span>
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${successRate}%` }}
                        ></div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{successRate}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
