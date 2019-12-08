import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area
} from 'recharts';
import { createTimeLineData } from 'utils/timeline';

export default function Timeline({
  data,
  type,
  key,
  metaKey,
  className = '',
  title
}) {
  if (!data || data.length <= 1) return null;
  return (
    <div className={`timeline card ${className}`}>
      {title && <h2 className="card__header">{title}</h2>}
      <div style={{ height: '100%', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={createTimeLineData(data, type, key, 50, metaKey)}>
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
    </div>
  );
}
