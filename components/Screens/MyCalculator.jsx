import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState, memo } from "react";
import AppBarNativePaper from "../subComponents/AppbarRNP";
import CalculatorKey from "../subComponents/CalculatorKey";
import CalculatorOutput from "../subComponents/CalculatorOutput";

// const MyCalculator = memo(() => {
//   const [result, setResult] = useState("");

//   return (
//     <SafeAreaView style={styles.container}>
//       <AppBarNativePaper />

//       <View style={styles.output}>
//         <CalculatorOutput result={result} />
//       </View>

//       <View style={styles.keys}>
//         <CalculatorKey setResult={setResult} />
//       </View>
//     </SafeAreaView>
//   );
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   output: {
//     flex: 1,
//     justifyContent: "flex-end",
//     backgroundColor: "#f7f7f7",
//   },
//   keys: {
//     flex: 2,
//     justifyContent: "center",
//   },
// });

// export default MyCalculator;

const MyCalculator = () => {
  const [result, setResult] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <AppBarNativePaper />
      <CalculatorOutput result={result} />
      <CalculatorKey setResult={setResult} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "space-between",
  },
});

export default MyCalculator;
