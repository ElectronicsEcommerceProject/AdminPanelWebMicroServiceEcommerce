/**
 * PURPOSE: Protect routes from unauthorized access
 * 
 * LOGIC:
 * - Import Navigate from react-router-dom and useAuth hook
 * - Accept children prop (the protected component/page)
 * - Get token from useAuth hook
 * - Check if token exists:
 *   - If token exists: Render children (allow access)
 *   - If token is null: Render <Navigate to="/login" /> (redirect to login)
 * - Used to wrap protected routes in routing configuration
 * - Can be enhanced to check user roles/permissions
 * 
 * EXAMPLE:
 * <ProtectedRoute><DashboardPage /></ProtectedRoute>
 * If no token -> Redirects to /login
 * If token exists -> Shows DashboardPage
 */
