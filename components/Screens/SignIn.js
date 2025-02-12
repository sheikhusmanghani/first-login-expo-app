import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import styles from "../../GlobalCSS.js";
import React from "react";
import CustomButton from "../subComponents/Button.js";
import Input from "../subComponents/Input.js";
import GoogleButton from "../subComponents/continueWithGoogle.js";

export default SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}> Welcome To ZomaTo</Text>
        {/* <Text style={styles.subHeading}> Join Now </Text> */}
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/avantgarde/100/user-male-circle.png",
          }}
          alt="UserIcon"
          style={{ width: 100, height: 120 }}
        />
        <Input
          // inlineImageLeft="https://img.icons8.com/clouds/100/user-male-circle.png"
          placeholder="Enter Your Email"
          onChangeText={""}
          secureTextEntry={false}
          // value={}
          // style={{tetran}}
        />
        <Input
          onChangeText={""}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          // value={}
        />
        <CustomButton title={"Join Us"} />
      </View>

      {/* google btn */}
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <GoogleButton onPress={() => Alert.alert("Google Sign-in Clicked!")} />
      </View>
    </View>
  );
};
