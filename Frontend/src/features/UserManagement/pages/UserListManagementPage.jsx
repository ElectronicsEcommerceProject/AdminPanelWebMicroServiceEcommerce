import { useState } from 'react';
import { ArrowLeft, Users, RefreshCw, Sparkles } from 'lucide-react';
import { USERS_DATA } from '../api/userListMock';
import UserManagementHeader from '../components/UserManagementHeader';
import UserListFilters from '../components/UserListFilters';
import UserListTableView from '../components/UserListTableView';
import UserDetailNav from '../components/UserDetailNav';
import UserGeneralSection from '../components/UserGeneralSection';
import UserOrdersSection from '../components/UserOrdersSection';
import UserReviewsSection from '../components/UserReviewsSection';
import UserAdminSection from '../components/UserAdminSection';
import Pagination from '../components/Pagination';

export default function UserListManagementPage() {
  const [activeView, setActiveView] = useState('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeSection, setActiveSection] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    role: 'Customer',
    status: 'Active',
    search: '',
    sortBy: 'Date Joined'
  });

  const ITEMS_PER_PAGE = 10;

  const allFilteredUsers = USERS_DATA.filter(user => {
    const matchesRole = filters.role === 'All' || user.role === filters.role;
    const matchesStatus = filters.status === 'All' || user.status === filters.status;
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(filters.search.toLowerCase());
    return matchesRole && matchesStatus && matchesSearch;
  }).sort((a, b) => {
    if (filters.sortBy === 'Date Joined') {
      return new Date(b.createdDate) - new Date(a.createdDate);
    }
    if (filters.sortBy === 'Order Count') {
      return b.orders - a.orders;
    }
    if (filters.sortBy === 'Revenue') {
      return b.revenue - a.revenue;
    }
    return 0;
  });

  const totalPages = Math.ceil(allFilteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredUsers = allFilteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setActiveView('details');
    setActiveSection('general');
  };

  const handleBack = () => {
    setActiveView('list');
    setSelectedUser(null);
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Role', 'Status', 'Orders', 'Revenue'];
    const csvData = filteredUsers.map(user => [
      user.name,
      user.email,
      user.role,
      user.status,
      user.orders,
      user.revenue
    ]);
    
    const csv = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users-export.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <UserManagementHeader onExportCSV={handleExportCSV} />

      <div className="p-4 lg:p-8 max-w-[1600px] mx-auto">
        {activeView === 'list' ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Welcome Section */}
            <div className="mb-8 animate-in fade-in slide-in-from-top duration-500">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 
                            bg-gradient-to-r from-white/90 via-blue-50/50 to-indigo-50/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text 
                                 bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 flex items-center gap-3">
                      User Management
                      <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                    </h1>
                    <p className="text-gray-600 text-lg">Manage all users, customers, and retailers</p>
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

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{USERS_DATA.length}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Users</p>
                    <p className="text-3xl font-bold text-green-600">
                      {USERS_DATA.filter(u => u.status === 'Active').length}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold text-indigo-600">
                      ₹{USERS_DATA.reduce((sum, u) => sum + u.revenue, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {USERS_DATA.reduce((sum, u) => sum + u.orders, 0)}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <UserListFilters filters={filters} setFilters={setFilters} />
            <UserListTableView users={filteredUsers} onViewUser={handleViewUser} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        ) : (
          <div className="animate-in slide-in-from-right duration-300">
            <div className="mb-8">
              <button
                onClick={handleBack}
                className="group flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                         px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 
                         transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to List
              </button>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 
                                rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                    {selectedUser?.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedUser?.name}</h2>
                    <p className="text-gray-600">{selectedUser?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <UserDetailNav 
                activeSection={activeSection} 
                setActiveSection={setActiveSection}
                userRole={selectedUser?.role}
              />

              <div className="col-span-12 lg:col-span-9">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/50">
                  {activeSection === 'general' && <UserGeneralSection user={selectedUser} />}
                  {activeSection === 'orders' && <UserOrdersSection user={selectedUser} />}
                  {activeSection === 'reviews' && <UserReviewsSection user={selectedUser} />}
                  {activeSection === 'admin' && <UserAdminSection />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
