import { CellBodyProps } from "./types";

const CellBody = (props: CellBodyProps) => {
  const { children, className = "" } = props;
  return (
    <div
      className={`${className} h-[171px] bg-gray-50 text-sm flex items-center flex-col`}
    >
      {children}
    </div>
  );
};

export default CellBody;
