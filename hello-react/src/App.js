import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />

        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To the bottom
        </button>
      </div>
    );
  }
}

export default App;
