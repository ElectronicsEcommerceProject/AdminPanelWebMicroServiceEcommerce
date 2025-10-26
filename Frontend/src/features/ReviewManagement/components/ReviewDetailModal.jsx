import { X, User, Calendar, ThumbsUp, MessageSquare, Star, ShieldAlert, CheckCircle, XCircle, Flag, Trash2 } from 'lucide-react';

export default function ReviewDetailModal({ 
  showModal, 
  selectedReview, 
  onClose, 
  onStatusChange, 
  onDeleteReview, 
  getStatusColor 
}) {
  if (!showModal || !selectedReview) return null;

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img src={selectedReview.productImage} alt={selectedReview.productName} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold">{selectedReview.productName}</h3>
                <p className="text-purple-100 text-xs md:text-sm">{selectedReview.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Reviewer Information */}
            <div className="space-y-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-4 md:w-5 h-4 md:h-5 text-purple-500" />
                Reviewer Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-50 rounded-xl p-3 md:p-4">
                  <div className="text-gray-500 text-xs md:text-sm mb-1">Name</div>
                  <div className="text-gray-900 text-sm md:text-base font-medium flex items-center gap-2">
                    {selectedReview.reviewerName}
                    {selectedReview.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 md:p-4">
                  <div className="text-gray-500 text-xs md:text-sm mb-1">Email</div>
                  <div className="text-gray-900 text-sm md:text-base font-medium">{selectedReview.reviewerEmail}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    Review Date
                  </div>
                  <div className="text-gray-900 text-sm md:text-base font-medium">{selectedReview.date}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm mb-1">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful Votes
                  </div>
                  <div className="text-gray-900 text-sm md:text-base font-medium">{selectedReview.helpful} people</div>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Rating:</span>
                <div className="flex items-center gap-3">
                  {renderStars(selectedReview.rating)}
                  <span className="text-lg font-bold text-gray-900">{selectedReview.rating}/5</span>
                </div>
              </div>
            </div>

            {/* Review Comment */}
            <div className="space-y-2">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-4 md:w-5 h-4 md:h-5 text-purple-500" />
                Review Comment
              </h4>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700 leading-relaxed">{selectedReview.comment}</p>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Current Status:</span>
                <span className={`px-4 py-2 rounded-full font-semibold border ${getStatusColor(selectedReview.status)}`}>
                  {selectedReview.status}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 flex items-center gap-2">
                <ShieldAlert className="w-4 md:w-5 h-4 md:h-5 text-purple-500" />
                Moderation Actions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onStatusChange(selectedReview.id, 'Approved')}
                  disabled={selectedReview.status === 'Approved'}
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-green-500 to-emerald-600 
                           text-white rounded-xl hover:from-green-600 hover:to-emerald-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve
                </button>
                <button
                  onClick={() => onStatusChange(selectedReview.id, 'Rejected')}
                  disabled={selectedReview.status === 'Rejected'}
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-red-500 to-rose-600 
                           text-white rounded-xl hover:from-red-600 hover:to-rose-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <XCircle className="w-5 h-5" />
                  Reject
                </button>
                <button
                  onClick={() => onStatusChange(selectedReview.id, 'Flagged')}
                  disabled={selectedReview.status === 'Flagged'}
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-orange-500 to-amber-600 
                           text-white rounded-xl hover:from-orange-600 hover:to-amber-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <Flag className="w-5 h-5" />
                  Flag Review
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this review?')) {
                      onDeleteReview(selectedReview.id);
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-gray-500 to-slate-600 
                           text-white rounded-xl hover:from-gray-600 hover:to-slate-700 
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Trash2 className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3 flex-shrink-0 border-t border-gray-200">
          <div className="flex items-center text-xs md:text-sm text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <button
            onClick={onClose}
            className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base text-gray-700 bg-white border-2 border-gray-300 rounded-xl 
                     hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
