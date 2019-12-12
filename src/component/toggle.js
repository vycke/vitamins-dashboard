import React from 'react';

const Toggle = ({ value, onClick, label }) => {
  const [check, setCheck] = React.useState(value);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(!check);
  };

  React.useEffect(() => {
    setCheck(value);
  }, [value]);

  return (
    <label className="toggle" data-state={check} onClick={handleClick}>
      <div className="thumb" />
      <input
        type="checkbox"
        checked={check}
        onChange={handleClick}
        aria-label={label}
      />
    </label>
  );
};

export default Toggle;
