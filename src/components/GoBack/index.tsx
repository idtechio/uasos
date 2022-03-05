import * as React from "react";
import { useRouter } from "next/router";
import { Pressable } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const GoBackIcon = styled.Image`
  width: 8px;
  height: 14px;
  margin-right: 10px;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 13px;
  color: #003566;
`;

const GoBack = () => {
  const router = useRouter();

  return (
    <Pressable onPress={router.back}>
      <Container>
        <GoBackIcon source="/goBack.svg" />

        <Text>Wstecz</Text>
      </Container>
    </Pressable>
  );
};

export default GoBack;
