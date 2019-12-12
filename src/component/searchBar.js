import React from 'react';
import { debounce } from 'vitamins';
import Input from './input';

export default function SearchBar({ value, onChange }) {
  const [search, setSearch] = React.useState(value);
  const debounced = debounce(onChange, 500);
  const handleChange = (v) => {
    setSearch(v);
    debounced(v);
  };

  return (
    <Input
      value={search}
      onChange={handleChange}
      className="gap-bottom gap-top"
      label="Search:"
    />
  );
}
