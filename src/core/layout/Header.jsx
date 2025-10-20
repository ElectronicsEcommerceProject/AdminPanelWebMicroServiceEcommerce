import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome, Admin</h1>
      <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </header>
  );
};

export default Header;
