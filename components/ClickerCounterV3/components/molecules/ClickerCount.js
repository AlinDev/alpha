import * as React from "react";
import { StyleSheet } from "react-native";
import { MyButton } from "../atoms";

const ClickerCount = (props) => {
  return <MyButton style={styles.clickerCounter} {...props} />;
};

const styles = StyleSheet.create({
  clickerCounter: {
    backgroundColor: "#3a1",
  },
});
export default ClickerCount;
