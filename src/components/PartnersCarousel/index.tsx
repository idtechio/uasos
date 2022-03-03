import * as React from "react";
import { PARTNERS_1ST_ROW, PARTNERS_2ND_ROW } from "./config";
import styled, { css, useTheme } from "styled-components/native";
import Card from "../Card";
import { View } from "react-native";

const Row = styled.View`
  width: 100%;
  flex-direction: row;

  &:last-of-type {
    margin-left: 20px;
  }
`;

const StyledCard = styled(Card)`
  margin: 5px;
  height: 65px;
  width: 90px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 200px;
        width: 235px;
        margin: 16px 8px 0;
      `,
    })}
`;

const Item = styled.View`
  position: relative;
  height: 100%;
`;

const ScrollView = styled.ScrollView`
  padding: 20px 16px 20px 35px;
  margin: -20px 0;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        padding: 20px 0;
      `,
    })}
`;

const Image = styled.Image`
  height: 100%;
`;

const PartnersCarousel = () => {
  const { getBreakPoint } = useTheme();

  const isDesktop = getBreakPoint({ default: false, lg: true });

  return (
    <ScrollView horizontal>
      <View>
        <Row>
          {PARTNERS_1ST_ROW.map((item) => (
            <StyledCard key={item.image}>
              <Item>
                <Image
                  source={item.image}
                  alt={item.alt}
                  resizeMode="contain"
                />
              </Item>
            </StyledCard>
          ))}
        </Row>

        <Row style={{ marginLeft: isDesktop ? 0 : "20px" }}>
          {PARTNERS_2ND_ROW.map((item) => (
            <StyledCard key={item.image}>
              <Item>
                <Image
                  source={item.image}
                  alt={item.alt}
                  resizeMode="contain"
                />
              </Item>
            </StyledCard>
          ))}
        </Row>
      </View>
    </ScrollView>
  );
};

export default PartnersCarousel;
