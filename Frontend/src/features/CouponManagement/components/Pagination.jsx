import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-teal-50 to-cyan-50 border-t-2 border-teal-200 rounded-b-xl md:rounded-b-2xl">
      <div className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">
        Page <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded-md sm:rounded-lg text-teal-600 font-bold">{currentPage}</span> of{' '}
        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded-md sm:rounded-lg text-teal-600 font-bold">{totalPages}</span>
      </div>
      
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl bg-white border-2 border-teal-200 hover:bg-teal-100 hover:border-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-teal-600" />
        </button>
        
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl font-bold transition-all shadow-md hover:shadow-lg transform hover:scale-105 ${
              currentPage === i + 1
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white scale-110 shadow-xl'
                : 'bg-white border-2 border-teal-200 text-teal-600 hover:bg-teal-100 hover:border-teal-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl bg-white border-2 border-teal-200 hover:bg-teal-100 hover:border-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-teal-600" />
        </button>
      </div>
    </div>
  );
}
