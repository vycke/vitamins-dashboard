import React from 'react';

export default function PageHeader({ label, file, onUpload }) {
  return (
    <header>
      <h1>{`vitamins${label ? ' > ' + label : ''}`}</h1>
      {file && onUpload && (
        <>
          <input
            id="upload"
            type="file"
            multiple
            className="visually-hidden"
            onChange={(e) => onUpload(e.target.files, file)}
          />
          <label htmlFor="upload">{`Select ${file} file(s)`}</label>
        </>
      )}
    </header>
  );
}
