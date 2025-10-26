import { Plus, List, BarChart3 } from 'lucide-react';

export default function CouponTabs({ activeTab, setActiveTab, onCreateCoupon }) {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-teal-100 p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('coupons')}
              className={`group flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ${
                activeTab === 'coupons'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-teal-300'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 border-2 border-teal-200'
              }`}
            >
              <List className={`w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:scale-110 ${
                activeTab === 'coupons' ? 'text-white' : 'text-teal-600'
              }`} />
              <span>All Coupons</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`group flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ${
                activeTab === 'analytics'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-teal-300'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 border-2 border-teal-200'
              }`}
            >
              <BarChart3 className={`w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:scale-110 ${
                activeTab === 'analytics' ? 'text-white' : 'text-teal-600'
              }`} />
              <span>Analytics</span>
            </button>
          </div>
          <button
            onClick={onCreateCoupon}
            className="group flex items-center justify-center gap-2 px-5 md:px-7 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-2xl shadow-emerald-300 transform hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base"
          >
            <Plus className="w-4 md:w-5 h-4 md:h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>Create Coupon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
