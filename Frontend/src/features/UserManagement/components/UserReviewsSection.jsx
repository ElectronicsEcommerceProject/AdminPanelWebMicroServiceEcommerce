import { MessageSquare, Package, Star, Calendar } from 'lucide-react';
import { REVIEWS_DATA, PRODUCTS_DATA } from '../api/userListMock';

export default function UserReviewsSection({ user }) {
  const userReviews = REVIEWS_DATA[user.id] || [];
  const userProducts = PRODUCTS_DATA[user.id] || [];

  if (user.role === 'Retailer') {
    return (
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Package className="w-6 h-6 text-white" />
          </div>
          Product List
        </h3>
        {userProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userProducts.map(product => (
              <div key={product.id} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 
                                              rounded-xl p-6 hover:shadow-xl transition-all duration-300 
                                              hover:border-purple-300 group">
                <div className="font-bold text-lg text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-gray-600">Stock</div>
                    <div className="font-bold text-blue-600">{product.stock}</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-gray-600">Price</div>
                    <div className="font-bold text-green-600">₹{product.price}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-gray-600">Sales</div>
                    <div className="font-bold text-purple-600">{product.sales}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 text-lg">No products available</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        Customer Reviews
      </h3>
      <div className="mb-6">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200/50">
          <p className="text-sm text-gray-600 mb-1">Total Reviews</p>
          <p className="text-3xl font-bold text-gray-900">{userReviews.length}</p>
        </div>
      </div>
      {userReviews.length > 0 ? (
        <div className="space-y-4">
          {userReviews.map(review => (
            <div key={review.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 
                                          hover:shadow-xl transition-all duration-300 hover:border-yellow-300">
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-lg text-gray-900">{review.product}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-3">{review.comment}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-4 h-4" />
                {review.date}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 text-lg">No reviews available</p>
        </div>
      )}
    </div>
  );
}
