import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text, TextInput, Button, Dialog, Portal } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoApp = () => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [todoText, setTodoText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  // get todos from async storage
  React.useEffect(() => {
    getTodos();
  }, []);

  // 🙏 GET ALL SAVED TODO'S 🙏
  const getTodos = async () => {
    try {
      const data = await AsyncStorage.getItem("todos");
      if (data) {
        const parsedTodos = JSON.parse(data); // convert string to array
        setTodos(parsedTodos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ✅ ADD NEW TODO ✅
  const addNewTodo = async () => {
    try {
      if (todoText) {
        const newTodos = [...todos, todoText];
        setTodos(newTodos);
        await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
        setTodoText(""); // input khali krny k liye
      }
    } catch (e) {
      console.log(e);
    }
  };

  // All todos delete from async storage
  const clearTodos = async () => {
    try {
      await AsyncStorage.clear();
      setTodos([]); // State ko empty karna
      console.log("All todos cleared!");
    } catch (e) {
      console.log(e);
    }
  };

  // current date generator
  const currentDate = () => {
    const newdate = new Date();
    const date = newdate.toLocaleDateString();
    const time = newdate.toLocaleTimeString();
    // console.log("date==>", );
    return date + " " + time;
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "white",
      }}
    >
      {/* text input */}
      <TextInput
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
        label="What's Your Task..."
        mode="outlined"
        outlineStyle={{
          borderBottomWidth: 3,
          borderColor: "#FFD700",
          borderRadius: 10,
        }}
        theme={{ colors: { primary: "goldenrod" } }}
        textColor="#3b3b3b"
        right={
          <TextInput.Icon
            icon="check-circle"
            color={"gold"}
            size={35}
            onPress={addNewTodo}
          />
        }
      />

      {/* todos shown here  */}

      <ScrollView style={{ marginTop: 10 }}>
        {/* heading */}
        <Text
          style={{
            marginBottom: 10,
            fontSize: 25,
            textAlign: "center",
            fontWeight: "bold",
            color: "#FFD700",
            textShadowColor: "rgb(41, 38, 38)", // Outline color
            textShadowOffset: { width: 1, height: 1 }, // Outline thickness
            textShadowRadius: 1.5, // Blur effect
          }}
        >
          Your Todo's
        </Text>

        {/* <Button
          mode="contained"
          buttonColor="#ffd100"
          onPress={clearTodos}
          textColor="black"
          style={{ marginTop: 10 }}
        >
          Clear All Todos
        </Button> */}

        {/* todos <Text key={index}>{txt}</Text> */}
        {todos.length > 0 ? (
          todos.map((txt, index) => (
            <Pressable
              key={index}
              style={{
                margin: 3,
                marginTop: 5,
                backgroundColor: "white",
                borderLeftColor: "gold",
                borderLeftWidth: 3,
                elevation: 3,
                padding: 10,
                borderRadius: 10,
                textTransform: "uppercase",
              }}
              onLongPress={() => setVisible(true)}
            >
              <Text
                key={index}
                style={{
                  textTransform: "capitalize",
                  textAlign: "justify",
                }}
              >
                {txt}
              </Text>
            </Pressable>
          ))
        ) : (
          <Text>No tasks added yet</Text>
        )}

        {/* dialog */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            {/* <Dialog.Title>Alert</Dialog.Title> */}
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        {/* dialog */}
      </ScrollView>
    </View>
  );
};

export default TodoApp;
