import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useThemeContext } from "../../theme";

import {
  ProgressBar,
  ProgressBarContainer,
  ProgressBarWrapper,
} from "./styles";

interface ScreenProp {
  progress: string;
  progressBarContainerStyle?: StyleProp<ViewStyle>;
  progressBarWrapperStyle?: StyleProp<ViewStyle>;
  firstBar?: StyleProp<ViewStyle>;
  secondBar?: StyleProp<ViewStyle>;
  thirdBar?: StyleProp<ViewStyle>;
  fourthBar?: StyleProp<ViewStyle>;
  fifthBar?: StyleProp<ViewStyle>;
}

export default function ProgressBarComponent(props: ScreenProp) {
  const {
    progress,
    progressBarContainerStyle,
    progressBarWrapperStyle,
    fifthBar,
    firstBar,
    secondBar,
    thirdBar,
    fourthBar,
  } = props;
  const { colors, fonts } = useThemeContext();
  return (
    <ProgressBarContainer style={progressBarContainerStyle}>
      <Text
        style={{
          color: colors.SECONDARY_TEXT,
          fontSize: RFValue(fonts.SMALL_SIZE + 2),
          textAlign: "center",
          marginBottom: RFValue(10),
        }}
      >
        Your profile is {progress}% complete
      </Text>
      <ProgressBarWrapper style={progressBarWrapperStyle}>
        <ProgressBar style={firstBar} />
        <ProgressBar style={secondBar} />
        <ProgressBar style={thirdBar} />
        <ProgressBar style={fourthBar} />
        <ProgressBar style={fifthBar} />
      </ProgressBarWrapper>
    </ProgressBarContainer>
  );
}
