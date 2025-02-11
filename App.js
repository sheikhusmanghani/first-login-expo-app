import { StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Navbar /> */}
      <Home />
      <StatusBar />
    </SafeAreaView>
  );
}
