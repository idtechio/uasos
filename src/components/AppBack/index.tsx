import { useTranslation } from "next-i18next";
import Link from "next/link";

import ChevronIcon from "../../style/svgs/chevron-down.svg";
import { LinkContent, StyledText, Wrapper } from "./styled";
import { Routes } from "../../consts/router";
import { ViewStyle } from "react-native";

interface Props {
  to: string;
  style?: ViewStyle;
}

const AppBack = ({ to, style }: Props) => {
  const { t } = useTranslation("others");
  return (
    <Wrapper style={style}>
      <Link href={to || Routes.HOMEPAGE} passHref>
        <LinkContent>
          <ChevronIcon
            style={{
              transform: "rotate(90deg) translateX(-1px)",
              width: 24,
              height: 24,
            }}
          />
          <StyledText>{t("common.buttons.back")}</StyledText>
        </LinkContent>
      </Link>
    </Wrapper>
  );
};

export default AppBack;
