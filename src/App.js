/**
 * PURPOSE: Main App component that sets up all providers and routing
 * 
 * LOGIC:
 * - Import necessary providers: Redux Provider, React Query, React Router, AuthProvider
 * - Import ToastContainer for notifications
 * - Import Redux store and AppRoutes
 * - Create QueryClient instance for React Query with default options
 * - Wrap entire app in multiple providers in correct order:
 *   1. Redux Provider (store) - for global state management
 *   2. QueryClientProvider - for API data fetching and caching
 *   3. BrowserRouter - for routing
 *   4. AuthProvider - for authentication context
 * - Render AppRoutes component for all route definitions
 * - Add ToastContainer at top-right with 3 second auto-close
 * 
 * EXAMPLE:
 * <Provider store={store}>
 *   <QueryClientProvider client={queryClient}>
 *     <BrowserRouter>
 *       <AuthProvider>
 *         <AppRoutes />
 *         <ToastContainer position="top-right" autoClose={3000} />
 *       </AuthProvider>
 *     </BrowserRouter>
 *   </QueryClientProvider>
 * </Provider>
 */
