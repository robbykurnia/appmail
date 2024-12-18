import { PlusIcon } from "@heroicons/react/solid";
import Dropdown from "../DropDown";

import { useClickEvent } from "./usecases";
import { options } from "./consts";

import type { AddEventProps } from "./types";

const AddEvent = (props: AddEventProps) => {
  const { className, index } = props;
  const { active, handleBlur, handleClick, handleSelect } = useClickEvent({
    index,
  });

  return (
    <>
      <div>
        <Dropdown
          label={
            <div
              className={`${
                active ? "" : "invisible"
              } ${className} w-[30px] h-[30px] border flex justify-center items-center rounded border-[#D0D5DD] bg-white`}
              onClick={handleClick}
            >
              <PlusIcon className="w-[22px] h-[22px]" />
            </div>
          }
          onOutsideClick={handleBlur}
          options={options}
          onSelect={handleSelect}
        />
      </div>
    </>
  );
};

export default AddEvent;
