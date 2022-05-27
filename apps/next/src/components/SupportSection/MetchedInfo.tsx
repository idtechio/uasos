import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components/native";
import EmailIcon from "../../../src/style/svgs/matched_email.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import PhoneIcon from "../../../src/style/svgs/matched_phone.svg";

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
        <InnerHTML>
          <InnerHTMLText>
            {t("others:forms.generic.guest", { name })}
          </InnerHTMLText>
        </InnerHTML>
      </Info>
      <Info>
        <IconWrapper>
          <EmailIcon />
        </IconWrapper>

        <InnerHTML>
          <InnerHTMLText>
            {t("others:forms.generic.emailAddressWithData", {
              mail: email,
            })}
          </InnerHTMLText>
        </InnerHTML>
      </Info>
      <Info>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>

        <InnerHTML>
          <InnerHTMLText>
            {t("others:forms.generic.phoneNumberWithData", {
              number: phone_num,
            })}
          </InnerHTMLText>
        </InnerHTML>
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

const InnerHTML = styled.View`
  margin: 1em 0;
`;

const InnerHTMLText = styled.Text``;
