import styled from "styled-components/native";

export const Pill = styled.Text`
  border-radius: 4px;
  border: 1px ${(props) => props.theme.forms.border} solid;
  padding: 4px 6px;
  margin-right: 4px;
`;

export const PillContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  row-gap: 4px;
`;

export const Select = styled.Pressable`
  color: ${(props) => props.theme.colors.text};
  border-width: ${(props) => props.theme.forms.borderWidth};
  border-radius: ${(props) => props.theme.forms.borderRadius};
  border-color: ${(props) =>
    props.isInvalid ? props.theme.colors.error : props.theme.forms.border};
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: ${(props) => (props.showOptions ? `0 0 15px #cccccc` : `none`)};
`;

export const SelectText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  display: contents;
`;

export const PlaceholderText = styled.Text`
  color: ${(props) => props.theme.forms.placeholderColor};
`;

export const SelectLabel = styled.Pressable`
  color: ${(props) => props.theme.forms.labelColor};
  font-size: ${(props) => props.theme.forms.labelSize};
`;

export const Options = styled.View`
  color: "#000000";
  position: absolute;
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
  border-color: ${(props) => props.theme.forms.border};
  border-width: ${(props) => props.theme.forms.borderWidth};
  width: ${(props) => props.selectWidth + `px`};
  top: ${(props) =>
    props.direction === "to-bottom" ? props.selectHeight : `unset`};
  bottom: ${(props) =>
    props.direction === "to-top" ? props.selectHeight : `unset`};
  z-index: 100;
`;

export const ItemList = styled.FlatList`
  max-height: 200px;
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
`;

export const Icon = styled.View`
  transform: ${(props) => (props.showOptions ? `rotate(180deg)` : ``)};
`;

export const SelectItem = styled.Pressable`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.forms.border};
  background-color: ${(props) =>
    props.selected ? "rgba(56, 176, 0, 0.1)" : "#fff"};

  &:hover {
    background-color: #cccccc;
  }
`;

export const Search = styled.View`
  padding: 20px;
`;
