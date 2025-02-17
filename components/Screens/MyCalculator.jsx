import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppBarNativePaper from "../subComponents/AppbarRNP";
import CalculatorKey from "../subComponents/CalculatorKey";
import CalculatorOutput from "../subComponents/CalculatorOutput";

const MyCalculator = () => {
  const [result, setResult] = React.useState("Hi,");

  return (
    <View>
      {/* navbar */}
      <View>
        <AppBarNativePaper />
      </View>

      {/* output */}
      <View style={styles.output}>
        <CalculatorOutput result={result} />
      </View>

      {/* keys of caclulator */}
      <View style={styles.input}>
        <CalculatorKey setResult={{ setResult }} />
      </View>
    </View>
  );
};

export default MyCalculator;

const styles = StyleSheet.create({
  output: {
    display: "flex",
    backgroundColor: "#f7f7f7",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 250,
  },
  input: {
    height: 415,
    width: "360",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
