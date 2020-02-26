import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "default name"
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, props name here: {name}. children here: {children}
        <br />
        My favourite number is {favoriteNumber}.
      </div>
    );
  }
}

export default MyComponent;
