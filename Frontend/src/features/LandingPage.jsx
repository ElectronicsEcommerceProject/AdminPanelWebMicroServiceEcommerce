import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const routes = [
    { path: '/dashboard', name: 'Dashboard', icon: '📊', description: 'View analytics and insights' },
    { path: '/banners', name: 'Banners', icon: '🎨', description: 'Manage banner content' },
    { path: '/products', name: 'Product Management', icon: '📦', description: 'Create and manage products efficiently' },
  ];

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="header-section">
          <h1 className="main-title">Admin Panel</h1>
          <p className="subtitle">Electronics Ecommerce Management System</p>
        </div>

        <div className="routes-grid">
          {routes.map((route) => (
            <button
              key={route.path}
              className="route-card"
              onClick={() => navigate(route.path)}
            >
              <span className="route-icon">{route.icon}</span>
              <h3 className="route-name">{route.name}</h3>
              <p className="route-description">{route.description}</p>
            </button>
          ))}
        </div>

        <footer className="landing-footer">
          <p>Running on port 5173</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
