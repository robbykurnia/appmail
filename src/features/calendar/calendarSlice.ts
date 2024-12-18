import { createSlice } from "@reduxjs/toolkit";

import type { DateType } from "@/models/calendar";
import type { PayloadAction } from "@reduxjs/toolkit";

import getCalendarDates from "../../utils/getCalendarDates";

import { DUMMY_CAMPAIGN } from "../../models/consts";

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
    addEvent: (state, action: PayloadAction<DateType>) => {
      state.push(action.payload);
    },
    updateMonth: (
      _state,
      action: PayloadAction<{ month: number; year: number }>
    ) => {
      const { month, year } = action.payload;
      const calendar = getCalendarDates(month, year);
      console.log({ calendar });
      return calendar;
    },
    addCampaign: (
      state,
      action: PayloadAction<{ index: number; campaign: 1 | 2 | 3 }>
    ) => {
      const { campaign, index } = action.payload;
      state[index].campaigns.push(DUMMY_CAMPAIGN[campaign]);
    },
  },
});

export const { addEvent, updateMonth, addCampaign } = calendarSlice.actions;

export default calendarSlice.reducer;
