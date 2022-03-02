import styled from "styled-components/native";

export default styled.View`
  background: #ffffff;
  ${(props) => props.width !== undefined && `width: ${props.width}px`};
  padding: 24px 12px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
`;
