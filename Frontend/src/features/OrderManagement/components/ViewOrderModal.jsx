import { X } from 'lucide-react';

export default function ViewOrderModal({ isOpen, order, onClose, onStatusChange, onSave }) {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-bold">Order Details - {order.id}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group">
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Customer Information</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-600">Name:</span>
                  <p className="font-semibold text-gray-900">{order.customerName}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Email:</span>
                  <p className="font-semibold text-gray-900">{order.customerEmail}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Phone:</span>
                  <p className="font-semibold text-gray-900">{order.phone}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Address:</span>
                  <p className="font-semibold text-gray-900">{order.address}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Order Items</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.qty} × ₹{item.price}</p>
                  </div>
                ))}
                <div className="border-t pt-3 mt-3">
                  <p className="font-bold text-lg">Total: ₹{order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Order Status</h4>
            <select
              value={order.status}
              onChange={(e) => onStatusChange(order.id, e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
              <option value="returned">Returned</option>
            </select>
          </div>
        </div>

        <div className="px-4 md:px-6 py-4 md:py-6 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row gap-3 flex-shrink-0 border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
