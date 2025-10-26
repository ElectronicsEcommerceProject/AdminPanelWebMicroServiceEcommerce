import { useState } from 'react';
import { History } from 'lucide-react';
import NotificationHeader from '../components/NotificationHeader';
import NotificationTabs from '../components/NotificationTabs';
import LogsTable from '../components/LogsTable';
import Pagination from '../components/Pagination';
import { NOTIFICATION_LOGS } from '../api/notificationMock';

export default function LogsPage() {
  const [logs] = useState(NOTIFICATION_LOGS);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(logs.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      <NotificationHeader />
      <NotificationTabs />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <History className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Notification Logs</h2>
              <p className="text-xs sm:text-sm text-gray-600">View all sent notification history</p>
            </div>
          </div>
        </div>

        <LogsTable
          logs={logs}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={logs.length}
        />
      </div>
    </div>
  );
}
