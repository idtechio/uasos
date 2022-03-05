import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { ButtonCta } from "../../Buttons";
import { CompositionSection } from "../../Compositions";

import { StyledText, Wrapper } from "./styled";

const GoToRegister: FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CompositionSection padding={[5, 15, 30, 15]} backgroundColor={"#fff"}>
        <StyledText>{t("loginForm.doNotHaveAcc")}</StyledText>
        <Link href={"/register"} passHref>
          <ButtonCta
            anchor={t("loginForm.register")}
            style={{
              width: "155px",
              textTransform: "capitalize",
              height: "43px",
              display: "flex",
              border: "2px solid blue",
              background: "#fff",
            }}
          />
        </Link>
      </CompositionSection>
    </Wrapper>
  );
};

export default GoToRegister;
