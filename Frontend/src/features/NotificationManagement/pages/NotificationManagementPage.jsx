import { useState } from 'react';
import { TEMPLATES_DATA, NOTIFICATION_LOGS } from '../api/notificationMock';
import NotificationHeader from '../components/NotificationHeader';
import NotificationTabs from '../components/NotificationTabs';
import NotificationSearch from '../components/NotificationSearch';
import TemplatesTable from '../components/TemplatesTable';
import LogsTable from '../components/LogsTable';
import Pagination from '../components/Pagination';
import TemplateModal from '../components/TemplateModal';
import { Send, Mail, MessageSquare, Smartphone, Users, FileText, History, Plus } from 'lucide-react';

export default function NotificationManagementPage() {
  const [activeTab, setActiveTab] = useState('templates');
  const [templates, setTemplates] = useState(TEMPLATES_DATA);
  const [logs] = useState(NOTIFICATION_LOGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const itemsPerPage = 10;

  const [sendFormData, setSendFormData] = useState({
    title: '',
    message: '',
    channel: 'In app SMS',
    audience: 'Specific Users',
  });

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLogs = logs.filter(log =>
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = activeTab === 'templates' 
    ? Math.ceil(filteredTemplates.length / itemsPerPage)
    : Math.ceil(filteredLogs.length / itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery('');
  };

  const handleCreateTemplate = () => {
    setSelectedTemplate(null);
    setIsModalOpen(true);
  };

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

  const handleSendSubmit = (e) => {
    e.preventDefault();
    alert('Notification sent successfully!');
    setSendFormData({ title: '', message: '', channel: 'In app SMS', audience: 'Specific Users' });
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case 'Email': return <Mail className="w-5 h-5" />;
      case 'SMS': return <MessageSquare className="w-5 h-5" />;
      case 'In app SMS': return <Smartphone className="w-5 h-5" />;
      default: return <Send className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      <NotificationHeader />
      
      <div className="max-w-[1600px] mx-auto">
        <NotificationTabs 
          activeTab={activeTab} 
          setActiveTab={handleTabChange}
        />
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        {activeTab === 'templates' ? (
          <>
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-amber-100">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">Notification Templates</h2>
                  <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Create and manage notification templates</p>
                </div>
              </div>
              <button
                onClick={handleCreateTemplate}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg sm:rounded-xl hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-sm sm:text-base flex-shrink-0"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Create Template</span>
                <span className="sm:hidden">Create</span>
              </button>
            </div>
            <NotificationSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              placeholder="Search templates by name or content..."
            />
            <TemplatesTable
              templates={paginatedTemplates}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            {totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredTemplates.length}
              />
            )}
          </>
        ) : activeTab === 'logs' ? (
          <>
            <div className="mb-4 sm:mb-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-amber-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <History className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">Notification Logs</h2>
                  <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">View all sent notification history</p>
                </div>
              </div>
            </div>
            <NotificationSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              placeholder="Search logs by title or message..."
            />
            <LogsTable
              logs={paginatedLogs}
            />
            {totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredLogs.length}
              />
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 px-4 sm:px-6 py-4 sm:py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    {getChannelIcon(sendFormData.channel)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Compose Notification</h3>
                    <p className="text-xs sm:text-sm text-amber-100">Fill in the details below</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSendSubmit} className="p-4 sm:p-6 lg:p-8 space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Notification Title</label>
                  <input
                    type="text"
                    value={sendFormData.title}
                    onChange={(e) => setSendFormData({ ...sendFormData, title: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="Enter a catchy title..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message Content</label>
                  <textarea
                    value={sendFormData.message}
                    onChange={(e) => setSendFormData({ ...sendFormData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none transition-all"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      {getChannelIcon(sendFormData.channel)}
                      Delivery Channel
                    </label>
                    <select
                      value={sendFormData.channel}
                      onChange={(e) => setSendFormData({ ...sendFormData, channel: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    >
                      <option value="Email">Email</option>
                      <option value="SMS">SMS</option>
                      <option value="In app SMS">In-App SMS</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Target Audience
                    </label>
                    <select
                      value={sendFormData.audience}
                      onChange={(e) => setSendFormData({ ...sendFormData, audience: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    >
                      <option value="All Users">All Users</option>
                      <option value="All Customers">All Customers</option>
                      <option value="All Retailers">All Retailers</option>
                      <option value="Specific Users">Specific Users</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Preview</h4>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-bold text-gray-900 mb-1">{sendFormData.title || 'Your title here...'}</p>
                    <p className="text-sm text-gray-600">{sendFormData.message || 'Your message will appear here...'}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">{sendFormData.channel}</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">{sendFormData.audience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setSendFormData({ title: '', message: '', channel: 'In app SMS', audience: 'Specific Users' })}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 text-white rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Notification
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
