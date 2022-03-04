import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContainerWrapper } from "./style";

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
  const hostAddAccommodation = false;
  const { data: session } = useSession();

  return (
    <CompositionAppBody>
      <CompositionContainer>
        <ContainerWrapper>
          <AddRefugeeAdvancedForm />
        </ContainerWrapper>
      </CompositionContainer>
    </CompositionAppBody>
  );
}
