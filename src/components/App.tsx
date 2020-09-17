import React, { Component } from "react";

interface AppProps {
  color?: string;
}

// Functional Component typing
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class App extends Component<AppProps> {
  state = { counter: 0 };

  onPlus = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onMinus = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onPlus}> + </button>
        <button onClick={this.onMinus}> - </button>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
