/**
 * PURPOSE: Main routing configuration for the application
 * 
 * LOGIC:
 * - Import Routes, Route, Navigate from react-router-dom
 * - Import LoginPage, ProtectedRoute, AdminLayout
 * - Import all feature pages (Dashboard, Users, Products, Orders, etc.)
 * - Define route structure:
 *   - /login -> LoginPage (public route)
 *   - / -> Redirect to /dashboard
 *   - All other routes wrapped in ProtectedRoute and AdminLayout:
 *     - /dashboard -> DashboardPage
 *     - /users -> UserListPage, /users/:id -> UserDetailsPage
 *     - /products -> ProductListPage, /products/create -> ProductCreatePage
 *     - /orders -> OrderListPage, /orders/:id -> OrderDetailsPage
 *     - /payments, /promotions, /reviews, /inventory, /stores, /notifications
 *     - /banners, /cms, /rbac, /analytics, /reports
 * 
 * EXAMPLE:
 * User visits /dashboard -> Checks auth -> Shows AdminLayout with DashboardPage
 */
