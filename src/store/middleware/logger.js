/**
 * PURPOSE: Redux middleware for logging actions and state changes
 * 
 * LOGIC:
 * - Create middleware function with store, next, action parameters
 * - Before action: Log action being dispatched with console.log
 * - Call next(action) to pass action to next middleware/reducer
 * - After action: Log new state with store.getState()
 * - Return result
 * - Used only in development mode for debugging
 * - Helps track state changes and action flow
 * - Can be enhanced to log timestamps, action duration
 * 
 * EXAMPLE:
 * Dispatch action: { type: 'auth/setCredentials', payload: {...} }
 * Console: "Dispatching: { type: 'auth/setCredentials', ... }"
 * Console: "Next State: { auth: {...}, ui: {...} }"
 */
