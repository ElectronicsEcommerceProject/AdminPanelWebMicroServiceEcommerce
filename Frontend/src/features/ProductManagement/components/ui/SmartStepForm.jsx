import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const SmartStepForm = ({
  title,
  fields,
  existingOptions = [],
  value,
  onChange,
  onNext,
  onBack,
  canGoBack,
  isLastStep,
}) => {
  const [mode, setMode] = useState(existingOptions.length > 0 ? 'select' : 'create');
  const [localData, setLocalData] = useState(value || {});
  const [selectedExisting, setSelectedExisting] = useState(null);

  useEffect(() => {
    if (value && Object.keys(value).length > 0) {
      setLocalData(value);
      if (value.id && existingOptions.length > 0) {
        setMode('select');
        setSelectedExisting(value);
      } else {
        setMode('create');
      }
    } else {
      setLocalData({});
      setSelectedExisting(null);
    }
  }, [value, existingOptions.length]);

  useEffect(() => {
    if (existingOptions.length === 0 && mode !== 'create') {
      setMode('create');
    }
  }, [existingOptions.length, mode]);

  const handleFieldChange = (fieldName, fieldValue) => {
    setLocalData(prev => {
      const updated = { ...prev, [fieldName]: fieldValue };
      
      if (fieldName === 'name') {
        updated.slug = fieldValue.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      
      onChange(updated);
      return updated;
    });
  };

  const handleSelectExisting = (item) => {
    setSelectedExisting(item);
    setLocalData(item);
    onChange(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mode === 'select' && selectedExisting) {
      onChange(selectedExisting);
    } else {
      onChange(localData);
    }
    
    onNext();
  };

  const isValid = () => {
    if (mode === 'select') {
      return !!selectedExisting;
    }
    
    return fields
      .filter(f => f.required)
      .every(f => {
        const val = localData[f.name];
        if (f.type === 'file') {
          return val instanceof File || (val && typeof val === 'string');
        }
        return val?.toString().trim();
      });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h2>

      {existingOptions.length > 0 && (
        <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
          <button
            type="button"
            onClick={() => setMode('select')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              mode === 'select'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Use Existing
          </button>
          <button
            type="button"
            onClick={() => setMode('create')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              mode === 'create'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Create New
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'select' && existingOptions.length > 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select from existing:
            </label>
            <div className="max-h-64 overflow-y-auto border-2 border-gray-200 rounded-lg">
              {existingOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleSelectExisting(option)}
                  className={`p-3 cursor-pointer border-b last:border-b-0 transition-colors ${
                    selectedExisting?.id === option.id
                      ? 'bg-blue-50 border-l-4 border-l-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900">{option.name || option.sku}</div>
                  {option.slug && (
                    <div className="text-sm text-gray-500">{option.slug}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {mode === 'create' && (
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {field.type === 'select' ? (
                  <select
                    value={localData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required={field.required}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'file' ? (
                  <div>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={(e) => handleFieldChange(field.name, e.target.files[0])}
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required={field.required && !localData[field.name]}
                    />
                    {localData[field.name] && (
                      <p className="text-xs text-gray-500 mt-1">
                        Selected: {localData[field.name] instanceof File ? localData[field.name].name : 'File uploaded'}
                      </p>
                    )}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={localData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    rows={3}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={localData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    min={field.type === 'number' ? field.min || 0 : undefined}
                    max={field.type === 'number' ? field.max : undefined}
                    step={field.type === 'number' ? field.step || 'any' : undefined}
                    readOnly={field.readOnly}
                    className={`w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${field.readOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {canGoBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={!isValid()}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
              isValid()
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLastStep ? (
              <>
                <Check className="w-4 h-4" />
                Complete
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SmartStepForm;
