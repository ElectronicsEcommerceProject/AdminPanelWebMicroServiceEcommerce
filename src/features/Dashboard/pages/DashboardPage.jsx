/**
 * PURPOSE: Main dashboard page showing overview of admin panel
 * 
 * LOGIC:
 * - Import StatCard, Chart components and dashboard API functions
 * - Manage state: stats, salesData, revenueData, recentOrders, loading
 * - useEffect on mount:
 *   - Call getDashboardStats() and store in stats state
 *   - Call getSalesData() for last 30 days
 *   - Call getRevenueData()
 *   - Call getRecentOrders()
 *   - Call getTopProducts()
 *   - Call getLowStockProducts()
 * - Render layout:
 *   - Page title: "Dashboard"
 *   - Grid of 4 StatCards: Total Users, Total Orders, Revenue, Products
 *   - Row with 2 charts: SalesChart (line), RevenueChart (bar)
 *   - Row with 2 sections: RecentOrders table, TopProducts list
 *   - LowStockAlert component if low stock products exist
 * - Show LoadingSpinner while fetching data
 * 
 * EXAMPLE:
 * Shows 4 stat cards at top, sales/revenue charts in middle, recent data at bottom
 */
