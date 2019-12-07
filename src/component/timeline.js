import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell
} from 'recharts';

export default function Bars({ data, xKey, yKey }) {
  const [focus, setFocus] = React.useState(null);
  console.log(data);
  return (
    <div className="timeline card">
      <div style={{ height: '100%', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="1%"
            onMouseMove={(state) => {
              if (state.isTooltipActive) setFocus(state.activeTooltipIndex);
              else setFocus(null);
            }}>
            <XAxis dataKey={xKey} inteval="preserveStartEnd" />
            <YAxis />
            <Tooltip
              cursor={{
                backgroundColor: '#eaeff6'
              }}
            />

            <Bar dataKey={yKey}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={focus === index ? '#248F86' : '#00A78E'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
