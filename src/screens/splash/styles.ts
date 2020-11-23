import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const BottomSection = styled.View`
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

export const BigCircle = styled.View`
  margin-left: auto;
  margin-right: ${RFValue(10)}px;
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  background-color: rgba(255, 235, 233, 0.51);
  border-radius: 170px;
  position: relative;
  top: ${RFValue(70)}px;
`;

export const SmallCircle = styled.View`
  margin-left: auto;
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  background-color: rgba(255, 235, 233, 0.51);
  border-radius: 100px;
  position: relative;
  top: ${RFValue(120)}px;
  left: ${RFValue(60)}px;
`;
