import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Dropdown from "../DropDown";

import type { OptionType } from "../DropDown/types";

interface Props {
  className?: string;
}

const AddEvent = (props: Props) => {
  const { className } = props;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  const options: OptionType[] = [
    { label: "Create campaign with AI", value: "0" },
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];

  const handleSelect = (option: OptionType) => {
    setActive(false);
    console.log("Selected option:", option);
  };

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
