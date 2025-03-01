// navigatioin
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import { StatusBar, SafeAreaView } from "react-native";
import NativePaper from "./components/Screens/Native-Paper";
import SignIn from "./components/Screens/SignIn";
import { PaperProvider } from "react-native-paper";
import MyCalculator from "./components/Screens/MyCalculator";
import TodoApp from "./components/Screens/TodoApp/TodoApp";
import Home from "./components/Screens/TodoApp/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/*--------------- practice Component -----------*/}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainApp"
              component={TodoApp}
              options={{
                headerStyle: { backgroundColor: "gold" },
                headerTitleAlign: "center",
                title: "Today's Tasks",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 25,
                  fontFamily: "serif",
                  textShadowColor: "rgb(41, 41, 38)",
                  textShadowOffset: { width: 0.5, height: 0.5 },
                  textShadowRadius: 0.5,
                },
              }}
            />
            {/* <Stack.Screen name="Home" component={Home} /> */}
          </Stack.Navigator>
        </NavigationContainer>

        {/*--------------- My Practice Component -----------*/}
        {/* <TodoApp /> */}
        {/* <NativePaper /> */}

        {/*--------------- My Sign-in Component -----------*/}
        {/* <SignIn /> */}

        {/*--------------- My Calculator Component -----------*/}
        {/* <MyCalculator /> */}

        <StatusBar />
      </SafeAreaView>
    </PaperProvider>
  );
}
