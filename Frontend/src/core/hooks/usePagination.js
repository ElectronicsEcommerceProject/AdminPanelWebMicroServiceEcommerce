/**
 * PURPOSE: Custom hook for pagination logic
 * 
 * LOGIC:
 * - Accept initialPage (default 1) and itemsPerPage (default 10) parameters
 * - Manage currentPage state using useState
 * - Provide helper functions:
 *   - nextPage: Increment currentPage by 1
 *   - prevPage: Decrement currentPage by 1 (minimum 1)
 *   - goToPage: Set currentPage to specific page number
 * - Return { currentPage, nextPage, prevPage, goToPage, itemsPerPage }
 * - Used with Pagination component and data tables
 * - Can be enhanced to calculate totalPages based on total items
 * 
 * EXAMPLE:
 * const { currentPage, nextPage, prevPage, itemsPerPage } = usePagination(1, 20);
 * nextPage() -> currentPage becomes 2
 * prevPage() -> currentPage becomes 1
 */
