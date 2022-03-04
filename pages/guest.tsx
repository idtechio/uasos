import { StyleSheet, View } from "react-native";
import { useSession, signIn } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ButtonCta } from "../src/components/Buttons";

import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import AddRefugeeForm from "../src/components/AddRefugeeForm";
import { useTranslation } from "next-i18next";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
export default function Account(props) {
  const hostAddAccommodation = false;
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
    <CompositionAppBody>
      {session ? (
        <AddRefugeeForm />
      ) : (
        <ButtonCta anchor={t("shareLocation")} onPress={() => signIn()} />
      )}
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  container: {
    // maxWidth: "50%",
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto",
    flex: 1,
  },
});
