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
  const [shortLocale] = locale.split("-");
  switch (shortLocale.toLocaleLowerCase()) {
    case "pl":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/PL_flag.png"
          alt={t("flags.pl")}
        />
      );
    case "us":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/US_flag.png"
          alt={t("flags.us")}
        />
      );
    case "ru":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/RU_flag.png"
          alt={t("flags.ru")}
        />
      );
    case "ua":
      return (
        <Image
          width={SIZE.width}
          height={SIZE.height}
          src="/assets/UA_flag.png"
          alt={t("flags.ua")}
        />
      );
    default:
      return <></>;
  }
};
