import { X, User, Mail, Shield, Calendar, CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';

export default function RetailerStatusModal({ showModal, selectedRetailer, onClose, onStatusChange, getStatusColor }) {
  if (!showModal || !selectedRetailer) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedRetailer.name}</h2>
                <p className="text-orange-100 text-sm mt-1">{selectedRetailer.businessName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-8 space-y-8">
            {/* Retailer Information */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                <User className="w-6 h-6 text-orange-500" />
                Retailer Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Email
                  </label>
                  <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {selectedRetailer.email}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Phone
                  </label>
                  <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50">
                    {selectedRetailer.phone}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    GST Number
                  </label>
                  <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    {selectedRetailer.gst}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Requested Date
                  </label>
                  <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {selectedRetailer.requestedDate}
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Business Address
                </label>
                <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-sm text-gray-800 font-medium border border-gray-200/50">
                  {selectedRetailer.address}
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-3">Current Status</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={`px-4 py-2 rounded-full font-semibold border ${getStatusColor(selectedRetailer.status)}`}>
                  {selectedRetailer.status}
                </span>
              </div>
            </div>

            {/* Status Actions */}
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Change Status
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => onStatusChange('Active')}
                  disabled={selectedRetailer.status === 'Active'}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 
                           text-white rounded-xl hover:from-green-600 hover:to-emerald-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve
                </button>
                <button
                  onClick={() => onStatusChange('Inactive')}
                  disabled={selectedRetailer.status === 'Inactive'}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-500 to-slate-600 
                           text-white rounded-xl hover:from-gray-600 hover:to-slate-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <Clock className="w-5 h-5" />
                  Set Inactive
                </button>
                <button
                  onClick={() => onStatusChange('Pending')}
                  disabled={selectedRetailer.status === 'Pending'}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 
                           text-white rounded-xl hover:from-yellow-600 hover:to-orange-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <AlertCircle className="w-5 h-5" />
                  Set Pending
                </button>
                <button
                  onClick={() => onStatusChange('Banned')}
                  disabled={selectedRetailer.status === 'Banned'}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-500 to-rose-600 
                           text-white rounded-xl hover:from-red-600 hover:to-rose-700 
                           disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold
                           disabled:transform-none disabled:shadow-none"
                >
                  <XCircle className="w-5 h-5" />
                  Ban Retailer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 rounded-b-2xl flex justify-between items-center flex-shrink-0 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <button
            onClick={onClose}
            className="px-8 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl 
                     hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
