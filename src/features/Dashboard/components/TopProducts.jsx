import React from 'react';
import { Star, TrendingUp, TrendingDown, Award } from 'lucide-react';

const TopProducts = ({ products }) => {
  const getGrowthIcon = (growth) => {
    if (growth > 0) {
      return <TrendingUp className="h-3 w-3 text-green-500" />;
    } else if (growth < 0) {
      return <TrendingDown className="h-3 w-3 text-red-500" />;
    }
    return null;
  };

  const getGrowthColor = (growth) => {
    if (growth > 0) return 'text-green-600';
    if (growth < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-yellow-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-100 rounded-lg mr-3">
            <Award className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Top Selling Products</h3>
            <p className="text-sm text-gray-500">Best performing items</p>
          </div>
        </div>
        <Star className="h-5 w-5 text-yellow-400" />
      </div>

      {products.length === 0 ? (
        <div className="text-center py-8">
          <Award className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No product data</p>
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-yellow-200 transition-colors">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mr-3">
                  <span className={`text-sm font-bold ${index < 3 ? 'text-blue-600' : 'text-gray-600'}`}>
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500">{product.sold} sold</p>
                    <div className="flex items-center">
                      {getGrowthIcon(product.growth)}
                      <span className={`text-xs ${getGrowthColor(product.growth)} ml-1`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">₹{product.revenue.toLocaleString()}</p>
                <div className="flex items-center justify-end text-xs text-gray-500">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopProducts;
