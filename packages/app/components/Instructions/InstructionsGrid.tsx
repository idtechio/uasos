import React from "react";
import { useTranslation } from "next-i18next";

import { View } from "react-native";
import { DATA } from "./config";
import ListItem from "./ListItem";
import { InstructionsGridItem } from "./style";

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
        <InstructionsGridItem key={index}>
          <ListItem
            title={t(item.title)}
            image={item.image}
            text={t(item.text)}
            index={index}
          />
        </InstructionsGridItem>
      ))}
    </View>
  );
};
