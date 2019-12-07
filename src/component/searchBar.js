import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <span>Search: </span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
