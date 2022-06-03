import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "../../../../apps/next/src/style/theme.config";

const TabPanelContainer = styled.View``;
const TabHeader = styled.View`
  display: flex;
  flex-direction: row;
`;
const TabItems = styled.View`
  background: ${({ theme }: { theme: Theme }) => theme.colors.textOnAccent};
  padding-top: 13px;
  padding-bottom: 13px;
  margin-bottom: 16px;
  border-radius: 6px;
  top: -3px;
`;
const TabItemContainer = styled.View``;

const Button = styled.Pressable<{ selected: boolean }>`
  ${(props) =>
    props.selected
      ? css`
          background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.textOnAccent};
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

const Text = styled.Text<{ selected: boolean; theme: Theme }>`
  ${(props) =>
    props.selected
      ? css`
          color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
        `
      : css`
          color: ${({ theme }: { theme: Theme }) => theme.colors.disabled};
        `}
  font-weight: 700;
  line-height: 33px;
`;

type TabPanel = {
  key: string;
  title: string;
  content: React.ReactNode;
};

export type TabPanelProps = {
  items: TabPanel[];
  initialSelectedIndex: number;
  tabItemsContainerStyle?: StyleProp<ViewStyle>;
};

export default function TabPanel({
  items,
  initialSelectedIndex,
  tabItemsContainerStyle,
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
            <Text selected={selectedIndex === index}>{item.title}</Text>
          </Button>
        ))}
      </TabHeader>
      <TabItems style={tabItemsContainerStyle}>
        {items
          .filter((_, index) => index === selectedIndex)
          .map((item) => (
            <TabItemContainer key={item.key}>{item.content}</TabItemContainer>
          ))}
      </TabItems>
    </TabPanelContainer>
  );
}
