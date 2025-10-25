import { useState } from 'react';
import { Search, X, RefreshCw, Sparkles } from 'lucide-react';
import { RETAILERS_DATA } from '../api/retailersApprovalsMock';
import RetailersHeader from '../components/RetailersHeader';
import RetailersStatsCards from '../components/RetailersStatsCards';
import RetailersTable from '../components/RetailersTable';
import RetailerStatusModal from '../components/RetailerStatusModal';

export default function RetailersApprovalsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [retailers, setRetailers] = useState(RETAILERS_DATA);

  const stats = {
    totalRequests: retailers.filter(r => r.status === 'Pending').length,
    inactive: retailers.filter(r => r.status === 'Inactive').length,
    banned: retailers.filter(r => r.status === 'Banned').length,
  };

  const filteredRetailers = retailers.filter(retailer => {
    const matchesSearch =
      retailer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      retailer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      retailer.phone.includes(searchQuery);

    const matchesStatus = 
      selectedStatus === 'all' || 
      retailer.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    const headers = ['Name', 'Business Name', 'Email', 'Phone', 'GST', 'Status', 'Requested Date'];
    const csvData = filteredRetailers.map(r => [
      r.name,
      r.businessName,
      r.email,
      r.phone,
      r.gst,
      r.status,
      r.requestedDate
    ]);
    
    const csv = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'retailers-export.csv';
    a.click();
  };

  const handleViewRetailer = (retailer) => {
    setSelectedRetailer(retailer);
    setShowModal(true);
  };

  const handleStatusChange = (newStatus) => {
    if (selectedRetailer) {
      setRetailers(retailers.map(r =>
        r.id === selectedRetailer.id ? { ...r, status: newStatus } : r
      ));
      setSelectedRetailer({ ...selectedRetailer, status: newStatus });
      setTimeout(() => setShowModal(false), 500);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Banned':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      <RetailersHeader onExportCSV={handleExportCSV} />

      <div className="p-4 lg:p-8 max-w-[1600px] mx-auto">
        {/* Welcome Section */}
        <div className="mb-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 
                        bg-gradient-to-r from-white/90 via-orange-50/50 to-red-50/50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text 
                             bg-gradient-to-r from-orange-600 to-red-600 mb-2 flex items-center gap-3">
                  Retailer Approval Dashboard
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                </h1>
                <p className="text-gray-600 text-lg">Manage new retailer account requests</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600
                         text-white rounded-xl hover:from-blue-600 hover:to-indigo-700
                         shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 animate-in fade-in duration-300">
          <div className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search retailers by name, email or phone..."
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-xl border-2 border-gray-200 
                       rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                       shadow-lg text-gray-900 placeholder-gray-400 font-medium"
            />
          </div>
        </div>

        <RetailersStatsCards 
          stats={stats} 
          selectedStatus={selectedStatus} 
          setSelectedStatus={setSelectedStatus} 
        />

        {/* Clear Filter Button */}
        {selectedStatus !== 'all' && (
          <div className="mb-4">
            <button
              onClick={() => setSelectedStatus('all')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 
                       text-gray-700 rounded-lg transition-colors font-medium"
            >
              <X className="w-4 h-4" />
              Clear Filter
            </button>
          </div>
        )}

        <RetailersTable 
          retailers={filteredRetailers} 
          onViewRetailer={handleViewRetailer}
          getStatusColor={getStatusColor}
        />
      </div>

      <RetailerStatusModal 
        showModal={showModal}
        selectedRetailer={selectedRetailer}
        onClose={() => setShowModal(false)}
        onStatusChange={handleStatusChange}
        getStatusColor={getStatusColor}
      />
    </div>
  );
}
