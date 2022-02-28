import { View, Text } from "react-native";
import { ButtonCta } from "../Buttons";
import Avatar from "../Avatar";
import { styles } from "./style";
import type { Accommodation } from "../../../pages/api/addAccommodation";
import Marker from "./image/Marker";
import User from "./image/User";
import Calendar from "./image/Calendar";
import Dish from "./image/Dish";
import Animals from "./image/Animals";
import Disability from "./image/Disability";

const OfferBox = ({
  location,
  host,
  conditions,
  preferences,
  resources,
}: Accommodation) => {
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
              miejsce dla <strong>3 osób</strong>
            </Text>
          </View>
          <View style={styles.headerRightText}>
            <Calendar />
            <Text style={styles.headerRightTextConent}>
              max. <strong>2 tygodnie</strong>
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
                        zwierzęta mile widziane
                      </Text>
                    </View>
                  );
                  break;
                case "disability":
                  return (
                    <View style={[styles.tag]}>
                      <Disability />
                      <Text style={styles.tagText}>
                        udogodnienia dla niepełnosprawnych
                      </Text>
                    </View>
                  );
                  break;
                case "foof":
                  return (
                    <View style={styles.tag}>
                      <Dish />
                      <Text style={styles.tagText}>wyżywienie</Text>
                    </View>
                  );
                  break;
                default:
                  return <></>;
              }
            })
          : null}
      </View>
      <View style={styles.footer}>
        <Avatar title={host.name} subtitle="Gospodarz" />
        {/* <ButtonCta anchor="Zadzwoń" /> */}
      </View>
    </View>
  );
};

export default OfferBox;
