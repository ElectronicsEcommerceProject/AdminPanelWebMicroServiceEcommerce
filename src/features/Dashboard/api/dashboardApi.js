const dashboardApi = {
  getStats: async () => ({
    users: { customers: 0, retailers: 0 },
    orders: { all: 0, pending: 0, delivered: 0, returned: 0, processing: 0, cancelled: 0 },
    revenue: { total: 0, last7Days: 0, today: 0 }
  }),
  
  getLowStockAlerts: async () => [],
  
  getTopProducts: async () => [
    { id: 1, name: 'Rinvano', sold: 102 },
    { id: 2, name: 'Rivano', sold: 77 },
    { id: 3, name: 'Travel chargers', sold: 46 },
    { id: 4, name: 'Samsung original battery', sold: 4 },
    { id: 5, name: 'Jiobharat', sold: 2 }
  ],
  
  getRecentOrders: async () => ({
    customer: [
      { orderNumber: 'ORD-20250715-0302', customer: 'Customer', status: 'processing', date: '2025-10-21' },
      { orderNumber: 'ORD-20250714-E24D', customer: 'Customer', status: 'pending', date: '2025-10-21' },
      { orderNumber: 'ORD-20250714-B113', customer: 'Customer', status: 'pending', date: '2025-10-21' },
      { orderNumber: 'ORD-20250711-7018', customer: 'Customer', status: 'cancelled', date: '2025-10-21' }
    ],
    retailer: [
      { orderNumber: 'ORD-20250714-AF71', retailer: 'Retailer', status: 'pending', date: '2025-10-21' },
      { orderNumber: 'ORD-20250714-FCBA', retailer: 'Retailer', status: 'cancelled', date: '2025-10-21' },
      { orderNumber: 'ORD-20250714-B977', retailer: 'Retailer', status: 'pending', date: '2025-10-21' },
      { orderNumber: 'ORD-20250714-B069', retailer: 'Retailer', status: 'pending', date: '2025-10-21' }
    ]
  })
};

export default dashboardApi;
