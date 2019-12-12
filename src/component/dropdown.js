import React from 'react';
import shortId from 'utils/shortId';

const Dropdown = ({ label, value, onChange, options, className }) => {
  const ref = React.useRef(shortId());

  return (
    <div className={`dropdown ${className}`}>
      <label htmlFor={ref.current}>{label}</label>
      <select
        value={value === undefined ? 'default' : value}
        id={ref.current}
        onChange={(e) => onChange(e.target.value)}>
        <option disabled value="default">
          -- select an option --
        </option>
        {options.map((o, i) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
