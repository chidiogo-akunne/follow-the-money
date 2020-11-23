import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SplashScreen?: Object;
  HomeScreen?: Object;
  LoginScreen?: Object;
  OnboardingScreen?: Object;
  CreateProfileScreen?: Object;
  ProfileScreen?: Object;
  FollowUsersScreen?: Object;
  InterestScreen?: Object;
  HashTagScreen?: Object;
};

export type RootStackParamScreensList = "SplashScreen" | "HomeScreen";

interface NavigationScreenType {
  navigation: StackNavigationProp<RootStackParamList, any>;
  route: RouteProp<RootStackParamList, any>;
}

export interface NavigationInterface extends NavigationScreenType {
  testID?: string;
}
