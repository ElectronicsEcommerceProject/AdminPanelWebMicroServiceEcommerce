import React, { useState } from 'react';
import { Edit2, Trash2, Power, Eye, Clock, Star, TrendingUp } from 'lucide-react';
import BannerPreview from './BannerPreview';

const SortableBanners = ({ banners, onEdit, onDelete, onToggleStatus }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (id) => {
    setDeletingId(id);
    setTimeout(() => {
      onDelete(id);
      setDeletingId(null);
    }, 300);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
            banner.active ? 'border-green-200' : 'border-gray-200'
          } ${deletingId === banner.id ? 'scale-95 opacity-50' : 'hover:scale-[1.02]'}`}
          onMouseEnter={() => setHoveredId(banner.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm ${
              banner.active 
                ? 'bg-green-500/90 text-white shadow-lg' 
                : 'bg-gray-500/90 text-white shadow-lg'
            }`}>
              <Power className="w-3 h-3" />
              {banner.active ? 'ACTIVE' : 'INACTIVE'}
            </div>
          </div>

          {/* Rank Badge for top 3 */}
          {index < 3 && (
            <div className="absolute top-3 right-3 z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${
                index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
              }`}>
                {index === 0 && <Star className="w-4 h-4" />}
                {index === 1 && '2'}
                {index === 2 && '3'}
              </div>
            </div>
          )}

          {/* Banner Preview */}
          <div className="p-4 pb-0">
            <div className="rounded-lg overflow-hidden shadow-inner">
              <BannerPreview banner={banner} />
            </div>
          </div>

          {/* Banner Info */}
          <div className="p-4 space-y-3">
            {/* Title and Date */}
            <div>
              <h3 className="font-bold text-gray-800 text-lg truncate">{banner.title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <Clock className="w-3 h-3" />
                <span>Created: {banner.createdAt}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between py-2 px-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Performance</span>
              </div>
              <span className="text-sm font-bold text-purple-600">Good</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => onToggleStatus(banner.id)}
                className={`flex-1 px-3 py-2 rounded-lg font-medium text-sm transition-all transform hover:scale-105 ${
                  banner.active 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-md' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-md'
                }`}
              >
                <Power className="w-4 h-4 inline mr-1" />
                {banner.active ? 'Deactivate' : 'Activate'}
              </button>
              
              <button
                onClick={() => onEdit(banner)}
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-110 shadow-md"
                title="Edit"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => handleDelete(banner.id)}
                className="p-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-110 shadow-md"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hover Overlay */}
          {hoveredId === banner.id && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent animate-fadeIn" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SortableBanners;
