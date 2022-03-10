import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import IconFB from "../../../style/svgs/iconFB.svg";
import IconGoogle from "../../../style/svgs/iconGoogle.svg";

import { Button, Text } from "./style";

type Props = {
  id: string;
  anchor: ReactNode;
  onPress: () => void;
};

const ButtonSM = ({ anchor, onPress, id }: Props) => {
  return (
    <Button onPress={onPress}>
      {id === "facebook" && <IconFB style={styles.fbIcon} />}
      {id === "google" && <IconGoogle style={styles.googleIcon} />}
      <Text>{anchor}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  fbIcon: {
    height: 32,
    width: 40,
    marginLeft: 10,
  },
  googleIcon: {
    height: 32,
    width: 40,
    marginLeft: 10,
  },
});

export default ButtonSM;
