import React from 'react';
import { debounce } from 'vitamins';

export default function SearchBar({ value, onChange }) {
  const [search, setSearch] = React.useState(value);
  const debounced = debounce(onChange, 500);
  const handleChange = (v) => {
    setSearch(v);
    debounced(v);
  };

  return (
    <div className="input gap-bottom gap-top">
      <span>Search: </span>
      <input value={search} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}
