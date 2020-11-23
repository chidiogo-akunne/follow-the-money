import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(40)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.INPUT};
  border: none;
  margin-top: ${RFValue(10)}px;
  border-radius: 5px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: ${({ theme }) => RFValue(theme.fonts.MEDIUM_SIZE)}px;
  color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  background-color: ${({ theme }) => theme.colors.INPUT};
  border-radius: 4px;
  padding-left: ${RFValue(20)}px;
`;
