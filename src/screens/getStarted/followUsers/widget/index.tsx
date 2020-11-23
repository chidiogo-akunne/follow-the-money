import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { useThemeContext } from "../../../../theme";
import OutlineButton from "../../../../components/outlineButton";

import { Container, ImageCover, TextCover } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface UserCardProps {
  name: string;
  campaign: string;
  image: any;
}

export default function UserCard(props: UserCardProps) {
  const { name, campaign, image } = props;
  const [follow, setFollow] = useState(false);
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
      <ImageCover>
        <Image
          resizeMode="cover"
          source={image}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </ImageCover>
      <TextCover>
        <Text
          style={{
            color: colors.SECONDARY_TEXT,
            fontSize: RFValue(fonts.MEDIUM_SIZE + 1),
            fontWeight: "bold",
            lineHeight: 17,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: colors.SECONDARY_TEXT,
            fontSize: RFValue(fonts.MEDIUM_SIZE - 1),
            lineHeight: 17,
            marginTop: RFValue(3),
          }}
        >
          {campaign} Campaigns
        </Text>
      </TextCover>
      {follow ? (
        <OutlineButton
          name="Following"
          onPress={() => setFollow(!follow)}
          style={{
            marginLeft: "auto",
            height: 35,
            width: RFValue(90),
            borderWidth: 0.5,
          }}
          contentStyle={{ height: 35 }}
          labelStyle={{ fontSize: RFValue(fonts.MEDIUM_SIZE - 1) }}
        />
      ) : (
        <OutlineButton
          name="Follow"
          onPress={() => setFollow(!follow)}
          style={{
            marginLeft: "auto",
            height: 35,
            width: RFValue(90),
            borderColor: colors.INACTIVE,
            borderWidth: 0.5,
          }}
          contentStyle={{ height: 35 }}
          labelStyle={{
            fontSize: RFValue(fonts.MEDIUM_SIZE - 1),
            color: colors.SECONDARY_TEXT,
          }}
        />
      )}
    </Container>
  );
}
