import React from 'react';
import shortId from 'utils/shortId';

const Input = ({ value, onChange, label, className = '', ...props }) => {
  const ref = React.useRef(shortId());

  return (
    <div className={`input ${className}`}>
      <label htmlFor={ref.current}>{label}</label>
      <input
        id={ref.current}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
