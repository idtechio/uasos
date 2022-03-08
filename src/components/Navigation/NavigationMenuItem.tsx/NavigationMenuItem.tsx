import { Container, Title } from "./style";

interface Props {
  title: string;
  Icon: React.ElementType;
  onPress: () => void;
}

const NavigationMenuItem = ({ title, Icon, onPress }: Props) => (
  <Container onPress={onPress}>
    <Icon height={24} width={24} />
    <Title>{title}</Title>
  </Container>
);

export default NavigationMenuItem;
