import { useTranslation } from "next-i18next";
import styled from "styled-components/native";
import ClockIcon from "../../../src/style/svgs/clock.svg";
import MarkerIcon from "../../../src/style/svgs/marker2.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import { Theme } from "../../style/theme.config";
import { Offer } from "./types";

export const AnnouncementHighlights = ({ data }: { data: Offer }) => {
  const { t } = useTranslation("desktop");

  return (
    <SectionInfo>
      <Info>
        <IconWrapper>
          <MarkerIcon />
        </IconWrapper>
        <Label>{t("city")}:</Label>
        <Label>{data.city}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <UsersIcon />
        </IconWrapper>
        <Label>{t("numberOfPeople")}:</Label>
        <Label>{data.beds}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <ClockIcon />
        </IconWrapper>
        <Label>{t("duration")}:</Label>
        <Label>{t(data.duration)}</Label>
      </Info>
    </SectionInfo>
  );
};

const SectionInfo = styled.View`
  z-index: -1;
`;

const Info = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-bottom: 7px;
`;

const Label = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  padding-right: 5px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

const IconWrapper = styled.View`
  margin-right: 7px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
