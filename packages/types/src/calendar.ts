// TODO: change to interface
export interface Calendar {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  timezone: string;
  date: string;
  time: string;
  datetime: string;
  timestamp: number;
  utc: string;
  iso: string;
  format: (pattern: string) => string;
  add: (value: number, unit: string) => Calendar;
  subtract: (value: number, unit: string) => Calendar;
  startOf: (unit: string) => Calendar;
  endOf: (unit: string) => Calendar;
  diff: (calendar: Calendar, unit: string) => number;
  isBefore: (calendar: Calendar) => boolean;
  isAfter: (calendar: Calendar) => boolean;
  isSame: (calendar: Calendar) => boolean;
  isBetween: (start: Calendar, end: Calendar) => boolean;
  isLeapYear: () => boolean;
  isDST: () => boolean;
  isDSTShift: () => boolean;
  isDSTStart: () => boolean;
  isDSTEnd: () => boolean;
  isValid: () => boolean;
  toArray: () => number[];
  toJSON: () => string;
  toString: () => string;
  valueOf: () => number;
  toISOString: () => string;
  toTimestamp: () => number;
  toTimezone: (timezone: string) => Calendar;
  toFormat: (pattern: string) => string;
  toDay: () => number;
  toMonth: () => number;
  toYear: () => number;
  toHour: () => number;
  toMinute: () => number;
  toSecond: () => number;
  toMillisecond: () => number;
  toTime: () => string;
  toDate: () => string;
  toDatetime: () => string;
  toUTC: () => Calendar;
  toLocal: () => Calendar;
  toISO: () => Calendar;
  toObject: () => Record<string, number>;
}
