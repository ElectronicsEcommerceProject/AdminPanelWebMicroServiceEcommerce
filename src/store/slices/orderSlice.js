/**
 * PURPOSE: Redux slice for order state management
 * 
 * LOGIC:
 * - Create orderSlice with:
 *   - name: 'order'
 *   - initialState: { orders: [], selectedOrder: null, loading: false, error: null }
 *   - reducers:
 *     - setOrders: Update orders array
 *     - setSelectedOrder: Set currently viewed order
 *     - updateOrderStatus: Update status of specific order
 *     - setLoading: Set loading state
 *     - setError: Set error message
 * - Export actions: setOrders, setSelectedOrder, updateOrderStatus, setLoading, setError
 * - Export reducer as default
 * - Used for caching order data in global state
 * 
 * EXAMPLE:
 * dispatch(setOrders([{id: 1, total: 15999, status: 'pending'}]))
 * dispatch(updateOrderStatus({orderId: 1, status: 'shipped'}))
 */
