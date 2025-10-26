export default function CouponsTable({ coupons, totalCoupons, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-teal-100">
      <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-teal-500 to-cyan-500">
        <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
          Showing <span className="font-bold">{coupons.length}</span> of <span className="font-bold">{totalCoupons}</span> coupons
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Code</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Discount</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider hidden sm:table-cell">Valid To</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider hidden md:table-cell">Min Order</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Status</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 group">
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <span className="text-xs sm:text-sm font-bold text-gray-900">{coupon.code}</span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <span className="text-xs sm:text-sm font-bold text-teal-600">{coupon.discount}</span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden sm:table-cell">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{coupon.validTo}</span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden md:table-cell">
                  <span className="text-xs sm:text-sm text-gray-900 font-semibold">₹{coupon.minOrder}</span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <button
                    onClick={() => onToggleStatus(coupon.id)}
                    className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full relative transition-colors cursor-pointer ${
                      coupon.status ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`absolute top-0.5 sm:top-1 left-0.5 sm:left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      coupon.status ? 'translate-x-5 sm:translate-x-6' : ''
                    }`}></div>
                  </button>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <div className="flex gap-1 sm:gap-2">
                    <button
                      onClick={() => onEdit(coupon)}
                      className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-bold text-[10px] sm:text-xs md:text-sm transition-colors shadow-md hover:shadow-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(coupon.id)}
                      className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-bold text-[10px] sm:text-xs md:text-sm transition-colors shadow-md hover:shadow-lg"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
