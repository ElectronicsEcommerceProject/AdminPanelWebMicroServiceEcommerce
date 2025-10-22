/**
 * PURPOSE: Pagination component for navigating through pages
 * 
 * LOGIC:
 * - Accept props: currentPage (number), totalPages (number), onPageChange (handler)
 * - Render centered flex container
 * - Previous button:
 *   - onClick: Call onPageChange(currentPage - 1)
 *   - Disabled when currentPage === 1
 * - Display current page info: "Page 2 / 10"
 * - Next button:
 *   - onClick: Call onPageChange(currentPage + 1)
 *   - Disabled when currentPage === totalPages
 * - Can be enhanced with:
 *   - Page number buttons (1, 2, 3, ...)
 *   - Jump to first/last page buttons
 *   - Items per page selector
 * 
 * EXAMPLE:
 * <Pagination currentPage={2} totalPages={10} onPageChange={handlePageChange} />
 * Shows: [Previous] 2 / 10 [Next]
 */
