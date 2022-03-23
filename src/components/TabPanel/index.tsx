import { useState } from "react";
import styled, { css } from "styled-components/native";

const TabPanelContainer = styled.View``;
const TabHeader = styled.View`
  display: flex;
  flex-direction: row;
`;
const TabItems = styled.View`
  background: #ffffff;
  padding-top: 33px;
  padding-bottom: 112px;
  border-radius: 6px;
  top: -3px;
`;
const TabItemContainer = styled.View``;

const Button = styled.Pressable<{ selected: boolean }>`
  ${(props) =>
    props.selected
      ? css`
          background-color: #ffffff;
          /* border-radius: 10px 6px; */
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        `
      : css``}

  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  display: inline-block;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;

const Text = styled.Text`
  color: #003566;
  font-weight: 700;
  line-height: 33px;
`;

type TabPanel = {
  key: string;
  title: string;
  content: React.ReactNode;
};

export type TabPanelProps = { items: TabPanel[]; initialSelectedIndex: number };

export default function TabPanel({
  items,
  initialSelectedIndex,
}: TabPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  return (
    <TabPanelContainer>
      <TabHeader>
        {items.map((item, index) => (
          <Button
            key={item.key}
            selected={selectedIndex === index}
            onPress={() => setSelectedIndex(index)}
          >
            <Text>{item.title}</Text>
          </Button>
        ))}
      </TabHeader>
      <TabItems>
        {items
          .filter((_, index) => index === selectedIndex)
          .map((item) => (
            <TabItemContainer key={item.key}>{item.content}</TabItemContainer>
          ))}
      </TabItems>
    </TabPanelContainer>
  );
}
