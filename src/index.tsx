import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ThemeProvider from "./theme";
import Router from "./router";

export default function AppRouter() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar translucent animated style="dark" />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
