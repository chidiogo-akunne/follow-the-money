import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Cover = styled.View`
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFPercentage(10)}px;
`;

export const TextCover = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(15)}px;
`;

export const ButtonCover = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;
