import React from "react";
import { View, Text } from "react-native";
import Link from "next/link";

import styled from "styled-components/native";
import FooterLogo from "../../style/svgs/footer_logo.svg";
import { FooterWrapper, Icon, LinkText } from "./styled";

const AppFooter = () => {
  return (
    <FooterWrapper>
      <Link href="/rodo" passHref>
        <LinkText>RODO</LinkText>
      </Link>
      <Icon>
        <FooterLogo />
      </Icon>
    </FooterWrapper>
  );
};

export default AppFooter;
