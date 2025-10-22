import React, { useState, useEffect } from 'react';
import { X, Save, Eye, Image, Type, FileText, DollarSign, Tag, Zap, Palette, ArrowLeft } from 'lucide-react';
import BannerImageUploader from './BannerImageUploader';
import BannerPreview from './BannerPreview';
import { backgroundStyles } from '../api/bannerApi';

const BannerForm = ({ initialData = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discount: '',
    buttonText: 'Shop Now',
    backgroundStyle: 'blueToPurple',
    bannerImage: '',
    active: true,
    ...initialData
  });

  const [showPreview, setShowPreview] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (imageUrl) => {
    setFormData(prev => ({ ...prev, bannerImage: imageUrl }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.discount) newErrors.discount = 'Discount is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  {initialData ? 'Edit Banner' : 'Create New Banner'}
                </h1>
                <p className="text-sm text-gray-500">Design your promotional banner</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-all flex items-center gap-2"
              >
                <X size={18} />
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save size={18} />
                {initialData ? 'Update Banner' : 'Create Banner'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Type className="w-5 h-5 text-purple-600" />
                Banner Content
              </h2>
              
              <div className="space-y-5">
                {/* Title Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter banner title"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.title ? 'border-red-400' : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{errors.title}</p>
                    )}
                  </div>
                </div>

                {/* Description Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter banner description"
                      rows="3"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.description ? 'border-red-400' : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{errors.description}</p>
                    )}
                  </div>
                </div>

                {/* Price and Discount */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <DollarSign className="inline w-4 h-4 mr-1 text-green-600" />
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="e.g., ₹1,999"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.price ? 'border-red-400' : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{errors.price}</p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Tag className="inline w-4 h-4 mr-1 text-orange-600" />
                      Discount <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="discount"
                      value={formData.discount}
                      onChange={handleChange}
                      placeholder="e.g., 50% OFF"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.discount ? 'border-red-400' : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                    {errors.discount && (
                      <p className="text-red-500 text-xs mt-1 animate-fadeIn">{errors.discount}</p>
                    )}
                  </div>
                </div>

                {/* Button Text */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    name="buttonText"
                    value={formData.buttonText}
                    onChange={handleChange}
                    placeholder="e.g., Shop Now"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Style Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-600" />
                Banner Style
              </h2>

              {/* Background Style Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Background Style
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(backgroundStyles).map(([key, value]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, backgroundStyle: key }))}
                      className={`relative p-3 rounded-lg border-2 transition-all ${
                        formData.backgroundStyle === key 
                          ? 'border-purple-500 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className={`h-8 ${value} rounded`}></div>
                      {formData.backgroundStyle === key && (
                        <div className="absolute top-1 right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200">
                <BannerImageUploader 
                  onImageUpload={handleImageUpload}
                  currentImage={formData.bannerImage}
                />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  Live Preview
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Auto-updating</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                <BannerPreview banner={formData} isFormPreview={true} />
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-700">
                  <strong>Tip:</strong> Your banner will be displayed exactly as shown above. Make sure all information is correct before saving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
