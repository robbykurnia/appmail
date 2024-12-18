import { useDispatch } from "react-redux";
import { OptionType } from "../../../components/DropDown/types";
import { useState } from "react";
import { addCampaign } from "../../../features/calendar/calendarSlice";

interface Deps {
  index: number;
}

const useClickEvents = (deps: Deps) => {
  const { index } = deps;
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  const handleSelect = (option: OptionType) => {
    setActive(false);
    dispatch(
      addCampaign({ campaign: Number(option.value) as 1 | 2 | 3, index })
    );
  };

  return { active, handleClick, handleBlur, handleSelect };
};

export default useClickEvents;
