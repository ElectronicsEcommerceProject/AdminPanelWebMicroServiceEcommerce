import { Package, DollarSign, Eye, TrendingUp, ShoppingCart, XCircle, CheckCircle2 } from 'lucide-react';

export default function UserOrdersSection({ user }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
          <Package className="w-6 h-6 text-white" />
        </div>
        Order Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{user.orders}</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Spent</p>
              <p className="text-3xl font-bold text-gray-900">₹{user.revenue.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-700 mb-4">Order Status Breakdown:</div>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white 
                          rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                          transition-all duration-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Delivered
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white 
                          rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                          transition-all duration-300 flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            Cancelled
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white 
                          rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 
                          transition-all duration-300 flex items-center gap-2">
            <Package className="w-4 h-4" />
            Returned
          </button>
        </div>
      </div>

      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                      text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 
                      shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        <Eye className="w-5 h-5" />
        View Full Order List
      </button>
    </div>
  );
}
