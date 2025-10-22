import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import AppRoutes from './routes/AppRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// satyam

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
