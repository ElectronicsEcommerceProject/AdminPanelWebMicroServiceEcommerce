import { Users, Mail, Shield, Calendar, LogIn, CheckCircle, Hash, Clock } from 'lucide-react';

export default function UserGeneralSection({ user }) {
  const infoItems = [
    { icon: Users, label: 'Name', value: user.name },
    { icon: Mail, label: 'Email', value: user.email },
    { icon: Shield, label: 'Role', value: user.role, isRole: true },
    { icon: Calendar, label: 'Created Date', value: user.createdDate },
    { icon: LogIn, label: 'Last Login', value: user.lastLogin },
    { icon: CheckCircle, label: 'Status', value: user.status, isStatus: true }
  ];

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
        <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
          <Users className="w-5 md:w-6 h-5 md:h-6 text-white" />
        </div>
        General Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 
                                      transition-all duration-300">
              <div className="p-2 md:p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl 
                            group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                <Icon className="w-4 md:w-5 h-4 md:h-5 text-gray-600 group-hover:text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm font-medium text-gray-500 mb-1">{item.label}:</div>
                {item.isStatus ? (
                  <span className={`inline-flex px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold
                    ${user.status === 'Active' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                      user.status === 'Pending' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      user.status === 'Banned' ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 text-white'} shadow-lg`}>
                    {item.value}
                  </span>
                ) : item.isRole ? (
                  <span className={`inline-flex px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold
                    ${user.role === 'Customer' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700' :
                      user.role === 'Retailer' ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700' :
                      'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700'}`}>
                    {item.value}
                  </span>
                ) : (
                  <div className="text-sm md:text-base font-semibold text-gray-900">{item.value}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
