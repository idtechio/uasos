import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

const TabPanelContainer = styled.View``;
const TabHeader = styled.View`
  display: flex;
  flex-direction: row;
`;
const TabItems = styled.View<{ theme: Theme }>`
  background: ${({ theme }: { theme: Theme }) => theme.colors.textOnAccent};
  border-radius: 6px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        top: -3px;
        padding-top: 13px;
        padding-bottom: 13px;
        margin-bottom: 16px;
      `,
      native: css`
        top: ${theme.scale(-3)}px;
        padding-vertical: ${theme.scale(13)}px;
        margin-bottom: ${theme.scale(16)}px;
      `,
    })}
`;
const TabItemContainer = styled.View``;

const Button = styled.Pressable<{ selected: boolean; theme: Theme }>`
  ${(props) =>
    props.selected
      ? css`
          background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.textOnAccent};
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        `
      : css``}

  text-align: center;
  display: inline-block;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 10px;
        padding-right: 10px;
      `,
      native: css`
        padding-horizontal: ${theme.scale(10)}px;
      `,
    })}

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
