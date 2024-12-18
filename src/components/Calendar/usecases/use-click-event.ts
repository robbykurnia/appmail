import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateMonth } from "../../../features/calendar/calendarSlice";
import getFormatMonthYear from "../../../utils/getFormatMonthYear";

import type { RootState } from "@/app/store";

const useClickEvent = () => {
  const [selectDate, setSelectDate] = useState({
    day: 0,
    month: 0,
    year: 0,
    label: "",
  });

  const mountRef = useRef(false);

  const calendar = useSelector((state: RootState) => state.calendar);
  console.log("calendar", calendar);
  const dispatch = useDispatch();

  const handlePrevMonthClick = () => {
    const { day, month, year } = selectDate;

    let selectMonth = month - 1;
    let selectYear = year;

    if (month === 0) {
      selectMonth = 11;
      selectYear = year - 1;
    }

    const label = getFormatMonthYear(selectMonth, selectYear);

    dispatch(updateMonth({ month: selectMonth, year: selectYear }));
    setSelectDate({ day, month: selectMonth, year: selectYear, label });
  };

  const handleNextMonthClick = () => {
    const { day, month, year } = selectDate;

    let selectMonth = month + 1;
    let selectYear = year;

    if (month > 10) {
      selectMonth = 0;
      selectYear = year + 1;
    }

    const label = getFormatMonthYear(selectMonth, selectYear);
    dispatch(updateMonth({ month: selectMonth, year: selectYear }));

    setSelectDate({ day, month: selectMonth, year: selectYear, label });
  };

  useEffect(() => {
    if (mountRef.current) {
      return;
    }

    mountRef.current = true;

    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const label = getFormatMonthYear(month, year);

    setSelectDate({ day, month, year, label });
  }, []);

  return {
    dates: calendar,
    selectDate,
    handlePrevMonthClick,
    handleNextMonthClick,
  };
};

export default useClickEvent;
