import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const CalculatorOutput = memo(({ result }) => (
  <View style={styles.container}>
    <Text
      style={styles.text}
      numberOfLines={1}
      adjustsFontSizeToFit
      minimumFontScale={0.5}
    >
      {result || "0"}
    </Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 40,
    color: "#5e5e5e",
    fontWeight: "500",
  },
});

export default CalculatorOutput;
