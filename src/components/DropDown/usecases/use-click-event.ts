import { useState, useRef, useEffect } from "react";
import { OptionType } from "../types";

interface Deps {
  onSelect: (option: OptionType) => void;
  onOutsideClick: () => void;
}

const useClickEvent = (deps: Deps) => {
  const { onSelect, onOutsideClick } = deps;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: OptionType) => {
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  const handleClickLabel = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return { dropdownRef, isOpen, handleClickLabel, handleSelect };
};

export default useClickEvent;
