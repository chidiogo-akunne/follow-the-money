import React, { Fragment, useState } from "react";
import { Text, Title } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
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

import {
  Container,
  Cover,
  TextCover,
  ButtonCover,
  DropdownCover,
} from "./styles";

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
    name: "",
    country: "",
    state: "",
    phoneNumber: "",
  });

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("OTPScreen");
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
            Join the Movement
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
          <ProgressBar progress="0" />
          <Text
            style={{
              color: colors.SECONDARY_TEXT,
              fontSize: RFValue(fonts.MEDIUM_SIZE),
              textAlign: "center",
              marginTop: RFValue(10),
              marginBottom: RFValue(5),
            }}
          >
            Let's get to know you
          </Text>
          <Input
            placeholder="Full name"
            defaultValue={state.name}
            onChangeText={(name) => setState({ ...state, name })}
            returnKeyType="next"
          />
          <Input
            placeholder="Phone number"
            defaultValue={state.phoneNumber}
            onChangeText={(phoneNumber) => setState({ ...state, phoneNumber })}
            returnKeyType="next"
          />
          <Input
            placeholder="E-mail address or Phone number"
            defaultValue={state.email}
            onChangeText={(email) => setState({ ...state, email })}
            returnKeyType="next"
          />
          <DropdownCover>
            <DropDownPicker
              items={[
                {
                  label: "Nigeria",
                  value: "nigeria",
                  hidden: true,
                },
                {
                  label: "UK",
                  value: "uk",
                },
                {
                  label: "France",
                  value: "france",
                },
              ]}
              placeholder="Country"
              defaultValue={state.country}
              containerStyle={{
                height: RFValue(40),
                backgroundColor: colors.INPUT,
                borderRadius: 5,
                elevation: 0,
                width: "48%",
                borderColor: colors.INPUT,
              }}
              labelStyle={{
                color: colors.SECONDARY_TEXT,
                fontSize: fonts.MEDIUM_SIZE,
                paddingLeft: RFValue(10),
              }}
              placeholderStyle={{
                color: colors.SECONDARY_TEXT,
                fontSize: fonts.MEDIUM_SIZE,
                paddingLeft: RFValue(10),
              }}
              style={{
                backgroundColor: colors.INPUT,
                borderRadius: 5,
                elevation: 0,
                borderColor: colors.INPUT,
              }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) =>
                setState({
                  ...state,
                  country: item.value,
                })
              }
            />
            <DropDownPicker
              items={[
                {
                  label: "Lagos",
                  value: "lagos",
                  hidden: true,
                },
                {
                  label: "Enugu",
                  value: "enugu",
                },
                {
                  label: "Kano",
                  value: "kano",
                },
              ]}
              placeholder="State"
              defaultValue={state.state}
              containerStyle={{
                height: RFValue(40),
                backgroundColor: colors.INPUT,
                borderRadius: 5,
                elevation: 0,
                width: "48%",
                borderColor: colors.INPUT,
              }}
              labelStyle={{
                color: colors.SECONDARY_TEXT,
                fontSize: fonts.MEDIUM_SIZE,
                paddingLeft: RFValue(10),
              }}
              placeholderStyle={{
                color: colors.SECONDARY_TEXT,
                fontSize: fonts.MEDIUM_SIZE,
                paddingLeft: RFValue(10),
              }}
              style={{
                backgroundColor: colors.INPUT,
                borderRadius: 5,
                elevation: 0,
                borderColor: colors.INPUT,
              }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{
                backgroundColor: "#fafafa",
                position: "absolute",
                height: 200,
              }}
              onChangeItem={(item) =>
                setState({
                  ...state,
                  state: item.value,
                })
              }
            />
          </DropdownCover>

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
          <SocialIcon style={{ marginBottom: RFValue(25) }} />
          <Button name="Continue" onPress={handleSubmit} />
          <Text
            onPress={() => {}}
            style={{
              color: colors.INACTIVE,
              fontSize: fonts.MEDIUM_SIZE,
              textAlign: "center",
              marginTop: RFValue(5),
            }}
          >
            What is Connected Development?
          </Text>
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
