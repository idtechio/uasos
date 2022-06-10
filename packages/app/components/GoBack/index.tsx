import React from "react";
import { TouchableOpacity } from "react-native";

import { useRouter } from "solito/router";
import { useTranslation } from "../../common-i18n/use-translation";
import GoBackIcon from "../../style/svgs/goBack.svg";
import { Container, Text } from "./style";

const GoBack = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const pressHandler = () => {
    router.back();
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <Container>
        <GoBackIcon />
        <Text>{t("back")}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default GoBack;
