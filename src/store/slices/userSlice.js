/**
 * PURPOSE: Redux slice for user state management
 * 
 * LOGIC:
 * - Create userSlice with:
 *   - name: 'user'
 *   - initialState: { users: [], selectedUser: null, loading: false, error: null }
 *   - reducers:
 *     - setUsers: Update users array
 *     - setSelectedUser: Set currently viewed user
 *     - updateUser: Update specific user in array
 *     - deleteUser: Remove user from array
 *     - setLoading: Set loading state
 *     - setError: Set error message
 * - Export actions: setUsers, setSelectedUser, updateUser, deleteUser, setLoading, setError
 * - Export reducer as default
 * - Used for caching user data in global state
 * 
 * EXAMPLE:
 * dispatch(setUsers([{id: 1, name: 'John Doe', email: 'john@example.com'}]))
 * dispatch(updateUser({id: 1, status: 'banned'}))
 */
