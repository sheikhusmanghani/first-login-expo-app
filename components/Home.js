import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import styles from "../GlobalCSS.js";
import React from "react";
import CustomButton from "./subComponents/Button.js";
import Input from "./subComponents/Input.js";
import GoogleButton from "./subComponents/continueWithGoogle.js";

export default Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}> Welcome To ZamZama </Text>
        <Text style={styles.subHeading}> Join Now </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          onChangeText={""}
          placeholder="Enter Your Email"
          secureTextEntry={false}
          // value={}
          // style={{tetran}}
        />
        <Input
          onChangeText={""}
          placeholder="Enter Your Password"
          secureTextEntry={false}
          // value={}
        />
        <CustomButton title={"Join Us"} />
      </View>

      <View style={{ alignItems: "center" }}>
        <GoogleButton onPress={() => Alert.alert("Google Sign-in Clicked!")} />
      </View>
    </View>
  );
};
