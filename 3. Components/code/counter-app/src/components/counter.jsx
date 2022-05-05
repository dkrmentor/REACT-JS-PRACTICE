//imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  //object include data that components need
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["DHARA"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  //you can get (this) of object by using bind method with normal function or use arrow function
  //use bind method using constructor
  //   constructor(){
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }
  //   handleIncrement(){
  //       console.log('increment',this)
  //   }
  //use arrow function
  // handleIncrement=()=>{
  //     console.log('increment',this)
  // }
  //update using arrow you can do with bind too

  //2 way for argument passing
  //1way
  // //simple function for passing the argument function
  // handleIncrement=(e)=>{
  //       console.log(e)
  //    this.setState({count:this.state.count+1})
  // }
  // //use a second function to pass the argument
  // doHandleIncrement=()=>{
  //     this.handleIncrement({id:1})
  // }
  //2way
  // function with inline argument
  handleIncrement = (e) => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  render() {
    return (
      <>
        {/* //to add jsx */}

        {/* <h1>Hello World</h1> */}

        {/* ///////////////attributes///////////////////// */}

        {/* //to add img */}
        {/* <img src={this.state.imageUrl} alt="" /> */}

        {/* //to add class */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* //1way */}
        {/* <button onClick={this.HandleIncrement()} style={{fontSize:10}} className="btn btn-secondary btn-sm">Increament</button> */}

        {/* //2way */}
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          style={{ fontSize: 10 }}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        {/* //simple */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {/* //with ternarry */}
        {/* <ul>
          {this.state.tags.length===0?"empty":this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {/* //condition rendering content */}
        {/* {this.state.tags.length===0 && 'NOOOO TAG'}
        <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}

        {/* //with function if else renderTags */}
        {/* {this.renderTags()} */}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
