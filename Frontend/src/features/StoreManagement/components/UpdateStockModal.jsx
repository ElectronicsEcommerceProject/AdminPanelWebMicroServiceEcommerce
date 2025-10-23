// import React, { useState, useEffect } from 'react';
// import { X, Package, TrendingUp, ArrowUp, ArrowDown, RefreshCw } from 'lucide-react';

// const UpdateStockModal = ({ item, onClose, onUpdate }) => {
//   const [newStock, setNewStock] = useState(item?.stock || 0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (item) {
//       setNewStock(item.stock || 0);
//     }
//   }, [item]);

//   if (!item) return null;

//   const stockChange = newStock - item.stock;
//   const newAvailable = Math.max(0, newStock - item.carts);

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     try {
//       await onUpdate(item.id, newStock);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const quickAdjust = (amount) => {
//     setNewStock(prev => Math.max(0, prev + amount));
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//       <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
//         {/* Header */}
//         <div className="px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl flex-shrink-0">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-white/20 rounded-xl backdrop-blur">
//                 <Package className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-white">Update Stock</h2>
//                 <p className="text-blue-100 text-sm mt-1">{item.product} - {item.variant}</p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group"
//             >
//               <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {/* Scrollable Content */}
//         <div className="flex-1 overflow-y-auto custom-scrollbar">
//           <div className="p-8 space-y-8">
            
//             {/* Product Information */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {[
//                 { label: 'Variant ID', value: item.id, fullWidth: true },
//                 { label: 'Variant Name', value: item.variant },
//                 { label: 'Product Name', value: item.product },
//                 { label: 'Brand', value: item.brand },
//                 { label: 'Category', value: item.category },
//                 { label: 'Current Price', value: `₹${item.price.toLocaleString()}` }
//               ].map((field, index) => (
//                 <div key={index} className={field.fullWidth ? 'lg:col-span-2' : ''}>
//                   <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
//                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
//                     {field.label}
//                   </label>
//                   <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50">
//                     {field.value}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Current Stock Overview */}
//             <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
//               <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
//                 <RefreshCw className="w-5 h-5 text-blue-500" />
//                 Current Stock Overview
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {[
//                   { 
//                     label: 'Current Stock', 
//                     value: item.stock, 
//                     color: 'text-blue-600',
//                     bg: 'bg-blue-500/10',
//                     border: 'border-blue-200'
//                   },
//                   { 
//                     label: 'In Carts', 
//                     value: item.carts, 
//                     color: 'text-orange-600',
//                     bg: 'bg-orange-500/10',
//                     border: 'border-orange-200'
//                   },
//                   { 
//                     label: 'Available', 
//                     value: item.available, 
//                     color: 'text-emerald-600',
//                     bg: 'bg-emerald-500/10',
//                     border: 'border-emerald-200'
//                   },
//                   { 
//                     label: 'Total Sold', 
//                     value: item.sold, 
//                     color: 'text-purple-600',
//                     bg: 'bg-purple-500/10',
//                     border: 'border-purple-200'
//                   }
//                 ].map((stat, index) => (
//                   <div key={index} className={`text-center p-4 rounded-xl border-2 ${stat.bg} ${stat.border}`}>
//                     <div className="text-xs font-semibold text-gray-600 mb-2">{stat.label}</div>
//                     <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stock Update Section */}
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
//                   <TrendingUp className="w-6 h-6 text-blue-500" />
//                   Update Stock Quantity
//                 </h3>
                
//                 {/* Quick Adjust Buttons */}
//                 <div className="flex gap-2">
//                   {[-10, -5, -1, 1, 5, 10].map((amount) => (
//                     <button
//                       key={amount}
//                       onClick={() => quickAdjust(amount)}
//                       className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                         amount < 0 
//                           ? 'bg-red-500/10 text-red-600 hover:bg-red-500/20 border border-red-200' 
//                           : 'bg-green-500/10 text-green-600 hover:bg-green-500/20 border border-green-200'
//                       }`}
//                     >
//                       {amount > 0 ? '+' : ''}{amount}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Stock Input */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600 mb-3">
//                     New Stock Quantity
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="number"
//                       value={newStock}
//                       onChange={(e) => setNewStock(Math.max(0, parseInt(e.target.value) || 0))}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl 
//                                focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 
//                                text-lg font-bold text-gray-800 transition-all duration-200 pr-20"
//                       min="0"
//                     />
//                     <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
//                       <button
//                         onClick={() => quickAdjust(1)}
//                         className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//                       >
//                         <ArrowUp className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => quickAdjust(-1)}
//                         className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                       >
//                         <ArrowDown className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Change Preview */}
//                 {stockChange !== 0 && (
//                   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
//                     <h4 className="font-semibold text-gray-800 mb-3">Changes Preview</h4>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Current Stock:</span>
//                         <span className="font-semibold">{item.stock}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">New Stock:</span>
//                         <span className="font-semibold text-blue-600">{newStock}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Change:</span>
//                         <span className={`font-semibold ${stockChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
//                           {stockChange >= 0 ? '+' : ''}{stockChange}
//                         </span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">New Available:</span>
//                         <span className="font-semibold text-emerald-600">{newAvailable}</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Status Impact */}
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
//               <h4 className="font-semibold text-amber-800 mb-2">Status Impact</h4>
//               <p className="text-sm text-amber-700">
//                 {newStock === 0 ? 'Product will be marked as "Out of Stock"' :
//                  newStock < 15 ? 'Product will be marked as "Low Stock"' :
//                  'Product will be marked as "In Stock"'}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-8 py-6 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row justify-between gap-4 flex-shrink-0 border-t border-gray-200">
//           <div className="flex items-center text-sm text-gray-600">
//             <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
//             Last updated: {new Date().toLocaleDateString()}
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               disabled={isSubmitting}
//               className="px-8 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl 
//                        hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold
//                        disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               disabled={stockChange === 0 || isSubmitting}
//               className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl 
//                        hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 
//                        transition-all duration-300 shadow-lg shadow-blue-500/25 font-semibold
//                        disabled:from-gray-400 disabled:to-gray-500 disabled:transform-none disabled:shadow-none
//                        disabled:cursor-not-allowed flex items-center gap-2"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   Updating...
//                 </>
//               ) : (
//                 'Update Stock'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f5f9;
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UpdateStockModal;
