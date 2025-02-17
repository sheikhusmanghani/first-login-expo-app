import { View } from "react-native";
import { Appbar } from "react-native-paper";

const AppBarNativePaper = () => (
  <Appbar.Header
    style={{
      backgroundColor: "#fad34d",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    <Appbar.Content
      title="Calculator"
      titleStyle={{ fontWeight: "bold", paddingLeft: 10 }}
    />
    <Appbar.Action icon="history" onPress={() => {}} />
    <Appbar.Action icon="download" onPress={() => {}} />
    <Appbar.Action icon="book" onPress={() => {}} />
  </Appbar.Header>
);

export default AppBarNativePaper;
