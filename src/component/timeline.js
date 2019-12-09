import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ComposedChart,
  CartesianGrid
} from 'recharts';

const colors = ['#00A78E', '#477CD1', '#82D7D0', '#85A8E0', '#828AA4'];

export default function Timeline({ data, keys, className = '', title }) {
  return (
    <div className={`timeline card ${className}`}>
      {title && <h2 className="card__header">{title}</h2>}
      {data && data.length > 1 && (
        <div style={{ height: '100%', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <XAxis dataKey="timebox" inteval="preserveStartEnd" />
              {keys.map((k, i) => (
                <YAxis
                  yAxisId={k}
                  dataKey={k}
                  orientation={i % 2 === 0 ? 'left' : 'right'}
                />
              ))}
              {keys.length > 1 && <CartesianGrid strokeDasharray="3 3" />}

              <Tooltip />
              {keys.map((k, i) => (
                <Area
                  type="monotone"
                  dataKey={k}
                  yAxisId={k}
                  opacity="0.7"
                  stroke={colors[i]}
                  fill={colors[i]}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
