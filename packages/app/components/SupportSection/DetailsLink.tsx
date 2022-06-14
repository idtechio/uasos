import { useTranslation } from "../../common-i18n/use-translation";
import { TextLink } from "solito/link";
import React from "react";
import styled, { css } from "styled-components/native";
import ArrowIcon from "../../../src/style/svgs/arrow.svg";
import { Theme } from "../../provider/theme/theme.config";

export default function DetailsLink({
  href,
}: {
  href: string | { pathname: string; query: { id: string; type: string } };
}) {
  const { t } = useTranslation("others");
  return (
    <LinkWrapper>
      <TextLink href={href}>
        <SectionDetails>
          <DetailsText>{t("common.actions.details")}</DetailsText>
          <ArrowIconWrapper
            style={{
              transform: [{ rotate: "45deg" }],
            }}
          >
            <ArrowIcon />
          </ArrowIconWrapper>
        </SectionDetails>
      </TextLink>
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
const ArrowIconWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 16px;
        transform: rotate(270deg);
      `,
      native: css`
        margin-left: ${theme.scale(16)}px;
      `,
    })}
`;
const SectionDetails = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LinkWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-top: 28px;
      `,
      native: css`
        padding-top: ${theme.scale(28)}px;
      `,
    })}
`;
