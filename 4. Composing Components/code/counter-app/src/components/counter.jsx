//imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  // //local state relie on props it is controlled component
  // state = {
  //   count: this.props.counters.value,
  // };

  //reference method -> raise event
  // handleIncrement = () => {
  //   // console.log(e);
  //   this.setState({ count: this.state.value + 1 });
  // };

  render() {
    return (
      <>
        {/* //when you have to pass something in between opening and closing tag */}
        {/* {this.props.children} */}

        {/* //simple with id attr */}
        {/* {this.props.id} */}
        <div className="row">

 
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counters)}
            style={{ fontSize: 10 }}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counters)}
            style={{ fontSize: 10 }}
            className="btn btn-secondary btn-sm m-2"
            disabled={ this.props.counters.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counters.id)}
            style={{ fontSize: 10 }}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.counters.value === 0 ? "warning" : "primary";
    return classes;
  }
 



  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
