import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ArrowLeft, Save, Package, Sparkles, RefreshCw, CheckCircle } from 'lucide-react';
import { useProductCatalog } from '../hooks/useProductCatalog';

const steps = ['Basic Info', 'Pricing', 'Review'];

const ProductCreatePage = () => {
  const navigate = useNavigate();
  const { categories, brands } = useProductCatalog();
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      category_id: '',
      brand_id: '',
      base_price: '',
      target_role: 'both',
    }
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Product created successfully!');
      navigate('/products');
    } catch (error) {
      toast.error('Failed to create product');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Product name is required' }}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                  <input
                    {...field}
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
              )}
            />
            <Controller
              name="slug"
              control={control}
              rules={{ required: 'Slug is required' }}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                  <input
                    {...field}
                    type="text"
                    placeholder="product-slug-name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                  {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>}
                </div>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    {...field}
                    rows={4}
                    placeholder="Enter product description"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  />
                </div>
              )}
            />
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="category_id"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      {...field}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat.id || cat.category_id} value={cat.id || cat.category_id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    {errors.category_id && <p className="mt-1 text-sm text-red-600">{errors.category_id.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="brand_id"
                control={control}
                rules={{ required: 'Brand is required' }}
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                    <select
                      {...field}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select brand</option>
                      {brands.map((brand) => (
                        <option key={brand.id || brand.brand_id} value={brand.id || brand.brand_id}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                    {errors.brand_id && <p className="mt-1 text-sm text-red-600">{errors.brand_id.message}</p>}
                  </div>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="base_price"
                control={control}
                rules={{ required: 'Price is required', min: { value: 0, message: 'Price must be positive' } }}
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Base Price (₹)</label>
                    <input
                      {...field}
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                    {errors.base_price && <p className="mt-1 text-sm text-red-600">{errors.base_price.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="target_role"
                control={control}
                rules={{ required: 'Target role is required' }}
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Role</label>
                    <select
                      {...field}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="customer">Customer</option>
                      <option value="retailer">Retailer</option>
                      <option value="both">Both</option>
                    </select>
                    {errors.target_role && <p className="mt-1 text-sm text-red-600">{errors.target_role.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>
        );
      
      case 2:
        const formData = watch();
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Review Product Details</h3>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Product Name</p>
                  <p className="font-semibold text-gray-900">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Slug</p>
                  <p className="font-semibold text-gray-900">{formData.slug}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Description</p>
                  <p className="font-semibold text-gray-900">{formData.description || 'No description'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Category</p>
                  <p className="font-semibold text-gray-900">
                    {categories.find(cat => (cat.id || cat.category_id) === formData.category_id)?.name || 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Brand</p>
                  <p className="font-semibold text-gray-900">
                    {brands.find(brand => (brand.id || brand.brand_id) === formData.brand_id)?.name || 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Base Price</p>
                  <p className="font-bold text-green-600 text-lg">₹{formData.base_price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Target Role</p>
                  <p className="font-semibold text-gray-900 capitalize">{formData.target_role}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 flex-shrink-0 animate-pulse">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg truncate">Create New Product</h1>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-300 animate-pulse flex-shrink-0" />
                </div>
                <p className="text-blue-100 text-xs sm:text-sm md:text-base mt-0.5 md:mt-1 font-medium hidden sm:block">Add a new product to your catalog</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="flex items-center justify-center gap-1.5 md:gap-2 px-3 sm:px-4 md:px-5 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-white/20 backdrop-blur-xl text-white rounded-lg md:rounded-xl hover:bg-white/30 text-xs sm:text-sm md:text-base border border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto group flex-shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Products</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-blue-100 mb-6">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    index === activeStep
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110'
                      : index < activeStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < activeStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className={`text-xs sm:text-sm mt-2 font-semibold ${
                    index === activeStep ? 'text-blue-600' : index < activeStep ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 rounded transition-all ${
                    index < activeStep ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 sm:p-6 md:p-8 space-y-6">
              {renderStepContent(activeStep)}
            </div>
            
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={handleBack}
                className="px-6 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              
              {activeStep === steps.length - 1 ? (
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5" />
                  {submitting ? 'Creating...' : 'Create Product'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all font-semibold"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreatePage;
