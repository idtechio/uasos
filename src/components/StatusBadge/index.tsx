import React from "react";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";
import { MatchState } from "../SupportSection/types";

type BadgeStyle = "disabled" | "positive" | "pending";

const BadgeContent: Record<
  MatchState,
  { value: string; label: string; style: BadgeStyle }
> = {
  BEING_CONFIRMED: { value: "x1", label: "Being confirmed", style: "pending" },
  CONFIRMED: { value: "x2", label: "Confirmed", style: "positive" },
  FOUND_MATCH: { value: "x3", label: "Found a match", style: "positive" },
  INACTIVE: { value: "x4", label: "Inactive", style: "disabled" },
  LOOKING_FOR_A_MATCH: {
    value: "x5",
    label: "Looking for a match",
    style: "pending",
  },
};

export default function StatusBadge({ state }: { state: MatchState }) {
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
