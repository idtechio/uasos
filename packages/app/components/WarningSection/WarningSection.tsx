import React from "react";
import { StyleProp, View, ViewStyle, Platform } from "react-native";
import { useTranslation } from "../../common-i18n/use-translation";
import { WarningWrapper, HeaderText, TextWrapper } from "./style";
import WarningIcon from "../../style/svgs/warningTriangle.svg";
import styled from "styled-components/native";
import RenderHtml from "react-native-render-html";
import { scale } from "app/utils/scale";

const ICON_DIM = Platform.OS === "web" ? 24 : scale(24);

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
              <RenderHtml source={{ html: t("forms.match.usersWarning") }} />
            </Test>
          </HeaderText>
        </View>
      </TextWrapper>
    </WarningWrapper>
  );
};

export default WarningSection;
