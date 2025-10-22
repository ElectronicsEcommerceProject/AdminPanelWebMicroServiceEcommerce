/**
 * PURPOSE: Handle user logout and redirect to login page
 * 
 * LOGIC:
 * - Import useAuth hook and useNavigate from react-router-dom
 * - Get logout function from useAuth
 * - Get navigate function from useNavigate
 * - useEffect on component mount:
 *   - Call logout() to clear user and token
 *   - Call navigate('/login') to redirect to login page
 * - Show "Logging out..." message while processing
 * - Can be enhanced to call API logout endpoint to invalidate token on server
 * 
 * EXAMPLE:
 * User clicks Logout button -> Navigates to /logout route -> logout() called -> Redirects to /login
 */
