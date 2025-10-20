/**
 * PURPOSE: Redux slice for notification state management
 * 
 * LOGIC:
 * - Create notificationSlice with:
 *   - name: 'notification'
 *   - initialState: { notifications: [], unreadCount: 0 }
 *   - reducers:
 *     - setNotifications: Update notifications array
 *     - addNotification: Add new notification to array
 *     - markAsRead: Mark notification as read, decrement unreadCount
 *     - clearNotifications: Clear all notifications
 * - Export actions: setNotifications, addNotification, markAsRead, clearNotifications
 * - Export reducer as default
 * - Used for managing admin notifications (new orders, low stock alerts, etc.)
 * 
 * EXAMPLE:
 * dispatch(setNotifications([{id: 1, message: 'New order', read: false}]))
 * dispatch(markAsRead(1)) // Mark notification 1 as read
 */
