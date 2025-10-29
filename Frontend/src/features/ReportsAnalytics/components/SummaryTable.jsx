// ReportsAnalytics/components/SummaryTable.jsx
import React, { useState } from 'react';

const SummaryTable = ({ data = [], headers = [], itemsPerPage = 5, onRowClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border-b border-gray-200 text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 cursor-pointer" onClick={() => onRowClick?.(item)}>
                {Object.values(item).slice(0, headers.length).map((val, i) => (
                  <td key={i} className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
        <button
          className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm disabled:opacity-50"
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm disabled:opacity-50"
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SummaryTable;