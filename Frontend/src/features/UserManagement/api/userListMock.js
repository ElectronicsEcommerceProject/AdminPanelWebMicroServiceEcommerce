export const USERS_DATA = [
  { id: 1, name: 'NIKHIL RAJ', email: 'nikhilraj997306@gmail.com', role: 'Customer', status: 'Active', orders: 0, revenue: 0, createdDate: '2025-07-10', lastLogin: '2025-07-10' },
  { id: 2, name: 'DHIRAJ KUMAR', email: 'dk887112@gmail.com', role: 'Customer', status: 'Active', orders: 0, revenue: 0, createdDate: '2025-06-15', lastLogin: '2025-08-20' },
  { id: 3, name: 'PRAHLAD CUSTOMER', email: 'prahladcustomer@gmail.com', role: 'Customer', status: 'Active', orders: 1, revenue: 34628.56, createdDate: '2025-05-20', lastLogin: '2025-09-10' },
  { id: 4, name: 'Suraj Shaw', email: 'raj@gmail.com', role: 'Customer', status: 'Active', orders: 1, revenue: 34603.00, createdDate: '2025-04-12', lastLogin: '2025-09-15' },
  { id: 5, name: 'Rohit Kumar', email: 'rohit63139@gmail.com', role: 'Customer', status: 'Active', orders: 7, revenue: 119621.96, createdDate: '2025-03-08', lastLogin: '2025-10-01' },
  { id: 6, name: 'Raushan Narayan', email: 'rasu.rasu@gmail.com', role: 'Customer', status: 'Active', orders: 2, revenue: 106080.00, createdDate: '2025-02-18', lastLogin: '2025-09-28' },
  { id: 7, name: 'Rohit Kumar', email: 'babuikraju2123@gmail.com', role: 'Customer', status: 'Active', orders: 0, revenue: 0, createdDate: '2025-01-25', lastLogin: '2025-08-05' },
  { id: 8, name: 'Rohit Kumar', email: 'rajput8546@gmail.com', role: 'Customer', status: 'Active', orders: 0, revenue: 0, createdDate: '2024-12-30', lastLogin: '2025-07-22' },
  { id: 9, name: 'Rahul Kumar raj', email: 'rahulkrprasad48@gmail.com', role: 'Customer', status: 'Active', orders: 8, revenue: 128868.20, createdDate: '2024-11-14', lastLogin: '2025-10-15' },
  { id: 10, name: 'Mansi Sharma', email: 'piyushkuryau349@gmail.com', role: 'Customer', status: 'Active', orders: 0, revenue: 0, createdDate: '2024-10-05', lastLogin: '2025-06-30' },
  { id: 11, name: 'Tech Store', email: 'techstore@gmail.com', role: 'Retailer', status: 'Active', orders: 15, revenue: 450000, createdDate: '2024-08-20', lastLogin: '2025-10-20' },
  { id: 12, name: 'Gadget Hub', email: 'gadgethub@gmail.com', role: 'Retailer', status: 'Pending', orders: 0, revenue: 0, createdDate: '2025-10-15', lastLogin: '2025-10-15' },
  { id: 13, name: 'Admin User', email: 'admin@ecommerce.com', role: 'Admin', status: 'Active', orders: 0, revenue: 0, createdDate: '2024-01-01', lastLogin: '2025-10-24' },
  { id: 14, name: 'Amit Singh', email: 'amit.singh@gmail.com', role: 'Customer', status: 'Inactive', orders: 3, revenue: 45000, createdDate: '2024-09-10', lastLogin: '2025-01-15' },
  { id: 15, name: 'Priya Verma', email: 'priya.v@gmail.com', role: 'Customer', status: 'Banned', orders: 12, revenue: 89000, createdDate: '2024-07-22', lastLogin: '2025-05-10' },
  { id: 16, name: 'Electronics World', email: 'electronics@store.com', role: 'Retailer', status: 'Inactive', orders: 8, revenue: 320000, createdDate: '2024-06-05', lastLogin: '2025-02-20' },
  { id: 17, name: 'Fashion Hub', email: 'fashion@hub.com', role: 'Retailer', status: 'Banned', orders: 5, revenue: 150000, createdDate: '2024-05-18', lastLogin: '2024-12-30' },
  { id: 18, name: 'Sneha Patel', email: 'sneha.p@gmail.com', role: 'Customer', status: 'Pending', orders: 0, revenue: 0, createdDate: '2025-10-20', lastLogin: '2025-10-20' },
  { id: 19, name: 'Vikram Rao', email: 'vikram.rao@gmail.com', role: 'Customer', status: 'Inactive', orders: 1, revenue: 12500, createdDate: '2024-08-14', lastLogin: '2024-11-05' },
  { id: 20, name: 'Mobile Mart', email: 'mobile@mart.com', role: 'Retailer', status: 'Pending', orders: 0, revenue: 0, createdDate: '2025-10-18', lastLogin: '2025-10-18' },
  { id: 21, name: 'Rajesh Kumar', email: 'rajesh.k@gmail.com', role: 'Customer', status: 'Banned', orders: 4, revenue: 67800, createdDate: '2024-04-25', lastLogin: '2024-09-12' },
  { id: 22, name: 'Super Admin', email: 'superadmin@ecommerce.com', role: 'Admin', status: 'Active', orders: 0, revenue: 0, createdDate: '2024-01-01', lastLogin: '2025-10-25' },
  { id: 23, name: 'Anita Desai', email: 'anita.d@gmail.com', role: 'Customer', status: 'Active', orders: 5, revenue: 78900, createdDate: '2024-12-10', lastLogin: '2025-10-22' },
  { id: 24, name: 'Book Store', email: 'books@store.com', role: 'Retailer', status: 'Active', orders: 20, revenue: 580000, createdDate: '2024-03-15', lastLogin: '2025-10-23' },
  { id: 25, name: 'Moderator', email: 'mod@ecommerce.com', role: 'Admin', status: 'Inactive', orders: 0, revenue: 0, createdDate: '2024-06-01', lastLogin: '2025-03-10' },
];

export const REVIEWS_DATA = {
  1: [],
  3: [{ id: 1, product: '44W Flash Charger', rating: 5, comment: 'Excellent product, fast charging!', date: '2025-09-12' }],
  5: [
    { id: 2, product: 'Boat Earphones', rating: 4, comment: 'Good sound quality', date: '2025-09-20' },
    { id: 3, product: 'Power Bank', rating: 5, comment: 'Long lasting battery', date: '2025-10-01' }
  ],
  14: [{ id: 4, product: 'Laptop Stand', rating: 3, comment: 'Average quality', date: '2025-01-20' }],
  15: [
    { id: 5, product: 'USB Cable', rating: 2, comment: 'Poor quality, broke quickly', date: '2025-05-15' },
    { id: 6, product: 'Mouse Pad', rating: 1, comment: 'Not as described', date: '2025-05-18' }
  ],
  23: [
    { id: 7, product: 'Keyboard', rating: 5, comment: 'Excellent typing experience', date: '2025-10-10' },
    { id: 8, product: 'Monitor', rating: 4, comment: 'Great display quality', date: '2025-10-15' }
  ]
};

export const PRODUCTS_DATA = {
  11: [
    { id: 1, name: '44W Flash Charger', stock: 50, price: 1000, sales: 120 },
    { id: 2, name: 'Wireless Earbuds', stock: 30, price: 2500, sales: 85 }
  ],
  16: [
    { id: 3, name: 'Smart Watch', stock: 15, price: 3500, sales: 45 },
    { id: 4, name: 'Bluetooth Speaker', stock: 25, price: 1800, sales: 60 }
  ],
  17: [
    { id: 5, name: 'T-Shirt', stock: 0, price: 500, sales: 30 },
    { id: 6, name: 'Jeans', stock: 10, price: 1200, sales: 25 }
  ],
  24: [
    { id: 7, name: 'Fiction Novel', stock: 100, price: 350, sales: 200 },
    { id: 8, name: 'Study Guide', stock: 75, price: 450, sales: 150 },
    { id: 9, name: 'Magazine', stock: 50, price: 100, sales: 300 }
  ]
};
