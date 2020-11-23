import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import hexToRGB from "../../../utils/hexToRGB";

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

export const ButtonCover = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Card = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0 20px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
  border: 1px solid rgba(112, 112, 112, 0.1);
  border-radius: 5px;
`;
