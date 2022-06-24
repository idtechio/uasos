import React from "react";
import { useWindowDimensions } from "react-native";
import { useTranslation } from "../../common-i18n/use-translation";
import styled, { css } from "styled-components/native";
import RenderHtml from "react-native-render-html";
import EmailIcon from "../../style/svgs/matched_email.svg";
import UsersIcon from "../../style/svgs/users.svg";
import PhoneIcon from "../../style/svgs/matched_phone.svg";
import { Theme } from "../../provider/theme/theme.config";

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
  const { width } = useWindowDimensions();

  return (
    <SectionInfo>
      <Info>
        <IconWrapper>
          <UsersIcon />
        </IconWrapper>
        <InnerHTML>
          <RenderHtml
            contentWidth={width}
            source={{ html: t("others:forms.generic.guest", { name }) }}
          />
        </InnerHTML>
      </Info>
      <Info>
        <IconWrapper>
          <EmailIcon />
        </IconWrapper>

        <InnerHTML>
          <RenderHtml
            contentWidth={width}
            source={{
              html: t("others:forms.generic.emailAddressWithData", {
                mail: email,
              }),
            }}
          />
        </InnerHTML>
      </Info>
      <Info>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        <InnerHTML>
          <RenderHtml
            contentWidth={width}
            source={{
              html: t("others:forms.generic.phoneNumberWithData", {
                number: phone_num,
              }),
            }}
          />
        </InnerHTML>
      </Info>
    </SectionInfo>
  );
};

const SectionInfo = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  z-index: -1;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 18px 0px;
      `,
      native: css`
        gap: ${theme.scale(18)}px ${theme.scale(0)}px;
      `,
    })}
`;

const Info = styled.View<{ theme: Theme }>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #f5f4f4;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 30px;
        padding: 0px 5px;
      `,
      native: css`
        height: ${theme.scale(30)}px;
        padding-vertical: ${theme.scale(0)}px;
        padding-vertical: ${theme.scale(5)}px;
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

const InnerHTML = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 1em 0;
      `,
      native: css`
        margin-vertical: ${theme.scale(16)}px;
        margin-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;
