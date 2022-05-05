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
  //   this.setState({ count: this.state.count + 1 });
  // };

  
  render() {
    return (
      <>

{/* //when you have to pass something in between opening and closing tag */}
{/* {this.props.children} */}
    
{/* //simple with id attr */}
{/* {this.props.id} */}


        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

      
        <button
          onClick={()=>this.props.onIncrement(this.props.counters)}
          style={{ fontSize: 10 }}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
         
        <button
          onClick={
            ()=>this.props.onDelete(this.props.counters.id)}
          style={{ fontSize: 10 }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </>
    ); 
  }

  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.counters.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counters;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
