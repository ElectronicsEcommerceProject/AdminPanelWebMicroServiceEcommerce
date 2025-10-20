/**
 * PURPOSE: Sidebar navigation menu for admin panel
 * 
 * LOGIC:
 * - Import NavLink from react-router-dom for navigation
 * - Define menuItems array with path and label for each feature:
 *   - Dashboard, Users, Products, Orders, Payments, Promotions, Reviews
 *   - Inventory, Stores, Notifications, Banners, CMS, RBAC, Analytics, Reports
 * - Render aside element with:
 *   - Fixed width (w-64 = 256px)
 *   - Dark gray background (bg-gray-800)
 *   - White text
 * - Top section: Display "Admin Panel" title
 * - Nav section: Map menuItems to NavLink components
 *   - Each link has hover effect (bg-gray-700)
 *   - Active link highlighted with different background
 * - Can be enhanced with icons, collapsible sections, search
 * 
 * EXAMPLE:
 * <Sidebar />
 * Shows vertical menu with Dashboard, Users, Products, etc.
 * Clicking "Products" navigates to /products
 */
