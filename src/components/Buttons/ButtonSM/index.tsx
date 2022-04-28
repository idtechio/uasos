import { ReactNode } from "react";
import FacebookLogo from "../../../../public/f_logo_RGB-White_58.png";
import IconGoogle from "../../../style/svgs/iconGoogle.svg";

import { Button, Text } from "./style";
import Image from "next/image";
import styled from "styled-components/native";
import { PROVIDERS } from "../../FormLogin/constants";

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

const ButtonSM = ({ anchor, onPress, id }: Props) => {
  return (
    <>
      {id === PROVIDERS.FACEBOOK ? (
        <FacebookButtonContainer onPress={onPress}>
          <div style={{ marginLeft: 5, marginRight: 0 }}>
            <Image
              src={FacebookLogo.src}
              width={40}
              height={40}
              alt="login with facebook"
            />
          </div>
          <Text>{anchor}</Text>
        </FacebookButtonContainer>
      ) : (
        <GoogleButtonContainer onPress={onPress}>
          <IconGoogle />
          <Text>{anchor}</Text>
        </GoogleButtonContainer>
      )}
    </>
  );
};

export default ButtonSM;
