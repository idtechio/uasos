import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "solito/router";
import styled from "styled-components/native";
import { useTranslation } from "../../common-i18n/use-translation";
import GoBackIcon from "../../style/svgs/goBack.svg";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 13px;
  color: #003566;
  margin-left: 20px;
`;

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
