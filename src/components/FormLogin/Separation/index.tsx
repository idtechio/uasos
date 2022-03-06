import React from "react";
import styled from "styled-components/native";
import { useTranslation } from "next-i18next";

const Separation = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Detail />
      <StyledText>{t("loginForm.or")}</StyledText>
    </Wrapper>
  );
};

export default Separation;

const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Detail = styled.View`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  border: 1px solid #f5f4f4;
  z-index: -1;
`;

const StyledText = styled.Text`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.blue};
  background-color: #fff;
  display: block;
  padding: 0 15px;
  text-transform: capitalize;
`;
