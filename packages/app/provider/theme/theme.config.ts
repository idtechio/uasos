import { scale } from "app/utils/scale";
import { styleFor } from "app/utils/styleFor";
import { useCallback, useLayoutEffect, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

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

export const base = {
  breakPoints: {
    mobile: 320,
    tablet: 481,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  },
  maxContainerWidth: 1200,
};

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

export const primary = {
  ...base,
  colors: {
    primary: "#FFD700",
    accent: "#0057B8",
    textOnAccent: "#FFFFFF",
    headings: "#003566",
    text: "#003566",
    cta: "#FFD700",
    textOnCta: "#003566",
    blue: "#003566",
    secondaryBlue: "#0057B8",
    error: "#d8000c",
    positive: "#38B000",
    alert: "#F44336",
    disabled: "#9A9A9A",
    darkgray: "#C8C8C8",
    lightgray: "#F8F8F8",
    warning: "#f443361a",
    borderGray: "#F2F2F2",
    borderLightGray: "#F5F4F4",
    figmaPalette: {
      ukYellow: "#FFD700",
      ukBlue: "#0057B8",
      fontMain: "#003566",
      alert: "#F44336",
      positive: "#38B000",
      positiveButtonFill: "rgba(56, 176, 0, 0.1)",
    },
  },
  fonts: {
    headings: "'Roboto', sans-serif",
    text: "'Roboto', sans-serif",
  },
  pageSection: {
    desktopSpacing: "35px",
    mobileSpacing: "35px",
    backgroundColor: "#FFF",
    backgroundColorAlt: "#F2F2F2",
  },
  forms: {
    border: "#BBBBBC",
    borderWidth: "1px",
    borderRadius: "4px",
    placeholderColor: "#BBBBBC",
    placeholderSize: "14px",
    labelColor: "#003566",
    labelSize: "12px",
  },
  scale,
  styleFor,
};

// TODO: DarkMode
export const secondary = {
  ...base,
  colors: {
    accent: "red",
    textOnAccent: "red",
    headings: "red",
    text: "red",
    cta: "red",
    textOnCta: "red",
  },
  fonts: {
    headings: "'Poppins', sans-serif",
    text: "'Rubik', sans-serif",
  },
};

export type Theme = typeof primary & {
  getBreakPoint: ReturnType<typeof useBreakPointGetter>;
  scale: ReturnType<typeof scale>;
  styleFor: ReturnType<typeof styleFor>;
};
