/**
 * PURPOSE: API functions for dashboard data
 * 
 * LOGIC:
 * - Import apiService from core/api
 * - getDashboardStats(): Fetch overview statistics
 *   - GET /api/dashboard/stats
 *   - Returns: { totalUsers, totalOrders, totalRevenue, totalProducts }
 * - getSalesData(startDate, endDate): Fetch sales chart data
 *   - GET /api/dashboard/sales?start={startDate}&end={endDate}
 *   - Returns: Array of { date, sales } objects
 * - getRevenueData(): Fetch revenue by category
 *   - GET /api/dashboard/revenue
 *   - Returns: Array of { category, revenue } objects
 * - getRecentOrders(): Fetch last 10 orders
 *   - GET /api/dashboard/recent-orders
 * - getTopProducts(): Fetch best-selling products
 *   - GET /api/dashboard/top-products
 * - getLowStockProducts(): Fetch products with stock < 10
 *   - GET /api/dashboard/low-stock
 * 
 * EXAMPLE:
 * const stats = await getDashboardStats();
 * // Returns: { totalUsers: 1234, totalOrders: 567, totalRevenue: 456789, totalProducts: 890 }
 */
