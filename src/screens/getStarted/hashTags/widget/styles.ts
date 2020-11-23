import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
`;

export const ImageCover = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const TextCover = styled.View`
  margin-left: ${RFValue(15)}px;
`;
