import * as React from "react";
import { Text } from "react-native";

import { Counter, Clicker } from "./components";

const ClickerCounterV4 = () => {
  return (
    <>
      <Text>ClickerCounterV4</Text>
      <Counter>
        {([count, updateCount]) => {
          return (
            <Clicker
              count={count}
              onClick={() => updateCount(count + 1)}
              onReset={() => updateCount(0)}
            />
          );
        }}
      </Counter>
    </>
  );
};

export default ClickerCounterV4;
