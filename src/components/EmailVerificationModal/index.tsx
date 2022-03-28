import { useContext } from "react";
import { Wrapper, StyledHeader, StyledText } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/PasswordReset.png";
import { TouchableOpacity } from "react-native";
import { Authorization } from "../../hooks/useAuth";
import { AuthContext } from "../../../pages/_app";

interface Props {
  onClose: () => void;
}
export default function EmailVerificationModal({ onClose }: Props) {
  const { identity } = useContext(AuthContext);
  return (
    <CardModal closeable={false}>
      <Wrapper>
        <Image src={SmsSent}></Image>
        <StyledHeader>SMS verification successfully completed</StyledHeader>
        <StyledText>
          we have sent a verification code to your email address. Click link to
          verify it
        </StyledText>
        <ButtonCta
          onPress={() => onClose()}
          anchor={"Continue"}
          style={{ width: "100px", marginTop: "30px" }}
        />
        <TouchableOpacity>
          <StyledText
            onPress={() => {
              if (identity) {
                Authorization.sendVerificationEmail(identity);
              }
            }}
          >
            Re-send code
          </StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
