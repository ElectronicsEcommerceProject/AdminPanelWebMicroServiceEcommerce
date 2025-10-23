// import React, { useState } from 'react';
// import { Package2, Eye, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// const StockTable = ({ data, onUpdateStock, onViewDetails }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
  
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = data.slice(startIndex, endIndex);

//   const getStatusStyle = (status) => {
//     switch(status) {
//       case 'In Stock': 
//         return {
//           badge: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-emerald-500/30',
//           text: 'In'
//         };
//       case 'Low Stock': 
//         return {
//           badge: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-500/30',
//           text: 'Low'
//         };
//       case 'Out of Stock': 
//         return {
//           badge: 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-500/30',
//           text: 'Out'
//         };
//       default: 
//         return {
//           badge: 'bg-gray-200 text-gray-700',
//           text: status
//         };
//     }
//   };

//   return (
//     <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
//       {/* Header */}
//       <div className="px-8 py-6 bg-gradient-to-r from-white/90 via-blue-50/50 to-indigo-50/50 
//                       border-b border-gray-100">
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Stock Details</h2>
//             <p className="text-sm text-gray-500 mt-1">Showing {data.length} total variants</p>
//           </div>
//           <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
//                           rounded-xl font-semibold shadow-lg shadow-blue-500/30">
//             Page {currentPage} of {totalPages}
//           </div>
//         </div>
//       </div>
      
//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200">
//             <tr>
//               {['Product ↑', 'Brand', 'Variant', 'Price', 'Stock', 'Carts', 'Available', 'Sold', 'Status', 'Actions'].map((header, index) => (
//                 <th key={index} className={`px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider
//                                           ${index >= 4 && index <= 7 ? 'text-center' : ''}`}>
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {currentData.map((item, index) => (
//               <tr key={item.id} 
//                   className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 
//                            transition-all duration-300 group">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                     {item.product}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.brand}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.variant}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className="text-sm font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg 
//                                  bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm
//                                  shadow-lg shadow-blue-500/20">
//                     {item.stock}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <span className="text-sm font-semibold text-orange-600">{item.carts}</span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <span className="text-sm font-semibold text-emerald-600">{item.available}</span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <span className="text-sm text-gray-600">{item.sold}</span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-lg
//                                   ${getStatusStyle(item.status).badge}`}>
//                     {getStatusStyle(item.status).text}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-center">
//                   <div className="flex justify-center gap-2">
//                     <button 
//                       onClick={() => onUpdateStock(item)}
//                       className="group/btn p-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
//                                rounded-xl hover:from-blue-600 hover:to-indigo-600 
//                                transform transition-all duration-300 hover:scale-110 
//                                shadow-lg shadow-blue-500/25"
//                       title="Update Stock"
//                     >
//                       <Package2 className="w-4 h-4" />
//                     </button>
//                     <button 
//                       onClick={() => onViewDetails(item)}
//                       className="group/btn p-2.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white 
//                                rounded-xl hover:from-gray-600 hover:to-gray-700 
//                                transform transition-all duration-300 hover:scale-110 
//                                shadow-lg shadow-gray-500/25"
//                       title="View Details"
//                     >
//                       <Eye className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Pagination */}
//       <div className="px-8 py-6 bg-gradient-to-r from-gray-50/50 to-gray-100/30 border-t border-gray-200 
//                       flex items-center justify-between">
//         <div className="text-sm text-gray-600">
//           Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span> to{' '}
//           <span className="font-semibold text-gray-900">{Math.min(endIndex, data.length)}</span> of{' '}
//           <span className="font-semibold text-gray-900">{data.length}</span> variants
//         </div>
//         <div className="flex items-center gap-2">
//           <button 
//             onClick={() => setCurrentPage(1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm font-medium
//                      hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white 
//                      hover:border-transparent disabled:opacity-50 disabled:cursor-not-allowed 
//                      transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
//                      disabled:hover:bg-white disabled:hover:text-gray-700"
//           >
//             First
//           </button>
//           <button 
//             onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
//             disabled={currentPage === 1}
//             className="p-2 bg-white border border-gray-300 rounded-xl
//                      hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white 
//                      hover:border-transparent disabled:opacity-50 disabled:cursor-not-allowed 
//                      transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
//                      disabled:hover:bg-white disabled:hover:text-gray-700"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
//                          rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30">
//             {currentPage} of {totalPages}
//           </span>
//           <button 
//             onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
//             disabled={currentPage === totalPages}
//             className="p-2 bg-white border border-gray-300 rounded-xl
//                      hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white 
//                      hover:border-transparent disabled:opacity-50 disabled:cursor-not-allowed 
//                      transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
//                      disabled:hover:bg-white disabled:hover:text-gray-700"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//           <button 
//             onClick={() => setCurrentPage(totalPages)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm font-medium
//                      hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white 
//                      hover:border-transparent disabled:opacity-50 disabled:cursor-not-allowed 
//                      transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25
//                      disabled:hover:bg-white disabled:hover:text-gray-700"
//           >
//             Last
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StockTable;
