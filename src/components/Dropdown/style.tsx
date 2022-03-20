import { ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const Pill = styled.Text`
  border-radius: 4px;
  border: 1px ${({ theme }: { theme: Theme }) => theme.forms.border} solid;
  padding: 4px 6px;
  margin-right: 4px;
`;

export const PillContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  row-gap: 4px;
`;

type SelectProps = { isInvalid?: boolean; showOptions?: boolean; theme: Theme };
export const Select = styled.Pressable<SelectProps>`
  color: ${({ theme }) => theme.colors.text};
  border-width: ${({ theme }) => theme.forms.borderWidth};
  border-radius: ${({ theme }) => theme.forms.borderRadius};
  border-color: ${(props: SelectProps) =>
    props.isInvalid ? props.theme.colors.error : props.theme.forms.border};
  background-color: ${({ theme }) => theme.pageSection.backgroundColor};
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: ${(props: SelectProps) =>
    props.showOptions ? `0 0 15px #cccccc` : `none`};
`;

export const SelectText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  display: contents;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.forms.placeholderColor};
`;

export const SelectLabel = styled.Pressable`
  color: ${({ theme }: { theme: Theme }) => theme.forms.labelColor};
  font-size: ${({ theme }: { theme: Theme }) => theme.forms.labelSize};
`;

type OptionsProps = {
  selectWidth?: number;
  selectHeight?: number;
  direction?: "to-bottom" | "to-top";
  theme: Theme;
};

export const Options = styled.View<OptionsProps>`
  color: "#000000";
  position: absolute;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.pageSection.backgroundColor};
  border-color: ${({ theme }: { theme: Theme }) => theme.forms.border};
  border-width: ${({ theme }: { theme: Theme }) => theme.forms.borderWidth};
  width: ${(props) => props.selectWidth + `px`};
  top: ${(props) =>
    props.direction === "to-bottom" ? props.selectHeight : `unset`};
  bottom: ${(props) =>
    props.direction === "to-top" ? props.selectHeight : `unset`};
  z-index: 100;
`;

type ItemListProps = {
  autoHeight?: boolean;
  theme: Theme;
};

export const ItemList = styled.FlatList<ItemListProps>`
  max-height: ${(props) => {
    return props.autoHeight ? "auto" : "200px";
  }};

  background-color: ${({ theme }: { theme: Theme }) =>
    theme.pageSection.backgroundColor};
`;

export const Icon = styled.View<{ showOptions?: boolean }>`
  transform: ${(props) => (props.showOptions ? `rotate(180deg)` : ``)};
`;

export const SelectItem = styled.Pressable<{
  selected?: boolean;
  activeStyle?: ViewStyle;
  theme: Theme;
}>`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.forms.border};
  background-color: ${(props) =>
    props.selected ? "rgba(56, 176, 0, 0.1)" : "#fff"};

  &:hover {
    background-color: #cccccc;
  }
`;

export const Search = styled.View`
  padding: 20px;
`;
