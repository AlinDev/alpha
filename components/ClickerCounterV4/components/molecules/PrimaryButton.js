import * as React from 'react';
import {StyleSheet} from 'react-native';
import {MyButton} from '../atoms';

const PrimaryButton = (props) => {
  return <MyButton style={styles.primary} {...props} />;
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#a31',
  },
});
export default PrimaryButton;
