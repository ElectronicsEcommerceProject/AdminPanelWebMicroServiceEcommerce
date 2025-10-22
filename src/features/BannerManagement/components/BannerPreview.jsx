import React from 'react';
import { backgroundStyles } from '../api/bannerApi';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const BannerPreview = ({ banner, isFormPreview = false }) => {
  const bgClass = backgroundStyles[banner.backgroundStyle] || backgroundStyles.blueToPurple;

  return (
    <div 
      className={`${bgClass} rounded-xl relative overflow-hidden ${isFormPreview ? 'p-8' : 'p-6'} h-full flex items-center shadow-2xl`}
      style={{ aspectRatio: isFormPreview ? '16/9' : '3/2' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      
      <div className="flex justify-between items-center w-full h-full gap-6 relative z-10">
        {/* Left side - Image */}
        <div className="flex-shrink-0 w-2/5 flex justify-center items-center">
          {banner.bannerImage ? (
            <div className="relative group">
              <img 
                src={banner.bannerImage} 
                alt="Banner" 
                className={`object-cover rounded-xl shadow-2xl w-full ${
                  isFormPreview ? 'max-w-[200px] max-h-[200px]' : 'max-w-[140px] max-h-[140px]'
                } transform group-hover:scale-105 transition-transform duration-300`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ) : (
            <div className={`${isFormPreview ? 'w-48 h-32' : 'w-32 h-24'} bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30`}>
              <ShoppingBag className="w-8 h-8 text-white opacity-50" />
            </div>
          )}
        </div>
        
        {/* Right side - Content */}
        <div className="text-white flex-1 min-w-0">
          <div className="space-y-3">
            {/* Discount Badge */}
            <div className="inline-block">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                {banner.discount || '50'}% OFF
              </div>
            </div>
            
            {/* Title - Fixed text wrapping */}
            <div className={`font-bold leading-tight break-words overflow-hidden ${
              isFormPreview ? 'text-3xl' : 'text-xl'
            }`}>
              {banner.title || 'Amazing Deals Await'}
            </div>
            
            {/* Description - Fixed text wrapping */}
            <div className={`opacity-90 leading-relaxed break-words overflow-hidden ${
              isFormPreview ? 'text-base' : 'text-sm'
            }`}>
              {banner.description || 'Discover incredible offers on premium products'}
            </div>
            
            {/* Price - Fixed text wrapping */}
            <div className={`font-bold break-words overflow-hidden ${
              isFormPreview ? 'text-2xl' : 'text-lg'
            }`}>
              ₹{banner.price || '1,999'}
            </div>
            
            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
              {banner.buttonText || 'Shop Now'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPreview;
