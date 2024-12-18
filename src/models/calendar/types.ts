export interface Campaign {
  label: string;
  variant: "red" | "yellow";
}
export interface DateType {
  date: Date;
  dayOfWeek: string;
  formatted: string;
  label: string;
  isCurrentDate: boolean;
  campaigns: Campaign[];
}

export type Calendar = DateType[];
