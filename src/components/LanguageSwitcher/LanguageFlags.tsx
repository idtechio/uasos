import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  locale: string;
}

const SIZE = {
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
          src="/assets/RU_flag.svg"
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
    default:
      return <Fragment />;
  }
};
