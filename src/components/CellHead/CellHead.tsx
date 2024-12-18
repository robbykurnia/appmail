import { CellHeadProps } from "./types";

const CellHead = (props: CellHeadProps) => {
  const { children } = props;

  return (
    <div className="p-[10px] bg-[#eaecf0] text-sm text-center truncate">
      {children}
    </div>
  );
};

export default CellHead;
