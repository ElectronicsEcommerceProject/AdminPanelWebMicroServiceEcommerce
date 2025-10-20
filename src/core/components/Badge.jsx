import React from 'react';

const Badge = ({ status, children }) => {
  const colors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    banned: 'bg-red-100 text-red-800',
  };

  return <span className={`px-2 py-1 rounded text-xs ${colors[status] || colors.active}`}>{children}</span>;
};

export default Badge;
