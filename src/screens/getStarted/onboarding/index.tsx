import React from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Title, Text } from "react-native-paper";
import { NavigationInterface } from "../../types";
import { useThemeContext } from "../../../theme";
import OutlineButton from "../../../components/outlineButton";
import Button from "../../../components/button";

// IMPORT FOR ALL CUSTOM STYLES
import { Container, ButtonCover, Cover } from "./styles";

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

export default function OnboardingScreen(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
      <Cover>
        <Image
          source={require("../../../../assets/images/appIcon.png")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: RFValue(20),
          }}
        />
        <Title
          style={{
            color: colors.BLACK,
            fontSize: RFValue(fonts.LARGE_SIZE + 2),
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: RFValue(24),
            marginBottom: RFValue(10),
          }}
        >
          Welcome to iFollowTheMoney
        </Title>
        <Text
          style={{
            color: colors.SECONDARY_TEXT,
            fontSize: RFValue(fonts.LARGE_SIZE - 2),
            fontWeight: "normal",
            lineHeight: RFValue(24),
            textAlign: "center",
          }}
        >
          A network of grassroots citizen who are {"\n"}dedicated to track
          government and {"\n"}international aid spending
        </Text>
      </Cover>
      <ButtonCover>
        <Button
          name="Login"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <OutlineButton
          name="Register"
          onPress={() => navigation.navigate("CreateProfileScreen")}
        />
      </ButtonCover>
    </Container>
  );
}
