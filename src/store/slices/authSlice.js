/**
 * PURPOSE: Re-export auth slice from core/auth
 * 
 * LOGIC:
 * - Auth slice is defined in core/auth/authSlice.js
 * - This file re-exports it for consistency with other slices
 * - Actual implementation in core/auth/authSlice.js contains:
 *   - initialState: { user: null, token: null }
 *   - reducers: setCredentials, clearCredentials
 * 
 * EXAMPLE:
 * See core/auth/authSlice.js for implementation
 */
