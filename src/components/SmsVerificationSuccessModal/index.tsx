import { Wrapper, StyledHeader } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/PasswordReset.png";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function SmsVerificationSuccessModal() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <CardModal closeable={false}>
      <Wrapper>
        <Image src={SmsSent}></Image>
        <StyledHeader>
          {t("others:common.sms.verificationSuccess")}
        </StyledHeader>
        <ButtonCta
          onPress={() => router.push("/dashboard")}
          anchor={"Continue"}
          style={{ width: "100px", marginTop: "30px" }}
        />
      </Wrapper>
    </CardModal>
  );
}
