/**
 * PURPOSE: Combine all Redux slice reducers into root reducer
 * 
 * LOGIC:
 * - Import combineReducers from Redux Toolkit
 * - Import all slice reducers: auth, user, product, order, notification, ui
 * - Use combineReducers to merge all reducers into single root reducer
 * - Each reducer manages its own slice of state:
 *   - auth: { user, token }
 *   - user: { users, selectedUser, loading }
 *   - product: { products, categories, brands, loading }
 *   - order: { orders, selectedOrder, loading }
 *   - notification: { notifications, unreadCount }
 *   - ui: { sidebarOpen, theme, loading }
 * - Export rootReducer to be used in store configuration
 * 
 * EXAMPLE:
 * State shape: { auth: {...}, user: {...}, product: {...}, order: {...} }
 */
