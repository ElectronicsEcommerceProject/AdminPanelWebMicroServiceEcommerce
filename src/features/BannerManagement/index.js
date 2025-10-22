import React, { useState, useEffect } from 'react';
import { bannerApi } from './api/bannerApi';
import BannerListPage from './pages/BannerListPage';
import BannerCreatePage from './pages/BannerCreatePage';
import BannerEditPage from './pages/BannerEditPage';

const BannerManagement = () => {
  const [banners, setBanners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    setLoading(true);
    const data = await bannerApi.getAllBanners();
    setBanners(data);
    setLoading(false);
  };

  const handleSaveBanner = async (bannerData) => {
    if (editingBanner) {
      await bannerApi.updateBanner(editingBanner.id, bannerData);
    } else {
      await bannerApi.createBanner(bannerData);
    }
    setShowForm(false);
    setEditingBanner(null);
    loadBanners();
  };

  const handleToggleStatus = async (id) => {
    await bannerApi.toggleBannerStatus(id);
    setBanners(banners.map(b => b.id === id ? { ...b, active: !b.active } : b));
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      await bannerApi.deleteBanner(id);
      setBanners(banners.filter(b => b.id !== id));
    }
  };

  const handleAddNew = () => {
    setEditingBanner(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBanner(null);
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-100 p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {showForm ? (
          editingBanner ? (
            <BannerEditPage
              banner={editingBanner}
              onSaveBanner={handleSaveBanner}
              onCancel={handleCancel}
            />
          ) : (
            <BannerCreatePage
              onSaveBanner={handleSaveBanner}
              onCancel={handleCancel}
            />
          )
        ) : (
          <BannerListPage
            banners={banners}
            onAddNew={handleAddNew}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        )}
      </div>
    </div>
  );
};

export default BannerManagement;
