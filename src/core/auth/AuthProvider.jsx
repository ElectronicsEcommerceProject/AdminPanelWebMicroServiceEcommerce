/**
 * PURPOSE: Provide authentication context to entire app
 * 
 * LOGIC:
 * - Create AuthContext using createContext()
 * - Create AuthProvider component that wraps children
 * - Manage state: user (user object), token (JWT token)
 * - Initialize token from localStorage.getItem('token')
 * - useEffect: Sync token with localStorage when it changes
 *   - If token exists: localStorage.setItem('token', token)
 *   - If token is null: localStorage.removeItem('token')
 * - Provide login function: setUser(userData), setToken(authToken)
 * - Provide logout function: setUser(null), setToken(null)
 * - Return AuthContext.Provider with value: { user, token, login, logout }
 * 
 * EXAMPLE:
 * <AuthProvider>
 *   <App /> // All children can access user, token, login, logout via useContext(AuthContext)
 * </AuthProvider>
 */
