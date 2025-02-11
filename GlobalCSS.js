import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // flex: 1,
    justifyContent: "center", 
    gap: 23, 
  },
  heading: {
    fontSize: 24, // Large Text
    fontWeight: "900", // Bold Style
    color: "dodgerblue", // Dark Gray
    textTransform: "uppercase", // Capitalized
    textAlign: "center",
    marginBottom: 5, // Space below heading
  },
  subHeading: {
    fontSize: 18, // Medium Size
    fontWeight: "700", // Semi-Bold
    color: "#777", // Light Gray
    textAlign: "center",
    letterSpacing: 0.5, // Slight Spacing
  },
  btn: { maxWidth: 30 },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: "3%",
    marginHorizontal: "10%",
    marginVertical: 10,
  },
});

export default styles;
