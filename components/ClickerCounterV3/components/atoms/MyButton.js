import * as React from "react";
import { Button, View } from "react-native";

const MyButton = (props) => {
  return (
    <View style={props.style}>
      <Button title={props.title} onPress={props.onPress} />
    </View>
  );
};

export default MyButton;
