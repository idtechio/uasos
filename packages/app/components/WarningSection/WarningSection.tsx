import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTranslation } from "next-i18next";
import { WarningWrapper, HeaderText, TextWrapper } from "./style";
import WarningIcon from "../../style/svgs/warningTriangle.svg";
import styled from "styled-components/native";
import { sanitize } from "../../../../apps/next/src/helpers/sanitize";

const ICON_DIM = 24;

export type WarningSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const Test = styled.View`
  b {
  }
  ul {
    padding: 0 0 0 18px;
    margin: 0;
    display: flex;
    flex-direction: column;

    li {
      margin-top: 10px;
    }
  }
`;

const TestText = styled.Text``;

const WarningSection = ({ containerStyle }: WarningSectionProps) => {
  const { t } = useTranslation("others");
  return (
    <WarningWrapper style={containerStyle}>
      <View>
        <WarningIcon width={ICON_DIM} height={ICON_DIM} />
      </View>
      <TextWrapper>
        <View>
          <HeaderText>
            <Test>
              <TestText>{sanitize(t("forms.match.usersWarning"))}</TestText>
            </Test>
          </HeaderText>
        </View>
      </TextWrapper>
    </WarningWrapper>
  );
};

export default WarningSection;
