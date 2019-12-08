import React from 'react';

export default function TopList({ data, type, className = '', title }) {
  return (
    <div className={`card ${className}`}>
      {title && <h2 className="card__header">{title}</h2>}
      <div className="card__content">
        <div className="list">
          {data &&
            data.length > 0 &&
            data.map((d, i) => (
              <React.Fragment key={i}>
                <span>{d.name}</span>
                <span className="text-right">{d.count}</span>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
