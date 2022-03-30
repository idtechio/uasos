import Link from "next/link";
import { useTranslation } from "next-i18next";

import { LostPassWrapper, StyledLink, StyledText } from "./styled";

const LostPass = () => {
  const { t } = useTranslation();
  return (
    <LostPassWrapper>
      <StyledText>
        {t("common:loginForm.lostPass")}{" "}
        <Link href={"/password-reset-init"} passHref>
          <StyledLink>{t("common:loginForm.click")}</StyledLink>
        </Link>
      </StyledText>
    </LostPassWrapper>
  );
};

export default LostPass;
