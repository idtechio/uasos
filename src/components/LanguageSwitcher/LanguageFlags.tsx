import { useTranslation } from "next-i18next";
import Image from "next/image";

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
          src="/assets/PL_flag.png"
          alt={t("flags.pl", "PL")}
        />
      );
    case "uk":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/UA_flag.png"
          alt={t("flags.ua", "UA")}
        />
      );
    case "en":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/US_flag.png"
          alt={t("flags.en", "EN")}
        />
      );
    case "de":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/DE_flag.png"
          alt={t("flags.de", "DE")}
        />
      );
    case "fr":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/FR_flag.png"
          alt={t("flags.fr", "FR")}
        />
      );
    case "uk":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/RO_flag.png"
          alt={t("flags.ro", "RO")}
        />
      );
    case "hu":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/HU_flag.png"
          alt={t("flags.hu", "HU")}
        />
      );
    case "es":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/ES_flag.png"
          alt={t("flags.es", "ES")}
        />
      );
    case "cz":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/CZ_flag.png"
          alt={t("flags.cz", "CZ")}
        />
      );
    case "sk":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/SK_flag.png"
          alt={t("flags.sk", "SK")}
        />
      );
    case "it":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/IT_flag.png"
          alt={t("flags.it", "IT")}
        />
      );
    default:
      return <></>;
  }
};
