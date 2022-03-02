import * as React from "react";
import styled from "styled-components/native";
import { ButtonCta } from "../Buttons";
import heroImage from "../../../public/hero.png";

const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
`;

const Image = styled.ImageBackground`
  min-height: 390px;
  height: 650px;
`;

const HeroImageOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(44, 95, 161, 0.4);
`;

const Container = styled.View`
  padding: 35px;
`;

const ButtonContainer = styled.View`
  margin-top: 20px;
  display: grid;
  row-gap: 17px;
  justify-items: start;
`;

const HeroImage = () => {
  return (
    <section style={{ flex: 1 }}>
      {/* @ts-ignore */}
      <Image source={heroImage.src} alt="helping hands, Sława Ukrajini!">
        <HeroImageOverlay />
        <Container>
          <h1>
            Pomagamy znaleźć schronienie ofiarom wojny
            <br />w Ukrainie
          </h1>

          <SubTitle>
            Pomagamy uchodźcom znaleźć bezpłatne schronienie oferowane przez
            osoby i instytucje chcące nieść pomoc.
            <br />
            Nasz portal ma za zadanie automatycznie połączyć potencjalne lokum z
            szukającym schronienia na podstawie określonych potrzeb
          </SubTitle>

          <ButtonContainer>
            <ButtonCta anchor="Szukam schronienia" style={{ fontSize: 16 }} />
            <ButtonCta anchor="Oferuję pomoc" style={{ fontSize: 16 }} />
          </ButtonContainer>
        </Container>
      </Image>
    </section>
  );
};

export default HeroImage;
