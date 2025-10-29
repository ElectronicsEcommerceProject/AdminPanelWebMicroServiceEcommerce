import React, { useState } from 'react';
import ReportChart from '../components/ReportChart';
import ReportFilterBar from '../components/ReportFilterBar';
import SummaryTable from '../components/SummaryTable';

const SalesReportPage = () => {
  const [filters, setFilters] = useState({ dateRange: 'month' });

  const data = {
    salesSummary: {
      totalSales: 8456,
      totalRevenue: 12543000,
      averageOrderValue: 1483,
      conversionRate: 3.2
    },
    salesTrend: [
      { name: 'Jan 1', value: 145 },
      { name: 'Jan 2', value: 132 },
      { name: 'Jan 3', value: 156 },
      { name: 'Jan 4', value: 143 },
      { name: 'Jan 5', value: 167 },
      { name: 'Jan 6', value: 154 },
      { name: 'Jan 7', value: 139 }
    ],
    salesByCategory: [
      { name: 'Electronics', value: 3456 },
      { name: 'Fashion', value: 2340 },
      { name: 'Home & Garden', value: 1234 },
      { name: 'Beauty', value: 890 },
      { name: 'Sports', value: 567 }
    ],
    topPerforming: [
      { product: 'iPhone 14 Pro', units: 1450, revenue: 2175000 },
      { product: 'MacBook Pro', units: 890, revenue: 1780000 },
      { product: 'Samsung Galaxy', units: 780, revenue: 936000 },
      { product: 'AirPods Pro', units: 2340, revenue: 585000 },
      { product: 'iPad Air', units: 1200, revenue: 720000 }
    ]
  };

  const topPerformingColumns = [
    { key: 'product', title: 'Product' },
    { key: 'units', title: 'Units Sold' },
    { 
      key: 'revenue', 
      title: 'Revenue',
      render: (value) => `$${(value / 1000).toFixed(1)}K`
    }
  ];

  const categoryColumns = [
    { key: 'name', title: 'Category' },
    { key: 'value', title: 'Sales Count' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sales Reports</h1>
          <p className="text-gray-600 mt-2">Detailed analysis of sales performance</p>
        </div>

        <ReportFilterBar onFilterChange={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Sales</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.salesSummary.totalSales.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${(data.salesSummary.totalRevenue / 1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${data.salesSummary.averageOrderValue}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{data.salesSummary.conversionRate}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ReportChart
            type="line"
            data={data.salesTrend}
            title="Sales Trend (Last 7 Days)"
            height={300}
          />
          <ReportChart
            type="doughnut"
            data={data.salesByCategory}
            title="Sales by Category"
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SummaryTable
            data={data.topPerforming}
            columns={topPerformingColumns}
            title="Top Performing Products"
            searchable={true}
          />
          <SummaryTable
            data={data.salesByCategory}
            columns={categoryColumns}
            title="Sales by Category"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesReportPage;
