import * as React from "react";
import { View, StyleSheet } from "react-native";

const ClickerLayout = ({ style, ...props }) => {
  return <View style={style} {...props} />;
};

export default ClickerLayout;
