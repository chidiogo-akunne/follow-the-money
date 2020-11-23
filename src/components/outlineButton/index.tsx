import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useThemeContext } from "../../theme";

interface OutlineButtonProp {
  onPress: ((T?: any) => void) | undefined;
  name: string;
  loading?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export default function OutlineButtonComponent(props: OutlineButtonProp) {
  const { onPress, name, labelStyle, loading, contentStyle, style } = props;
  const { colors, fonts } = useThemeContext();
  return (
    <Button
      mode="outlined"
      loading={loading}
      uppercase={false}
      onPress={onPress}
      contentStyle={[
        {
          height: RFValue(40),
        },
        contentStyle,
      ]}
      labelStyle={[
        {
          color: colors.PRIMARY,
          fontSize: RFValue(fonts.LARGE_SIZE - 2),
          textTransform: "capitalize",
        },
        labelStyle,
      ]}
      style={[
        {
          height: RFValue(40),
          borderRadius: 5,
          borderColor: colors.PRIMARY,
          borderWidth: 2,
        },
        style,
      ]}
    >
      {name}
    </Button>
  );
}
