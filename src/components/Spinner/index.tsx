import { ActivityIndicator, View } from "react-native";

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
