import { useCallback, useLayoutEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { base } from "../style/theme.config";

interface Params<T> {
  default?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

const BREAK_POINTS = {
  sm: base.breakPoints.sm,
  md: base.breakPoints.md,
  lg: base.breakPoints.lg,
  xl: base.breakPoints.xl,
  xxl: base.breakPoints.xxl,
};

export function useBreakPointGetter() {
  const { width } = useWindowDimensions();
  const [_width, setWidth] = useState(undefined);
  const parsedWidth = _width ? width : undefined;

  /** This is a workaround for different class names on Server and Client */
  useLayoutEffect(() => {
    setWidth((current) => (current ? current : width));
  }, [width]);

  return useCallback(
    <T>(params: Params<T>) => {
      switch (true) {
        case params.xxl && width >= BREAK_POINTS.xxl:
          return params.xxl;
        case params.xl && width >= BREAK_POINTS.xl:
          return params.xl;
        case params.lg && parsedWidth >= base.breakPoints.lg:
          return params.lg;
        case params.md && parsedWidth >= base.breakPoints.md:
          return params.md;
        case params.sm && parsedWidth >= base.breakPoints.sm:
          return params.sm;
        default:
          return params.default ?? null;
      }
    },
    [parsedWidth]
  );
}
