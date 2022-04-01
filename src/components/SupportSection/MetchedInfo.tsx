import { useTranslation } from "next-i18next";
import styled from "styled-components/native";
import EmailIcon from "../../../src/style/svgs/matched_email.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import PhoneIcon from "../../../src/style/svgs/matched_phone.svg";
import { Label } from "./style";

export const MetchedInfo = ({
  name,
  email,
  phone_num,
}: {
  name: string;
  email: string;
  phone_num: string;
}) => {
  const { t } = useTranslation();

  return (
    <SectionInfo>
      <Info>
        <IconWrapper>
          <UsersIcon />
        </IconWrapper>
        <Label>{t("others:forms.generic.guest")}:</Label>
        <Label>{name}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <EmailIcon />
        </IconWrapper>
        <Label>{t("others:forms.generic.emailAddressWithData")}:</Label>
        <Label>{email}</Label>
      </Info>
      <Info>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        <Label>{t("others:forms.generic.phoneNumberWithData")}:</Label>
        <Label>{phone_num}</Label>
      </Info>
    </SectionInfo>
  );
};

const SectionInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 18px 0px;
  z-index: -1;
`;

const Info = styled.View`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  height: 30px;
  border-radius: 5px;
  padding: 0px 5px;
  border: 1px solid #f5f4f4;
`;

const IconWrapper = styled.View`
  margin-right: 7px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
