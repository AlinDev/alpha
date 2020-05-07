import * as React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const Clicker = (props) => {
  const {count, dark, onClick, onReset} = props;
  const theme = dark ? 'dark' : 'white';
  return (
    <View style={styles[theme]}>
      <Text style={styles.container}>{count}</Text>
      <View style={styles.clickerCounter}>
        <Button title="+" onPress={onClick} />
      </View>
      <View style={styles.primary}>
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
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
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  clickerCounter: {
    backgroundColor: '#3a1',
  },
  primary: {
    backgroundColor: '#a31',
  },
});
export default Clicker;
