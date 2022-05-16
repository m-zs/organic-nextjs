import { FC, ReactNode } from "react";
import { theme } from "src/styles";
import * as S from "./container.styles";

export type ContainerSize = keyof typeof theme["containers"];

export interface ContainerProps {
  children: ReactNode;
  size: ContainerSize;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  size,
  className,
}) => (
  <S.Wrapper size={size} className={className}>
    {children}
  </S.Wrapper>
);
