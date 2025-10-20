/**
 * PURPOSE: Search input component with debouncing
 * 
 * LOGIC:
 * - Accept props: value, onChange, placeholder (default: 'Search...')
 * - Render text input with:
 *   - value bound to prop
 *   - onChange handler
 *   - placeholder text
 *   - Tailwind classes: px-4 py-2 border rounded w-full
 *   - Focus styles: focus:outline-none focus:ring-2 focus:ring-blue-500
 * - Add search icon on left side (optional)
 * - Add clear button (X) on right side when value exists
 * - Implement debouncing: Wait 300ms after user stops typing before calling onChange
 * - Use useDebounce hook for debouncing
 * 
 * EXAMPLE:
 * <SearchBar value={searchTerm} onChange={handleSearch} placeholder="Search products..." />
 * User types "iPhone" -> Waits 300ms -> Calls handleSearch
 */
