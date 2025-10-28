export default function OrdersTable({ orders, onViewOrder, onStatusChange }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'processing':
        return 'bg-blue-100 text-blue-700';
      case 'shipped':
        return 'bg-purple-100 text-purple-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
      case 'returned':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-3 sm:px-4 py-2 sm:py-3">
        <p className="text-white text-xs sm:text-sm font-medium">Orders</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase">Order ID</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden md:table-cell">Customer</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden sm:table-cell">Total</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden lg:table-cell">Date</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs font-semibold text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <span className="text-xs sm:text-sm font-bold text-emerald-600">{order.id}</span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{order.customerName}</p>
                    <p className="text-xs text-gray-600">{order.customerEmail}</p>
                  </div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden sm:table-cell">
                  <span className="text-sm font-bold text-gray-900">₹{order.total.toFixed(2)}</span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden lg:table-cell">{order.date}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <button
                      onClick={() => onViewOrder(order)}
                      className="px-2 sm:px-4 py-1 sm:py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-semibold text-xs sm:text-sm transition-colors"
                    >
                      View
                    </button>
                    <select
                      value={order.status}
                      onChange={(e) => onStatusChange(order.id, e.target.value)}
                      className="px-2 sm:px-3 py-1 sm:py-2 border-2 border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="pending">pending</option>
                      <option value="processing">processing</option>
                      <option value="shipped">shipped</option>
                      <option value="delivered">delivered</option>
                      <option value="cancelled">cancelled</option>
                      <option value="returned">returned</option>
                    </select>
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
