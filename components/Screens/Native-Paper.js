import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import searchicon from "../../assets/search-icon.jpg";
import {
  ActivityIndicator,
  Appbar,
  Badge,
  Banner,
  Button,
  Checkbox,
  Chip,
  Divider,
  Icon,
  IconButton,
  ProgressBar,
  Searchbar,
} from "react-native-paper";

export default Navbar = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{ padding: 10 }}>
      {/* icon  btn */}
      <Text>Icon Button</Text>
      <IconButton
        containerColor="dodgerblue"
        iconColor="white"
        icon="camera"
        onLongPress={() => {
          console.log("first");
        }}
      />

      {/*loader  */}
      {/* <Text>Loader</Text> */}
      {/* <ActivityIndicator animating={true} color="dodgerblue" /> */}

      <Text>Header</Text>
      {/* header  */}
      <Appbar.Header style={{ backgroundColor: "dodgerblue" }}>
        <Appbar.BackAction onPress={() => {}} iconColor="white" />
        <Appbar.Content title="Title" color="white" />
        <Appbar.Action icon="refresh" iconColor="white" onPress={() => {}} />
        <Appbar.Action icon="magnify" iconColor="white" onPress={() => {}} />
      </Appbar.Header>
      <Badge>3</Badge>

      {/* banner  */}
      <Banner
        visible={visible}
        actions={[
          {
            label: "Fix it",
            onPress: () => setVisible(false),
          },
          {
            label: "Learn more",
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4",
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      >
        There was a problem processing a transaction on your credit card.
      </Banner>

      {/*  btns */}
      <Text>btn </Text>
      <Button
        buttonColor="dodgerblue"
        icon="book"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        My Books
      </Button>

      {/* checkbox */}
      <Checkbox onPress={() => console.log("checked")}>s</Checkbox>
      <View>
        <Checkbox.Item label="Item" status="checked" />
      </View>

      {/*  */}
      <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>

      <Text>Lemon</Text>
      {/* <hr/> */}
      <Divider bold />
      <Text>Mango</Text>
      <Divider />

      <Icon source="magnify" color="red" size={30} />

      <ProgressBar progress={0.4} color="dodgerblue" />

      <Searchbar
        placeholder="Search"
        // onChangeText={setSearchQuery}
        // value={searchQuery}
      />

      <Text style={{ marginTop: 10 }}>touchable btn's</Text>
      <TouchableHighlight
        underlayColor={"goldenrod"}
        activeOpacity={0.8}
        style={{
          backgroundColor: "gold",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => console.log("pressed")}
      >
        <Text>heighlight</Text>
      </TouchableHighlight>
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
