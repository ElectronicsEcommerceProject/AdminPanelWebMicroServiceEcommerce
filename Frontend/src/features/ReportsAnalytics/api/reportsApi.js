export const reportsApi = {
  getOverview: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      data: {
        summary: {
          totalRevenue: 1254300,
          totalOrders: 8456,
          totalUsers: 23450,
          totalProducts: 567,
          revenueGrowth: 12.5,
          orderGrowth: 8.3,
          userGrowth: 15.2,
          productGrowth: 5.7
        },
        revenueData: [
          { period: 'Jan', revenue: 98000, orders: 650 },
          { period: 'Feb', revenue: 102000, orders: 720 },
          { period: 'Mar', revenue: 115000, orders: 810 },
          { period: 'Apr', revenue: 108000, orders: 780 },
          { period: 'May', revenue: 125000, orders: 890 },
          { period: 'Jun', revenue: 132000, orders: 950 }
        ],
        topProducts: [
          { name: 'iPhone 14 Pro', sales: 1450, revenue: 2175000 },
          { name: 'MacBook Pro', sales: 890, revenue: 1780000 },
          { name: 'AirPods Pro', sales: 2340, revenue: 585000 },
          { name: 'iPad Air', sales: 1200, revenue: 720000 },
          { name: 'Apple Watch', sales: 1560, revenue: 780000 }
        ],
        userMetrics: {
          newUsers: 2345,
          activeUsers: 18760,
          returningUsers: 4567,
          churnRate: 2.3
        }
      }
    };
  },

  getSalesReport: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      success: true,
      data: {
        salesSummary: {
          totalSales: 8456,
          totalRevenue: 12543000,
          averageOrderValue: 1483,
          conversionRate: 3.2
        },
        salesTrend: [
          { date: '2024-01-01', sales: 145, revenue: 215000 },
          { date: '2024-01-02', sales: 132, revenue: 198000 },
          { date: '2024-01-03', sales: 156, revenue: 234000 },
          { date: '2024-01-04', sales: 143, revenue: 214500 },
          { date: '2024-01-05', sales: 167, revenue: 250500 },
          { date: '2024-01-06', sales: 154, revenue: 231000 },
          { date: '2024-01-07', sales: 139, revenue: 208500 }
        ],
        salesByCategory: [
          { category: 'Electronics', sales: 3456, revenue: 8450000 },
          { category: 'Fashion', sales: 2340, revenue: 1872000 },
          { category: 'Home & Garden', sales: 1234, revenue: 987000 },
          { category: 'Beauty', sales: 890, revenue: 534000 },
          { category: 'Sports', sales: 567, revenue: 340000 }
        ],
        topPerforming: [
          { product: 'iPhone 14 Pro', units: 1450, revenue: 2175000 },
          { product: 'MacBook Pro', units: 890, revenue: 1780000 },
          { product: 'Samsung Galaxy', units: 780, revenue: 936000 },
          { product: 'AirPods Pro', units: 2340, revenue: 585000 },
          { product: 'iPad Air', units: 1200, revenue: 720000 }
        ]
      }
    };
  },

  getFinancialReport: async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return {
      success: true,
      data: {
        financialSummary: {
          totalRevenue: 12543000,
          totalExpenses: 8450000,
          netProfit: 4093000,
          profitMargin: 32.6,
          operatingCosts: 3245000,
          marketingSpend: 1560000
        },
        revenueTrend: [
          { month: 'Jan', revenue: 980000, expenses: 720000, profit: 260000 },
          { month: 'Feb', revenue: 1020000, expenses: 780000, profit: 240000 },
          { month: 'Mar', revenue: 1150000, expenses: 820000, profit: 330000 },
          { month: 'Apr', revenue: 1080000, expenses: 790000, profit: 290000 },
          { month: 'May', revenue: 1250000, expenses: 850000, profit: 400000 },
          { month: 'Jun', revenue: 1320000, expenses: 880000, profit: 440000 }
        ],
        expenseBreakdown: [
          { category: 'Operations', amount: 3245000, percentage: 38.4 },
          { category: 'Marketing', amount: 1560000, percentage: 18.5 },
          { category: 'Salaries', amount: 2340000, percentage: 27.7 },
          { category: 'Infrastructure', amount: 890000, percentage: 10.5 },
          { category: 'Other', amount: 415000, percentage: 4.9 }
        ],
        financialMetrics: {
          roi: 45.2,
          customerAcquisitionCost: 145,
          lifetimeValue: 2340,
          cashFlow: 1560000
        }
      }
    };
  },

  getUserReport: async () => {
    await new Promise(resolve => setTimeout(resolve, 550));
    return {
      success: true,
      data: {
        userSummary: {
          totalUsers: 23450,
          newUsers: 2345,
          activeUsers: 18760,
          premiumUsers: 4560,
          churnRate: 2.3
        },
        userGrowth: [
          { month: 'Jan', newUsers: 1850, totalUsers: 19800 },
          { month: 'Feb', newUsers: 1920, totalUsers: 20720 },
          { month: 'Mar', newUsers: 2100, totalUsers: 21820 },
          { month: 'Apr', newUsers: 1980, totalUsers: 22800 },
          { month: 'May', newUsers: 2250, totalUsers: 24050 },
          { month: 'Jun', newUsers: 2345, totalUsers: 25395 }
        ],
        userDemographics: [
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
      }
    };
  }
};

export default reportsApi;
