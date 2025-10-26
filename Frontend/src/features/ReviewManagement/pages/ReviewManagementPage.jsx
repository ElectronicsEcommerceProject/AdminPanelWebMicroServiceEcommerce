import { useState } from 'react';
import { REVIEWS_DATA } from '../api/reviewsMock';
import ReviewHeader from '../components/ReviewHeader';
import ReviewStatsCards from '../components/ReviewStatsCards';
import ReviewFilters from '../components/ReviewFilters';
import ReviewsTable from '../components/ReviewsTable';
import ReviewDetailModal from '../components/ReviewDetailModal';
import Pagination from '../components/Pagination';

export default function ReviewManagementPage() {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const stats = {
    totalReviews: reviews.length,
    pending: reviews.filter(r => r.status === 'Pending').length,
    approved: reviews.filter(r => r.status === 'Approved').length,
    flagged: reviews.filter(r => r.status === 'Flagged').length,
    rejected: reviews.filter(r => r.status === 'Rejected').length,
    avgRating: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
  };

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.reviewerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatusFilter = 
      !statusFilter || review.status === statusFilter;
    
    const matchesDropdownFilter = 
      selectedFilter === 'All' ||
      (selectedFilter === 'Pending' && review.status === 'Pending') ||
      (selectedFilter === 'Approved' && review.status === 'Approved') ||
      (selectedFilter === 'Flagged' && review.status === 'Flagged') ||
      (selectedFilter === 'Rejected' && review.status === 'Rejected') ||
      (selectedFilter === 'Verified' && review.verified);
    
    return matchesSearch && matchesStatusFilter && matchesDropdownFilter;
  });

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewReview = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const handleStatusChange = (reviewId, newStatus) => {
    setReviews(reviews.map(r => 
      r.id === reviewId ? { ...r, status: newStatus } : r
    ));
    if (selectedReview?.id === reviewId) {
      setSelectedReview({ ...selectedReview, status: newStatus });
    }
  };

  const handleDeleteReview = (reviewId) => {
    setReviews(reviews.filter(r => r.id !== reviewId));
    if (selectedReview?.id === reviewId) {
      setShowModal(false);
      setSelectedReview(null);
    }
  };

  const handleStatCardClick = (status) => {
    if (statusFilter === status) {
      setStatusFilter(null);
    } else {
      setStatusFilter(status);
    }
    setSelectedFilter('All');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Flagged':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <ReviewHeader />

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        <ReviewStatsCards 
          stats={stats} 
          statusFilter={statusFilter} 
          onStatCardClick={handleStatCardClick} 
        />

        {statusFilter && (
          <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Filtering by:</span>
            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getStatusColor(statusFilter)}`}>
              {statusFilter}
            </span>
            <button
              onClick={() => setStatusFilter(null)}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear Filter
            </button>
          </div>
        )}

        <ReviewFilters 
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setStatusFilter={setStatusFilter}
        />

        <ReviewsTable 
          reviews={reviews}
          filteredReviews={paginatedReviews}
          onViewReview={handleViewReview}
          getStatusColor={getStatusColor}
        />

        {totalPages > 0 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <ReviewDetailModal 
        showModal={showModal}
        selectedReview={selectedReview}
        onClose={() => setShowModal(false)}
        onStatusChange={handleStatusChange}
        onDeleteReview={handleDeleteReview}
        getStatusColor={getStatusColor}
      />
    </div>
  );
}
