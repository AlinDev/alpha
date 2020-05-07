import * as React from "react";
import { StyleSheet } from "react-native";

import { ClickerLayout, PrimaryButton, ClickerCount, Count } from "./molecules";

const Clicker = (props) => {
  const { count, dark, onClick, onReset } = props;
  return (
    <ClickerLayout dark={dark}>
      <Count>{count}</Count>
      <ClickerCount title="+" onPress={onClick} />
      <PrimaryButton title="reset" onPress={onReset} />
    </ClickerLayout>
  );
};

export default Clicker;
