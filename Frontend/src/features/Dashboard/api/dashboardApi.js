const dashboardApi = {
  getStats: async () => ({
    users: { 
      customers: 1250, 
      retailers: 342,
      growth: 12.5
    },
    orders: { 
      all: 2890, 
      pending: 45, 
      delivered: 2650, 
      returned: 28, 
      processing: 167, 
      cancelled: 12 
    },
    revenue: { 
      total: 1256000, 
      last7Days: 156000, 
      today: 12500,
      growth: 8.3
    }
  }),
  
  getLowStockAlerts: async () => [
    { id: 1, name: 'Wireless Headphones', stock: 3, threshold: 10, category: 'Audio' },
    { id: 2, name: 'Smart Watch Series 5', stock: 5, threshold: 15, category: 'Wearables' },
    { id: 3, name: 'USB-C Charger', stock: 8, threshold: 20, category: 'Accessories' },
    { id: 4, name: 'Bluetooth Speaker', stock: 2, threshold: 10, category: 'Audio' }
  ],
  
  getTopProducts: async () => [
    { id: 1, name: 'Rinvano', sold: 102, revenue: 51000, growth: 15 },
    { id: 2, name: 'Rivano', sold: 77, revenue: 38500, growth: 8 },
    { id: 3, name: 'Travel chargers', sold: 46, revenue: 13800, growth: 22 },
    { id: 4, name: 'Samsung original battery', sold: 4, revenue: 3200, growth: -5 },
    { id: 5, name: 'Jiobharat', sold: 2, revenue: 600, growth: 3 }
  ],
  
  getRecentOrders: async () => ({
    customer: [
      { orderNumber: 'ORD-20250715-0302', customer: 'John Doe', status: 'processing', date: '2025-10-21', amount: 2499 },
      { orderNumber: 'ORD-20250714-E24D', customer: 'Jane Smith', status: 'pending', date: '2025-10-21', amount: 1599 },
      { orderNumber: 'ORD-20250714-B113', customer: 'Bob Wilson', status: 'pending', date: '2025-10-21', amount: 3299 },
      { orderNumber: 'ORD-20250711-7018', customer: 'Alice Brown', status: 'cancelled', date: '2025-10-21', amount: 1899 }
    ],
    retailer: [
      { orderNumber: 'ORD-20250714-AF71', retailer: 'Tech Store Inc', status: 'pending', date: '2025-10-21', amount: 12500 },
      { orderNumber: 'ORD-20250714-FCBA', retailer: 'Gadget World', status: 'cancelled', date: '2025-10-21', amount: 8900 },
      { orderNumber: 'ORD-20250714-B977', retailer: 'Electro Mart', status: 'pending', date: '2025-10-21', amount: 15600 },
      { orderNumber: 'ORD-20250714-B069', retailer: 'Mobile Hub', status: 'pending', date: '2025-10-21', amount: 11200 }
    ]
  }),

  getRecentUsers: async () => ({
    customers: [
      { id: 1, name: 'Alice Johnson', email: 'alice@email.com', joinDate: '2024-01-15', orders: 1 },
      { id: 2, name: 'Charlie Brown', email: 'charlie@email.com', joinDate: '2024-01-14', orders: 0 },
      { id: 3, name: 'Diana Prince', email: 'diana@email.com', joinDate: '2024-01-13', orders: 2 }
    ],
    retailers: [
      { id: 1, name: 'Electro Mart', email: 'contact@electromart.com', joinDate: '2024-01-15', products: 24 },
      { id: 2, name: 'Tech Solutions', email: 'info@techsolutions.com', joinDate: '2024-01-14', products: 15 },
      { id: 3, name: 'Electro Mart', email: 'contact@electromart.com', joinDate: '2024-01-15', products: 24 },
    ]
  }),

  getRevenueData: async () => ({
    data: [
      { month: 'Jan', revenue: 65000, target: 60000 },
      { month: 'Feb', revenue: 59000, target: 62000 },
      { month: 'Mar', revenue: 80000, target: 70000 },
      { month: 'Apr', revenue: 81000, target: 75000 },
      { month: 'May', revenue: 56000, target: 65000 },
      { month: 'Jun', revenue: 55000, target: 60000 },
      { month: 'Jul', revenue: 78000, target: 72000 },
      { month: 'Aug', revenue: 92000, target: 80000 },
      { month: 'Sep', revenue: 88000, target: 85000 },
      { month: 'Oct', revenue: 95000, target: 90000 },
      { month: 'Nov', revenue: 112000, target: 100000 },
      { month: 'Dec', revenue: 125000, target: 110000 }
    ],
    total: 1256000,
    growth: 8.3,
    average: 85666
  }),

  getSalesData: async () => ({
    data: [
      { day: 'Mon', sales: 120, returns: 8 },
      { day: 'Tue', sales: 150, returns: 12 },
      { day: 'Wed', sales: 180, returns: 15 },
      { day: 'Thu', sales: 90, returns: 5 },
      { day: 'Fri', sales: 230, returns: 18 },
      { day: 'Sat', sales: 280, returns: 22 },
      { day: 'Sun', sales: 190, returns: 14 }
    ],
    total: 1240,
    growth: 8.3,
    average: 177
  })
};

export default dashboardApi;
