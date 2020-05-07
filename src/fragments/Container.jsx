import React from "react";
import { View } from "react-native";

const Container = (props) => {
  const { looks = [], acts = [] } = props;
  return (
    <View>
      {looks.map((look) => {})}
      <Text>test</Text>
    </View>
  );
};
export default Container;
