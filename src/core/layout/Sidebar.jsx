import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/users', label: 'Users' },
    { path: '/products', label: 'Products' },
    { path: '/orders', label: 'Orders' },
    { path: '/payments', label: 'Payments' },
    { path: '/promotions', label: 'Promotions' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/inventory', label: 'Inventory' },
    { path: '/stores', label: 'Stores' },
    { path: '/notifications', label: 'Notifications' },
    { path: '/cms', label: 'CMS' },
    { path: '/rbac', label: 'RBAC' },
    { path: '/analytics', label: 'Analytics' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold">Admin Panel</div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="block px-4 py-2 hover:bg-gray-700">
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
