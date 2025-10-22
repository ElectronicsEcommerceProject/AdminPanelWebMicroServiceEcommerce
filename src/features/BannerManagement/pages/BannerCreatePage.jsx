import React from 'react';
import BannerForm from '../components/BannerForm';

const BannerCreatePage = ({ onSaveBanner, onCancel }) => {
  return (
    <div>
      <BannerForm 
        onSave={onSaveBanner}
        onCancel={onCancel}
      />
    </div>
  );
};

export default BannerCreatePage;
