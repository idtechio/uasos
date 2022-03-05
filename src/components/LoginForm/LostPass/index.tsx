import React from "react";
import { Text, View } from "react-native";
import Link from "next/link";
import styled from "styled-components/native";

const LostPass = () => {
  return (
    <LostPassWrapper>
      <StyledText>
        Nie pamiętasz hasła?{" "}
        <Link href={"/pass-resset"} passHref>
          <StyledLink>Kliknij tutaj</StyledLink>
        </Link>
      </StyledText>
    </LostPassWrapper>
  );
};

export default LostPass;

const LostPassWrapper = styled.View`
  margin-top: -30px;
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${({ theme }) => theme.colors.blue};
`;

const StyledLink = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
`;
