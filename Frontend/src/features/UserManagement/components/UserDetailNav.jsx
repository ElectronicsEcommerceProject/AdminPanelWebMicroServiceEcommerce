import { Users, Package, MessageSquare, Settings } from 'lucide-react';

export default function UserDetailNav({ activeSection, setActiveSection, userRole }) {
  const navItems = [
    { id: 'general', label: 'General Info', icon: Users },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'reviews', label: userRole === 'Retailer' ? 'Products' : 'Reviews', icon: MessageSquare },
    { id: 'admin', label: 'Admin Actions', icon: Settings }
  ];

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/50">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full px-6 py-5 text-left flex items-center gap-4 transition-all duration-300
                ${activeSection === item.id 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'hover:bg-gray-50 text-gray-700 hover:translate-x-1'}
                ${index > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <div className={`p-2 rounded-lg ${
                activeSection === item.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
