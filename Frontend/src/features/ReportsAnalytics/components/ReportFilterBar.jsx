// ReportsAnalytics/components/ReportFilterBar.jsx
import React, { useState } from 'react';

const ReportFilterBar = ({ onDateChange, initialRange = 'Month' }) => {
  const [range, setRange] = useState(initialRange);
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [dateError, setDateError] = useState('');

  const handleRangeChange = (value) => {
    setRange(value);
    setDateError('');
    if (value !== 'Custom') {
      onDateChange(value);
    }
  };

  const handleStartDateChange = (value) => {
    setCustomStart(value);
    setDateError('');
    if (customEnd && new Date(value) > new Date(customEnd)) {
      setCustomEnd('');
      setDateError('End date must be after start date');
    }
  };

  const handleEndDateChange = (value) => {
    if (customStart && new Date(value) < new Date(customStart)) {
      setDateError('End date must be after start date');
      return;
    }
    setCustomEnd(value);
    setDateError('');
  };

  const handleCustomApply = () => {
    if (!customStart || !customEnd) {
      setDateError('Please select both start and end dates');
      return;
    }
    if (new Date(customStart) > new Date(customEnd)) {
      setDateError('End date must be after start date');
      return;
    }
    setDateError('');
    onDateChange({ start: customStart, end: customEnd });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <select
          className="p-2 border border-gray-300 rounded-md text-sm w-full lg:w-auto"
          value={range}
          onChange={(e) => handleRangeChange(e.target.value)}
        >
          <option value="Today">Today</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Custom">Custom</option>
        </select>
        {range === 'Custom' && (
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md text-sm"
              value={customStart}
              onChange={(e) => handleStartDateChange(e.target.value)}
            />
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-md text-sm"
              value={customEnd}
              onChange={(e) => handleEndDateChange(e.target.value)}
              min={customStart}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
              onClick={handleCustomApply}
            >
              Apply
            </button>
          </div>
        )}
        {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
      </div>
    </div>
  );
};

export default ReportFilterBar;