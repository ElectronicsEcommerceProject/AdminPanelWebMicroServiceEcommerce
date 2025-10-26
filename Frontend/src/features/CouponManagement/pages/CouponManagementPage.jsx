import { useState } from 'react';
import { COUPONS_DATA } from '../api/couponsMock';
import CouponHeader from '../components/CouponHeader';
import CouponTabs from '../components/CouponTabs';
import CouponSearch from '../components/CouponSearch';
import CouponsTable from '../components/CouponsTable';
import Pagination from '../components/Pagination';
import CouponModal from '../components/CouponModal';
import AnalyticsStats from '../components/AnalyticsStats';
import AnalyticsCharts from '../components/AnalyticsCharts';
import TopPerformingTable from '../components/TopPerformingTable';

export default function CouponManagementPage() {
  const [activeTab, setActiveTab] = useState('coupons');
  const [coupons, setCoupons] = useState(COUPONS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [analyticsPage, setAnalyticsPage] = useState(1);
  const itemsPerPage = 10;

  const [formData, setFormData] = useState({
    code: '',
    description: '',
    discountType: 'Percentage',
    discountValue: '',
    validFrom: '',
    validTo: '',
    targetType: 'Cart (All Products)',
    userRole: 'Both',
    minOrder: '',
    maxDiscount: '',
    totalUsage: '',
    usagePerUser: '',
    newUsersOnly: false,
    status: true
  });

  const stats = {
    totalCoupons: coupons.length,
    activeCoupons: coupons.filter(c => c.status).length,
    inactiveCoupons: coupons.filter(c => !c.status).length,
    totalRedemptions: coupons.reduce((sum, c) => sum + c.redemptions, 0),
    avgRedemptionRate: ((coupons.reduce((sum, c) => sum + c.redemptions, 0) / coupons.reduce((sum, c) => sum + c.totalUsage, 0)) * 100).toFixed(1)
  };

  const filteredCoupons = coupons.filter(coupon =>
    coupon.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coupon.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedCoupons = filteredCoupons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);

  const topPerformingCoupons = [...coupons]
    .sort((a, b) => b.redemptions - a.redemptions)
    .slice(0, 20);

  const paginatedAnalytics = topPerformingCoupons.slice(
    (analyticsPage - 1) * itemsPerPage,
    analyticsPage * itemsPerPage
  );

  const analyticsTotalPages = Math.ceil(topPerformingCoupons.length / itemsPerPage);

  const handleCreateCoupon = () => {
    setModalMode('create');
    setFormData({
      code: '',
      description: '',
      discountType: 'Percentage',
      discountValue: '',
      validFrom: '',
      validTo: '',
      targetType: 'Cart (All Products)',
      userRole: 'Both',
      minOrder: '',
      maxDiscount: '',
      totalUsage: '',
      usagePerUser: '',
      newUsersOnly: false,
      status: true
    });
    setShowModal(true);
  };

  const handleEditCoupon = (coupon) => {
    setModalMode('edit');
    setSelectedCoupon(coupon);
    setFormData({
      code: coupon.code,
      description: coupon.description,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      validFrom: coupon.validFrom,
      validTo: coupon.validTo,
      targetType: coupon.targetType,
      userRole: coupon.userRole,
      minOrder: coupon.minOrder,
      maxDiscount: coupon.maxDiscount,
      totalUsage: coupon.totalUsage,
      usagePerUser: coupon.usagePerUser,
      newUsersOnly: coupon.newUsersOnly,
      status: coupon.status
    });
    setShowModal(true);
  };

  const handleDeleteCoupon = (id) => {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      setCoupons(coupons.filter(c => c.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setCoupons(coupons.map(c => 
      c.id === id ? { ...c, status: !c.status } : c
    ));
  };

  const handleSubmit = () => {
    if (modalMode === 'create') {
      const newCoupon = {
        id: coupons.length + 1,
        ...formData,
        discount: formData.discountType === 'Percentage' 
          ? `${formData.discountValue}.00%` 
          : `₹${formData.discountValue}`,
        redemptions: 0
      };
      setCoupons([...coupons, newCoupon]);
    } else {
      setCoupons(coupons.map(c => 
        c.id === selectedCoupon.id 
          ? { 
              ...c, 
              ...formData,
              discount: formData.discountType === 'Percentage' 
                ? `${formData.discountValue}.00%` 
                : `₹${formData.discountValue}`
            }
          : c
      ));
    }
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      <CouponHeader />
      <CouponTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onCreateCoupon={handleCreateCoupon} 
      />

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        {activeTab === 'coupons' ? (
          <>
            <CouponSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <CouponsTable 
              coupons={paginatedCoupons}
              totalCoupons={filteredCoupons.length}
              onEdit={handleEditCoupon} 
              onDelete={handleDeleteCoupon}
              onToggleStatus={handleToggleStatus}
            />
            {totalPages > 0 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={filteredCoupons.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </>
        ) : (
          <>
            <AnalyticsStats stats={stats} />
            <AnalyticsCharts stats={stats} />
            <TopPerformingTable 
              coupons={paginatedAnalytics}
              totalCoupons={topPerformingCoupons.length}
              startIndex={(analyticsPage - 1) * itemsPerPage}
            />
            {analyticsTotalPages > 0 && (
              <div className="mt-0">
                <Pagination 
                  currentPage={analyticsPage}
                  totalPages={analyticsTotalPages}
                  onPageChange={setAnalyticsPage}
                  totalItems={topPerformingCoupons.length}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            )}
          </>
        )}
      </div>

      <CouponModal 
        showModal={showModal}
        modalMode={modalMode}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
