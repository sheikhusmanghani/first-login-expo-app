import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";

const GoogleButton = ({ title = "Sign in with Google", onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Google Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency/48/google-logo.png",
          }}
          style={styles.icon}
        />
      </View>

      {/* Button Text */}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  iconContainer: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 4,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
  },
});

export default GoogleButton;
