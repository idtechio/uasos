import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  locale: string;
}

export const SIZE = {
  width: 26,
  height: 17,
};

export const LanguageFlags = ({ locale }: Props) => {
  const { t } = useTranslation();
  switch (locale.toLocaleLowerCase()) {
    case "pl":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/PL_flag.svg"
          alt={t("flags.pl", "PL")}
        />
      );
    case "ua":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/UA_flag.svg"
          alt={t("flags.ua", "UA")}
        />
      );
    case "en":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/EN_flag.svg"
          alt={t("flags.en", "EN")}
        />
      );
    case "de":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/DE_flag.svg"
          alt={t("flags.de", "DE")}
        />
      );
    case "fr":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/FR_flag.svg"
          alt={t("flags.fr", "FR")}
        />
      );
    case "ro":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/RO_flag.svg"
          alt={t("flags.ro", "RO")}
        />
      );
    case "hu":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/HU_flag.svg"
          alt={t("flags.hu", "HU")}
        />
      );
    case "es":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/ES_flag.svg"
          alt={t("flags.es", "ES")}
        />
      );
    case "cs":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/CZ_flag.svg"
          alt={t("flags.cz", "CZ")}
        />
      );
    case "sk":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/SK_flag.svg"
          alt={t("flags.sk", "SK")}
        />
      );
    case "it":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/IT_flag.svg"
          alt={t("flags.it", "IT")}
        />
      );
    case "ru":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/RU_flag.svg"
          alt={t("flags.ru", "RU")}
        />
      );
    case "at":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/AT_flag.svg"
          alt={t("flags.at", "AT")}
        />
      );
    case "be":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/BE_flag.svg"
          alt={t("flags.be", "BE")}
        />
      );
    case "bg":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/BG_flag.svg"
          alt={t("flags.bg", "BG")}
        />
      );
    case "cy":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/CY_flag.svg"
          alt={t("flags.cy", "CY")}
        />
      );
    case "dk":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/DK_flag.svg"
          alt={t("flags.dk", "DK")}
        />
      );
    case "ee":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/EE_flag.svg"
          alt={t("flags.ee", "EE")}
        />
      );
    case "fi":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/FI_flag.svg"
          alt={t("flags.fi", "FI")}
        />
      );
    case "gr":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/GR_flag.svg"
          alt={t("flags.gr", "GR")}
        />
      );
    case "hr":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/HR_flag.svg"
          alt={t("flags.hr", "HR")}
        />
      );
    case "ie":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/IE_flag.svg"
          alt={t("flags.ie", "IE")}
        />
      );
    case "is":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/IS_flag.svg"
          alt={t("flags.is", "IS")}
        />
      );
    case "li":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/LI_flag.svg"
          alt={t("flags.li", "LI")}
        />
      );
    case "lt":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/LT_flag.svg"
          alt={t("flags.lt", "LT")}
        />
      );
    case "lu":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/LU_flag.svg"
          alt={t("flags.lu", "LU")}
        />
      );
    case "lv":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/LV_flag.svg"
          alt={t("flags.lv", "LV")}
        />
      );
    case "mt":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/MT_flag.svg"
          alt={t("flags.mt", "MT")}
        />
      );
    case "nl":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/NL_flag.svg"
          alt={t("flags.nl", "NL")}
        />
      );
    case "no":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/NO_flag.svg"
          alt={t("flags.no", "NO")}
        />
      );
    case "pt":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/PT_flag.svg"
          alt={t("flags.pt", "PT")}
        />
      );
    case "se":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/SE_flag.svg"
          alt={t("flags.se", "SE")}
        />
      );
    case "si":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/SI_flag.svg"
          alt={t("flags.si", "SI")}
        />
      );
    default:
      return <Fragment />;
  }
};
