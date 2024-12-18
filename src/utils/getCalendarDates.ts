import { Calendar } from "../models/calendar";
import getFormattedDate from "./getFormattedDate";

const getCalendarDates = (month: number, year: number): Calendar => {
  if (!year) return [];

  const currentDate = new Date();

  const dates: Calendar = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Hari terakhir bulan yang dipilih
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Hari pertama bulan yang dipilih

  const prevMonthDays = firstDayOfMonth === 6 ? 0 : firstDayOfMonth - 1;
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  for (let i = prevMonthDays; i >= 0; i -= 1) {
    const prevMonthDate = new Date(year, month - 1, prevMonthLastDate - i);
    dates.push({
      date: prevMonthDate,
      dayOfWeek: prevMonthDate.toLocaleString("default", { weekday: "long" }),
      formatted: prevMonthDate.toLocaleDateString(), // Format lokal
      label: getFormattedDate(prevMonthDate),
      isCurrentDate: false,
      campaigns: [],
    });
  }

  for (let i = 1; i <= daysInMonth; i += 1) {
    const date = new Date(year, month, i);
    dates.push({
      date: date,
      dayOfWeek: date.toLocaleString("default", { weekday: "long" }),
      formatted: date.toLocaleDateString(),
      label: getFormattedDate(date),
      isCurrentDate:
        date.toLocaleDateString() === currentDate.toLocaleDateString(),
      campaigns: [],
    });
  }

  // 7 col x 5 row
  let offside = 35;

  // handle grid 7 col x 6 row
  if (dates.length > 35) {
    offside = 42;
  }

  const nextMonthDays = offside - dates.length;

  for (let i = 1; i <= nextMonthDays; i += 1) {
    const nextMonthDate = new Date(year, month + 1, i);
    dates.push({
      date: nextMonthDate,
      dayOfWeek: nextMonthDate.toLocaleString("default", { weekday: "long" }),
      formatted: nextMonthDate.toLocaleDateString(),
      label: getFormattedDate(nextMonthDate),
      isCurrentDate: false,
      campaigns: [],
    });
  }

  return dates;
};

export default getCalendarDates;
