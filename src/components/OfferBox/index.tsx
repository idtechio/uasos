import { View, Text } from "react-native";
import Avatar from "../Avatar";
import { styles } from "./style";
import Marker from "./image/Marker";
import User from "./image/User";
import Calendar from "./image/Calendar";
import Dish from "./image/Dish";
import Animals from "./image/Animals";
import Disability from "./image/Disability";
import { Trans, useTranslation } from "next-i18next";
import { Fragment } from "react";

type Props = {
  location: { city: string; state: string };
  host: { name: string };
  preferences: ("animals" | "disability" | "foof")[];
};

const OfferBox = ({ location, host, preferences }: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Marker />
          <View style={styles.place}>
            <Text style={styles.h1}>{location.city}</Text>
            <Text style={styles.subTitle}>{location.state}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.headerRightText}>
            <User />
            <Text style={styles.headerRightTextConent}>
              <Trans
                i18nKey="accommodationOffer.canAccommodate"
                values={{ count: 6 }}
              >
                place for <Text style={styles.textBold}>3 people</Text>
              </Trans>
            </Text>
          </View>
          <View style={styles.headerRightText}>
            <Calendar />
            <Text style={styles.headerRightTextConent}>
              <Trans
                i18nKey="accommodationOffer.duration"
                values={{ time: t("staticValues.timePeriod.twoWeeks") }}
              >
                max. <Text style={styles.textBold}>2 weeks</Text>
              </Trans>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {preferences
          ? preferences.map((preference) => {
              switch (preference) {
                case "animals":
                  return (
                    <View style={styles.tag}>
                      <Animals />
                      <Text style={styles.tagText}>
                        {t("accommodationOffer.acceptAnimals")}
                      </Text>
                    </View>
                  );
                case "disability":
                  return (
                    <View style={[styles.tag]}>
                      <Disability />
                      <Text style={styles.tagText}>
                        {t("accommodationOffer.disabledSupport")}
                      </Text>
                    </View>
                  );
                case "foof":
                  return (
                    <View style={styles.tag}>
                      <Dish />
                      <Text style={styles.tagText}>
                        {t("accommodationOffer.includesFood")}
                      </Text>
                    </View>
                  );
                default:
                  return <Fragment />;
              }
            })
          : null}
      </View>
      <View style={styles.footer}>
        <Avatar
          title={host.name}
          subtitle={t("accommodationOffer.author.owner")}
        />
        {/* <ButtonCta anchor="Zadzwoń" /> */}
      </View>
    </View>
  );
};

export default OfferBox;
