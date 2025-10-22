/**
 * PURPOSE: Custom hook to debounce rapidly changing values
 * 
 * LOGIC:
 * - Accept value (any) and delay (default 500ms) parameters
 * - Create debouncedValue state initialized with value
 * - useEffect that runs when value or delay changes:
 *   - Set timeout to update debouncedValue after delay
 *   - Return cleanup function to clear timeout
 * - If value changes before delay expires, clear previous timeout and start new one
 * - Return debouncedValue
 * - Used for search inputs to avoid API calls on every keystroke
 * 
 * EXAMPLE:
 * const searchTerm = 'iPhone';
 * const debouncedSearch = useDebounce(searchTerm, 300);
 * User types "iPhone" -> Waits 300ms -> debouncedSearch updates -> Trigger API call
 */
