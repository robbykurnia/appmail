import type { ReactNode } from "react";

/** @jsxImportSource @emotion/react */
import { containerCx } from "./style";

interface ChipProps {
  children: ReactNode;
}

const Chip = (props: ChipProps) => {
  const { children } = props;

  return (
    <div css={containerCx} className="bg-[#101828] text-white">
      {children}
    </div>
  );
};

export default Chip;
