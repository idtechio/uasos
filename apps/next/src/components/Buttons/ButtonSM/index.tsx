import React, { ReactNode } from "react";
import FacebookLogo from "../../../../public/f_logo_RGB-White_58.png";
import IconGoogle from "../../../style/svgs/iconGoogle.svg";

import { Button, Text } from "./style";
import Image from "next/image";
import styled from "styled-components/native";

type Props = {
  id: string;
  anchor: ReactNode;
  onPress: () => void;
};
const FacebookButtonContainer = styled(Button)`
  background-color: #1877f2;
  padding: 0;
  padding-top: 4px;
  padding-bottom: 0px;
`;

const GoogleButtonContainer = styled(Button)`
  align-self: center;
  padding: 0;
`;

const ImageWrapper = styled.View`
  margin-left: 5px;
  margin-right: 0;
`;

const ButtonSM = ({ anchor, onPress, id }: Props) => {
  if (id === "facebook") {
    return (
      <FacebookButtonContainer onPress={onPress}>
        <ImageWrapper style={{ marginLeft: 5, marginRight: 0 }}>
          <Image
            src={FacebookLogo.src}
            width={40}
            height={40}
            alt="login with facebook"
          />
        </ImageWrapper>
        <Text>{anchor}</Text>
      </FacebookButtonContainer>
    );
  }
  if (id === "google") {
    return (
      <GoogleButtonContainer onPress={onPress}>
        <IconGoogle />
        <Text>{anchor}</Text>
      </GoogleButtonContainer>
    );
  }
  return <></>;
};

export default ButtonSM;
