import { ReactNode } from "react";

interface LabelProps {
  color: "red" | "yellow";
  children: ReactNode;
}

const Label = (props: LabelProps) => {
  const { children, color } = props;
  const colors = {
    red: "bg-[#D92D20] text-white",
    yellow: "bg-[#FEF0C7] text-[#101828",
  };

  return (
    <div className="w-full px-2">
      <div
        className={`${colors[color]} text-xs leading-5 font-semibold w-full text-center p-1 rounded truncate`}
      >
        {children}
      </div>
    </div>
  );
};

export default Label;
