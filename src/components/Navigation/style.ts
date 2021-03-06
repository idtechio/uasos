import styled from "styled-components/native";

export const Stripe = styled.View`
  width: 24px
  border: 1px solid #003566;
  border-radius: 2px;
`;

export const ButtonContainer = styled.Pressable`
  display: flex;
  gap: 4px;
  justify-content: center;
  flex-direction: column;
`;

export const DrawerContainer = styled.View`
  background: white;
  right: 0;
  width: 275px;
  height: 100vh;
  position: absolute;
  margin-top: 70px;
  z-index: 2;
`;

export const DrawerEmptySpace = styled.Pressable`
  width: calc(100vw - 275px);
  height: 100vh;
  background-color: rgba(0, 87, 184, 0.9);
  position: absolute;
  left: 0;
  z-index: 2;
`;
