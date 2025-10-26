import { useState } from 'react';
import { Send, Mail, MessageSquare, Smartphone, Users } from 'lucide-react';
import NotificationHeader from '../components/NotificationHeader';
import NotificationTabs from '../components/NotificationTabs';

export default function SendNotificationPage() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    channel: 'In app SMS',
    audience: 'Specific Users',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notification sent successfully!');
    setFormData({ title: '', message: '', channel: 'In app SMS', audience: 'Specific Users' });
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
      <NotificationTabs />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Send Notification</h2>
                <p className="text-xs sm:text-sm text-gray-600">Broadcast notifications to your users</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                  {getChannelIcon(formData.channel)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Compose Notification</h3>
                  <p className="text-xs sm:text-sm text-amber-100">Fill in the details below</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Notification Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="Enter a catchy title..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Message Content</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none transition-all"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    {getChannelIcon(formData.channel)}
                    Delivery Channel
                  </label>
                  <select
                    value={formData.channel}
                    onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
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
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
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
                  <p className="font-bold text-gray-900 mb-1">{formData.title || 'Your title here...'}</p>
                  <p className="text-sm text-gray-600">{formData.message || 'Your message will appear here...'}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">{formData.channel}</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">{formData.audience}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setFormData({ title: '', message: '', channel: 'In app SMS', audience: 'Specific Users' })}
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
      </div>
    </div>
  );
}
