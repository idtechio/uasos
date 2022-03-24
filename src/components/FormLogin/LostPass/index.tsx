import Link from "next/link";

import { LostPassWrapper, StyledLink, StyledText } from "./styled";

const LostPass = () => {
  return (
    <LostPassWrapper>
      <StyledText>
        Nie pamiętasz hasła?{" "}
        <Link href={"/password-reset-init"} passHref>
          <StyledLink>Kliknij tutaj</StyledLink>
        </Link>
      </StyledText>
    </LostPassWrapper>
  );
};

export default LostPass;
