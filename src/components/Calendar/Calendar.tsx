import { useClickEvent } from "./usecases";

import MonthSelector from "../MonthSelector";
import Grid from "../Grid";
import CellHead from "../CellHead";
import CellBody from "../CellBody";
import Chip from "../Chip";
import Label from "../Label";
import AddEvent from "../AddEvent";

import { days } from "../../models/consts";

const Calendar = () => {
  const { dates, selectDate, handleNextMonthClick, handlePrevMonthClick } =
    useClickEvent();

  return (
    <div className="p-[16px]">
      <div className="rounded-t-lg border border-[#D0D5DD]">
        <div className="h-[65px] relative flex justify-center">
          <MonthSelector
            label={selectDate.label}
            onPrevClick={handlePrevMonthClick}
            onNextClick={handleNextMonthClick}
          />
        </div>
        <Grid>
          {days.map((day) => (
            <CellHead key={day}>{day}</CellHead>
          ))}
        </Grid>
        <Grid>
          {dates.map((date) => (
            <CellBody key={date.label} className="group/addEvent h-[154px]">
              {date.isCurrentDate ? (
                <Chip>{date.label}</Chip>
              ) : (
                <div className="p-2.5">{date.label}</div>
              )}

              <div className="py-3 flex flex-col gap-y-2.5 items-center w-full">
                {/* <Label color="red">Campaign Eve</Label>
                <Label color="yellow">Campaign Idea 1</Label>
                <Label color="yellow">Campaign Idea 2</Label> */}
                <AddEvent className="group-hover/addEvent:visible" />
              </div>
            </CellBody>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Calendar;
