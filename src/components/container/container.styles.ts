import styled from "styled-components";
import type { ContainerSize } from "./container.component";

export const Wrapper = styled("div")<{ size: ContainerSize }>`
  width: ${({ theme, size }) => theme.containers[size]};
  max-width: 100%;
  margin: 0 auto;
`;
