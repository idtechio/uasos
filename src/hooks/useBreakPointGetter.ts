import { useCallback, useLayoutEffect, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { base } from "../style/theme.config";

interface Params<T> {
  default?: T;
  mobile?: T;
  tablet?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

const BREAK_POINTS = {
  mobile: base.breakPoints.mobile,
  tablet: base.breakPoints.tablet,
  sm: base.breakPoints.sm,
  md: base.breakPoints.md,
  lg: base.breakPoints.lg,
  xl: base.breakPoints.xl,
  xxl: base.breakPoints.xxl,
};

const useIsomorphicEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useBreakPointGetter() {
  const { width } = useWindowDimensions();
  const [_width, setWidth] = useState<number | undefined>(undefined);
  const parsedWidth = _width ? width : undefined;

  /** This is a workaround for different class names on Server and Client */
  useIsomorphicEffect(() => {
    setWidth((current) => current ?? width);
  }, [width]);

  return useCallback(
    <T>(params: Params<T>) => {
      switch (true) {
        case params.xxl && width >= BREAK_POINTS.xxl:
          return params.xxl;
        case params.xl && width >= BREAK_POINTS.xl:
          return params.xl;
        case params.lg && parsedWidth && parsedWidth >= base.breakPoints.lg:
          return params.lg;
        case params.md && parsedWidth && parsedWidth >= base.breakPoints.md:
          return params.md;
        case params.sm && parsedWidth && parsedWidth >= base.breakPoints.sm:
          return params.sm;
        case params.tablet &&
          parsedWidth &&
          parsedWidth >= base.breakPoints.tablet:
          return params.tablet;
        case params.mobile &&
          parsedWidth &&
          parsedWidth >= base.breakPoints.mobile:
          return params.mobile;
        default:
          return params.default ?? null;
      }
    },
    [width, parsedWidth]
  );
}
