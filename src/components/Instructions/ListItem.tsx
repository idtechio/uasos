import styled, { css } from "styled-components/native";
import { colors } from "../../style/landingPageStyle";

const ListItemWrapper = styled.View`
  background-color: #fff;
  position: relative;
  height: 300px;
  margin: 20px 10px 10px;
  padding: 20px 0;
  justify-content: flex-start;
  background: #ffffff;
  padding: 12px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 100%;
        margin: 0;
      `,
    })}
`;

const Title = styled.Text`
  text-align: center;
  margin-bottom: 7px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Text = styled.Text`
  font-size: 12px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 17px;
  text-align: center;
`;

type ListItemProps = {
  title: string;
  text: string;
  image: string;
  index: number;
};

const SlideBadge = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right-width: 50px;
  border-right-color: transparent;
  border-top-width: 55px;
  border-top-color: ${colors.blue};
`;

const BadgeText = styled.Text`
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  top: -47px;
  left: 9px;
`;

const ContentContainer = styled.View`
  margin-top: 20px;
  height: 100%;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin: 0;
      `,
    })}
`;

const Image = styled.Image`
  width: 100%;
  height: 35%;
  aspectratio: 1;
`;

const ListItem = ({ title, text, image, index }: ListItemProps) => {
  return (
    <ListItemWrapper>
      <SlideBadge>
        <BadgeText>{index + 1}</BadgeText>
      </SlideBadge>

      <ContentContainer>
        <Image source={image} alt={title} resizeMode="contain" />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContentContainer>
    </ListItemWrapper>
  );
};

export default ListItem;
