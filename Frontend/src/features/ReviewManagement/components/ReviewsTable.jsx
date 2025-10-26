import { Star, Eye } from 'lucide-react';

export default function ReviewsTable({ reviews, filteredReviews, onViewReview, getStatusColor }) {
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-purple-100">
      <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-500">
        <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
          Showing <span className="font-bold">{filteredReviews.length}</span> of <span className="font-bold">{reviews.length}</span> reviews
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider">Product</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider hidden lg:table-cell">Reviewer</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider">Rating</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider hidden md:table-cell">Comment</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider hidden sm:table-cell">Date</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider">Status</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredReviews.map((review, index) => (
              <tr 
                key={review.id} 
                className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
              >
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={review.productImage} 
                        alt={review.productName}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl object-cover shadow-lg ring-2 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-lg sm:rounded-xl transition-all duration-300"></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors truncate">{review.productName}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 font-medium truncate">{review.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden lg:table-cell">
                  <div className="text-sm font-semibold text-gray-900">{review.reviewerName}</div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-md font-bold mt-1">
                      ✓ Verified
                    </span>
                  )}
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                    {renderStars(review.rating)}
                    <span className="text-xs sm:text-sm font-bold text-gray-900 bg-yellow-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">{review.rating}</span>
                  </div>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hidden md:table-cell">
                  <p className="text-sm text-gray-700 truncate font-medium max-w-[150px] lg:max-w-[180px] xl:max-w-[220px]">{review.comment}</p>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 whitespace-nowrap text-xs sm:text-sm text-gray-700 font-medium hidden sm:table-cell">{review.date}</td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 whitespace-nowrap">
                  <span className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold border-2 shadow-md ${getStatusColor(review.status)}`}>
                    {review.status}
                  </span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 whitespace-nowrap">
                  <button
                    onClick={() => onViewReview(review)}
                    className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 
                             text-white rounded-lg sm:rounded-xl hover:from-purple-600 hover:to-pink-600 
                             shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 font-bold group/btn text-xs sm:text-sm"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="hidden sm:inline">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
