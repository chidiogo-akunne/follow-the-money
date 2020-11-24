import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./constants";
import { useThemeContext } from "./theme";
import Screens from "./screens";
import GetstartedNavigator from "./navigator/getStartedNavigator";

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { fonts, colors } = useThemeContext();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          headerBackTitleStyle: {
            color: colors.PRIMARY_TEXT,
            fontSize: fonts.MEDIUM_SIZE,
            textTransform: "capitalize",
          },
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
        />
        <RootStack.Screen
          name="OnboardingScreen"
          component={GetstartedNavigator}
        />
        <RootStack.Screen name="HomeScreen" component={Screens.Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
