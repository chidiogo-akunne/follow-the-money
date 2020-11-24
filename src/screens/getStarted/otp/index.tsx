import React, { Fragment, useState } from "react";
import { Text, Title } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, Fontisto } from "@expo/vector-icons";
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

import { Container, Cover, Card } from "./styles";
import { ButtonCover } from "../login/styles";

interface ScreenProp extends NavigationInterface {}

export default function OTPScreen(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  const { top } = useSafeAreaInsets();

  const [state, setState] = useState({
    otp: "",
  });

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("FollowUsersScreen");
  };

  return (
    <Fragment>
      <StatusBar translucent animated style="dark" />
      <Header
        title={() => (
          <Title
            style={{
              color: colors.BLACK,
              fontSize: RFValue(fonts.LARGE_SIZE + 2),
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Let People Find You Easily
          </Title>
        )}
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
          <ProgressBar
            progress="20"
            firstBar={{ backgroundColor: colors.PRIMARY }}
          />
          <Text
            style={{
              color: colors.SECONDARY_TEXT,
              fontSize: RFValue(fonts.MEDIUM_SIZE),
              textAlign: "center",
              marginTop: RFValue(20),
              marginBottom: RFValue(15),
            }}
          >
            A 4 digit code has been sent to your phone number
          </Text>
          {/* <Card>
            <TouchableHighlight
              style={{
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: hexToRGB(colors.GREY, 0.1),
                borderRadius: 40,
                marginBottom: RFValue(10),
              }}
            >
              <Fontisto name="camera" size={24} color={colors.LIGHT_GREY} />
            </TouchableHighlight>
            <Text
              style={{
                color: colors.BLACK,
                fontSize: RFValue(fonts.MEDIUM_SIZE),
              }}
            >
              Upload Profile Picture
            </Text>
            <Text
              style={{
                color: colors.LIGHT_GREY,
                fontSize: RFValue(fonts.MEDIUM_SIZE - 1),
                marginTop: RFValue(20),
                marginBottom: RFValue(5),
              }}
            >
              or add from socials
            </Text>
            <SocialIcon style={{ marginTop: RFValue(1) }} />
          </Card>
           */}
          <Input
            placeholder="OTP"
            defaultValue={state.otp}
            onChangeText={(otp) => setState({ ...state, otp })}
            returnKeyType="next"
          />
        </Cover>
        <ButtonCover>
          <Button name="Continue" onPress={handleSubmit} />
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
