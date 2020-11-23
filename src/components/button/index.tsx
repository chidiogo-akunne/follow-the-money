import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useThemeContext } from "../../theme";

interface ButtonProp {
  onPress: ((T?: any) => void) | undefined;
  name: string;
  loading?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export default function ButtonComponent(props: ButtonProp) {
  const { onPress, name, labelStyle, loading, contentStyle, style } = props;
  const { colors, fonts } = useThemeContext();
  return (
    <Button
      mode="contained"
      uppercase={false}
      onPress={onPress}
      contentStyle={[
        {
          backgroundColor: colors.PRIMARY,
          height: RFValue(40),
        },
        contentStyle,
      ]}
      labelStyle={[
        {
          color: colors.WHITE,
          fontSize: RFValue(fonts.LARGE_SIZE - 2),
          textTransform: "capitalize",
        },
        labelStyle,
      ]}
      style={[
        {
          height: RFValue(40),
          borderRadius: 5,
          marginBottom: RFValue(10),
        },
        style,
      ]}
    >
      {name}
    </Button>
  );
}
