import React from 'react';

const Dropdown = ({ options, value, onChange, label }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <select value={value} onChange={onChange} className="w-full px-3 py-2 border rounded">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
