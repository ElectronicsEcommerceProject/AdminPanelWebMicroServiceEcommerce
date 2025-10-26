import { Edit, Trash2, Mail, MessageSquare, Smartphone } from 'lucide-react';

const TemplatesTable = ({ templates, onEdit, onDelete }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Email': return <Mail className="w-4 h-4" />;
      case 'SMS': return <MessageSquare className="w-4 h-4" />;
      case 'In app SMS': return <Smartphone className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  const getTypeBadge = (type) => {
    const colors = {
      'Email': 'bg-blue-100 text-blue-700',
      'SMS': 'bg-green-100 text-green-700',
      'In app SMS': 'bg-purple-100 text-purple-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-3 sm:px-4 py-2 sm:py-3">
        <p className="text-white text-xs sm:text-sm font-medium">
          Templates
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden md:table-cell">Type</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden lg:table-cell">Content</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase hidden sm:table-cell">Created</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs font-semibold text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {templates.map((template) => (
              <tr key={template.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <div className="font-medium text-gray-900 text-sm">{template.name}</div>
                  <div className="md:hidden text-xs text-gray-500 mt-1 flex items-center gap-1">
                    {getTypeIcon(template.type)}
                    {template.type}
                  </div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeBadge(template.type)}`}>
                    {getTypeIcon(template.type)}
                    {template.type}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden lg:table-cell">
                  <div className="text-sm text-gray-600 truncate max-w-xs">{template.content}</div>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-600 hidden sm:table-cell">{template.created}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <button
                      onClick={() => onEdit(template)}
                      className="p-1 sm:p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(template.id)}
                      className="p-1 sm:p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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

export default TemplatesTable;
