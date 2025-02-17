import { StatusBar, SafeAreaView } from "react-native";
import React from "react";
import NativePaper from "./components/Screens/Native-Paper";
import SignIn from "./components/Screens/SignIn";
import { PaperProvider } from "react-native-paper";
import MyCalculator from "./components/Screens/MyCalculator";
import CompletedCalculator from "./components/Screens/CompletedCalculator";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <NativePaper /> */}
        {/* <SignIn /> */}
        {/* <CompletedCalculator /> */}

        {/* My Calculator Component */}
        <MyCalculator />

        <StatusBar />
      </SafeAreaView>
    </PaperProvider>
  );
}
