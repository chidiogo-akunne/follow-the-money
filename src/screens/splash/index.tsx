import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";

import { Container } from "./styles";
import { NavigationInterface } from "../types";

interface ScreenProp extends NavigationInterface {}

export default function SplashScreen(props: ScreenProp) {
  const { navigation } = props;

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = () => {
    return navigation.replace("HomeScreen");
  };
  return (
    <Container>
      <Image
        source={require("../../../assets/splash.png")}
        style={[
          StyleSheet.absoluteFill,
          { width: undefined, height: undefined, resizeMode: "contain" },
        ]}
      />
    </Container>
  );
}
