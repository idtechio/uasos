import React from "react";
import { useTranslation } from "app/common-i18n/use-translation";
import { Link } from "solito/link";
import { StyleSheet, Platform } from "react-native";
import { ButtonCta } from "../../Buttons";
import CompositionSection from "../../Compositions/CompositionSection/index.web";
import FormContainer from "../FormContainer";
import { StyledText, Wrapper } from "./styled";
import { Routes } from "../../../consts/router";
import { scale } from "app/utils/scale";

const GoToRegister = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CompositionSection padding={[5, 15, 30, 15]} backgroundColor="#fff">
        <FormContainer>
          <StyledText>{t("loginForm.doNotHaveAcc")}</StyledText>
          <Link href={Routes.REGISTER}>
            <ButtonCta anchor={t("loginForm.register")} style={styles.button} />
          </Link>
        </FormContainer>
      </CompositionSection>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Platform.OS === "web" ? 150 : scale(150),
    height: Platform.OS === "web" ? 43 : scale(43),
    display: "flex",
    border: "2px solid #003566",
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
});

export default GoToRegister;
