import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Icon, IconButton, MD3Colors } from "react-native-paper";

// main component
const CalculatorKey = ({ setResult }) => {
  console.log(setResult); // nooooo
  //
  /// A key component
  const Key = ({ text, Bcolor = "white", Tobj }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.key, { backgroundColor: Bcolor }]}
      >
        <Text style={[styles.text, { ...Tobj }]}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 10,
      }}
      onpress={() => setResult("Hiwe")}
    >
      <Key
        text="CLR"
        Bcolor="crimson"
        Tobj={{ color: "white", fontWeight: "900" }}
      />

      <Key text="➗" Bcolor="#fad34d" />
      <Key text="➕" Bcolor="#fad34d" />
      <Key text="➖" Bcolor="#fad34d" />
      <Key text="1" Tobj={{ fontSize: 28 }} />
      <Key text="2" Tobj={{ fontSize: 28 }} />
      <Key text="3" Tobj={{ fontSize: 28 }} />
      <Key text="✖" Tobj={{ fontSize: 26 }} Bcolor="#fad34d" />
      <Key text="4" Tobj={{ fontSize: 28 }} />
      <Key text="5" Tobj={{ fontSize: 28 }} />
      <Key text="6" Tobj={{ fontSize: 28 }} />
      <Key
        text={<Icon source="percent" size={33} color="#5e5d0d" />}
        Bcolor="#fad34d"
      />
      <Key text="7" Tobj={{ fontSize: 25 }} />
      <Key text="8" Tobj={{ fontSize: 25 }} />
      <Key text="9" Tobj={{ fontSize: 25 }} />
      <Key text="=" Tobj={{ fontSize: 45 }} Bcolor="#fad34d" />
      <Key
        text={<Icon source="screen-rotation" size={25} color="#5e5d0d" />}
        Tobj={{ fontSize: 25 }}
      />
      <Key text="0" Tobj={{ fontSize: 25 }} />
      <Key text="●" Tobj={{ fontSize: 20 }} />
      <Key
        text={<Icon source="backspace" size={25} color="white" />}
        Bcolor="crimson"
      />
    </View>
  );
};

export default CalculatorKey;

const styles = StyleSheet.create({
  key: {
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    fontSize: 20,
    color: "#5e5e5e",
    fontWeight: "bold",
  },
});
