import React from "react";
import { useTranslation } from "../../common-i18n/use-translation";
import { ButtonCta } from "../Buttons";
import Avatar from "../Avatar";
import {
  Container,
  Footer,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderRightText,
  HeaderRightTextContent,
  Tag,
  Tags,
  TagText,
} from "./style";
import AccountIcon from "../../style/svgs/account.svg";
import MarkerIcon from "../../style/svgs/marker.svg";
import AnimalsIcon from "../../style/svgs/animals.svg";
import KidsIcon from "../../style/svgs/kids.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import ElderIcon from "../../style/svgs/elder.svg";

type GuestCardProps = {
  name: string;
  arrival: string;
  avatar?: string;
  preferredPlace?: string;
  numberOfGuests: number;
  guests?: string[];
  animals?: string[];
  elderly?: boolean;
  disabled?: boolean;
  toddler?: string;
};

const GuestCard = ({
  name,
  arrival,
  avatar,
  preferredPlace,
  numberOfGuests,
  guests,
  elderly,
  disabled,
  animals,
  toddler,
}: GuestCardProps) => {
  const { t } = useTranslation("common");
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Avatar
            avatar={avatar}
            title={name}
            subtitle={t(`guestOffer.arrivalToPoland`, { arrival })}
            reversedTitle
          />
        </HeaderLeft>
        {numberOfGuests > 2 && (
          <HeaderRight>
            <HeaderRightText>
              <AccountIcon width="16" height="16" />
              <HeaderRightTextContent>
                {t("guestOffer.peopleToAccommodate", {
                  count: numberOfGuests - 1,
                })}
              </HeaderRightTextContent>
            </HeaderRightText>
            <HeaderRightText>
              <HeaderRightTextContent small>
                {guests && guests.join(", ")}
              </HeaderRightTextContent>
            </HeaderRightText>
          </HeaderRight>
        )}
      </Header>
      <Tags>
        <Tag>
          <MarkerIcon width="16" height="16" />
          <TagText>
            {t("guestOffer.preferredLocation", {
              location: preferredPlace || t("staticValues.anyLocation"),
            })}
          </TagText>
        </Tag>
        {animals ? (
          <Tag>
            <AnimalsIcon width="16" height="16" />
            <TagText>
              {t("guestOffer.withAnimals", {
                animals: animals.join(", "),
              })}
            </TagText>
          </Tag>
        ) : null}
        {toddler && (
          <Tag>
            <KidsIcon width="16" height="16" />
            <TagText>
              {t("guestOffer.withKids", {
                age: "6 miesięcy",
              })}
            </TagText>
          </Tag>
        )}
        {disabled && (
          <Tag>
            <DisabilityIcon width="16" height="16" />
            <TagText>{t("guestOffer.withDisabled")}</TagText>
          </Tag>
        )}
        {elderly && (
          <Tag>
            <ElderIcon width="16" height="16" />
            <TagText>{t("guestOffer.withElder")}</TagText>
          </Tag>
        )}
      </Tags>
      <Footer>
        <ButtonCta anchor={t("guestOffer.invite")} />
      </Footer>
    </Container>
  );
};

export default GuestCard;
