import { ButtonContainer, Stripe } from "./style";

interface Props {
  onPress: () => void;
}

const HamburgerButton = ({ onPress }: Props) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Stripe />
      <Stripe />
      <Stripe />
    </ButtonContainer>
  );
};

export default HamburgerButton;
