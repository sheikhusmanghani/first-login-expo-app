import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    // height: 50,
    fontSize: 15,
    width: 250,
    borderColor: "#ddd",
    borderWidth: 13,
    paddingHorizontal: 15,
    borderRadius: 35,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Input;
