import React, { useEffect } from "react";
import { Image } from "react-native";
import { NavigationInterface } from "../types";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

import { Container, BigCircle, BottomSection, SmallCircle } from "./styles";

interface ScreenProp extends NavigationInterface {}

export default function SplashScreen(props: ScreenProp) {
  const { navigation } = props;

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = () => {
    return navigation.replace("OnboardingScreen");
  };
  return (
    <Container>
      <Image
        source={require("../../../assets/images/splash.png")}
        style={{
          width: RFValue(130),
          resizeMode: "contain",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: RFPercentage(40),
        }}
      />
      <BottomSection>
        <SmallCircle />
        <BigCircle />
      </BottomSection>
    </Container>
  );
}
