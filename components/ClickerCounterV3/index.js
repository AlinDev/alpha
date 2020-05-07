import * as React from 'react';
import {Text} from 'react-native';

import {Counter, Clicker} from './components';

const ClickerCounterV3 = () => {
  return (
    <>
      <Text>ClickerCounterV3</Text>
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

export default ClickerCounterV3;
