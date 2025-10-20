/**
 * PURPOSE: Central Axios instance for all API calls
 * 
 * LOGIC:
 * - Import axios library
 * - Create axios instance with configuration:
 *   - baseURL: Read from .env (REACT_APP_API_BASE_URL) or default to http://localhost:3000
 *   - timeout: 10000ms (10 seconds)
 *   - headers: Content-Type: application/json
 * - Export instance to be used across the app
 * - This instance will be enhanced with interceptors in authInterceptor.js
 * 
 * EXAMPLE:
 * const apiService = axios.create({
 *   baseURL: 'http://localhost:3000',
 *   timeout: 10000,
 *   headers: { 'Content-Type': 'application/json' }
 * });
 */
