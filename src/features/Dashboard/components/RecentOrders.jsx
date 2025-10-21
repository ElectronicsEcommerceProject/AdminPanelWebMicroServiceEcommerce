import React from 'react';

const RecentOrders = ({ orders }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-orange-100 text-orange-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-yellow-400 p-5">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Latest Orders</h3>
      
      <div className="space-y-6">
        {/* Customer Orders */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Customer Orders</h4>
          {orders.customer && orders.customer.length > 0 ? (
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr className="border-b">
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Order Number</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Customer</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Status</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.customer.map((order, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-3">
                        <a href="#" className="text-blue-600 hover:underline">{order.orderNumber}</a>
                      </td>
                      <td className="py-2 px-3 text-gray-700">{order.customer}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-gray-700">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No customer orders found.</p>
          )}
        </div>

        {/* Retailer Orders */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Retailer Orders</h4>
          {orders.retailer && orders.retailer.length > 0 ? (
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr className="border-b">
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Order Number</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Retailer</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Status</th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.retailer.map((order, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-3">
                        <a href="#" className="text-blue-600 hover:underline">{order.orderNumber}</a>
                      </td>
                      <td className="py-2 px-3 text-gray-700">{order.retailer}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-gray-700">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No retailer orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
