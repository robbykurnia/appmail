export interface DateType {
  date: Date;
  dayOfWeek: string;
  formatted: string;
  label: string;
  isCurrentDate: boolean;
  campaigns: string[];
}

export type Calendar = DateType[];
