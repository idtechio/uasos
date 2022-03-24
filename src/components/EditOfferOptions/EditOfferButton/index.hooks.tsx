import { RefObject, useEffect } from "react";
import { Platform, View } from "react-native";

export const useWebHandleClickOutside = (
  ref: RefObject<View>,
  opened: boolean,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const isWeb = Platform.OS === "web";
    const handleClickOutside = (ev: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as unknown as HTMLElement)?.contains(ev.target as Node)
      ) {
        onOutsideClick();
      }
    };

    if (ref.current && isWeb && opened) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (isWeb) {
        document.body.removeEventListener("click", handleClickOutside);
      }
    };
  }, [opened, onOutsideClick, ref]);
};
