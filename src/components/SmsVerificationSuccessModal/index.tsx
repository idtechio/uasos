import { Wrapper, StyledHeader } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/PasswordReset.png";
import { useRouter } from "next/router";

export default function SmsVerificationModal() {
  const router = useRouter();
  return (
    <CardModal closeable={false}>
      <Wrapper>
        <Image src={SmsSent}></Image>
        <StyledHeader>SMS verification successfully completed</StyledHeader>
        <ButtonCta
          onPress={() => router.push("/dashboard")}
          anchor={"Continue"}
          style={{ width: "100px", marginTop: "30px" }}
        />
      </Wrapper>
    </CardModal>
  );
}
