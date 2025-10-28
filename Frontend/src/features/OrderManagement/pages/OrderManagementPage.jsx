import { useState } from 'react';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ORDERS_DATA } from '../api/ordersMock';
import OrderHeader from '../components/OrderHeader';
import OrderStatsCards from '../components/OrderStatsCards';
import OrderSearch from '../components/OrderSearch';
import OrderFilters from '../components/OrderFilters';
import OrdersTable from '../components/OrdersTable';
import OrderPagination from '../components/OrderPagination';
import ViewOrderModal from '../components/ViewOrderModal';
import CreateOrderModal from '../components/CreateOrderModal';

export default function OrderManagementPage() {
  const [orders, setOrders] = useState(ORDERS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: 'Status',
    dateFrom: '',
    dateTo: '',
  });
  const [statusFilter, setStatusFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    returned: orders.filter(o => o.status === 'returned').length
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      filters.status === 'Status' || 
      order.status === filters.status.toLowerCase();
    
    const matchesStatusFilter = 
      !statusFilter || 
      order.status === statusFilter;
    
    const matchesDateFrom = !filters.dateFrom || order.date >= filters.dateFrom;
    const matchesDateTo = !filters.dateTo || order.date <= filters.dateTo;
    
    return matchesSearch && matchesStatus && matchesStatusFilter && matchesDateFrom && matchesDateTo;
  });

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      window.location.reload();
    }, 1000);
  };

  const handleExportCSV = () => {
    const headers = ['Order ID', 'Customer', 'Email', 'Status', 'Total', 'Date'];
    const csvData = filteredOrders.map(order => [
      order.id,
      order.customerName,
      order.customerEmail,
      order.status,
      order.total,
      order.date
    ]);
    const csv = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    toast.success('CSV exported successfully!');
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Orders Report', 14, 22);
    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
    
    const tableData = filteredOrders.map(order => [
      order.id,
      order.customerName,
      order.customerEmail,
      order.status,
      `₹${order.total.toFixed(2)}`,
      order.date
    ]);
    
    doc.autoTable({
      head: [['Order ID', 'Customer', 'Email', 'Status', 'Total', 'Date']],
      body: tableData,
      startY: 35,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [16, 185, 129] }
    });
    
    doc.save('orders-report.pdf');
    toast.success('PDF exported successfully!');
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(o => 
      o.id === orderId ? { ...o, status: newStatus } : o
    ));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
    toast.success('Order status updated!');
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const handleSaveChanges = () => {
    toast.success('Changes saved successfully!');
    setShowViewModal(false);
  };

  const handleCreateOrder = (formData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      status: 'pending',
      total: formData.price * formData.quantity,
      date: new Date().toISOString().split('T')[0],
      items: [{ name: formData.itemName, quantity: formData.quantity, price: formData.price }],
      shippingAddress: formData.customerAddress,
      phone: formData.customerPhone
    };
    setOrders([newOrder, ...orders]);
    setShowCreateModal(false);
    toast.success('Order created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <OrderHeader onRefresh={handleRefresh} isRefreshing={isRefreshing} />
      
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        <OrderFilters
          filters={filters}
          setFilters={setFilters}
          onExportCSV={handleExportCSV}
          onExportPDF={handleExportPDF}
          onCreateOrder={() => setShowCreateModal(true)}
        />

        <OrderStatsCards
          stats={stats}
          statusFilter={statusFilter}
          onStatCardClick={setStatusFilter}
        />

        <OrderSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        

        <OrdersTable
          orders={paginatedOrders}
          onViewOrder={handleViewOrder}
          onStatusChange={handleStatusChange}
        />

        {totalPages > 0 && (
          <OrderPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredOrders.length}
          />
        )}
      </div>

      <ViewOrderModal
        isOpen={showViewModal}
        order={selectedOrder}
        onClose={() => setShowViewModal(false)}
        onStatusChange={handleStatusChange}
        onSave={handleSaveChanges}
      />

      <CreateOrderModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateOrder={handleCreateOrder}
      />
    </div>
  );
}
