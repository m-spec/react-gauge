import * as React from "react";
import { render } from "react-dom";

import { Gauge } from "./Gauge";
import "./styles.scss";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = { value: "0" };
  }

  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Gauge title="Title" value={this.state.value} animate />
        </div>
        <div>
          <input
            value={this.state.value}
            type="range"
            min="0"
            max="100"
            onChange={e => this.handleChange(e)}
            className="slider"
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
