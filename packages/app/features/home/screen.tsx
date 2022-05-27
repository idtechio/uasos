import React from "react";
import { Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "RobotoBlack",
          fontWeight: "800",
          marginBottom: 30,
          fontSize: 25,
        }}
      >
        Welcome to UASOS-MONOREPA.
      </Text>
      <Text
        style={{ fontFamily: "RobotoBlack", marginBottom: 10, fontSize: 20 }}
      >
        What done for now:
      </Text>
      <View
        style={{
          paddingHorizontal: 22,
          marginBottom: 20,
        }}
      >
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            1)
          </Text>{" "}
          Made a mono-repository in which the code is shared between two
          platforms:{" "}
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            web
          </Text>{" "}
          and{" "}
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            mobile
          </Text>
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            2)
          </Text>{" "}
          Prettier / Eslint setupped
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            3)
          </Text>{" "}
          Precommit hooks setuped
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            4)
          </Text>{" "}
          Sharable translations setuped
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            5)
          </Text>{" "}
          Connected fonts to mobile
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "RobotoBlack",
          marginBottom: 10,
          fontSize: 20,
        }}
      >
        Next steps:
      </Text>

      <View
        style={{
          paddingHorizontal: 22,
        }}
      >
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            1)
          </Text>{" "}
          We need to refactor all components to make them work on both platforms
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            2)
          </Text>{" "}
          Need to make a font-sharing font for web and mobile
        </Text>
        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            3)
          </Text>{" "}
          Put all the components in a package from which we will share these
          components between platforms
        </Text>

        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            4)
          </Text>{" "}
          Make login working for IOS / Android via firebase
        </Text>

        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            5)
          </Text>{" "}
          Need a design for a splash screen
        </Text>

        <Text
          style={{ fontFamily: "RobotoRegular", marginBottom: 5, fontSize: 16 }}
        >
          <Text style={{ fontFamily: "RobotoBlack", fontWeight: "800" }}>
            6)
          </Text>{" "}
          Need accounts from google and apple developer to upload the future app
        </Text>
      </View>
    </View>
  );
}
