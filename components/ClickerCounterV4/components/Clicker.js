import * as React from "react";
import { StyleSheet } from "react-native";

import { ClickerLayout, PrimaryButton, ClickerCount, Count } from "./molecules";
//inversion of control
const ClickerLayoutDark = (props) => (
  <ClickerLayout style={styles["dark"]} {...props} />
);
const Clicker = (props) => {
  const { count, onClick, onReset } = props;
  return (
    <ClickerLayoutDark>
      <Count>{count}</Count>
      <ClickerCount title="+" onPress={onClick} />
      <PrimaryButton title="reset" onPress={onReset} />
    </ClickerLayoutDark>
  );
};

const styles = StyleSheet.create({
  dark: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#567",
    padding: 8,
  },
  white: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#aca",
    padding: 8,
  },
});
export default Clicker;
