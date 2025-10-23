// import React from 'react';
// import { Package, CheckCircle, AlertTriangle, XCircle, ShoppingCart, Truck } from 'lucide-react';

// const StockStats = ({ stats, activeFilter, setActiveFilter }) => {
//   const statCards = [
//     {
//       id: 'all',
//       icon: Package,
//       label: 'Total Variants',
//       value: stats.totalVariants,
//       gradient: 'from-blue-500 to-indigo-500',
//       shadowColor: 'shadow-blue-500/30',
//       iconBg: 'from-blue-600 to-indigo-600'
//     },
//     {
//       id: 'inStock',
//       icon: CheckCircle,
//       label: 'In Stock',
//       value: stats.inStock,
//       gradient: 'from-emerald-500 to-green-500',
//       shadowColor: 'shadow-emerald-500/30',
//       iconBg: 'from-emerald-600 to-green-600'
//     },
//     {
//       id: 'lowStock',
//       icon: AlertTriangle,
//       label: 'Low Stock (<15)',
//       value: stats.lowStock,
//       gradient: 'from-amber-500 to-orange-500',
//       shadowColor: 'shadow-amber-500/30',
//       iconBg: 'from-amber-600 to-orange-600',
//       tooltip: 'Items with stock below 15 units'
//     },
//     {
//       id: 'outOfStock',
//       icon: XCircle,
//       label: 'Out Stock',
//       value: stats.outOfStock,
//       gradient: 'from-red-500 to-rose-500',
//       shadowColor: 'shadow-red-500/30',
//       iconBg: 'from-red-600 to-rose-600'
//     },
//     {
//       id: 'inCart',
//       icon: ShoppingCart,
//       label: 'In Carts/Wishlists',
//       value: stats.inCartWishlist,
//       gradient: 'from-purple-500 to-pink-500',
//       shadowColor: 'shadow-purple-500/30',
//       iconBg: 'from-purple-600 to-pink-600'
//     },
//     {
//       id: 'sold',
//       icon: Truck,
//       label: 'Sold/Delivered',
//       value: stats.soldDelivered,
//       gradient: 'from-indigo-500 to-blue-500',
//       shadowColor: 'shadow-indigo-500/30',
//       iconBg: 'from-indigo-600 to-blue-600'
//     }
//   ];

//   return (
//     // Lower z-index for stats to ensure dropdowns appear above
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 relative z-20">
//       {statCards.map((card) => {
//         const Icon = card.icon;
//         const isActive = activeFilter === card.id;
        
//         return (
//           <button
//             key={card.id}
//             onClick={() => setActiveFilter(card.id)}
//             className={`group relative overflow-hidden rounded-2xl p-6 
//                        transform transition-all duration-500 hover:scale-105
//                        ${isActive 
//                          ? `bg-gradient-to-br ${card.gradient} text-white shadow-2xl ${card.shadowColor}` 
//                          : 'bg-white/80 backdrop-blur hover:bg-white shadow-lg hover:shadow-2xl border border-gray-100'
//                        }`}
//           >
//             {/* Background decoration */}
//             <div className={`absolute top-0 right-0 w-20 h-20 rounded-full 
//                             bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl
//                             group-hover:opacity-20 transition-opacity duration-500`}></div>
            
//             {/* Icon */}
//             <div className={`inline-flex p-3 rounded-xl mb-3
//                             ${isActive 
//                               ? 'bg-white/20 backdrop-blur' 
//                               : `bg-gradient-to-br ${card.gradient} shadow-lg ${card.shadowColor}`
//                             }`}>
//               <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white'}`} />
//             </div>
            
//             {/* Label */}
//             <div className={`text-xs font-semibold mb-2 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
//               {card.label}
//             </div>
            
//             {/* Value */}
//             <div className={`text-3xl font-black ${isActive ? 'text-white' : 'text-gray-800'}`}>
//               {card.value}
//             </div>
            
//             {/* Tooltip */}
//             {card.tooltip && (
//               <div className="absolute -top-12 left-1/2 -translate-x-1/2 
//                             bg-gray-800 text-white text-xs rounded-lg py-2 px-3 
//                             whitespace-nowrap opacity-0 group-hover:opacity-100 
//                             transition-opacity duration-300 pointer-events-none z-30">
//                 {card.tooltip}
//                 <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 
//                               w-2 h-2 bg-gray-800 rotate-45"></div>
//               </div>
//             )}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default StockStats;
