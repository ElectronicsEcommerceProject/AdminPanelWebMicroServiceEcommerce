import { FileText, History, Send } from 'lucide-react';

export default function NotificationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-amber-100 p-4 md:p-6">
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('templates')}
            className={`group flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ${
              activeTab === 'templates'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-300'
                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 border-2 border-amber-200'
            }`}
          >
            <FileText className={`w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:scale-110 ${
              activeTab === 'templates' ? 'text-white' : 'text-amber-600'
            }`} />
            <span>Templates</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`group flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ${
              activeTab === 'logs'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-300'
                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 border-2 border-amber-200'
            }`}
          >
            <History className={`w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:scale-110 ${
              activeTab === 'logs' ? 'text-white' : 'text-amber-600'
            }`} />
            <span>Notification Logs</span>
          </button>
          <button
            onClick={() => setActiveTab('send')}
            className={`group flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 ${
              activeTab === 'send'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-300'
                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 border-2 border-amber-200'
            }`}
          >
            <Send className={`w-4 md:w-5 h-4 md:h-5 transition-transform group-hover:scale-110 ${
              activeTab === 'send' ? 'text-white' : 'text-amber-600'
            }`} />
            <span>Send Notification</span>
          </button>
        </div>
      </div>
    </div>
  );
}
