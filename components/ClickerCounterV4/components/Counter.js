import * as React from "react";

class Counter extends React.Component {
  state = { count: 0 };
  updateCount = (val) => this.setState({ count: val });

  render() {
    const stateTools = [this.state.count, this.updateCount];
    return this.props.children(stateTools);
  }
}

export default Counter;
