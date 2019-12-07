import React from 'react';
import { Link } from '@reach/router';

export default function NavLink({ className = '', ...props }) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => ({
        className: `${className} ${isCurrent ? 'selected' : ''}`
      })}
    />
  );
}
