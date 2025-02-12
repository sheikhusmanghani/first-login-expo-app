import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    // gap: 5,
  },
  heading: {
    fontSize: 40, // Large Text
    fontWeight: "900", // Bold Style
    color: "dodgerblue", // Dark Gray
    textTransform: "uppercase", // Capitalized
    textAlign: "center",
    // marginBottom: 5, // Space below heading
  },
  subHeading: {
    fontSize: 18, // Medium Size
    fontWeight: "700", // Semi-Bold
    color: "#777", // Light Gray
    textAlign: "center",
    letterSpacing: 0.5, // Slight Spacing
  },
  btn: { maxWidth: 30 },
});

export default styles;
