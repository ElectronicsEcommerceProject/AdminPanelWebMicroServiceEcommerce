import React, { useState } from 'react';
import { ChevronDown, Search, X, Check } from 'lucide-react';

const FilterDropdown = ({ label, options, selected = [], onChange, onClear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white 
                   flex items-center justify-between hover:border-blue-400 
                   transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10
                   focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
      >
        <span className={`font-medium ${selected.length > 0 ? 'text-blue-600' : 'text-gray-700'}`}>
          {selected.length > 0 ? (
            <span className="flex items-center gap-2">
              {label}
              <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 
                             text-white text-xs rounded-full font-bold">
                {selected.length}
              </span>
            </span>
          ) : (
            label
          )}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 
                              ${isOpen ? 'rotate-180' : ''} group-hover:text-blue-500`} />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop with high z-index */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown with highest z-index */}
          <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl 
                        border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-200
                        max-h-96">
            {/* Search Header */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                           text-sm placeholder-gray-400 transition-all duration-200"
                />
              </div>
            </div>
            
            {/* Options List */}
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              <button
                onClick={() => {
                  onClear();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-sm text-red-600 
                         hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 
                         transition-all duration-200 border-b border-gray-100 font-medium
                         flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear {label}
              </button>
              {filteredOptions.map(option => (
                <label
                  key={option}
                  className="flex items-center px-4 py-3 hover:bg-gradient-to-r 
                           hover:from-blue-50 hover:to-indigo-50 cursor-pointer 
                           transition-all duration-200 group border-b border-gray-100 last:border-b-0"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => onChange(option)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 
                             focus:ring-2 focus:ring-blue-500/20"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-blue-600 
                                 transition-colors flex-1">
                    {option}
                  </span>
                  {selected.includes(option) && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default FilterDropdown;
