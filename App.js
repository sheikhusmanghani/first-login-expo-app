import { StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Navbar from "./components/Screens/Navbar";
import SignIn from "./components/Screens/SignIn";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Navbar /> */}
      <SignIn />
      <StatusBar />
    </SafeAreaView>
  );
}
