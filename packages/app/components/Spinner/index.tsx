import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export default function Spinner() {
  return (
    <SpinnerBase>
      <ActivityIndicator size="large" />
    </SpinnerBase>
  );
}

const SpinnerBase = styled.View`
  margin: auto;
`;
