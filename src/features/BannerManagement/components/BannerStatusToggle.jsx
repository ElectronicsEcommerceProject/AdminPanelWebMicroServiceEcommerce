import React from 'react';

const BannerStatusToggle = ({ banner, onToggle }) => {
  return (
    <div className="flex justify-between items-center mt-3 px-2">
      <div>
        <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
          banner.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {banner.active ? 'Active' : 'Inactive'}
        </span>
        <p className="text-sm text-gray-600 mt-1">Created: {banner.createdAt}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle(banner.id)}
          className={`px-3 py-1 rounded text-sm font-medium ${
            banner.active 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {banner.active ? 'Deactivate' : 'Activate'}
        </button>
      </div>
    </div>
  );
};

export default BannerStatusToggle;
