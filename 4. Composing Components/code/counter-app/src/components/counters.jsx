import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    //use object destructuring
    const {counters, onReset,onDelete,onIncrement,onDecrement} = this.props;
    return (
      <>
        <button
          onClick={onReset}
          style={{ fontSize: 10 }}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counters) => (
          <div key={counters.id}>
            <Counter
              key={counters.id}
              // id={counters.id}
              // value={counters.value}
              //instead
              counters={counters}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          </div>
          // {/* //when you have to pass something in between opening and closing tag */}
          // {/* <Counter key={counters.id} value={counters.value}>
          //   <h4>Counter #{counters.id}</h4>
          //   </Counter> */}

          // {/* //simple with id attr */}

          // {/* <Counter key={counters.id} value={counters.value} id={counters.id}/> */}
        ))}
      </>
    );
  }
}

export default Counters;
