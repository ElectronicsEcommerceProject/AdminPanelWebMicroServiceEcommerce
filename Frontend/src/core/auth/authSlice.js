/**
 * PURPOSE: Redux slice for authentication state management
 * 
 * LOGIC:
 * - Import createSlice from Redux Toolkit
 * - Create authSlice with:
 *   - name: 'auth'
 *   - initialState: { user: null, token: null }
 *   - reducers:
 *     - setCredentials: Update state.user and state.token from action.payload
 *     - clearCredentials: Set state.user and state.token to null
 * - Export actions: setCredentials, clearCredentials
 * - Export reducer as default
 * - Used for global auth state across app (alternative to AuthContext)
 * 
 * EXAMPLE:
 * dispatch(setCredentials({ user: {id: 1, name: 'Admin'}, token: 'eyJhbGc...' }))
 * dispatch(clearCredentials()) // Sets user and token to null
 */
