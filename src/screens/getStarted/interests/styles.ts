import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Cover = styled.View`
  flex: 1;
  padding: 0 ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
`;

export const ButtonCover = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
`;

export const InterestCover = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
