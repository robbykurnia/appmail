import { Calendar, DateType } from "@/models/calendar";
import getCalendarDates from "../../utils/getCalendarDates";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const getInitialCalendar = () => {
  const now = new Date();

  const month = now.getMonth();
  const year = now.getFullYear();
  return getCalendarDates(month, year);
};

const initialState: DateType[] = getInitialCalendar();

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    // Add a new event
    addEvent: (state, action: PayloadAction<DateType>) => {
      state.push(action.payload);
    },
    updateMonth: (
      state,
      action: PayloadAction<{ month: number; year: number }>
    ) => {
      const { month, year } = action.payload;
      const calendar = getCalendarDates(month, year);
      console.log({ calendar });
      return calendar;
    },

    // // Update an event by ID
    // updateEvent: (state, action: PayloadAction<DateType>) => {
    //   const index = state.findIndex((event) => event.id === action.payload.id);
    //   if (index !== -1) {
    //     state[index] = action.payload;
    //   }
    // },

    // // Delete an event by ID
    // deleteEvent: (state, action: PayloadAction<string>) => {
    //   return state.filter((event) => event.id !== action.payload);
    // },
  },
});

export const { addEvent, updateMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
