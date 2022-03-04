import { signIn, useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContainerWrapper } from "./style";
import { ButtonCta } from "../../src/components/Buttons";
import { useTranslation } from "next-i18next";

import {
  CompositionAppBody,
  CompositionContainer,
} from "../../src/components/Compositions";
import AddRefugeeAdvancedForm from "../../src/components/AddRefugeeAdvancedForm";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
export default function Account(props) {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <CompositionAppBody>
      {session ? (
        <CompositionContainer>
          <ContainerWrapper>
            <AddRefugeeAdvancedForm />
          </ContainerWrapper>
        </CompositionContainer>
      ) : (
        <ButtonCta anchor={t("shareLocation")} onPress={() => signIn()} />
      )}
    </CompositionAppBody>
  );
}
