import React from 'react';
import { AlertTriangle, Package, ArrowRight } from 'lucide-react';

const LowStockAlert = ({ alerts }) => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-red-100 rounded-lg mr-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Low Stock Alerts</h3>
            <p className="text-sm text-gray-500">Products running out of stock</p>
          </div>
        </div>
        {alerts.length > 0 && (
          <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
            {alerts.length} items
          </span>
        )}
      </div>

      {alerts.length === 0 ? (
        <div className="text-center py-8">
          <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No low stock alerts</p>
          <p className="text-gray-400 text-xs mt-1">All products are well stocked</p>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-100 hover:border-red-200 transition-colors">
              <div className="flex items-center">
                <div className="p-2 bg-red-50 rounded-lg mr-4">
                  <Package className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{alert.name}</p>
                  <p className="text-xs text-gray-500">{alert.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-red-600">{alert.stock}</p>
                <p className="text-xs text-red-500">left of {alert.threshold}</p>
              </div>
            </div>
          ))}
          
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors mt-4">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LowStockAlert;
