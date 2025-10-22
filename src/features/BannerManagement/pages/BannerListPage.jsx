import React, { useState } from 'react';
import { Plus, Sparkles, Filter, Search, Grid, List, TrendingUp, Award } from 'lucide-react';
import SortableBanners from '../components/SortableBanners';

const BannerListPage = ({ 
  banners, 
  onAddNew, 
  onEdit, 
  onDelete, 
  onToggleStatus 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filteredBanners = banners.filter(banner => {
    const matchesSearch = banner.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         banner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'active' && banner.active) ||
                         (filterStatus === 'inactive' && !banner.active);
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: banners.length,
    active: banners.filter(b => b.active).length,
    inactive: banners.filter(b => !b.active).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  Banner Management
                  <Award className="w-6 h-6 text-yellow-500" />
                </h1>
                <p className="text-gray-600 mt-1">Create and manage your promotional banners</p>
              </div>
            </div>
            
            {banners.length > 0 && (
              <button
                onClick={onAddNew}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                Create New Banner
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {banners.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-xl border-2 border-dashed border-purple-300">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-12 h-12 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Banners Yet</h2>
              <p className="text-gray-500 text-lg mb-6">Create your first banner to get started</p>
              <button
                onClick={onAddNew}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
              >
                <Plus className="w-5 h-5 inline mr-2" />
                Create Your First Banner
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Total Banners</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.total}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Grid className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-90">Active Banners</p>
                    <p className="text-3xl font-bold mt-1">{stats.active}</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-90">Inactive Banners</p>
                    <p className="text-3xl font-bold mt-1">{stats.inactive}</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Grid className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search banners..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                  {['all', 'active', 'inactive'].map(status => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                        filterStatus === status
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Banners Grid */}
            <SortableBanners
              banners={filteredBanners}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BannerListPage;
