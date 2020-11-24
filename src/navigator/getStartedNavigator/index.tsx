import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../../screens/getStarted";

const GetstartedStack = createStackNavigator();

export default function GetstartedNavigator() {
  return (
    <GetstartedStack.Navigator
      initialRouteName="OnboardingScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <GetstartedStack.Screen
        name="OnboardingScreen"
        component={Screens.OnboardingScreen}
      />
      <GetstartedStack.Screen
        name="LoginScreen"
        component={Screens.LoginScreen}
      />
      <GetstartedStack.Screen
        name="CreateProfileScreen"
        component={Screens.CreateProfileScreen}
      />
      <GetstartedStack.Screen name="OTPScreen" component={Screens.OTPScreen} />
      <GetstartedStack.Screen
        name="FollowUsersScreen"
        component={Screens.FollowUsersScreen}
      />
      <GetstartedStack.Screen
        name="InterestScreen"
        component={Screens.InterestScreen}
      />
      <GetstartedStack.Screen
        name="HashTagScreen"
        component={Screens.HashTagScreen}
      />
    </GetstartedStack.Navigator>
  );
}
