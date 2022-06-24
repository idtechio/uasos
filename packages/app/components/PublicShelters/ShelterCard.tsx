import React, { useCallback, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useTranslation } from "../../common-i18n/use-translation";
import styled, { css } from "styled-components/native";
import PlaneIcon from "../../../src/style/svgs/plane.svg";
import ChevronDownIcon from "../../../src/style/svgs/chevron-down.svg";
import MarkerIcon from "../../../src/style/svgs/marker.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import PhoneIcon from "../../../src/style/svgs/matched_phone.svg";
import { Theme } from "app/provider/theme/theme.config";
import { ButtonCta } from "../Buttons";
import { MapComponent } from "./MapComponent";
import RenderHtml from "react-native-render-html";

export const ShelterCard = ({
  name,
  country,
  fullAddress,
  occupancy,
  phoneNumber,
  howToGetThere,
}: {
  name: string;
  country: string;
  fullAddress: string;
  occupancy: string;
  phoneNumber: string;
  howToGetThere: string;
}) => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [isMapVisible, setIsMapVisible] = useState(false);

  const toogleMap = () => setIsMapVisible((pIsMapVisible) => !pIsMapVisible);
  let lat = undefined;
  let lng = undefined;

  if (howToGetThere) {
    const [latitude, longitude] = howToGetThere.split("/@")[1].split(",");

    lat = latitude;
    lng = longitude;
  }

  const marker = { lat: Number(lat), lng: Number(lng) };

  const handleOpenMapInNewTab = useCallback(() => {
    window?.open(howToGetThere, "_blank");
  }, [howToGetThere]);

  return (
    <Container>
      <FlexContainer>
        <Column>
          <Header>
            <HeaderContent>
              <Country>{country}</Country>
              <Title>{name}</Title>
            </HeaderContent>

            <Button onPress={toogleMap}>
              <ChevronDownIcon
                style={{
                  transform: isMapVisible ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </Button>
          </Header>

          {isMapVisible && (
            <MapWrapper>
              <MapComponent marker={marker} />
            </MapWrapper>
          )}
          <SectionInfo>
            <Info>
              <MarkerIcon width={15} height={15} />
              <RowText>
                <InnerHTML>
                  <RenderHtml
                    contentWidth={width}
                    source={{
                      html: t("others:forms.generic.city", {
                        city: fullAddress,
                      }),
                    }}
                  />
                </InnerHTML>
              </RowText>
            </Info>
            <Info>
              <UsersIcon />

              <RowText>
                <InnerHTML>
                  <RenderHtml
                    contentWidth={width}
                    source={{
                      html: t("others:forms.generic.occupancy", {
                        number: occupancy,
                      }),
                    }}
                  />
                </InnerHTML>
              </RowText>
            </Info>
            <Info>
              <PhoneIcon />
              <RowText>
                <InnerHTML>
                  <RenderHtml
                    contentWidth={width}
                    source={{
                      html: t("others:forms.generic.phoneNumberWithData", {
                        number: phoneNumber,
                      }),
                    }}
                  />
                </InnerHTML>
              </RowText>
            </Info>
          </SectionInfo>

          <Footer>
            <ButtonCta
              onPress={handleOpenMapInNewTab}
              anchor={
                <FlexTextIcon>
                  <ButtonText>
                    {t("others:publicShelters.details.howToGetThere")}
                  </ButtonText>
                  <PlaneIcon />
                </FlexTextIcon>
              }
            />
          </Footer>
        </Column>

        <DesktopMapWrapper>
          <MapComponent marker={marker} />
        </DesktopMapWrapper>
      </FlexContainer>
    </Container>
  );
};

const Container = styled.View<CommonProp>`
  background: #fff;
  border-radius: 5px;
  height: fit-content;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 15px;
        box-shadow: "0px -20px 10px rgba(0, 0, 0, 0.2)";
      `,
      native: css`
        padding: ${theme.scale(15)}px;

        shadow-color: #000;
        shadow-offset: {
          width: 0,
          height: -20,
        };
        shadow-opacity: 0.2;
        shadow-radius: 10;
        elevation: 10;
      `,
    })};
`;

const Column = styled.View<CommonProp>`
  flex-grow: 1;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            flex-grow: 0;
          `,
        })}
      `,
    })}
`;

const Header = styled.View<CommonProp>`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 10px;
      `,
      native: css`
        margin-bottom: ${theme.scale(10)}px;
      `,
    })};
`;

const HeaderContent = styled.View`
  flex: 1;
`;

interface CommonProp {
  theme: Theme;
}

const Footer = styled.View<CommonProp>`
  flex-direction: row;
  justify-content: flex-end;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-top: 15px;
        ${theme.getBreakPoint({
          md: css`
            justify-content: flex-start;
          `,
        })}
      `,
      native: css`
        padding-top: ${theme.scale(15)}px;
      `,
    })};
`;

const Button = styled.TouchableOpacity<CommonProp>`
  display: block;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            display: none;
          `,
        })}
      `,
    })};
`;

const Country = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.headings};
  `
);

const Title = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: ${theme.colors.headings};
  `
);

const SectionInfo = styled.View<CommonProp>`
  flex-grow: 1;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: #f2f2f2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 18px 0px;
        padding: 15px 0px;
      `,
      native: css`
        padding-vertical: ${theme.scale(6)}px;
        padding-horizontal: 0;
      `,
    })};
`;

const FlexContainer = styled.View<CommonProp>`
  flex-grow: 1;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            flex-direction: row;
            gap: 0px 25px;
          `,
        })}
      `,
    })};
`;

const Info = styled.View<CommonProp>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #f5f4f4;
  font-size: 14px;
  line-height: 19px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 30px;
        gap: 0px 5px;
        padding: 0px 5px;

        ${theme.getBreakPoint({
          md: css`
            font-size: 16px;
          `,
        })}
      `,
      native: css`
        height: ${theme.scale(30)}px;
        padding-vertical: 0;
        padding-horizontal: ${theme.scale(7)}px;
        margin-vertical: ${theme.scale(9)}px;
      `,
    })};
`;

const ButtonText = styled.Text<CommonProp>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  `
);

const FlexTextIcon = styled.View<CommonProp>`
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.headings};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 0px 10px;
      `,
      native: css`
        padding-horizontal: ${theme.scale(5)}px;
      `,
    })};
`;

export const MapWrapper = styled.View<CommonProp>`
  flex-grow: 1;
  background: #cecece;
  border-radius: 4px;
  overflow: hidden;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 200px;

        ${theme.getBreakPoint({
          md: css`
            display: none;
          `,
        })}
      `,
      native: css`
        height: ${theme.scale(200)}px;
      `,
    })};
`;

export const DesktopMapWrapper = styled(MapWrapper)<CommonProp>`
  display: none;
  height: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            display: block;
          `,
        })}
      `,
    })};
`;

export const RowText = styled.Text<CommonProp>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
  `
);

export const InnerHTML = styled.View<CommonProp>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 1em 0;
      `,
      native: css`
        margin-vertical: ${theme.scale(14)}px;
        margin-horizontal: 0;
      `,
    })};
`;
