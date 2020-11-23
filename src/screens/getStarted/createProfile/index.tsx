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
import ProgressBar from "../../../components/progressBar";

import { Container, Cover, TextCover } from "./styles";
import { ButtonCover } from "../login/styles";

interface ScreenProp extends NavigationInterface {}

export default function CreateProfileScreen(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  const { top } = useSafeAreaInsets();

  const [state, setState] = useState({
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("ProfileScreen");
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
              marginBottom: RFValue(20),
            }}
          >
            Join the Movement
          </Title>
          <ProgressBar progress="0" />
          <Input
            placeholder="E-mail address or Phone number"
            defaultValue={state.email}
            onChangeText={(email) => setState({ ...state, email })}
            returnKeyType="next"
          />
          <Input
            placeholder="Where are you located?"
            defaultValue={state.location}
            onChangeText={(location) => setState({ ...state, location })}
            returnKeyType="next"
          />
          <Input
            placeholder="Password"
            defaultValue={state.password}
            onChangeText={(password) => setState({ ...state, password })}
            returnKeyType="next"
            secureTextEntry={true}
          />
          <Input
            placeholder="Confirm Password"
            defaultValue={state.confirmPassword}
            onChangeText={(confirmPassword) =>
              setState({ ...state, confirmPassword })
            }
            returnKeyType="next"
            secureTextEntry={true}
          />
          <TextCover>
            <Text
              style={{
                color: colors.SECONDARY_TEXT,
                fontSize: RFValue(fonts.MEDIUM_SIZE),
              }}
            >
              Already have an account?
            </Text>
            <Text
              style={{
                color: colors.PRIMARY,
                fontSize: RFValue(fonts.MEDIUM_SIZE),
                marginLeft: 2,
              }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Login
            </Text>
          </TextCover>
        </Cover>
        <ButtonCover>
          <Button name="Continue" onPress={handleSubmit} />
          <SocialIcon style={{ marginTop: RFValue(1) }} />
          <Text
            onPress={() => {}}
            style={{
              color: colors.INACTIVE,
              fontSize: fonts.MEDIUM_SIZE,
              textAlign: "center",
              marginTop: RFValue(15),
            }}
          >
            What is Connected Development?
          </Text>
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
