/**
 * PURPOSE: Centralized error handling for API calls
 * 
 * LOGIC:
 * - Import showToast from Toast component
 * - Export handleApiError function that accepts error object
 * - Extract error message from:
 *   1. error.response?.data?.message (backend error message)
 *   2. error.message (axios error message)
 *   3. Default: 'An error occurred'
 * - Display error using showToast.error(message)
 * - Return error message for further handling
 * - Can be extended to handle specific error codes (400, 403, 404, 500)
 * 
 * EXAMPLE:
 * handleApiError(error) -> Shows toast: "Product not found" and returns message
 */
