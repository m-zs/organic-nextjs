import { useState } from "react";
import { isBrowser } from "src/utils/common";
import { useIsomorphicLayoutEffect } from "./isomorphic-layout-effect/isomorphic-layout-effect";

export const useMatchMedia = (query: string): boolean => {
  const [isMatchingMediaQuery, setIsMatchingMediaQuery] = useState(
    isBrowser() && window.matchMedia(query).matches
  );

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser()) return;

    const handleMq = ({ matches }: { matches: boolean }) => {
      if (matches) {
        return setIsMatchingMediaQuery(true);
      }

      setIsMatchingMediaQuery(false);
    };

    const mq = window.matchMedia(query);
    mq.addListener(handleMq);

    return () => {
      mq.removeListener(handleMq);
    };
  }, [isMatchingMediaQuery, setIsMatchingMediaQuery, query]);

  return isMatchingMediaQuery;
};
