import { differenceInSeconds } from 'date-fns';
import convertDateTime from './convertDateTime';

function sum(list, key) {
  let result = 0;
  list.forEach((l) => {
    if (l.metadata) result += l.metadata[key];
  });
  return result;
}

export function createTimeLineData(
  data = [],
  type = 'amount',
  metaKey,
  key = 'timestamp',
  steps = 50
) {
  if (!data || data.length === 0) return [];

  const firstDate = new Date(data[data.length - 1][key]);
  const lastDate = new Date(data[0][key]);
  const interval = Math.round(
    differenceInSeconds(lastDate, firstDate) / (steps - 1)
  );
  const groups = [];

  for (let i = 0; i < steps; i++) {
    const start = firstDate.toISOString();
    const end = new Date(
      firstDate.setSeconds(firstDate.getSeconds() + interval)
    ).toISOString();
    const timebox = convertDateTime(start);
    const filteredData = data.filter((d) => d[key] <= end && d[key] >= start);

    let value;
    if (type === 'amount') value = filteredData.length;
    else if (type === 'total') value = sum(filteredData, metaKey);
    else if (type === 'average') {
      value = sum(filteredData, metaKey);
      if (value !== 0) value = value / filteredData.length;
    }

    groups.push({ timebox, [type]: value });
  }

  return groups;
}
