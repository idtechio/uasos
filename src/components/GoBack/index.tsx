import { useRouter } from "next/router";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { useTranslation } from "next-i18next";

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const GoBackIcon = styled.Image`
  width: 8px;
  height: 14px;
  margin-right: 20px;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 13px;
  color: #003566;
`;

const GoBack = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Pressable onPress={router.back}>
      <Container>
        <GoBackIcon source={{ uri: "/goBack.svg" }} />
        <Text>{t("back")}</Text>
      </Container>
    </Pressable>
  );
};

export default GoBack;
