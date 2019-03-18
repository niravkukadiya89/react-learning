import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  style = {
    fontSize: 25,
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> */}
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-seconday btn-sm" id="submit">
          Submit
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
