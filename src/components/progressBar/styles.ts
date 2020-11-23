import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const ProgressBarContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ProgressBarWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ProgressBar = styled.View`
  width: 19.5%;
  height: 7px;
  background-color: ${({ theme }) => theme.colors.ACTION};
  margin-right: 1px;
  border-radius: 7px;
`;
