import React from 'react';

const TopProducts = ({ products }) => (
  <div className="bg-white rounded-lg border border-yellow-400 p-5 h-full">
    <h3 className="text-sm font-medium text-gray-700 mb-3">Top Selling Products</h3>
    {products.length === 0 ? (
      <p className="text-sm text-gray-500">Loading...</p>
    ) : (
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-b-0">
            <span className="text-sm font-medium text-gray-900">{product.name}</span>
            <span className="text-sm text-blue-600 font-semibold">{product.sold} sold</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TopProducts;
