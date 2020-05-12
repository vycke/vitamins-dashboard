import React from 'react';

export default function PageHeader({ label, file, onUpload }) {
  return (
    <header>
      <h1>{`vitamins${label ? ' > ' + label : ''}`}</h1>
      {onUpload && (
        <>
          <input
            id="upload"
            type="file"
            multiple
            className="visually-hidden"
            onChange={(e) => onUpload(e.target.files)}
          />
          <label htmlFor="upload">{`Select a file`}</label>
        </>
      )}
    </header>
  );
}
