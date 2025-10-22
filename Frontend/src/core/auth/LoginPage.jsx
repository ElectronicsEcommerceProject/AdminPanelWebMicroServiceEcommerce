/**
 * PURPOSE: Admin login page for authentication
 * 
 * LOGIC:
 * - Import useAuth hook to access login function
 * - Import FormInput and Button components
 * - Manage state: email, password using useState
 * - handleSubmit function:
 *   - Prevent default form submission
 *   - Call API POST /api/auth/login with { email, password }
 *   - On success: Get user data and token from response
 *   - Call login(userData, token) from useAuth
 *   - Redirect to /dashboard using navigate
 *   - On error: Show error toast
 * - Render centered login form with:
 *   - Email input field
 *   - Password input field
 *   - Login button
 *   - Optional: "Forgot Password?" link
 * 
 * EXAMPLE:
 * User enters admin@example.com and password123
 * Submits form -> API call -> Success -> Redirects to /dashboard
 */
