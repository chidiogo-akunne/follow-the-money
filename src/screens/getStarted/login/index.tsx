import React, { Fragment, useState } from "react";
import { Text, Title } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableHighlight } from "react-native";
import { NavigationInterface } from "../../types";
import { useThemeContext } from "../../../theme";
import Header from "../../../components/header";
import { StatusBar } from "expo-status-bar";
import hexToRGB from "../../../utils/hexToRGB";
import Input from "../../../components/input";
import SocialIcon from "../../../components/socialIcons";
import Button from "../../../components/button";

// IMPORT FOR ALL CUSTOM STYLES
import { Container, Cover, TextCover, ButtonCover } from "./styles";

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

export default function LoginScreen(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  const { top } = useSafeAreaInsets();

  const [state, setState] = useState({
    email: "",
    phoneNymber: "",
    password: "",
  });

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("HomeScreen");
  };
  return (
    <Fragment>
      <StatusBar translucent animated style="dark" />
      <Header
        title={() => null}
        headerLeft={() => (
          <TouchableHighlight
            {...props}
            onPress={() => {
              navigation.goBack();
            }}
            underlayColor={hexToRGB(colors.PRIMARY, 0.1)}
            style={{
              height: RFValue(40),
              width: RFValue(40),
              borderRadius: RFValue(20),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-arrow-dropleft" size={30} color={colors.GREY} />
          </TouchableHighlight>
        )}
        style={{ paddingTop: top }}
      />
      <Container>
        <Cover>
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
            Welcome Back!
          </Title>
          <Input
            placeholder="E-mail address or Phone number"
            defaultValue={state.email}
            onChangeText={(email) => setState({ ...state, email })}
            returnKeyType="next"
          />
          <Input
            placeholder="Password"
            defaultValue={state.password}
            onChangeText={(password) => setState({ ...state, password })}
            returnKeyType="next"
            secureTextEntry={true}
          />
          <TextCover>
            <Text
              onPress={() => {}}
              style={{
                color: colors.DARK_GREY,
                fontSize: RFValue(fonts.MEDIUM_SIZE),
                textTransform: "capitalize",
              }}
            >
              new user?
            </Text>
            <Text
              onPress={() => {}}
              style={{
                color: colors.PRIMARY,
                fontSize: RFValue(fonts.MEDIUM_SIZE),
                textTransform: "capitalize",
              }}
            >
              Forgot password?
            </Text>
          </TextCover>
        </Cover>
        <ButtonCover>
          <Button name="Login" onPress={handleSubmit} />
          <SocialIcon style={{ marginTop: RFValue(1) }} />
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
