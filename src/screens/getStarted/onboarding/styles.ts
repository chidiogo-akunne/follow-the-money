import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Cover = styled.View`
  margin-top: ${RFPercentage(20)}px;
`;

export const ButtonCover = styled.View`
  margin-bottom: ${RFValue(40)}px;
  width: 100%;
  padding: 0 ${RFValue(20)}px;
`;
