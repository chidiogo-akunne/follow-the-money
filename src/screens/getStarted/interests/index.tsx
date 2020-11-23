import React, { Fragment, useState } from "react";
import { Text, Title } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableHighlight, ScrollView } from "react-native";
import { NavigationInterface } from "../../types";
import { useThemeContext } from "../../../theme";
import Header from "../../../components/header";
import { StatusBar } from "expo-status-bar";
import hexToRGB from "../../../utils/hexToRGB";
import Button from "../../../components/button";
import ProgressBar from "../../../components/progressBar";
import UserCard from "./widget";
import { Interests } from "../../../utils/data";

import { Container, Cover, ButtonCover, InterestCover } from "./styles";

interface ScreenProp extends NavigationInterface {}

export default function InterestScreen(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  const { top } = useSafeAreaInsets();

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("HashTagScreen");
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
            Personalize Your Interest
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
            progress="60"
            firstBar={{ backgroundColor: colors.PRIMARY }}
            secondBar={{ backgroundColor: colors.PRIMARY }}
            thirdBar={{ backgroundColor: colors.PRIMARY }}
          />
          <Text
            style={{
              color: colors.SECONDARY_TEXT,
              fontSize: RFValue(fonts.MEDIUM_SIZE),
              textAlign: "center",
              marginVertical: RFValue(20),
            }}
          >
            Tailor your interest toward your need
          </Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            <InterestCover>
              {Interests.map((item: any) => (
                <UserCard key={item.name} name={item.name} />
              ))}
            </InterestCover>
          </ScrollView>
        </Cover>
        <ButtonCover>
          <Button name="Continue" onPress={handleSubmit} />
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
