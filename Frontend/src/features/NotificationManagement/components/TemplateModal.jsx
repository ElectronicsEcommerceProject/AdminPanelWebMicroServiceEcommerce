import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TemplateModal({ isOpen, onClose, template, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Email',
    content: '',
  });

  useEffect(() => {
    if (template) {
      setFormData({
        name: template.name,
        type: template.type,
        content: template.content,
      });
    } else {
      setFormData({ name: '', type: 'Email', content: '' });
    }
  }, [template]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-bold">{template ? 'Edit Template' : 'Create Template'}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group">
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="In app SMS">In app SMS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                required
              />
            </div>
          </div>

          <div className="px-4 md:px-6 py-4 md:py-6 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row gap-3 flex-shrink-0 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold w-full sm:flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:flex-1"
            >
              {template ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
