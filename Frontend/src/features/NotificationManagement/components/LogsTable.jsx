import { CheckCircle, XCircle, Mail, MessageSquare, Smartphone } from 'lucide-react';

const LogsTable = ({ logs }) => {
  const getChannelIcon = (channel) => {
    switch (channel) {
      case 'Email': return <Mail className="w-4 h-4" />;
      case 'SMS': return <MessageSquare className="w-4 h-4" />;
      case 'In app SMS': return <Smartphone className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  const getChannelBadge = (channel) => {
    const colors = {
      'Email': 'bg-blue-100 text-blue-700',
      'SMS': 'bg-green-100 text-green-700',
      'In app SMS': 'bg-purple-100 text-purple-700',
    };
    return colors[channel] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-3 sm:px-4 py-2 sm:py-3">
        <p className="text-white text-xs sm:text-sm font-medium">
          Notification Logs
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase">Title</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden lg:table-cell">Message</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden md:table-cell">Channel</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden xl:table-cell">Audience</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden sm:table-cell">Date & Time</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs font-semibold text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <div className="font-medium text-gray-900 text-sm">{log.title}</div>
                  <div className="sm:hidden text-xs text-gray-500 mt-1">{log.dateTime}</div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden lg:table-cell">
                  <div className="text-sm text-gray-600 truncate max-w-xs">{log.message}</div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getChannelBadge(log.channel)}`}>
                    {getChannelIcon(log.channel)}
                    {log.channel}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden xl:table-cell">{log.audience}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden sm:table-cell">{log.dateTime}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <div className="flex justify-center">
                    {log.status === 'Sent' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        <CheckCircle className="w-3 h-3" />
                        <span className="hidden sm:inline">Sent</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        <XCircle className="w-3 h-3" />
                        <span className="hidden sm:inline">Failed</span>
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTable;
