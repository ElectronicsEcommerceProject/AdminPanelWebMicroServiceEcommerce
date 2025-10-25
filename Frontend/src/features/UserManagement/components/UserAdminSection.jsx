import { CheckCircle, Shield, FileText, Ban, Power, Key, LogOut, Download, UserCheck } from 'lucide-react';

export default function UserAdminSection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
          <Shield className="w-6 h-6 text-white" />
        </div>
        Admin Actions
      </h3>
      
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Status Control</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white 
                            rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <UserCheck className="w-5 h-5" />
              Activate
            </button>
            <button className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white 
                            rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <Power className="w-5 h-5" />
              Deactivate
            </button>
            <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white 
                            rounded-xl font-bold hover:from-red-600 hover:to-rose-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <Ban className="w-5 h-5" />
              Ban User
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Security Actions</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                            rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <Key className="w-5 h-5" />
              Reset Password
            </button>
            <button className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                            rounded-xl font-bold hover:from-indigo-600 hover:to-blue-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <LogOut className="w-5 h-5" />
              Force Logout
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-lg text-gray-900">Export & Reports</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                            rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Export Order History
            </button>
            <button className="px-6 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white 
                            rounded-xl font-bold hover:from-teal-600 hover:to-green-600 
                            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                            flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Export Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
