import { X } from 'lucide-react';

export default function CouponModal({ showModal, modalMode, formData, setFormData, onClose, onSubmit }) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold">
              {modalMode === 'create' ? 'Create Coupon' : 'Edit Coupon'}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 md:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Coupon Code *</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                  placeholder="e.g., SAVE10"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Summer sale discount"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Discount Type *</label>
                <select
                  value={formData.discountType}
                  onChange={(e) => setFormData({...formData, discountType: e.target.value})}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                >
                  <option>Percentage</option>
                  <option>Fixed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Discount Value *</label>
                <input
                  type="number"
                  value={formData.discountValue}
                  onChange={(e) => setFormData({...formData, discountValue: e.target.value})}
                  placeholder="10"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Valid From *</label>
                <input
                  type="date"
                  value={formData.validFrom}
                  onChange={(e) => setFormData({...formData, validFrom: e.target.value})}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Valid To *</label>
                <input
                  type="date"
                  value={formData.validTo}
                  onChange={(e) => setFormData({...formData, validTo: e.target.value})}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">User Role *</label>
                <select
                  value={formData.userRole}
                  onChange={(e) => setFormData({...formData, userRole: e.target.value})}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                >
                  <option>Both</option>
                  <option>Customer</option>
                  <option>Retailer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Target Type *</label>
                <select
                  value={formData.targetType}
                  onChange={(e) => setFormData({...formData, targetType: e.target.value})}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                >
                  <option>Cart (All Products)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Min Cart Value (₹)</label>
                <input
                  type="number"
                  value={formData.minOrder}
                  onChange={(e) => setFormData({...formData, minOrder: e.target.value})}
                  placeholder="1000"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Max Discount (₹)</label>
                <input
                  type="number"
                  value={formData.maxDiscount}
                  onChange={(e) => setFormData({...formData, maxDiscount: e.target.value})}
                  placeholder="500"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Total Usage Limit</label>
                <input
                  type="number"
                  value={formData.totalUsage}
                  onChange={(e) => setFormData({...formData, totalUsage: e.target.value})}
                  placeholder="100"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Usage Per User</label>
                <input
                  type="number"
                  value={formData.usagePerUser}
                  onChange={(e) => setFormData({...formData, usagePerUser: e.target.value})}
                  placeholder="5"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newUsersOnly}
                  onChange={(e) => setFormData({...formData, newUsersOnly: e.target.checked})}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <span className="text-sm font-bold text-gray-700">New Users Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.checked})}
                  className="w-4 h-4 text-teal-600 rounded"
                />
                <span className="text-sm font-bold text-gray-700">Active</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 md:px-6 py-2.5 md:py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-bold transition-colors text-sm md:text-base"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 font-bold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
            >
              {modalMode === 'create' ? 'Create' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
