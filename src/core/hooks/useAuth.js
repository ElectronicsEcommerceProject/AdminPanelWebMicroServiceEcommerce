/**
 * PURPOSE: Custom hook to access authentication context
 * 
 * LOGIC:
 * - Import useContext and AuthContext
 * - Call useContext(AuthContext) to get context value
 * - Check if context exists:
 *   - If null: Throw error "useAuth must be used within AuthProvider"
 *   - If exists: Return context (contains user, token, login, logout)
 * - This hook simplifies accessing auth context in components
 * - Must be used inside AuthProvider wrapper
 * 
 * EXAMPLE:
 * const { user, token, login, logout } = useAuth();
 * if (user) { ... } // Access user data
 * logout() // Call logout function
 */
