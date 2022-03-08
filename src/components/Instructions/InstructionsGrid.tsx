import { useTranslation } from "next-i18next";
import * as React from "react";
import { View } from "react-native";
import { DATA } from "./config";
import ListItem from "./ListItem";

export const InstructionsGrid = () => {
  const { t } = useTranslation("landingPage");

  return (
    <View
      /** @ts-ignore */
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "22px",
        alignSelf: "stretch",
      }}
    >
      {DATA.map((item, index) => (
        <View key={index} style={{ width: "225px", height: "225px" }}>
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
