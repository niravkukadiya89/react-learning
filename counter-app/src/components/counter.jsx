import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags:['tag1','tag2','tag3','tag4']
  //  };
  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  // constructor(){
  //   super();
  //   this.countIncrement = this.countIncrement.bind(this);
  // }

  // countIncrement = (product) => {
  //   //console.log('increment',this);
  //   //console.log(product);
  //   this.setState({value : this.state.value + 1});
  // }

  argCountIncrement = () => {
    this.countIncrement({ id: 1 });
  };

  componentDidUpdate(prevstate, newstate) {
    console.log("Pre state", prevstate);
    console.log("New state", newstate);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");
    // console.log(this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          {/* <h2>Header #{this.props.id}</h2> */}

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-seconday btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-seconday btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>

        {/* <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { count } = this.state;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
