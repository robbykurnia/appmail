import { useEffect, useRef, useState } from "react";

import getCalendarDates from "../../../utils/getCalendarDates";
import getFormatMonthYear from "../../../utils/getFormatMonthYear";

const useClickEvent = () => {
  const [selectDate, setSelectDate] = useState({
    day: 0,
    month: 0,
    year: 0,
    label: "",
  });

  const mountRef = useRef(false);

  const dates = getCalendarDates(selectDate.month, selectDate.year);

  const handlePrevMonthClick = () => {
    setSelectDate((prev) => {
      const { day, month, year } = prev;

      if (month === 0) {
        const selectMonth = 11;
        const selectYear = year - 1;
        const label = getFormatMonthYear(selectMonth, selectYear);
        return { day, month: selectMonth, year: selectYear, label };
      }

      const selectMonth = month - 1;
      const selectYear = year;
      const label = getFormatMonthYear(selectMonth, selectYear);
      return { day, month: month - 1, year: year, label };
    });
  };

  const handleNextMonthClick = () => {
    setSelectDate((prev) => {
      const { day, month, year } = prev;

      if (month > 10) {
        const selectMonth = 0;
        const selectYear = year + 1;
        const label = getFormatMonthYear(selectMonth, selectYear);
        return { day, month: selectMonth, year: selectYear, label };
      }

      const selectMonth = month + 1;
      const selectYear = year;
      const label = getFormatMonthYear(selectMonth, selectYear);
      return { day, month: selectMonth, year: selectYear, label };
    });
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

  return { dates, selectDate, handlePrevMonthClick, handleNextMonthClick };
};

export default useClickEvent;
