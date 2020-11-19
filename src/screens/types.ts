import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SplashScreen?: Object;
  HomeScreen?: Object;
};

export type RootStackParamScreensList = "SplashScreen" | "HomeScreen";

interface NavigationScreenType {
  navigation: StackNavigationProp<RootStackParamList, any>;
  route: RouteProp<RootStackParamList, any>;
}

export interface NavigationInterface extends NavigationScreenType {
  testID?: string;
}
