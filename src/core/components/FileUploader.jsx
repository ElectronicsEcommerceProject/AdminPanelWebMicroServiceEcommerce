import React from 'react';

const FileUploader = ({ onFileSelect }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
      <input type="file" onChange={(e) => onFileSelect(e.target.files[0])} className="hidden" id="file-upload" />
      <label htmlFor="file-upload" className="cursor-pointer text-blue-500">Click to upload</label>
    </div>
  );
};

export default FileUploader;
