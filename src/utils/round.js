export default function round(num, digits = 2, format = false) {
  if (isNaN(num)) num = 0;

  let result = +(Math.round(num + `e+${digits}`) + `e-${digits}`);
  if (isNaN(result)) result = 0;

  if (!result.toString().split('.')[1]) result += '.00';
  if (result.toString().split('.')[1].length < digits) result += '0';

  if (!format) return result;

  return parseFloat(round(result, 2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
