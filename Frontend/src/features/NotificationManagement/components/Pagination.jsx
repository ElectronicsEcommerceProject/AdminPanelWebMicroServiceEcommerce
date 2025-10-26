import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-amber-50 to-orange-50 border-t-2 border-amber-200 rounded-b-xl md:rounded-b-2xl">
      <div className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">
        Showing <span className="text-amber-600 font-bold">{startItem}</span> to <span className="text-amber-600 font-bold">{endItem}</span> of <span className="text-amber-600 font-bold">{totalItems}</span>
      </div>
      
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-white border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg font-semibold text-amber-600"
        >
          <span className="hidden sm:inline">First</span>
          <ChevronsLeft className="w-4 h-4 sm:hidden" />
        </button>
        
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 sm:p-2 rounded-lg bg-white border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 text-amber-600" />
        </button>
        
        <div className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-lg">
          {currentPage} of {totalPages}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 sm:p-2 rounded-lg bg-white border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
        >
          <ChevronRight className="w-4 h-4 text-amber-600" />
        </button>
        
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-white border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg font-semibold text-amber-600"
        >
          <span className="hidden sm:inline">Last</span>
          <ChevronsRight className="w-4 h-4 sm:hidden" />
        </button>
      </div>
    </div>
  );
}
