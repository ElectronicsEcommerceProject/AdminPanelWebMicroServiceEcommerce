// import React from 'react';
// import { Search, X, Filter, Sparkles } from 'lucide-react';
// import FilterDropdown from './FilterDropdown';

// // Move these constants here since they're not coming from storeApi
// const CATEGORIES = ['Charger', 'Earphones', 'Buttonphone', 'Data cable', 'Speaker', 'Power bank', 'Headphones'];
// const BRANDS = ['Vivo', 'mi', 'OnePlus', 'Airpods', 'Boat', 'Earphones', 'Rivano', 'Nikutex', 'Battery'];
// const PRODUCTS = ['44W flash charge', '45W', '55w ultra fast usb charger', '85W dash charger', 'Airdopes141X', 'Beat exceptation', 'Boat blastpods', 'Boat earphone', 'Boat killer', 'Boat wires earphones', 'Travel chargers', 'Fast charger 65W', 'Wireless earbuds'];
// const VARIANTS = ['White variants', 'Black variants', 'Red variant', 'Best product', 'Blue variants'];
// const STATUSES = ['In Stock', 'Low', 'Out of Stock'];

// const StockFilters = ({ 
//   globalSearch, 
//   setGlobalSearch, 
//   filters, 
//   handleFilterChange, 
//   clearFilter, 
//   clearAllFilters 
// }) => {
//   const activeFiltersCount = Object.values(filters).flat().length;

//   return (
//     // Lower z-index for the filters container to ensure dropdowns appear above everything
//     <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 mb-8
//                     bg-gradient-to-br from-white/90 via-blue-50/30 to-indigo-50/30 relative z-30">
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="p-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg shadow-blue-500/30">
//             <Filter className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Smart Filters</h2>
//             <p className="text-sm text-gray-500">Find exactly what you're looking for</p>
//           </div>
//         </div>
//         {activeFiltersCount > 0 && (
//           <button
//             onClick={clearAllFilters}
//             className="group flex items-center gap-2 px-4 py-2 
//                        bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl
//                        hover:from-red-600 hover:to-pink-600
//                        transform transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
//           >
//             <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
//             <span className="font-medium">Clear All ({activeFiltersCount})</span>
//           </button>
//         )}
//       </div>

//       {/* Global Search with Enhanced Design */}
//       <div className="mb-6">
//         <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
//           <Sparkles className="w-4 h-4 text-yellow-500" />
//           Global Search
//         </label>
//         <div className="relative group">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 
//                           group-hover:opacity-100 blur-xl transition-all duration-300 -z-10"></div>
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
//                             group-focus-within:text-blue-500 transition-colors" />
//           <input
//             type="text"
//             value={globalSearch}
//             onChange={(e) => setGlobalSearch(e.target.value)}
//             placeholder="Search by product name, variant, brand, category, or variant ID..."
//             className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl 
//                       focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
//                       text-sm placeholder-gray-400 transition-all duration-300
//                       hover:border-gray-300 bg-white/90 backdrop-blur"
//           />
//           {globalSearch && (
//             <button
//               onClick={() => setGlobalSearch('')}
//               className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 
//                         hover:bg-gray-100 rounded-lg transition-all duration-200
//                         hover:scale-110"
//             >
//               <X className="w-4 h-4 text-gray-500" />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Filter Dropdowns with Grid Layout - Ensure proper z-index context */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 relative">
//         <FilterDropdown
//           label="Category"
//           options={CATEGORIES}
//           selected={filters.category}
//           onChange={(value) => handleFilterChange('category', value)}
//           onClear={() => handleFilterChange('category', [])}
//         />
//         <FilterDropdown
//           label="Brand"
//           options={BRANDS}
//           selected={filters.brand}
//           onChange={(value) => handleFilterChange('brand', value)}
//           onClear={() => handleFilterChange('brand', [])}
//         />
//         <FilterDropdown
//           label="Product"
//           options={PRODUCTS}
//           selected={filters.product}
//           onChange={(value) => handleFilterChange('product', value)}
//           onClear={() => handleFilterChange('product', [])}
//         />
//         <FilterDropdown
//           label="Variant"
//           options={VARIANTS}
//           selected={filters.variant}
//           onChange={(value) => handleFilterChange('variant', value)}
//           onClear={() => handleFilterChange('variant', [])}
//         />
//         <FilterDropdown
//           label="Status"
//           options={STATUSES}
//           selected={filters.status}
//           onChange={(value) => handleFilterChange('status', value)}
//           onClear={() => handleFilterChange('status', [])}
//         />
//       </div>

//       {/* Active Filters Pills */}
//       {activeFiltersCount > 0 && (
//         <div className="flex flex-wrap gap-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl 
//                         border border-blue-200/50">
//           <span className="text-sm font-semibold text-gray-600 mr-2 py-1">Active Filters:</span>
//           {Object.entries(filters).map(([filterType, values]) =>
//             values.map(value => (
//               <span
//                 key={`${filterType}-${value}`}
//                 className="inline-flex items-center gap-1.5 px-4 py-2 
//                           bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
//                           rounded-full text-sm font-medium
//                           transform transition-all duration-300 hover:scale-105 
//                           shadow-lg shadow-blue-500/25 hover:shadow-xl"
//               >
//                 {value}
//                 <button
//                   onClick={() => clearFilter(filterType, value)}
//                   className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors duration-200"
//                 >
//                   <X className="w-3.5 h-3.5" />
//                 </button>
//               </span>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockFilters;
