import styled from "styled-components/native";

export const CenterBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Curtain = styled.View<{ onClick?: (e: Event) => void }>`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  background-color: #000;
  left: 0;
  top: 0;
  opacity: 40%;
`;

export const CloseIconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;
