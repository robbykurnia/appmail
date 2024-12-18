import { GridProps } from "./types";

const Grid = (props: GridProps) => {
  const { children, borderColor = "#D0D5DD" } = props;

  return (
    <div
      className={`grid grid-cols-7 gap-px`}
      style={{ backgroundColor: borderColor }}
    >
      {children}
    </div>
  );
};

export default Grid;
