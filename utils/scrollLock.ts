import React from "react";
export const useScrollLock = () => {
  const lockScroll = React.useCallback((offset?: number) => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = (offset ?? 17) + "px";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);
  return {
    lockScroll,
    unlockScroll,
  };
};
