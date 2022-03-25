import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

// ADDITIONAL INFO

export const Subtitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

export const Info = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

// DATA FIELD

export const DataWrapper = styled.View`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid
    ${({ theme }: { theme: Theme }) => theme.colors.borderLightGray};
`;

export const Label = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

export const Value = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

// DETAILS CARD

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;
  border-bottom-width: 1px
  border-bottom-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.borderGray};
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

export const CardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 18px 9.5px;
  margin-top: 15px;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.textOnAccent};
`;

// GUEST CARD CONTAINER && HOST CARD CONTAINER

export const FlexWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

// ADDITIONAL INFO

export const ItemsColumn = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
`;

export const ItemsRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
`;
