import { StyleProp, View, ViewStyle } from "react-native";
import { useTranslation } from "next-i18next";
import {
  WarningWrapper,
  HeaderText,
  ListedText,
  TextWrapper,
  ListWrapper,
  ListItem,
  Bullet,
} from "./style";
import WarningIcon from "../../style/svgs/warningTriangle.svg";

const ICON_DIM = 24;

export type WarningSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const WarningSection = ({ containerStyle }: WarningSectionProps) => {
  const { t } = useTranslation("offer-details");
  return (
    <WarningWrapper style={containerStyle}>
      <View>
        <WarningIcon width={ICON_DIM} height={ICON_DIM} />
      </View>
      <TextWrapper>
        <View>
          <HeaderText>{t("warningHeader")}</HeaderText>
          <HeaderText>{t("justInCase")}</HeaderText>
        </View>
        <ListWrapper>
          <ListItem>
            <Bullet />
            <ListedText>{t("verifyIdentity")}</ListedText>
          </ListItem>
          <ListItem>
            <Bullet />
            <ListedText>{t("verifyGroup")}</ListedText>
          </ListItem>
        </ListWrapper>
      </TextWrapper>
    </WarningWrapper>
  );
};

export default WarningSection;
