import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const UserStatCard = ({ icon: Icon, title, value, subtitle, gradient, shadowColor, badge, trend }) => {
  const getTrendIcon = () => {
    if (!trend) return null;
    const trendValue = parseFloat(trend);
    if (trendValue > 0) return <TrendingUp className="w-4 h-4" />;
    if (trendValue < 0) return <TrendingDown className="w-4 h-4" />;
    return null;
  };

  const getTrendColor = () => {
    if (!trend) return '';
    const trendValue = parseFloat(trend);
    if (trendValue > 0) return 'text-green-500';
    if (trendValue < 0) return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className={`group relative bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 
                    shadow-2xl ${shadowColor} hover:shadow-3xl 
                    transform hover:scale-105 transition-all duration-300 
                    border border-white/50 overflow-hidden`}>
      {/* Background Gradient Decoration */}
      <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${gradient} 
                      opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className={`p-2 md:p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg 
                        group-hover:shadow-2xl transform group-hover:rotate-6 transition-all duration-300`}>
            <Icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 
                            text-green-700 rounded-full text-xs font-bold shadow-sm">
                {badge}
              </span>
            )}
            {trend && (
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${getTrendColor()} 
                            bg-white/50 backdrop-blur text-xs font-bold`}>
                {getTrendIcon()}
                <span>{trend}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs md:text-sm font-medium text-gray-500">{title}</p>
          <p className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${gradient} 
                      bg-clip-text text-transparent`}>
            {value}
          </p>
          <p className="text-[10px] md:text-xs text-gray-400 font-medium">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStatCard;
