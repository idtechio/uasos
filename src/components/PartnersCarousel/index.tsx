import * as React from "react";
import { PARTNERS_1ST_ROW, PARTNERS_2ND_ROW } from "./config";
import styled, { css, useTheme } from "styled-components/native";
import Card from "../Card";
import { View } from "react-native";

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;

  &:last-of-type {
    margin-left: 20px;
  }

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        padding: 0 16px;
      `,
    })}
`;

const StyledCard = styled(Card)`
  margin: 5px;
  height: 65px;
  width: 90px;
  flex-grow: 1;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 120px;
        width: 150px;
        margin: 16px 8px 0;
      `,
      xl: css`
        height: 150px;
        width: 225px;
        margin: 16px 8px 0;
      `,
      xxl: css`
        height: 200px;
        width: 227px;
        margin: 16px 8px 0;
      `,
    })}
`;

const Item = styled.View`
  position: relative;
  height: 100%;
  ${({ theme }) =>
    theme.getBreakPoint({
      xl: css`
        padding: 20px;
      `,
    })}
`;

const ScrollView = styled.ScrollView`
  padding: 20px 16px 20px 8px;
  margin: -20px 0;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        padding: 20px 16px 20px 35px;
      `,
      xl: css`
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
    <ScrollView horizontal={!isDesktop} style={{ maxWidth: "100%" }}>
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
