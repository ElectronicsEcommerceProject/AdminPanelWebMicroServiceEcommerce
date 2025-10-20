import React from 'react';

const DateRangePicker = ({ startDate, endDate, onStartChange, onEndChange }) => {
  return (
    <div className="flex gap-2">
      <input type="date" value={startDate} onChange={onStartChange} className="px-3 py-2 border rounded" />
      <span>to</span>
      <input type="date" value={endDate} onChange={onEndChange} className="px-3 py-2 border rounded" />
    </div>
  );
};

export default DateRangePicker;
