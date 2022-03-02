import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import AddAccommodationForm from "../src/components/AddAccommodationForm";
import { StyleSheet, View } from "react-native";
import { useSession, signIn } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ButtonCta } from "../src/components/Buttons";
import { useTranslation } from "next-i18next";

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
      {session ? <AddAccommodationForm /> : <AddAccommodationForm />}
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
