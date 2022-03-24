import { useBreakPointGetter } from "../hooks/useBreakPointGetter";

export const base = {
  breakPoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  },
  maxContainerWidth: 1200,
};

export type Theme = typeof primary & {
  getBreakPoint: ReturnType<typeof useBreakPointGetter>;
};

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
