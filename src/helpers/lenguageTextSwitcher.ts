import { useRouter } from "next/router";

export type LenguageText = string | Array<{ locale: string; text: string }>;

const lenguageTextSwitcher = (text: LenguageText) => {
  const { locale } = useRouter();
  if (typeof text === "string") {
    return text;
  } else {
    return text.filter((item) => item.locale === locale)[0].text
      ? text.filter((item) => item.locale === locale)[0].text
      : "lenguge not suport";
  }
};

export default lenguageTextSwitcher;
