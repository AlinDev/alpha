import React from 'react';
import ClickerCounter from './components/ClickerCounter';
import ClickerCounterV2 from './components/ClickerCounterV2';
import ClickerCounterV3 from './components/ClickerCounterV3';
import ClickerCounterV4 from './components/ClickerCounterV4';

import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <ClickerCounter />
      <ClickerCounterV2 />
      <ClickerCounterV3 />
      <ClickerCounterV4 />
    </View>
  );
};

export default App;
