import { ReactNode } from "react";
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
      {id === "facebook" && (
        <IconFB
          style={{
            height: 32,
            width: 40,
            marginLeft: 10,
          }}
        />
      )}
      {id === "google" && (
        <IconGoogle
          style={{
            height: 32,
            width: 40,
            marginLeft: 10,
          }}
        />
      )}
      <Text>{anchor}</Text>
    </Button>
  );
};

export default ButtonSM;
