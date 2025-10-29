import React, { useState } from 'react';
import ReportChart from '../components/ReportChart';
import ReportFilterBar from '../components/ReportFilterBar';
import SummaryTable from '../components/SummaryTable';

const FinancialReportPage = () => {
  const [filters, setFilters] = useState({ dateRange: 'month' });

  const data = {
    financialSummary: {
      totalRevenue: 12543000,
      totalExpenses: 8450000,
      netProfit: 4093000,
      profitMargin: 32.6,
      operatingCosts: 3245000,
      marketingSpend: 1560000
    },
    revenueTrend: [
      { name: 'Jan', value: 260000 },
      { name: 'Feb', value: 240000 },
      { name: 'Mar', value: 330000 },
      { name: 'Apr', value: 290000 },
      { name: 'May', value: 400000 },
      { name: 'Jun', value: 440000 }
    ],
    expenseBreakdown: [
      { name: 'Operations', value: 3245000 },
      { name: 'Marketing', value: 1560000 },
      { name: 'Salaries', value: 2340000 },
      { name: 'Infrastructure', value: 890000 },
      { name: 'Other', value: 415000 }
    ],
    expenseDetails: [
      { category: 'Operations', amount: 3245000, percentage: 38.4 },
      { category: 'Marketing', amount: 1560000, percentage: 18.5 },
      { category: 'Salaries', amount: 2340000, percentage: 27.7 },
      { category: 'Infrastructure', amount: 890000, percentage: 10.5 },
      { category: 'Other', amount: 415000, percentage: 4.9 }
    ]
  };

  const expenseColumns = [
    { key: 'category', title: 'Category' },
    { 
      key: 'amount', 
      title: 'Amount',
      render: (value) => `$${(value / 1000).toFixed(1)}K`
    },
    { 
      key: 'percentage', 
      title: 'Percentage',
      render: (value) => `${value}%`
    }
  ];

  const metrics = [
    { label: 'ROI', value: '45.2%' },
    { label: 'Customer Acquisition Cost', value: '$145' },
    { label: 'Lifetime Value', value: '$2,340' },
    { label: 'Cash Flow', value: '$1,560K' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600 mt-2">Comprehensive financial analysis and metrics</p>
        </div>

        <ReportFilterBar onFilterChange={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${(data.financialSummary.totalRevenue / 1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Net Profit</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${(data.financialSummary.netProfit / 1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Profit Margin</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.financialSummary.profitMargin}%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Operating Costs</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${(data.financialSummary.operatingCosts / 1000).toFixed(1)}K</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ReportChart
            type="line"
            data={data.revenueTrend}
            title="Monthly Profit Trend"
            height={350}
          />
          <ReportChart
            type="doughnut"
            data={data.expenseBreakdown}
            title="Expense Breakdown"
            height={350}
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Financial Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <SummaryTable
          data={data.expenseDetails}
          columns={expenseColumns}
          title="Detailed Expense Breakdown"
        />
      </div>
    </div>
  );
};

export default FinancialReportPage;
