import { Campaign, DateType } from "@/models/calendar";
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
      console.log("action.payload", action.payload);
      const dummy: Record<string, Campaign> = {
        1: { label: "Campaign idea 1", variant: "yellow" },
        2: { label: "Campaign idea 2", variant: "yellow" },
        3: { label: "Campaign idea 3", variant: "red" },
      };
      state[index].campaigns.push(dummy[campaign]);
    },
  },
});

export const { addEvent, updateMonth, addCampaign } = calendarSlice.actions;

export default calendarSlice.reducer;
