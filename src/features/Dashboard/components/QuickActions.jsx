import React from 'react';
import { Plus, Tag, Users, BarChart3, Settings, ArrowRight } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Plus, label: 'Add Product', description: 'Create new product listing', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: Tag, label: 'Create Coupon', description: 'Generate discount codes', color: 'bg-green-500 hover:bg-green-600' },
    { icon: Users, label: 'Manage Users', description: 'View and manage users', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: BarChart3, label: 'View Analytics', description: 'Detailed performance reports', color: 'bg-orange-500 hover:bg-orange-600' },
    { icon: Settings, label: 'Settings', description: 'System configuration', color: 'bg-gray-500 hover:bg-gray-600' }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-200 p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          <p className="text-sm text-gray-500">Frequently used actions</p>
        </div>
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Settings className="h-5 w-5 text-indigo-600" />
        </div>
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`w-full ${action.color} text-white py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-between transition-all transform hover:scale-105`}
          >
            <div className="flex items-center">
              <action.icon className="h-4 w-4 mr-3" />
              <div className="text-left">
                <div className="font-medium">{action.label}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4" />
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Need help?</span>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
