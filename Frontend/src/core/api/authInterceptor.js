/**
 * PURPOSE: Add authentication token to all API requests and handle 401 errors
 * 
 * LOGIC:
 * - Import apiService from apiService.js
 * - Add REQUEST interceptor:
 *   - Get token from localStorage.getItem('token')
 *   - If token exists, add to headers: Authorization: Bearer {token}
 *   - Return modified config
 *   - Handle request errors
 * - Add RESPONSE interceptor:
 *   - On success, return response as-is
 *   - On error, check if status is 401 (Unauthorized)
 *   - If 401: Remove token from localStorage, redirect to /login
 *   - Return rejected promise with error
 * 
 * EXAMPLE:
 * Request: Add header Authorization: Bearer eyJhbGc...
 * Response 401: localStorage.removeItem('token'), redirect to /login
 */
