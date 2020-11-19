import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./constants";
import { useThemeContext } from "./theme";
import Screens from "./screens";

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
            fontFamily: fonts.WORK_SANS_MEDIUM,
            color: colors.PRIMARY_TEXT,
            fontSize: fonts.MEDIUM_SIZE,
            textTransform: "capitalize",
          },
        }}
      >
        <RootStack.Screen name="HomeScreen" component={Screens.Home} />
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
