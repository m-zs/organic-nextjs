import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "src/utils/common";

export const useIsomorphicLayoutEffect = isBrowser()
  ? useLayoutEffect
  : useEffect;
