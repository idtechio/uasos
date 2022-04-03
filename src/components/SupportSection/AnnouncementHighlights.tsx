import { useTranslation } from "next-i18next";
import styled from "styled-components/native";
import ClockIcon from "../../../src/style/svgs/clock.svg";
import MarkerIcon from "../../../src/style/svgs/marker2.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import { Label } from "./style";

export const AnnouncementHighlights = ({
  city,
  beds,
  duration,
}: {
  city: string;
  beds: number;
  duration: string;
}) => {
  const { t } = useTranslation("others");

  return (
    <SectionInfo>
      <Info>
        <IconWrapper>
          <MarkerIcon />
        </IconWrapper>
        <Label>{t("forms.generic.cityWithData", { city })}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <UsersIcon />
        </IconWrapper>
        <Label>{t("desktop.host.numberOfPeople", { maxAmount: beds })}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <ClockIcon />
        </IconWrapper>
        <Label>
          {t("desktop.refuge.duration", {
            value: t(`common:hostAdd.accommodationTimeLabel.${duration}`),
          })}
        </Label>
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

const IconWrapper = styled.View`
  margin-right: 7px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
