import { utcToZonedTime, format } from 'date-fns-tz';
export default function convertDateTime(input) {
  return format(
    utcToZonedTime(input, 'Europe/Amsterdam'),
    `dd-MM-yyyy HH:mm:ss`
  );
}
