import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  locale: string;
  width?: number;
  height?: number;
}

export const LanguageFlags = ({ locale, width = 26, height = 17 }: Props) => {
  const { t } = useTranslation();
  switch (locale.toLocaleLowerCase()) {
    case "pl":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/PL_flag.svg"
          alt={t("flags.pl", "PL")}
        />
      );
    case "ua":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/UA_flag.svg"
          alt={t("flags.ua", "UA")}
        />
      );
    case "en":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/EN_flag.svg"
          alt={t("flags.en", "EN")}
        />
      );
    case "de":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/DE_flag.svg"
          alt={t("flags.de", "DE")}
        />
      );
    case "fr":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/FR_flag.svg"
          alt={t("flags.fr", "FR")}
        />
      );
    case "ro":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/RO_flag.svg"
          alt={t("flags.ro", "RO")}
        />
      );
    case "hu":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/HU_flag.svg"
          alt={t("flags.hu", "HU")}
        />
      );
    case "es":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/ES_flag.svg"
          alt={t("flags.es", "ES")}
        />
      );
    case "cs":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/CZ_flag.svg"
          alt={t("flags.cz", "CZ")}
        />
      );
    case "sk":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/SK_flag.svg"
          alt={t("flags.sk", "SK")}
        />
      );
    case "it":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/IT_flag.svg"
          alt={t("flags.it", "IT")}
        />
      );
    case "ru":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/RU_flag.svg"
          alt={t("flags.ru", "RU")}
        />
      );
    case "at":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/AT_flag.svg"
          alt={t("flags.at", "AT")}
        />
      );
    case "be":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/BE_flag.svg"
          alt={t("flags.be", "BE")}
        />
      );
    case "bg":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/BG_flag.svg"
          alt={t("flags.bg", "BG")}
        />
      );
    case "cy":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/CY_flag.svg"
          alt={t("flags.cy", "CY")}
        />
      );
    case "dk":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/DK_flag.svg"
          alt={t("flags.dk", "DK")}
        />
      );
    case "ee":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/EE_flag.svg"
          alt={t("flags.ee", "EE")}
        />
      );
    case "fi":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/FI_flag.svg"
          alt={t("flags.fi", "FI")}
        />
      );
    case "gr":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/GR_flag.svg"
          alt={t("flags.gr", "GR")}
        />
      );
    case "hr":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/HR_flag.svg"
          alt={t("flags.hr", "HR")}
        />
      );
    case "ie":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/IE_flag.svg"
          alt={t("flags.ie", "IE")}
        />
      );
    case "is":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/IS_flag.svg"
          alt={t("flags.is", "IS")}
        />
      );
    case "li":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/LI_flag.svg"
          alt={t("flags.li", "LI")}
        />
      );
    case "lt":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/LT_flag.svg"
          alt={t("flags.lt", "LT")}
        />
      );
    case "lu":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/LU_flag.svg"
          alt={t("flags.lu", "LU")}
        />
      );
    case "lv":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/LV_flag.svg"
          alt={t("flags.lv", "LV")}
        />
      );
    case "mt":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/MT_flag.svg"
          alt={t("flags.mt", "MT")}
        />
      );
    case "nl":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/NL_flag.svg"
          alt={t("flags.nl", "NL")}
        />
      );
    case "no":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/NO_flag.svg"
          alt={t("flags.no", "NO")}
        />
      );
    case "pt":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/PT_flag.svg"
          alt={t("flags.pt", "PT")}
        />
      );
    case "se":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/SE_flag.svg"
          alt={t("flags.se", "SE")}
        />
      );
    case "si":
      return (
        <Image
          width={width}
          height={height}
          src="/assets/SI_flag.svg"
          alt={t("flags.si", "SI")}
        />
      );
    default:
      return <Fragment />;
  }
};
