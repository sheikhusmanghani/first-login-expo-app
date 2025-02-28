import React, { useCallback, memo } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "react-native-paper";

const CalculatorKey = ({ setResult }) => {
  const handleCalculation = useCallback(
    (text) => {
      const operations = {
        CLR: () => "",
        "⌫": (prev) => prev.slice(0, -1),
        "●": (prev) => prev + ".",
        "➗": (prev) => prev + "/",
        "✖": (prev) => prev + "*",
        "➖": (prev) => prev + "-",
        "➕": (prev) => prev + "+",
        "%": (prev) => (parseFloat(prev) / 100 || "Error").toString(),
        "=": (prev) => {
          try {
            return Function(`'use strict'; return (${prev})`)().toString();
          } catch {
            return "Error";
          }
        },
      };

      setResult((prev) =>
        operations[text] ? operations[text](prev) : prev + text
      );
    },
    [setResult]
  );

  const Key = memo(({ text, bg = "white", style }) => (
    <Pressable
      onPress={() => handleCalculation(text)}
      style={({ pressed }) => [
        styles.key,
        { backgroundColor: bg, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      {typeof text === "string" ? (
        <Text style={[styles.text, style]}>{text}</Text>
      ) : (
        <Icon source="screen-rotation" size={25} color="#5e5d0d" />
      )}
    </Pressable>
  ));

  return (
    <View style={styles.container}>
      <Key text="CLR" bg="crimson" style={styles.clearText} />
      <Key text="➗" bg="#fad34d" />
      <Key text="➕" bg="#fad34d" />
      <Key text="⌫" bg="crimson" style={styles.backspace} /> 
      <Key text="1" style={styles.number} />
      <Key text="2" style={styles.number} />
      <Key text="3" style={styles.number} />
      <Key text="➖" bg="#fad34d" />
      <Key text="4" style={styles.number} />
      <Key text="5" style={styles.number} />
      <Key text="6" style={styles.number} />
      <Key text="✖" bg="#fad34d" style={styles.operator} />
      <Key text="7" style={styles.number} />
      <Key text="8" style={styles.number} />
      <Key text="9" style={styles.number} />
      <Key text="%" bg="#fad34d" style={{ fontSize: 30 }} />
      <Key text={<Icon source="screen-rotation" />} />
      <Key text="0" style={styles.number} />
      <Key text="●" style={styles.dot} />
      <Key text="=" bg="#fad34d" style={styles.equal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 10,
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 50,
    elevation: 4,
  },
  text: {
    fontSize: 20,
    color: "#5e5e5e",
    fontWeight: "bold",
  },
  clearText: {
    color: "white",
    fontWeight: "900",
  },
  backspace: {
    color: "white",
    fontSize: 26,
  },
  number: {
    fontSize: 28,
  },
  operator: {
    fontSize: 26,
  },
  dot: {
    fontSize: 20,
  },
  equal: {
    fontSize: 45,
  },
});

export default React.memo(CalculatorKey);
