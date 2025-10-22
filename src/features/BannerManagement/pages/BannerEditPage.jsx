import React from 'react';
import BannerForm from '../components/BannerForm';

const BannerEditPage = ({ banner, onSaveBanner, onCancel }) => {
  return (
    <div>
      <BannerForm 
        initialData={banner}
        onSave={onSaveBanner}
        onCancel={onCancel}
      />
    </div>
  );
};

export default BannerEditPage;
