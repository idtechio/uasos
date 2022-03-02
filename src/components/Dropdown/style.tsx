import styled from "styled-components/native";

export const Select = styled.Pressable`
  color: ${(props) => props.theme.colors.text};
  border-width: ${(props) => props.theme.forms.borderWidth};
  border-radius: ${(props) => props.theme.forms.borderRadius};
  border-color: ${(props) => props.theme.forms.border};
  padding: 20px;
  font-size: 16px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  &:hover {
    // TO DO
  }
  box-shadow: ${(props) =>
    props.areOptionsVisible ? `0 0 15px #cccccc` : `none`};
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
`;

export const ItemList = styled.FlatList`
  max-height: 200px;
  background-color: ${(props) => props.theme.pageSection.backgroundColor};
`;

export const Icon = styled.View`
  transform: ${(props) => (props.areOptionsVisible ? `rotate(180deg)` : ``)};
`;

export const SelectItem = styled.Pressable`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.forms.border};
  &:hover {
    // TO DO
  }
`;

export const Search = styled.View`
  padding: 20px;
`;
