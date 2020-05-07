import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const ClickerLayout = ({dark, ...props}) => {
  const theme = dark ? 'dark' : 'white';
  return <View style={styles[theme]} {...props} />;
};

const styles = StyleSheet.create({
  dark: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#567',
    padding: 8,
  },
  white: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#aca',
    padding: 8,
  },
});
export default ClickerLayout;
