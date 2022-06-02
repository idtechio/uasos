import React from "react";
import { ButtonContainer, Stripe } from "./style";
import CrossIcon from "../../style/svgs/cross.svg";

interface Props {
  onPress: () => void;
  isOpen: boolean;
}

const HamburgerButton = ({ isOpen, onPress }: Props) => {
  return (
    <ButtonContainer onPress={onPress}>
      {isOpen ? (
        <CrossIcon />
      ) : (
        <>
          <Stripe />
          <Stripe />
          <Stripe />
        </>
      )}
    </ButtonContainer>
  );
};

export default HamburgerButton;
