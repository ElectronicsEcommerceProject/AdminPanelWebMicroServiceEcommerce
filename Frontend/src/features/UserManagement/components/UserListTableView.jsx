import { Eye, CheckCircle, Mail, ShoppingBag, DollarSign } from 'lucide-react';

export default function UserListTableView({ users, onViewUser }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/50">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={user.id} 
                  className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 
                           transition-all duration-300 group">
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 
                                  rounded-xl flex items-center justify-center text-white font-bold text-lg 
                                  mr-4 shadow-lg group-hover:scale-110 transition-transform">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">ID: #{user.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm
                    ${user.role === 'Customer' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700' :
                      user.role === 'Retailer' ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700' :
                      'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 w-fit
                    ${user.status === 'Active' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/30' :
                      user.status === 'Pending' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-yellow-500/30' :
                      user.status === 'Banned' ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-red-500/30' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-500/30'} shadow-lg`}>
                    {user.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-900">{user.orders}</span>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-bold text-gray-900">₹{user.revenue.toLocaleString()}</span>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <button
                    onClick={() => onViewUser(user)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 
                             text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 
                             transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
