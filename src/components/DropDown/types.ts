import type { ReactNode } from "react";

export interface DropdownProps {
  label: ReactNode;
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  onOutsideClick?: () => void;
}

export interface OptionType {
  value: string | number;
  label: string;
}
