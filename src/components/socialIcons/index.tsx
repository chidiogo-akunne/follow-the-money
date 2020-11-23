import React from "react";
import { Image, TouchableHighlight, ViewStyle, StyleProp } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import hexToRGB from "../../utils/hexToRGB";
import { useThemeContext } from "../../theme";

import { SocialCover, IconCover } from "./styles";

interface ScreenProp {
  style?: StyleProp<ViewStyle>;
}

export default function SocialIcons(props: ScreenProp) {
  const { style } = props;
  const { colors } = useThemeContext();
  return (
    <SocialCover style={style}>
      <IconCover>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={hexToRGB(colors.PRIMARY, 0.1)}
        >
          <Image
            source={require("../../../assets/images/gmailIcon.png")}
            style={{
              resizeMode: "contain",
              width: RFValue(20),
              height: RFValue(20),
            }}
          />
        </TouchableHighlight>
      </IconCover>
      <IconCover>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={hexToRGB(colors.PRIMARY, 0.1)}
        >
          <Image
            source={require("../../../assets/images/linkedinIcon.png")}
            style={{
              resizeMode: "contain",
              width: RFValue(15),
              height: RFValue(15),
            }}
          />
        </TouchableHighlight>
      </IconCover>
      <IconCover>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={hexToRGB(colors.PRIMARY, 0.1)}
        >
          <Image
            source={require("../../../assets/images/facebookIcon.png")}
            style={{
              resizeMode: "contain",
              width: RFValue(22),
              height: RFValue(22),
            }}
          />
        </TouchableHighlight>
      </IconCover>

      <IconCover>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={hexToRGB(colors.PRIMARY, 0.1)}
        >
          <Image
            source={require("../../../assets/images/twitterIcon.png")}
            style={{
              resizeMode: "contain",
              width: RFValue(25),
              height: RFValue(25),
            }}
          />
        </TouchableHighlight>
      </IconCover>
    </SocialCover>
  );
}
