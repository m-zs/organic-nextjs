import React, { FC, ReactNode, useState } from "react";
import { usePopper } from "react-popper";

export interface PopperProps {
  container?: HTMLElement | null;
  children: ReactNode;
  className?: string;
  options?: Parameters<typeof usePopper>[2];
}

export const Popper: FC<PopperProps> = ({ container, children, options }) => {
  const [popperContainer, setPopperContainer] = useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(container, popperContainer, options);

  if (!container) return null;

  return (
    <div ref={setPopperContainer} style={styles.popper} {...attributes.popper}>
      {children}
    </div>
  );
};
