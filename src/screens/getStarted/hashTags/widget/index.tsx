import React, { useState } from "react";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useThemeContext } from "../../../../theme";
import OutlineButton from "../../../../components/outlineButton";

import { Container, ImageCover, TextCover } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface HashtagCardProps {
  name: string;
  campaign: string;
}

export default function HashtagCard(props: HashtagCardProps) {
  const { name, campaign } = props;
  const [follow, setFollow] = useState(false);
  const { colors, fonts } = useThemeContext();
  return (
    <Container>
      <ImageCover>
        <FontAwesome name="hashtag" size={30} color={colors.BLACK} />
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
