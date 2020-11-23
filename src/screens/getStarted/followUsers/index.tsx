import React, { Fragment, useState } from "react";
import { Text, Title, Divider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableHighlight, FlatList } from "react-native";
import { NavigationInterface } from "../../types";
import { useThemeContext } from "../../../theme";
import Header from "../../../components/header";
import { StatusBar } from "expo-status-bar";
import hexToRGB from "../../../utils/hexToRGB";
import Button from "../../../components/button";
import ProgressBar from "../../../components/progressBar";
import UserCard from "./widget";
import { PeopleToFollow } from "../../../utils/data";

import { Container, Cover, ButtonCover } from "./styles";

interface ScreenProp extends NavigationInterface {}

export default function FollowUsers(props: ScreenProp) {
  const { navigation } = props;
  const { colors, fonts } = useThemeContext();
  const { top } = useSafeAreaInsets();

  const handleSubmit = async () => {
    Keyboard.dismiss();
    navigation.navigate("InterestScreen");
  };

  const _renderItem = ({ item }: any) => (
    <UserCard
      key={item.name}
      name={item.name}
      campaign={item.campaigns}
      image={item.image}
    />
  );

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
            People You May Know
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
            progress="40"
            firstBar={{ backgroundColor: colors.PRIMARY }}
            secondBar={{ backgroundColor: colors.PRIMARY }}
          />
          <Text
            style={{
              color: colors.SECONDARY_TEXT,
              fontSize: RFValue(fonts.MEDIUM_SIZE),
              textAlign: "center",
              marginVertical: RFValue(20),
            }}
          >
            20, 000+ members
          </Text>
          <FlatList
            data={PeopleToFollow}
            contentContainerStyle={{
              marginTop: RFValue(5),
            }}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={() => (
              <Divider
                style={{
                  height: 1.5,
                  backgroundColor: hexToRGB(colors.INACTIVE, 0.5),
                  marginBottom: RFValue(20),
                }}
              />
            )}
          />
        </Cover>
        <ButtonCover>
          <Button name="Continue" onPress={handleSubmit} />
        </ButtonCover>
      </Container>
    </Fragment>
  );
}
