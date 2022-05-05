import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 7,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };
  handleDelete = (counterId) => {
    // console.log('handle delete')
    const count = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: count });
  };
  handleReset = () => {
  
    const count = this.state.counters.map((c) => {c.value=0; return c});
    this.setState({ counters: count });

  };
  render() {
    return (
      <>
          <button
          onClick={this.handleReset}
          style={{ fontSize: 10 }}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counters) => (
          <div key={counters.id}>
            <Counter
              key={counters.id}
              // id={counters.id}
              // value={counters.value}
              //instead
              counters={counters}
              onDelete={this.handleDelete}
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
