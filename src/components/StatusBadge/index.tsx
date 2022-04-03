import { useTranslation } from "next-i18next";
import React from "react";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";
import { MATCH_TYPE } from "../SupportSection/types";
type BadgeStyle = "disabled" | "positive" | "pending";

export default function StatusBadge({ state }: { state: MATCH_TYPE }) {
  const { t } = useTranslation();
  const BadgeContent: Record<
    MATCH_TYPE,
    { value: string; label: string; style: BadgeStyle }
  > = {
    "being-confirmed": {
      value: "x1",
      label: t("others:desktop.offer.status.beingConfirmed"),
      style: "pending",
    },
    confirmed: {
      value: "x2",
      label: t("others:desktop.offer.status.confirmed"),
      style: "positive",
    },
    "found-a-match": {
      value: "x3",
      label: t("others:desktop.offer.status.haveMatch"),
      style: "positive",
    },
    inactive: {
      value: "x4",
      label: t("others:ldesktop.offer.status.inactive"),
      style: "disabled",
    },
    "looking-for-match": {
      value: "x5",
      label: t("others:desktop.offer.status.lookingForMatch"),
      style: "pending",
    },
    rejected: {
      value: "x6",
      label: t("others:desktop.offer.status.rejected"),
      style: "disabled",
    },
  };
  const { style, label } = BadgeContent[state] || {
    label: "",
    color: "",
  };

  const Renderer = BadgeCollection[style];

  if (!Renderer) {
    return null;
  }

  return (
    <Renderer>
      <BadgeText>{label}</BadgeText>
    </Renderer>
  );
}

const BadgeBase = styled.View`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

const BadgeText = styled.Text`
  color: inherit;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding: 2px 8px;
`;

const PendingBadge = styled(BadgeBase)`
  color: #544700;
  background-color: ${({ theme }) =>
    (theme as Theme).colors.figmaPalette.ukYellow};
`;

const PositiveBadge = styled(BadgeBase)`
  color: white;
  background-color: ${({ theme }) =>
    (theme as Theme).colors.figmaPalette.positive};
`;

const DisabledBadge = styled(BadgeBase)`
  color: #7f7f7f;
  background-color: #c8c8c8;
`;
const BadgeCollection: Record<BadgeStyle, typeof BadgeBase> = {
  disabled: DisabledBadge,
  positive: PositiveBadge,
  pending: PendingBadge,
};
