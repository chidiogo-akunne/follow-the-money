import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const SocialCover = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const IconCover = styled.View`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.08);
  margin-right: ${RFValue(10)}px;
`;
