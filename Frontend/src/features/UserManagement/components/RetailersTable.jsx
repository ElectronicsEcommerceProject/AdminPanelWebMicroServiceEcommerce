import { Eye, CheckCircle } from 'lucide-react';

export default function RetailersTable({ retailers, onViewRetailer, getStatusColor }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/50 animate-in fade-in duration-700">
      <div className="px-6 py-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-b border-gray-200">
        <p className="text-gray-600 font-medium">
          Showing {retailers.length} retailers
        </p>
      </div>
      
      {retailers.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex flex-col items-center justify-center">
            <CheckCircle className="w-16 h-16 text-yellow-500 mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No retailers found</h3>
            <p className="text-gray-600">All retailer accounts have been processed.</p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Business Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">GST</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Requested Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {retailers.map((retailer, index) => (
                <tr 
                  key={retailer.id} 
                  className="hover:bg-orange-50/50 transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl 
                                    flex items-center justify-center text-white font-bold text-sm mr-3 shadow-lg">
                        {retailer.name.charAt(0)}
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{retailer.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{retailer.businessName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{retailer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{retailer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">{retailer.gst}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(retailer.status)}`}>
                      {retailer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{retailer.requestedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => onViewRetailer(retailer)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 
                               text-white rounded-lg hover:from-orange-600 hover:to-red-600 
                               shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
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
      )}
    </div>
  );
}
