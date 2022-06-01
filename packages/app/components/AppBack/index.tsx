import React from "react";
import { ViewStyle } from "react-native";
import { useTranslation } from "../../common-i18n/use-translation";
import { Link } from "solito/link";

import ChevronIcon from "../../style/svgs/chevron-down.svg";
import { LinkContent, StyledText, Wrapper, ChevronIconWrapper } from "./styled";
import { Routes } from "../../consts/router";

interface Props {
  to: string;
  style?: ViewStyle;
}

const AppBack = ({ to, style }: Props) => {
  const { t } = useTranslation("others");
  return (
    <Wrapper style={style}>
      <Link href={to || Routes.HOMEPAGE}>
        <LinkContent>
          <ChevronIconWrapper>
            <ChevronIcon />
          </ChevronIconWrapper>
          <StyledText>{t("common.buttons.back")}</StyledText>
        </LinkContent>
      </Link>
    </Wrapper>
  );
};

export default AppBack;
