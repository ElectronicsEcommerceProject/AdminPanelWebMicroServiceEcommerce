import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, Target } from 'lucide-react';

const barData = [
  { name: 'Q1', value: 450 },
  { name: 'Q2', value: 650 },
  { name: 'Q3', value: 850 },
  { name: 'Q4', value: 550 },
];

const pieData = [
  { name: 'Redeemed', value: 65 },
  { name: 'Unused', value: 35 },
];

const COLORS = ['#14b8a6', '#e5e7eb'];

export default function AnalyticsCharts({ stats }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
      {/* Bar Chart */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-teal-100">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
          Usage Statistics
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#14b8a6" name="Redemptions" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-teal-100">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
          Redemption Rate
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
