/**
 * PURPOSE: Custom hook for handling API calls with loading and error states
 * 
 * LOGIC:
 * - Accept apiFunc parameter (async function that makes API call)
 * - Manage three states: data, loading, error using useState
 * - Return execute function that:
 *   - Sets loading to true
 *   - Clears previous error
 *   - Calls apiFunc with provided arguments
 *   - On success: Store result in data state, return result
 *   - On error: Store error in error state, throw error
 *   - Finally: Set loading to false
 * - Return { data, loading, error, execute }
 * - Used for manual API calls (not automatic like React Query)
 * 
 * EXAMPLE:
 * const { data, loading, error, execute } = useApi(fetchUsers);
 * execute() -> Shows loading, fetches users, stores in data
 */
