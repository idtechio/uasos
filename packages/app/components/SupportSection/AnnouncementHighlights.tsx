import React from "react";
import { useTranslation } from "../../common-i18n/use-translation";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import ClockIcon from "../../../src/style/svgs/clock.svg";
import MarkerIcon from "../../../src/style/svgs/marker2.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import { Label } from "./style";

export type Duration =
  | "less_than_week"
  | "week"
  | "two_weeks"
  | "month"
  | "longer";

export const AnnouncementHighlights = ({
  city,
  beds,
  duration,
}: {
  city?: string;
  beds: number;
  duration: string;
}) => {
  const { t } = useTranslation(["others", "common"]);

  return (
    <SectionInfo>
      <Info>
        <IconWrapper>
          <MarkerIcon />
        </IconWrapper>
        <Label>{t("others:forms.generic.cityWithData", { city })}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <UsersIcon />
        </IconWrapper>
        <Label>
          {t("others:desktop.host.numberOfPeople", { maxAmount: beds })}
        </Label>
      </Info>
      <Info>
        <IconWrapper>
          <ClockIcon />
        </IconWrapper>
        <Label>
          {t("others:desktop.refuge.duration", {
            value: t(
              `common:hostAdd.accommodationTimeLabel.${duration as Duration}`
            ),
          })}
        </Label>
      </Info>
    </SectionInfo>
  );
};

const SectionInfo = styled.View`
  z-index: -1;
`;

const Info = styled.View<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-bottom: 7px;
      `,
      native: css`
        padding-bottom: ${theme.scale(7)}px;
      `,
    })}
`;

const IconWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 15px;
        height: 15px;
        margin-right: 7px;
      `,
      native: css`
        width: ${theme.scale(15)}px;
        height: ${theme.scale(15)}px;
        margin-right: ${theme.scale(7)}px;
      `,
    })}
`;
