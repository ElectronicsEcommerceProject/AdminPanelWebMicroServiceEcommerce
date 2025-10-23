import React from 'react';
import { X, Package, ShoppingCart, TrendingUp, BarChart3, Calendar, Tag } from 'lucide-react';

const ViewDetailsModal = ({ item, onClose }) => {
  if (!item) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'In': return { bg: 'bg-emerald-500/10', text: 'text-emerald-700', border: 'border-emerald-200' };
      case 'Low': return { bg: 'bg-amber-500/10', text: 'text-amber-700', border: 'border-amber-200' };
      case 'Out': return { bg: 'bg-red-500/10', text: 'text-red-700', border: 'border-red-200' };
      default: return { bg: 'bg-gray-500/10', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  const statusConfig = getStatusColor(item.status);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="px-8 py-6 bg-gradient-to-r from-slate-500 to-slate-700 rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Product Details</h2>
                <p className="text-slate-200 text-sm mt-1">Complete information about {item.product}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-8 space-y-8">
            
            {/* Product Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.product}</h1>
                <p className="text-lg text-gray-600 mb-4">{item.variant}</p>
                <div className="flex flex-wrap gap-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${statusConfig.bg} ${statusConfig.border} ${statusConfig.text}`}>
                    {item.status === 'In' ? 'In Stock' : item.status === 'Low' ? 'Low Stock' : 'Out of Stock'}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-700 rounded-full text-sm font-semibold border-2 border-blue-200">
                    {item.category}
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-semibold border-2 border-purple-200">
                    {item.brand}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹{item.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Current Price</div>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Left Column - Basic Information */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Product Details Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                    <Tag className="w-5 h-5 text-blue-500" />
                    Product Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Variant ID', value: item.id, icon: Package, fullWidth: true },
                      { label: 'Variant Name', value: item.variant, icon: Tag },
                      { label: 'Product Name', value: item.product, icon: Package },
                      { label: 'Brand', value: item.brand, icon: Tag },
                      { label: 'Category', value: item.category, icon: Tag },
                      { label: 'Created Date', value: 'Jan 15, 2024', icon: Calendar }
                    ].map((field, index) => (
                      <div key={index} className={field.fullWidth ? 'md:col-span-2' : ''}>
                        <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                          <field.icon className="w-4 h-4 text-gray-400" />
                          {field.label}
                        </label>
                        <div className="px-4 py-3 bg-white rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50">
                          {field.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Total Views', value: '1.2K', trend: '+12%', color: 'text-blue-600' },
                      { label: 'Conversion Rate', value: '4.2%', trend: '+0.5%', color: 'text-green-600' },
                      { label: 'Avg. Rating', value: '4.5/5', trend: '+0.2', color: 'text-amber-600' },
                      { label: 'Returns', value: '2.1%', trend: '-0.3%', color: 'text-red-600' }
                    ].map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-xs font-semibold text-gray-600 mb-1">{metric.label}</div>
                        <div className={`text-xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                        <div className={`text-xs font-semibold ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stock Information */}
              <div className="space-y-6">
                
                {/* Stock Overview Card */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-slate-600" />
                    Stock Overview
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        label: 'Current Stock', 
                        value: item.stock, 
                        color: 'text-blue-600',
                        bg: 'bg-blue-500/10',
                        icon: Package
                      },
                      { 
                        label: 'In Carts/Wishlists', 
                        value: item.carts, 
                        color: 'text-orange-600',
                        bg: 'bg-orange-500/10',
                        icon: ShoppingCart
                      },
                      { 
                        label: 'Available Stock', 
                        value: item.available, 
                        color: 'text-emerald-600',
                        bg: 'bg-emerald-500/10',
                        icon: TrendingUp
                      },
                      { 
                        label: 'Total Sold', 
                        value: item.sold, 
                        color: 'text-purple-600',
                        bg: 'bg-purple-500/10',
                        icon: BarChart3
                      }
                    ].map((stat, index) => (
                      <div key={index} className={`p-4 rounded-xl border-2 ${stat.bg} border-gray-200`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg">
                              <stat.icon className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-amber-600" />
                    Inventory Health
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Stock Level</span>
                      <span className={`text-sm font-semibold ${
                        item.stock === 0 ? 'text-red-600' :
                        item.stock < 15 ? 'text-amber-600' :
                        'text-green-600'
                      }`}>
                        {item.stock === 0 ? 'Critical' :
                         item.stock < 15 ? 'Low' :
                         'Healthy'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Demand Trend</span>
                      <span className="text-sm font-semibold text-green-600">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Restock Priority</span>
                      <span className={`text-sm font-semibold ${
                        item.stock === 0 ? 'text-red-600' :
                        item.stock < 15 ? 'text-amber-600' :
                        'text-green-600'
                      }`}>
                        {item.stock === 0 ? 'Urgent' :
                         item.stock < 15 ? 'Medium' :
                         'Low'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 rounded-b-2xl flex justify-end flex-shrink-0 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl 
                     hover:from-slate-700 hover:to-slate-800 transform hover:scale-105 
                     transition-all duration-300 shadow-lg font-semibold"
          >
            Close Details
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #cbd5e1, #94a3b8);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #94a3b8, #64748b);
        }
      `}</style>
    </div>
  );
};

export default ViewDetailsModal;
