/**
 * PURPOSE: Redux store configuration
 * 
 * LOGIC:
 * - Import configureStore from Redux Toolkit
 * - Import all slice reducers: auth, user, product, order, notification, ui
 * - Create store using configureStore with:
 *   - reducer object containing all slices
 *   - middleware: Add logger middleware in development mode
 *   - devTools: Enable Redux DevTools in development
 * - Export store to be used in App.js Provider
 * - Store manages global state for:
 *   - Authentication (user, token)
 *   - UI state (sidebar open/closed, theme)
 *   - Feature-specific state (users, products, orders, etc.)
 * 
 * EXAMPLE:
 * const store = configureStore({ reducer: { auth: authReducer, ui: uiReducer } });
 * <Provider store={store}><App /></Provider>
 */
