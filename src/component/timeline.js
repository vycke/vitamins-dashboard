import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area
} from 'recharts';

export default function Timeline({ data, type, className = '', title }) {
  return (
    <div className={`timeline card ${className}`}>
      {title && <h2 className="card__header">{title}</h2>}
      {data && data.length > 1 && (
        <div style={{ height: '100%', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="timebox" inteval="preserveStartEnd" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={type}
                stroke="#00A78E"
                fill="#00A78E"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
