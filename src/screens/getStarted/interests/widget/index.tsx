import React, { useState, Fragment } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useThemeContext } from "../../../../theme";
import OutlineButton from "../../../../components/outlineButton";

interface UserCardProps {
  name: string;
}

export default function InterestCard(props: UserCardProps) {
  const { name } = props;
  const [interest, setInterest] = useState(false);
  const { colors, fonts } = useThemeContext();
  return (
    <Fragment>
      {interest ? (
        <OutlineButton
          name={name}
          onPress={() => setInterest(!interest)}
          style={{
            borderWidth: 0.5,
            marginBottom: RFValue(15),
            marginRight: RFValue(10),
          }}
          labelStyle={{ fontSize: RFValue(fonts.MEDIUM_SIZE - 1) }}
        />
      ) : (
        <OutlineButton
          name={name}
          onPress={() => setInterest(!interest)}
          style={{
            borderColor: colors.INACTIVE,
            borderWidth: 0.5,
            marginBottom: RFValue(15),
            marginRight: RFValue(10),
          }}
          labelStyle={{
            fontSize: RFValue(fonts.MEDIUM_SIZE - 1),
            color: colors.SECONDARY_TEXT,
          }}
        />
      )}
    </Fragment>
  );
}
