import { ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

interface CommonTheme {
  theme: Theme;
}
export const Container = styled.View<CommonTheme>(
  ({ theme }) => css`
    height: ${theme.scale(40)}px;
  `
);

export const Pill = styled.Text<CommonTheme>(
  ({ theme }) => css`
    border: 1px ${theme.forms.border} solid;

    ${theme.styleFor({
      web: css`
        border-radius: 4px;
        padding: 4px 6px;
        margin-right: 4px;
      `,
      native: css`
        border-radius: ${theme.scale(4)}px;
        padding: ${theme.scale(4)}px ${theme.scale(6)}px;
        margin-right: ${theme.scale(4)}px;
      `,
    })}
  `
);

export const PillContainer = styled.View<CommonTheme>(
  ({ theme }) => css`
    flex-direction: row;
    flex-wrap: wrap;

    ${theme.styleFor({
      web: css`
        max-width: 90%;
        row-gap: 4px;
      `,
    })}
  `
);

type SelectProps = { isInvalid?: boolean; showOptions?: boolean; theme: Theme };

export const Select = styled.Pressable<SelectProps>(
  ({ theme, isInvalid, showOptions }) => css`
    color: ${theme.colors.text};
    border-width: ${theme.forms.borderWidth};
    border-radius: ${theme.forms.borderRadius};
    border-color: ${isInvalid ? theme.colors.error : theme.forms.border};
    background-color: ${theme.pageSection.backgroundColor};

    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    ${theme.styleFor({
      web: css`
        padding: 10px;
        width: 100%;
        box-shadow: ${showOptions ? `0 0 15px #cccccc` : `none`};
      `,
      native: css`
        padding: ${theme.scale(10)}px;
        height: 100%;
      `,
    })}
  `
);

export const SelectText = styled.Text`
  font-size: 14px;
  line-height: 24px;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.forms.placeholderColor};
`;

export const SelectLabel = styled.Pressable(
  ({ theme }: { theme: Theme }) => css`
    color: ${theme.forms.labelColor};
    font-size: ${theme.forms.labelSize};
  `
);

type OptionsProps = {
  selectWidth?: number;
  selectHeight?: number;
  direction?: "to-bottom" | "to-top";
  theme: Theme;
};

export const Options = styled.View<OptionsProps>(
  ({ theme, selectWidth, direction, selectHeight }) => css`
    color: #000000;
    position: absolute;
    background-color: ${theme.pageSection.backgroundColor};
    border-color: ${theme.forms.border};
    border-width: ${theme.forms.borderWidth};
    width: ${selectWidth}px;
    ${direction === "to-bottom" &&
    css`
      top: ${selectHeight};
    `};
    ${direction === "to-top" &&
    css`
      bottom: ${selectHeight};
    `};
    z-index: 100;
  `
);

type ItemListProps = {
  autoHeight?: boolean;
  theme: Theme;
};

export const ItemList = styled.FlatList<ItemListProps>(
  ({ theme, autoHeight }) => css`
    background-color: ${theme.pageSection.backgroundColor};
    ${theme.styleFor({
      web: css`
        max-height: ${autoHeight ? "auto" : "200px"};
      `,
      native: css`
        max-height: ${theme.scale(200)}px;
      `,
    })}
  `
);

export const Icon = styled.View<{ showOptions?: boolean }>`
  transform: ${(props) => (props.showOptions ? `rotate(180deg)` : ``)};
`;

export const SelectItem = styled.Pressable<{
  selected?: boolean;
  activeStyle?: ViewStyle;
  theme: Theme;
}>(
  ({ theme, selected }) => css`
    border-color: ${theme.forms.border};
    background-color: ${selected ? "rgba(56, 176, 0, 0.1)" : "#fff"};

    ${theme.styleFor({
      web: css`
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 12px;
        border-bottom-width: 1px;

        &:hover {
          background-color: #cccccc;
        }
      `,
      native: css`
        padding-top: ${theme.scale(10)}px;
        padding-bottom: ${theme.scale(10)}px;
        padding-left: ${theme.scale(12)}px;
        border-bottom-width: ${theme.scale(1)}px;
      `,
    })}
  `
);

export const Search = styled.View`
  padding: 20px;
`;
