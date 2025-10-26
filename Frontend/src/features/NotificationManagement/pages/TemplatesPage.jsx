import { useState } from 'react';
import { Plus, FileText } from 'lucide-react';
import NotificationHeader from '../components/NotificationHeader';
import NotificationTabs from '../components/NotificationTabs';
import TemplatesTable from '../components/TemplatesTable';
import Pagination from '../components/Pagination';
import TemplateModal from '../components/TemplateModal';
import { TEMPLATES_DATA } from '../api/notificationMock';

export default function TemplatesPage() {
  const [templates, setTemplates] = useState(TEMPLATES_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(templates.length / itemsPerPage);

  const handleEdit = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      setTemplates(templates.filter(t => t.id !== id));
    }
  };

  const handleSave = (formData) => {
    if (selectedTemplate) {
      setTemplates(templates.map(t => t.id === selectedTemplate.id ? { ...t, ...formData } : t));
    } else {
      const newTemplate = {
        id: templates.length + 1,
        ...formData,
        created: new Date().toISOString().split('T')[0],
      };
      setTemplates([newTemplate, ...templates]);
    }
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      <NotificationHeader />
      <NotificationTabs />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Notification Templates</h2>
              <p className="text-xs sm:text-sm text-gray-600">Create and manage notification templates</p>
            </div>
          </div>
          <button
            onClick={() => {
              setSelectedTemplate(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-sm sm:text-base"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Create Template</span>
            <span className="sm:hidden">Create</span>
          </button>
        </div>

        <TemplatesTable
          templates={templates}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={templates.length}
        />
      </div>

      <TemplateModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTemplate(null);
        }}
        template={selectedTemplate}
        onSave={handleSave}
      />
    </div>
  );
}
