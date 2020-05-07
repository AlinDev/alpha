import * as React from "react";
import { StyleSheet, Text } from "react-native";

const Count = (props) => {
  return <Text style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
export default Count;
