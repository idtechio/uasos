import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import ChevronIcon from "../../style/svgs/chevron-down.svg";
import { LinkContent, StyledText, Wrapper } from "./styled";
import { HOMEPAGE_ROUTE } from "../../consts/router";

interface Props {
  to: string;
}

const AppBack = ({ to }: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link href={to || HOMEPAGE_ROUTE} passHref>
        <LinkContent>
          <ChevronIcon
            style={{
              height: 17,
              transform: "rotate(90deg) translateX(-1px)",
            }}
          />
          <StyledText>{t("back")}</StyledText>
        </LinkContent>
      </Link>
    </Wrapper>
  );
};

export default AppBack;
