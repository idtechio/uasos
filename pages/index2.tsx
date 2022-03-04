import { CompositionAppBody } from "../src/components/Compositions";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ButtonCta } from "../src/components/Buttons";
import { signIn } from "next-auth/react";
import { View, StyleSheet } from "react-native";

function Home(props) {
  const { t } = useTranslation();

  return (
    <CompositionAppBody>
      <View style={styles.home}>
        <View style={styles.host}>
          <ButtonCta anchor={t("shareLocation")} onPress={() => signIn()} />
        </View>
      </View>
    </CompositionAppBody>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      data: [
        {
          location: "Warszawa",
          host: "owner",
          conditions: null,
          preferences: ["animals", "disability", "foof"],
          resources: null,
        },
      ],
    },
  };
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  host: {},
  guest: {
    marginTop: 20,
  },
});

export default Home;
