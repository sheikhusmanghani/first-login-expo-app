import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Text,
  TextInput,
  Button,
  Dialog,
  Portal,
  IconButton,
  Icon,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoApp = () => {
  const [todoText, setTodoText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [visible, setVisible] = React.useState({}); // ✅ Individual visibility

  // get todos from async storage
  React.useEffect(() => {
    getTodos();
  }, []);

  // 🙏 GET ALL SAVED TODO'S 🙏
  const getTodos = async () => {
    try {
      const data = await AsyncStorage.getItem("todos");
      if (data) {
        setTodos(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // ✅ ADD NEW TODO ✅
  const addNewTodo = async () => {
    try {
      if (todoText) {
        const newTodos = [{ task: todoText, date: currentDate() }, ...todos];
        setTodos(newTodos);
        await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
        setTodoText("");
      }
    } catch (e) {
      console.log("Error=====>", e);
    }
  };

  //  ❌ All todos delete from async storage❌
  const clearTodos = async () => {
    try {
      await AsyncStorage.clear();
      setTodos([]);
      console.log("All todos cleared!");
    } catch (e) {
      console.log(e);
    }
  };

  // 📅 current date generator 📅
  const currentDate = () => {
    const newDate = new Date();

    // Numeric Date
    const date = newDate.getDate().toString().padStart(2, "0"); // Ensures two-digit format

    // Month Short Name
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[newDate.getMonth()];

    // Hours, Minutes, and AM/PM
    let hours = newDate.getHours();
    const minutes = newDate.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    return `${date} ${month} ${hours}:${minutes} ${ampm}`;
  };

  // ❎ An specific todo delete
  const handleDeleteTodo = (index) => {
    console.log("=====>>>", "clickde");
    const updatedTodos = todos.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    // state bhi update krni hoti hy
    setTodos(updatedTodos);
    AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // 📝 edit todo 🖊
  const handleEditTodo = async (index) => {
    console.log("edit====>");
    // const editedTodo = [{ task: todoText, date: currentDate() }, ...todos];
    //  setTodos(editedTodo);
    //   await AsyncStorage.setItem("todos", JSON.stringify(editedTodo));
    //   setTodoText("");
  };

  // ✅ todo check
  const handleCheckTodo = (index) => {
    console.log("check");
  };

  return (
    <View style={styles.container}>
      {/* Input Field  */}
      <TextInput
        onChangeText={(text) => setTodoText(text)}
        onSubmitEditing={addNewTodo}
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

      {/* <Text style={styles.heading}>Your Todo's</Text> */}

      {/* ❌❌❌   */}
      <Button
        mode="contained"
        buttonColor="#ffd100"
        onPress={clearTodos}
        textColor="black"
        style={styles.todosDelBtn}
      >
        Clear All Todos
      </Button>

      <ScrollView style={styles.todosscroller}>
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={styles.taskBtn}
              onPress={() =>
                setVisible((prev) => ({ ...prev, [index]: !prev[index] }))
              } // ✅ Toggle only this todo
            >
              <Text style={styles.taskText}>{item.task}</Text>

              {/* Bottom bar of task */}
              <View
                style={
                  visible[index] ? styles.taskBottomShow : styles.taskBottomHide
                }
              >
                {/* task date */}
                <Text style={styles.taskDate}>{item.date}</Text>

                <View style={{ flexDirection: "row", gap: 3 }}>
                  {/* edit todo icon */}
                  <TouchableOpacity
                    onPress={() => {
                      handleEditTodo(index);
                    }}
                  >
                    <Icon source="pencil" color={"crimson"} size={20} />
                  </TouchableOpacity>

                  {/* check todo icon */}
                  <TouchableOpacity
                    onPress={() => {
                      handleCheckTodo(index);
                    }}
                  >
                    <Icon
                      source="checkbox-marked-outline"
                      color={"crimson"}
                      size={20}
                    />
                  </TouchableOpacity>

                  {/* delete todo icon */}
                  <TouchableOpacity
                    onPress={() => {
                      handleDeleteTodo(index);
                    }}
                  >
                    <Icon source="delete-forever" color={"crimson"} size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.heading}>No tasks added yet</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  heading: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "crimson",
    textShadowColor: "rgb(41, 38, 38)",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
    textTransform: "capitalize",
  },
  todosscroller: {},
  taskBtn: {
    margin: 3,
    marginTop: 6,
    backgroundColor: "white",
    borderColor: "gold",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    elevation: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  taskText: {
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 8,
  },
  todosDelBtn: { marginVertical: 5 },
  taskBottomShow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    opacity: 1,
    transition: "opacity 0.3s ease-in-out", // ✅ Smooth transition
  },
  taskBottomHide: {
    display: "none",
    opacity: 0,
  },
  taskDate: { color: "#888", fontSize: 12 },
});

export default TodoApp;
