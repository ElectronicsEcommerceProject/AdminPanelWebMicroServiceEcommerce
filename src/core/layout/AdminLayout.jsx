/**
 * PURPOSE: Main layout wrapper for all admin pages
 * 
 * LOGIC:
 * - Import Sidebar, Header, Footer components
 * - Accept children prop (page content)
 * - Create flex layout with full screen height
 * - Left side: Render Sidebar (fixed width, dark background)
 * - Right side: Flex column container with:
 *   - Header at top (white background, shadow)
 *   - Main content area (flex-1, scrollable, padding, gray background)
 *   - Footer at bottom (white background, border-top)
 * - Render children inside main content area
 * - This layout wraps all protected routes
 * 
 * EXAMPLE:
 * <AdminLayout>
 *   <DashboardPage /> // Page content goes here
 * </AdminLayout>
 * Shows sidebar on left, header on top, page content in center, footer at bottom
 */
