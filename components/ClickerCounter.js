import * as React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

class ClickerCounter extends React.Component {
  state = { count: 0 };
  handleClick = () => this.setState((state) => ({ count: state.count + 1 }));

  handleReset = () => this.setState({ count: 0 });
  render() {
    const { dark } = this.props;
    const theme = dark ? "dark" : "white";

    return (
      <>
        <Text>ClickerCounterV1</Text>
        <View style={styles[theme]}>
          <Text style={styles.container}>{this.state.count}</Text>
          <View style={styles.clickerCounter}>
            <Button title="+" onPress={this.handleClick} />
          </View>
          <View style={styles.primary}>
            <Button title="Reset" onPress={this.handleReset} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  dark: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#567",
    padding: 8,
  },
  white: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#aca",
    padding: 8,
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  clickerCounter: {
    backgroundColor: "#3a1",
  },
  primary: {
    backgroundColor: "#a31",
  },
});

export default ClickerCounter;
