import React, { useState } from 'react';
import { Upload, Image, X, CheckCircle } from 'lucide-react';

const BannerImageUploader = ({ onImageUpload, currentImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      simulateUpload(file);
    }
  };

  const simulateUpload = (file) => {
    setUploadProgress(0);
    const reader = new FileReader();
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 100);

    reader.onloadend = () => {
      setTimeout(() => {
        onImageUpload(reader.result);
        setUploadProgress(0);
      }, 600);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      simulateUpload(file);
    }
  };

  const removeImage = () => {
    onImageUpload('');
    setUploadProgress(0);
  };

  return (
    <div>
      {/* <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"> */}
      <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
        <Image className="w-4 h-4 text-purple-600" />
        Banner Image
      </label>
      
      {!currentImage ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
            isDragging 
              ? 'border-purple-500 bg-purple-50' 
              : 'border-gray-300 hover:border-purple-400 bg-white'
          }`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <Upload className={`w-12 h-12 mx-auto mb-3 ${isDragging ? 'text-purple-600' : 'text-gray-400'}`} />
          <p className="text-sm font-medium text-gray-700 mb-1">
            Drop your image here, or click to browse
          </p>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
          </p>
          
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-xs text-purple-600 mt-2">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative group">
          <div className="relative overflow-hidden rounded-xl border-2 border-purple-300 shadow-lg">
            <img 
              src={currentImage} 
              alt="Banner" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              Image uploaded
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Click the × button to remove and upload a new image
          </p>
        </div>
      )}
    </div>
  );
};

export default BannerImageUploader;
