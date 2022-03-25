import { useTranslation } from "next-i18next";
import Link from "next/link";
import { StyleSheet } from "react-native";

import { ButtonCta } from "../../Buttons";
import { CompositionSection } from "../../Compositions";
import FormContainer from "../FormContainer";

import { StyledText, Wrapper } from "./styled";

const GoToRegister = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CompositionSection padding={[5, 15, 30, 15]} backgroundColor="#fff">
        <FormContainer>
          <StyledText>{t("loginForm.doNotHaveAcc")}</StyledText>
          <Link href={"/register"} passHref>
            <ButtonCta anchor={t("loginForm.register")} style={styles.button} />
          </Link>
        </FormContainer>
      </CompositionSection>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "150px",
    textTransform: "capitalize",
    height: "43px",
    display: "flex",
    border: "2px solid #003566",
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
});

export default GoToRegister;
