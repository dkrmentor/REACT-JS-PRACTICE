import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";


class App extends Component {
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

  handleIncrement = (counters) => {
    // console.log('counter')
    const count = [...this.state.counters];
    const i = count.indexOf(counters);
    // count[i] = {...counters};
    count[i].value++;
    this.setState({ counters: count });
  };
  handleDecrement=(counters)=>{
    const count = [...this.state.counters];
    const i = count.indexOf(counters);
    count[i].value--;
    this.setState({ counters: count });

  };
  handleDelete = (countersId) => {
    // console.log('handle delete')
    const count = this.state.counters.filter((c) => c.id !== countersId);
    this.setState({ counters: count });
  };
  handleReset = () => {
    const count = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: count });
  };
  render() {
    return (
      <>
        <Navbar totalCounts={this.state.counters.filter(c=>c.value>0).length } />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </>
    );
  }
}



export default App;

// FOR IMPORITNG bootstrap and fontawesome

// import "bootstrap/dist/css/bootstrap.css"
// import "font-awesome/css/font-awesome.css"

// use cc
// for creating class component

// use imrc
// for importing component and react from react

// by using filter you can filterize what u need and what u dont need

// if you use reference of fucntion on onclick it will be directly call so use arrow function while calling it when u have attribute



//in life cycle

//mounting phase (v16)
//comstructor , component did mount,  render 

//update phase (v17)
//componentdidupdate , render

//unmount phase(V18)
//unmount
