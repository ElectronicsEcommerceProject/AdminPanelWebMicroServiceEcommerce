/**
 * PURPOSE: Redux slice for UI state management
 * 
 * LOGIC:
 * - Create uiSlice with:
 *   - name: 'ui'
 *   - initialState: { sidebarOpen: true, modalOpen: false, theme: 'light', loading: false }
 *   - reducers:
 *     - toggleSidebar: Toggle sidebar open/closed state
 *     - toggleModal: Toggle modal open/closed state
 *     - setTheme: Set theme (light/dark)
 *     - setLoading: Set global loading state
 * - Export actions: toggleSidebar, toggleModal, setTheme, setLoading
 * - Export reducer as default
 * - Used for managing UI-related state across the app
 * 
 * EXAMPLE:
 * dispatch(toggleSidebar()) // Opens/closes sidebar
 * dispatch(setTheme('dark')) // Switches to dark theme
 */
