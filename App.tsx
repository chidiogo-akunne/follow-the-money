import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import AppLoading from "./src/libs/appLoading";
import AppRouter from "./src";

enableScreens();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? (
    <AppRouter />
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
