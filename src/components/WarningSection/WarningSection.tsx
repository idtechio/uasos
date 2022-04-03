import { StyleProp, View, ViewStyle } from "react-native";
import { useTranslation } from "next-i18next";
import { WarningWrapper, HeaderText, TextWrapper } from "./style";
import WarningIcon from "../../style/svgs/warningTriangle.svg";
import styled from "styled-components";
import { sanitize } from "../../helpers/sanitize";

const ICON_DIM = 24;

export type WarningSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const Test = styled.div`
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
            <Test
              dangerouslySetInnerHTML={{
                __html: sanitize(t("forms.match.usersWarning")),
              }}
            />
          </HeaderText>
        </View>
      </TextWrapper>
    </WarningWrapper>
  );
};

export default WarningSection;
