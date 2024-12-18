import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/solid";

interface MonthSelectorProps {
  label: string;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const MonthSelector = (props: MonthSelectorProps) => {
  const { label, onPrevClick, onNextClick } = props;

  return (
    <div className="flex items-center justify-center">
      <ChevronLeftIcon className="h-5 w-5" onClick={onPrevClick} />
      <div className="text-sm font-semibold">{label}</div>
      <ChevronRightIcon className="h-5 w-5" onClick={onNextClick} />
    </div>
  );
};

export default MonthSelector;
