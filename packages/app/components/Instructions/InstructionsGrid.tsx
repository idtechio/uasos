import React from "react";
import { useTranslation } from "../../common-i18n/use-translation";

import { DATA } from "./config";
import ListItem from "./ListItem";
import { InstructionsGridContainer, InstructionsGridItem } from "./style";

const InstructionsGrid = () => {
  const { t } = useTranslation("landingPage");

  return (
    <InstructionsGridContainer>
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
    </InstructionsGridContainer>
  );
};

export default InstructionsGrid;
