import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import styled from "styled-components/native";
import ArrowIcon from "../../../src/style/svgs/arrow.svg";
import { Theme } from "../../style/theme.config";

export default function DetailsLink({
  href,
}: {
  href: string | { pathname: string; query: { id: string; type: string } };
}) {
  const { t } = useTranslation("others");
  return (
    <LinkWrapper>
      <Link href={href} passHref>
        <SectionDetails>
          <DetailsText>{t("common.actions.details")}</DetailsText>
          <ArrowIconWrapper>
            <ArrowIcon />
          </ArrowIconWrapper>
        </SectionDetails>
      </Link>
    </LinkWrapper>
  );
}

const DetailsText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: capitalize;
`;
const ArrowIconWrapper = styled.View`
  transform: rotate(270deg);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;
const SectionDetails = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LinkWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 28px;
`;
