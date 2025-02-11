import React from "react";
import { View, Text, StyleSheet, Button, Image, TextInput } from "react-native";
import searchicon from "../assets/search-icon.jpg";

export default Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgAndInput}>
        <TextInput
          style={styles.input}
          placeholder="Search Wallpaper."
          onChangeText={(value) => {}}
        />
        <Button title="o">
         
          <Image source={searchicon} style={styles.icon} />
        </Button>
      </View>

      {/* <Button title="sasdas" /> */}
    </View>
  );
};

// style
const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgAndInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    color: "white",
    //     elevation: 1,
    //     borderRadius: 10,
    //     marginTop: 60,
    //     padding: 15,
  },
  icon: {
    border: 1,
    borderRadius: 200,
    height: 25,
    width: 25,
    alignItems: "center",
  },
});
