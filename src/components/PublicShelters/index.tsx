import { Dropdown } from "../Dropdown";
import { ShelterCard } from "./ShelterCard";

import {
  Layout,
  BackgroundColor,
  YellowTopSplash,
  BlueMiddleSplash,
  YellowBottomSplash,
  DesktopSectionTitle,
  MobileSectionTitle,
  Description,
  Wrapper,
  DropdownsWrapper,
  Content,
  Label,
  DropdownWrapper,
} from "./styles";

const SPLASH = {
  blue: "/assets/splash_blue.png",
  yellow: "/assets/splash_yellow.png",
};

const commonSelectStyle = {
  height: 40,
};

export const PublicSheltersLayout = () => (
  <BackgroundColor>
    <YellowTopSplash
      // @ts-expect-error TODO: fix prop types
      source={SPLASH.yellow}
    />
    <BlueMiddleSplash
      // @ts-expect-error TODO: fix prop types
      source={SPLASH.blue}
    />
    <YellowBottomSplash
      // @ts-expect-error TODO: fix prop types
      source={SPLASH.yellow}
    />

    <Layout>
      <Content>
        <DesktopSectionTitle title="Public shelters" />
        <MobileSectionTitle>Public shelters</MobileSectionTitle>

        <Wrapper>
          <Description>
            You can find here a list of publicly available shelters. Remember to
            call the place and confirm the availability before departing.
          </Description>

          <Description>
            <b>
              If you want to add your public shelter, please contact us at email
            </b>
          </Description>
        </Wrapper>

        <DropdownsWrapper>
          <DropdownWrapper>
            <Label>Choose a country</Label>
            <Dropdown
              styles={{
                select: commonSelectStyle,
              }}
              data={[]}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Label>Choose city:</Label>
            <Dropdown
              styles={{
                select: commonSelectStyle,
              }}
              data={[]}
            />
          </DropdownWrapper>
        </DropdownsWrapper>

        <ShelterCard />
      </Content>
    </Layout>
  </BackgroundColor>
);
