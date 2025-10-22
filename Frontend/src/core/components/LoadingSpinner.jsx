/**
 * PURPOSE: Loading spinner component for async operations
 * 
 * LOGIC:
 * - Render centered container with flex layout
 * - Render spinning circle using CSS animation
 * - Use Tailwind classes:
 *   - animate-spin: Rotate animation
 *   - rounded-full: Perfect circle
 *   - h-12 w-12: Size 48px x 48px
 *   - border-b-2 border-blue-500: Blue bottom border for spinning effect
 * - Can accept size prop (small/medium/large) for different sizes
 * - Can accept color prop for different colors
 * - Show during API calls, page loads, form submissions
 * 
 * EXAMPLE:
 * {isLoading && <LoadingSpinner />}
 * Shows spinning blue circle while data is loading
 */
