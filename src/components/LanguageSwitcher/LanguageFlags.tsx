import { useTranslation } from "next-i18next";
import styled from "styled-components/native";
import Image from "next/image";

const FLAG_TYPE_EMOJI = "emoji";
const FLAG_TYPE_SVG = "svg";

interface Props {
  locale: string;
  width?: number;
  height?: number;
  type?: string;
}

const SIZE = {
  width: 26,
  height: 17,
};

const Wrapper = styled.Text`
  font-size: 24px;
  line-height: 0px;
`;
interface LocaleMap {
  [key: string]: string;
}
const emojis: LocaleMap = {
  pl: "🇵🇱",
  ua: "🇺🇦",
  ro: "🇷🇴",
  ru: "🇷🇺",
  en: "🇬🇧",
  hu: "🇭🇺",
  sk: "🇸🇰",
  cs: "🇨🇿",
};
const svgs: LocaleMap = {
  CS: "CZ",
};

const EmojiFlag = ({ locale, width = 26, height = 17 }: Props) => {
  return <Wrapper>{emojis[locale.toLowerCase()] || ""}</Wrapper>;
};

const SvgFlag = ({ locale }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Image
        width={SIZE.width}
        height={SIZE.height}
        src={`/assets/${
          svgs[locale.toUpperCase()] || locale.toUpperCase()
        }_flag.svg`}
        alt={t(`flags.${locale.toLowerCase()}`, locale.toUpperCase())}
      />
    </Wrapper>
  );
};

export const LanguageFlags = ({ locale, type }: Props) => {
  return (
    <>
      {type === FLAG_TYPE_EMOJI && <EmojiFlag locale={locale} />}
      {(!type || type === FLAG_TYPE_SVG) && <SvgFlag locale={locale} />}
    </>
  );
};
