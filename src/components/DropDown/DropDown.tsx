import { useClickEvent } from "./usecases";
import { DropdownProps } from "./types";

const Dropdown = (props: DropdownProps) => {
  const { label, options, onSelect, onOutsideClick = () => null } = props;
  const { dropdownRef, isOpen, handleClickLabel, handleSelect } = useClickEvent(
    {
      onSelect,
      onOutsideClick,
    }
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleClickLabel}>{label}</div>

      {isOpen && (
        <ul className="absolute z-50 w-full min-w-max mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
