import styled from "styled-components/native";

interface Props {
  locale: string;
}

const Wrapper = styled.Text`
  font-size: 24px;
  line-height: 0px;
`;

export const LanguageFlags = ({ locale }: Props) => {
  let flag = "";
  switch (locale.toLocaleLowerCase()) {
    case "pl":
      flag = "🇵🇱";
      break;
    case "ua":
      flag = "🇺🇦";
      break;
    case "ro":
      flag = "🇷🇴";
      break;
    case "ru":
      flag = "🇷🇺";
      break;
    case "en":
      flag = "🇬🇧";
      break;
    case "hu":
      flag = "🇭🇺";
      break;
    case "sk":
      flag = "🇸🇰";
      break;
    case "cs":
      flag = "🇨🇿";
      break;

    default:
      flag = "";
  }

  return <Wrapper>{flag}</Wrapper>;
};
