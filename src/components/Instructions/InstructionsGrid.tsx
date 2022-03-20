import { useTranslation } from "next-i18next";

import { StyleSheet, View } from "react-native";
import { DATA } from "./config";
import ListItem from "./ListItem";

export const InstructionsGrid = () => {
  const { t } = useTranslation("landingPage");

  return (
    <View
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /** @ts-ignore */
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "22px",
        alignSelf: "stretch",
      }}
    >
      {DATA.map((item, index) => (
        <View key={index} style={styles.item}>
          <ListItem
            title={t(item.title)}
            image={item.image}
            text={t(item.text)}
            index={index}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "225px",
    height: "225px",
  },
});
