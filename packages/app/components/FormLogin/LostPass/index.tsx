import React from "react";
import { Link } from "solito/link";
import { useTranslation } from "app/common-i18n/use-translation";

import { LostPassWrapper, StyledLink, StyledText } from "./styled";

const LostPass = () => {
  const { t } = useTranslation();
  return (
    <LostPassWrapper>
      <StyledText>
        {t("common:loginForm.lostPass")}{" "}
        <Link href={"/password-reset-init"}>
          <StyledLink>{t("common:loginForm.click")}</StyledLink>
        </Link>
      </StyledText>
    </LostPassWrapper>
  );
};

export default LostPass;
