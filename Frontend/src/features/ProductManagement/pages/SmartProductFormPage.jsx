import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmartProductForm } from '../hooks/useSmartProductForm';
import SmartStepForm from '../components/ui/SmartStepForm';
import { CheckCircle } from 'lucide-react';

const SmartProductFormPage = () => {
  const location = useLocation();
  const {
    formState,
    completedSteps,
    loading,
    dashboardData,
    updateField,
    getNextStep,
    submitForm,
  } = useSmartProductForm(location.state);

  const getInitialStep = () => {
    const entityTypeMap = {
      'category': 'category',
      'brand': 'brand',
      'product': 'product',
      'variant': 'variant',
      'attribute-value': 'attributeValue',
    };
    return entityTypeMap[location.state?.entityType] || getNextStep();
  };

  const [currentStep, setCurrentStep] = useState(getInitialStep());

  const steps = [
    { id: 'category', label: 'Category', order: 1 },
    { id: 'brand', label: 'Brand', order: 2 },
    { id: 'product', label: 'Product', order: 3 },
    { id: 'variant', label: 'Variant', order: 4 },
    { id: 'attributeValue', label: 'Attributes', order: 5 },
    { id: 'review', label: 'Review', order: 6 },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const handleNext = () => {
    const stepOrder = ['category', 'brand', 'product', 'variant', 'attributeValue', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    const nextStep = stepOrder[currentIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    const stepOrder = ['category', 'brand', 'product', 'variant', 'attributeValue', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    await submitForm();
  };

  const stepConfigs = {
    category: {
      title: 'Select or Create Category',
      fields: [
        { name: 'name', label: 'Category Name', type: 'text', required: true, placeholder: 'e.g., Electronics' },
        { name: 'slug', label: 'Slug', type: 'text', required: true, readOnly: true },
        {
          name: 'target_role',
          label: 'Target Role',
          type: 'select',
          required: true,
          options: [
            { id: 'customer', name: 'Customer' },
            { id: 'retailer', name: 'Retailer' },
            { id: 'both', name: 'Both' },
          ],
        },
      ],
      existingOptions: dashboardData?.categories || [],
    },
    brand: {
      title: 'Select or Create Brand',
      fields: [
        { name: 'name', label: 'Brand Name', type: 'text', required: true, placeholder: 'e.g., Apple' },
        { name: 'slug', label: 'Slug', type: 'text', required: true, readOnly: true },
      ],
      existingOptions: dashboardData?.brands || [],
    },
    product: {
      title: 'Create Product',
      fields: [
        { name: 'name', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g., iPhone 15' },
        { name: 'slug', label: 'Slug', type: 'text', required: true, readOnly: true },
        { name: 'base_price', label: 'Base Price', type: 'number', required: true, min: 0, placeholder: '999' },
        { name: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Product description' },
        { name: 'average_rating', label: 'Rating (1-5)', type: 'number', required: false, min: 1, max: 5, step: 0.1 },
        {
          name: 'media_type',
          label: 'Product Media Type',
          type: 'select',
          required: true,
          options: [
            { id: 'image', name: 'Image' },
            { id: 'video', name: 'Video' },
          ],
        },
        { name: 'media_file', label: 'Upload Product Media', type: 'file', required: true },
      ],
      existingOptions: [],
    },
    variant: {
      title: 'Create Product Variant',
      fields: [
        { name: 'sku', label: 'Variant Name/SKU', type: 'text', required: true, placeholder: 'e.g., IPH15-128-BLK' },
        { name: 'price', label: 'Price', type: 'number', required: true, min: 0 },
        { name: 'description', label: 'Description', type: 'textarea', required: false },
        { name: 'stock_quantity', label: 'Stock Quantity', type: 'number', required: true, min: 0 },
        { name: 'min_retailer_quantity', label: 'Min Order Quantity', type: 'number', required: false, min: 0 },
        { name: 'discount_quantity', label: 'Discount Quantity', type: 'number', required: false, min: 0 },
        { name: 'discount_percentage', label: 'Discount %', type: 'number', required: false, min: 0, max: 100 },
        { name: 'bulk_discount_quantity', label: 'Bulk Discount Quantity', type: 'number', required: false, min: 0 },
        { name: 'bulk_discount_percentage', label: 'Bulk Discount %', type: 'number', required: false, min: 0, max: 100 },
        {
          name: 'variant_media_type',
          label: 'Media Type',
          type: 'select',
          required: true,
          options: [
            { id: 'image', name: 'Image' },
            { id: 'video', name: 'Video' },
          ],
        },
        { name: 'variant_media_file', label: 'Upload Media', type: 'file', required: true },
      ],
      existingOptions: [],
    },
    attributeValue: {
      title: 'Add Product Attributes',
      fields: [
        { name: 'attribute_name', label: 'Attribute Name', type: 'text', required: true, placeholder: 'e.g., Color, Storage' },
        {
          name: 'type',
          label: 'Type',
          type: 'select',
          required: true,
          options: [
            { id: 'string', name: 'String' },
            { id: 'select', name: 'Select' },
            { id: 'integer', name: 'Integer' },
            { id: 'float', name: 'Float' },
            { id: 'enum', name: 'Enum' },
          ],
        },
        { name: 'value', label: 'Value', type: 'text', required: true, placeholder: 'e.g., Black, 128GB' },
      ],
      existingOptions: [],
    },
  };

  if (currentStep === 'review') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold cursor-not-allowed ${
                      step.id === currentStep
                        ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                        : completedSteps[step.id]
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {completedSteps[step.id] ? <CheckCircle className="w-6 h-6" /> : idx + 1}
                  </div>
                  <span className="text-xs mt-1 hidden sm:block">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-1 ${completedSteps[step.id] ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Review & Submit</h2>

            {Object.entries(formState).map(([key, value]) => {
              if (!value || key === 'attributeValue') return null;
              
              return (
                <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-700 mb-2 capitalize">{key}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(value)
                      .filter(([k]) => !k.includes('_file') && !k.includes('_id') && k !== 'id')
                      .map(([k, v]) => (
                        <div key={k}>
                          <span className="font-medium text-gray-600">{k.replace(/_/g, ' ')}:</span>{' '}
                          <span className="text-gray-900">{v?.toString() || 'N/A'}</span>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Product'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const config = stepConfigs[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold cursor-not-allowed ${
                    step.id === currentStep
                      ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                      : completedSteps[step.id]
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {completedSteps[step.id] ? <CheckCircle className="w-6 h-6" /> : idx + 1}
                </div>
                <span className="text-xs mt-1 hidden sm:block">{step.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-1 ${completedSteps[step.id] ? 'bg-green-500' : 'bg-gray-300'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {config && (
          <SmartStepForm
            title={config.title}
            fields={config.fields}
            existingOptions={config.existingOptions}
            value={formState[currentStep]}
            onChange={(data) => updateField(currentStep, data)}
            onNext={handleNext}
            onBack={handleBack}
            canGoBack={currentStepIndex > 0}
            isLastStep={currentStepIndex === steps.length - 2}
          />
        )}
      </div>
    </div>
  );
};

export default SmartProductFormPage;
