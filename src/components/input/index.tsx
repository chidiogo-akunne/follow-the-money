import React from "react";

import { Container, TextInput } from "./styles";
import { ViewStyle, TextStyle, StyleProp, TextInputProps } from "react-native";
import { useThemeContext } from "../../theme";
import hexToRGB from "../../utils/hexToRGB";

interface InputProps extends TextInputProps {
  textInputStyle?: StyleProp<TextStyle>;
  contanierStyle?: StyleProp<ViewStyle>;
  testID?: string;
  children?: React.ReactNode;
}

export default function Input(props: InputProps) {
  const { colors } = useThemeContext();
  const { children, contanierStyle, textInputStyle, ...restProps } = props;
  return (
    <Container style={contanierStyle}>
      {children}
      <TextInput
        placeholderTextColor={hexToRGB(colors.BLACK, 0.5)}
        {...restProps}
        style={textInputStyle}
      />
    </Container>
  );
}
