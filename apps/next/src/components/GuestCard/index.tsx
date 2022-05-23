import React from "react";
import { View, Text } from "react-native";
import { ButtonCta } from "../Buttons";
import Avatar from "../Avatar";
import { styles } from "./style";
import { Trans, useTranslation } from "next-i18next";
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
  const { t } = useTranslation();
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Avatar
            avatar={avatar}
            title={name}
            subtitle={t(`guestOffer.arrivalToPoland`, { arrival })}
            reversedTitle
          />
        </View>
        {numberOfGuests > 2 && (
          <>
            <View style={styles.headerRight}>
              <View style={styles.headerRightText}>
                <AccountIcon width="16" height="16" />
                <Text style={styles.headerRightTextContent}>
                  <strong>
                    {t("guestOffer.peopleToAccommodate", {
                      count: numberOfGuests - 1,
                    })}
                  </strong>
                </Text>
              </View>
              <View style={styles.headerRightText}>
                <Text style={styles.headerRightTextContentSmall}>
                  {guests && guests.join(", ")}
                </Text>
              </View>
            </View>
          </>
        )}
      </View>

      <View style={styles.tags}>
        <View style={styles.tag}>
          <MarkerIcon width="16" height="16" />
          <Text style={styles.tagText}>
            <Trans
              i18nKey="guestOffer.preferredLocation"
              values={{
                location: preferredPlace || t("staticValues.anyLocation"),
              }}
            >
              preferred location: <strong>any</strong>
            </Trans>
          </Text>
        </View>
        {animals ? (
          <View style={styles.tag}>
            <AnimalsIcon width="16" height="16" />
            <Text style={styles.tagText}>
              <Trans
                i18nKey="guestOffer.withAnimals"
                values={{
                  animals: animals.join(", "),
                }}
              >
                animals with us: <strong>{animals.join(", ")}</strong>
              </Trans>
            </Text>
          </View>
        ) : null}
        {toddler && (
          <View style={styles.tag}>
            <KidsIcon width="16" height="16" />
            <Text style={styles.tagText}>
              <Trans
                i18nKey="guestOffer.withKids"
                values={{
                  /** TODO: create method of age handling */
                  age: "6 miesięcy",
                }}
              >
                kids with us: <strong>6 months</strong>
              </Trans>
            </Text>
          </View>
        )}
        {disabled && (
          <View style={styles.tag}>
            <DisabilityIcon width="16" height="16" />
            <Text style={styles.tagText}>{t("guestOffer.withDisabled")}</Text>
          </View>
        )}
        {elderly && (
          <View style={styles.tag}>
            <ElderIcon width="16" height="16" />
            <Text style={styles.tagText}>{t("guestOffer.withElder")}</Text>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <ButtonCta anchor={t("guestOffer.invite")} />
      </View>
    </View>
  );
};

export default GuestCard;
