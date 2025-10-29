import React, { useState } from 'react';
import ReportChart from '../components/ReportChart';
import ReportFilterBar from '../components/ReportFilterBar';
import SummaryTable from '../components/SummaryTable';

const UserReportPage = () => {
  const [filters, setFilters] = useState({ dateRange: 'month' });

  const data = {
    userSummary: {
      totalUsers: 23450,
      newUsers: 2345,
      activeUsers: 18760,
      premiumUsers: 4560,
      churnRate: 2.3
    },
    userGrowth: [
      { name: 'Jan', value: 1850 },
      { name: 'Feb', value: 1920 },
      { name: 'Mar', value: 2100 },
      { name: 'Apr', value: 1980 },
      { name: 'May', value: 2250 },
      { name: 'Jun', value: 2345 }
    ],
    userDemographics: [
      { name: '18-24', value: 19.5 },
      { name: '25-34', value: 36.1 },
      { name: '35-44', value: 24.2 },
      { name: '45-54', value: 12.3 },
      { name: '55+', value: 8.0 }
    ],
    demographicsDetails: [
      { ageGroup: '18-24', count: 4560, percentage: 19.5 },
      { ageGroup: '25-34', count: 8450, percentage: 36.1 },
      { ageGroup: '35-44', count: 5670, percentage: 24.2 },
      { ageGroup: '45-54', count: 2890, percentage: 12.3 },
      { ageGroup: '55+', count: 1880, percentage: 8.0 }
    ],
    userBehavior: [
      { metric: 'Avg Session Duration', value: '4m 23s', change: 12.3 },
      { metric: 'Pages per Visit', value: '5.2', change: 8.7 },
      { metric: 'Bounce Rate', value: '32.1%', change: -5.4 },
      { metric: 'Conversion Rate', value: '3.2%', change: 15.6 }
    ]
  };

  const demographicsColumns = [
    { key: 'ageGroup', title: 'Age Group' },
    { key: 'count', title: 'User Count' },
    { 
      key: 'percentage', 
      title: 'Percentage',
      render: (value) => `${value}%`
    }
  ];

  const behaviorColumns = [
    { key: 'metric', title: 'Metric' },
    { key: 'value', title: 'Value' },
    { 
      key: 'change', 
      title: 'Change',
      render: (value) => (
        <span className={value >= 0 ? 'text-green-600' : 'text-red-600'}>
          {value >= 0 ? '+' : ''}{value}%
        </span>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Reports</h1>
          <p className="text-gray-600 mt-2">User analytics and behavior insights</p>
        </div>

        <ReportFilterBar onFilterChange={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.userSummary.totalUsers.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">New Users</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.userSummary.newUsers.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Active Users</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.userSummary.activeUsers.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Churn Rate</p>
            <p className="text-2xl font-bold text-red-600 mt-1">{data.userSummary.churnRate}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ReportChart
            type="bar"
            data={data.userGrowth}
            title="User Growth Trend"
            height={300}
          />
          <ReportChart
            type="doughnut"
            data={data.userDemographics}
            title="User Demographics by Age"
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SummaryTable
            data={data.demographicsDetails}
            columns={demographicsColumns}
            title="User Demographics"
          />
          <SummaryTable
            data={data.userBehavior}
            columns={behaviorColumns}
            title="User Behavior Metrics"
          />
        </div>
      </div>
    </div>
  );
};

export default UserReportPage;
