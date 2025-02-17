import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CalculatorOutput = ({ result }) => {
  return (
    <View>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

export default CalculatorOutput;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    padding: 10,
    color: "#5e5e5e",
    fontWeight: "500",
    textAlign: "right",
  },
});
